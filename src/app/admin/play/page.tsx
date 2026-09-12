import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function AdminPlayPage() {
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const weekStart = new Date(todayStart)
  weekStart.setDate(weekStart.getDate() - 7)
  const monthStart = new Date(todayStart)
  monthStart.setDate(monthStart.getDate() - 30)

  const [
    totalEvents,
    todayEvents,
    weekEvents,
    monthEvents,
    uniquePlayersAll,
    uniquePlayersWeek,
    divisionBreakdown,
    recentEvents,
    completionRate,
    avgAccuracy,
    perUserStats,
  ] = await Promise.all([
    prisma.playEvent.count(),
    prisma.playEvent.count({ where: { createdAt: { gte: todayStart } } }),
    prisma.playEvent.count({ where: { createdAt: { gte: weekStart } } }),
    prisma.playEvent.count({ where: { createdAt: { gte: monthStart } } }),
    prisma.playEvent.groupBy({ by: ['sessionId'] }).then(r => r.length),
    prisma.playEvent.groupBy({ by: ['sessionId'], where: { createdAt: { gte: weekStart } } }).then(r => r.length),
    prisma.playEvent.groupBy({
      by: ['division'],
      _count: { id: true },
      _avg: { questionsCorrect: true },
      orderBy: { _count: { id: 'desc' } },
    }),
    prisma.playEvent.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { email: true, name: true } } },
    }),
    Promise.all([
      prisma.playEvent.count(),
      prisma.playEvent.count({ where: { completed: true } }),
    ]).then(([total, completed]) => total > 0 ? Math.round((completed / total) * 100) : 0),
    prisma.playEvent.aggregate({
      _avg: { questionsCorrect: true, questionsTotal: true },
    }).then(r => {
      const avg = r._avg.questionsCorrect ?? 0
      const tot = r._avg.questionsTotal ?? 1
      return tot > 0 ? Math.round((avg / tot) * 100) : 0
    }),
    prisma.playEvent.groupBy({
      by: ['userId'],
      _count: { id: true },
      _sum: { questionsCorrect: true, questionsTotal: true, xpEarned: true },
      where: { userId: { not: null } },
      orderBy: { _count: { id: 'desc' } },
    }).then(async (rows) => {
      const userIds = rows.map(r => r.userId).filter(Boolean) as string[]
      const users = await prisma.user.findMany({
        where: { id: { in: userIds } },
        select: { id: true, email: true, name: true, planType: true },
      })
      const userMap = Object.fromEntries(users.map(u => [u.id, u]))
      return rows.map(r => ({
        userId: r.userId,
        email: userMap[r.userId!]?.email ?? 'Unknown',
        name: userMap[r.userId!]?.name ?? null,
        plan: userMap[r.userId!]?.planType ?? 'FREE',
        totalGames: r._count.id,
        totalCorrect: r._sum.questionsCorrect ?? 0,
        totalQuestions: r._sum.questionsTotal ?? 0,
        totalXP: r._sum.xpEarned ?? 0,
      }))
    }),
  ])

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Play & Learn Stats</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Games" value={totalEvents} />
        <StatCard label="Today" value={todayEvents} highlight />
        <StatCard label="Last 7 Days" value={weekEvents} />
        <StatCard label="Last 30 Days" value={monthEvents} />
        <StatCard label="Unique Players (All)" value={uniquePlayersAll} />
        <StatCard label="Unique Players (7d)" value={uniquePlayersWeek} highlight />
        <StatCard label="Completion Rate" value={`${completionRate}%`} />
        <StatCard label="Avg Accuracy" value={`${avgAccuracy}%`} />
      </div>

      <h2 className="text-lg font-semibold text-gray-300 mb-3">By Division</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
        {(['TMC', 'NPS', 'ACCS', 'SDS', 'CPFT', 'RPFT'] as const).map(div => {
          const row = divisionBreakdown.find(d => d.division === div)
          const count = row?._count?.id ?? 0
          const avgCorrect = row?._avg?.questionsCorrect ?? 0
          return (
            <div key={div} className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-xs text-gray-500 mb-1">{div}</div>
              <div className="text-2xl font-bold text-white">{count}</div>
              <div className="text-xs text-gray-500 mt-1">
                avg {avgCorrect.toFixed(1)} correct
              </div>
            </div>
          )
        })}
      </div>

      <h2 className="text-lg font-semibold text-gray-300 mb-3">Games Per User ({perUserStats.length} players)</h2>
      <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase">
              <th className="text-left p-3">User</th>
              <th className="text-left p-3">Plan</th>
              <th className="text-left p-3">Games</th>
              <th className="text-left p-3">Score</th>
              <th className="text-left p-3">Accuracy</th>
              <th className="text-left p-3">XP</th>
            </tr>
          </thead>
          <tbody>
            {perUserStats.length === 0 && (
              <tr><td colSpan={6} className="p-6 text-center text-gray-600">No user play data yet</td></tr>
            )}
            {perUserStats.map(u => (
              <tr key={u.userId} className="border-b border-gray-800/50 hover:bg-gray-800/50">
                <td className="p-3">
                  <div className="text-white text-sm">{u.name || u.email}</div>
                  {u.name && <div className="text-xs text-gray-500">{u.email}</div>}
                </td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    u.plan === 'FULL_BUNDLE' ? 'bg-purple-900 text-purple-300' :
                    u.plan === 'FULL_ACCESS' ? 'bg-teal-900 text-teal-300' :
                    u.plan === 'MONTHLY' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-gray-800 text-gray-400'
                  }`}>
                    {u.plan}
                  </span>
                </td>
                <td className="p-3 text-white font-bold">{u.totalGames}</td>
                <td className="p-3 text-gray-300">{u.totalCorrect}/{u.totalQuestions}</td>
                <td className="p-3 text-gray-300">
                  {u.totalQuestions > 0 ? Math.round((u.totalCorrect / u.totalQuestions) * 100) : 0}%
                </td>
                <td className="p-3 text-teal-400 font-medium">{u.totalXP.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-semibold text-gray-300 mb-3">Recent Activity</h2>
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase">
              <th className="text-left p-3">When</th>
              <th className="text-left p-3">Division</th>
              <th className="text-left p-3">Score</th>
              <th className="text-left p-3">XP</th>
              <th className="text-left p-3">Result</th>
              <th className="text-left p-3">Player</th>
            </tr>
          </thead>
          <tbody>
            {recentEvents.length === 0 && (
              <tr><td colSpan={6} className="p-6 text-center text-gray-600">No play events yet</td></tr>
            )}
            {recentEvents.map(e => (
              <tr key={e.id} className="border-b border-gray-800/50 hover:bg-gray-800/50">
                <td className="p-3 text-gray-400">{timeAgo(e.createdAt)}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-teal-400">
                    {e.division}
                  </span>
                </td>
                <td className="p-3 text-white font-medium">
                  {e.questionsCorrect}/{e.questionsTotal}
                  <span className="text-gray-500 ml-1">
                    ({e.questionsTotal > 0 ? Math.round((e.questionsCorrect / e.questionsTotal) * 100) : 0}%)
                  </span>
                </td>
                <td className="p-3 text-teal-400 font-medium">{e.xpEarned}</td>
                <td className="p-3">
                  {e.completed ? (
                    <span className="text-emerald-400 text-xs font-semibold">Completed</span>
                  ) : (
                    <span className="text-red-400 text-xs font-semibold">Game Over</span>
                  )}
                </td>
                <td className="p-3 text-gray-500 text-xs">
                  {e.user?.email ?? e.sessionId.slice(0, 8) + '...'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StatCard({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-4 ${highlight ? 'bg-teal-400/10 border border-teal-400/30' : 'bg-gray-800'}`}>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`text-3xl font-bold ${highlight ? 'text-teal-400' : 'text-white'}`}>{value}</div>
    </div>
  )
}

function timeAgo(date: Date): string {
  const s = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}
