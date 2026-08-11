import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const now = new Date()
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  const [
    totalUsers,
    planBreakdown,
    newUsersLast7Days,
    newUsersLast30Days,
    totalFlashcards,
    totalMiniExams,
    totalFullExams,
    totalMiniExamAttempts,
    totalFullExamAttempts,
    miniExamScoreAgg,
    fullExamScoreAgg,
    activeUsersLast7Days,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.groupBy({
      by: ['planType'],
      _count: true,
    }),
    prisma.user.count({
      where: { createdAt: { gte: sevenDaysAgo } },
    }),
    prisma.user.count({
      where: { createdAt: { gte: thirtyDaysAgo } },
    }),
    prisma.flashcard.count(),
    prisma.miniExam.count(),
    prisma.fullExam.count(),
    prisma.userMiniExamResult.count(),
    prisma.userFullExamResult.count(),
    prisma.userMiniExamResult.aggregate({
      _avg: { scorePercentage: true },
    }),
    prisma.userFullExamResult.aggregate({
      _avg: { scorePercentage: true },
    }),
    prisma.studyStreak.findMany({
      where: { studyDate: { gte: sevenDaysAgo } },
      select: { userId: true },
      distinct: ['userId'],
    }),
  ])

  // Build plan counts map
  const planCounts: Record<string, number> = {}
  for (const row of planBreakdown) {
    planCounts[row.planType] = row._count
  }

  const monthlyCount = planCounts['MONTHLY'] || 0
  const fullAccessCount = planCounts['FULL_ACCESS'] || 0
  const fullBundleCount = planCounts['FULL_BUNDLE'] || 0
  const freeCount = planCounts['FREE'] || 0

  // MRR estimate
  const mrrEstimate = monthlyCount * 29 + fullAccessCount * 149 + fullBundleCount * 249

  return NextResponse.json({
    totalUsers,
    usersByPlan: {
      FREE: freeCount,
      MONTHLY: monthlyCount,
      FULL_ACCESS: fullAccessCount,
      FULL_BUNDLE: fullBundleCount,
    },
    newUsersLast7Days,
    newUsersLast30Days,
    totalFlashcards,
    totalMiniExams,
    totalFullExams,
    totalMiniExamAttempts,
    totalFullExamAttempts,
    avgMiniExamScore: miniExamScoreAgg._avg.scorePercentage ?? 0,
    avgFullExamScore: fullExamScoreAgg._avg.scorePercentage ?? 0,
    activeUsersLast7Days: activeUsersLast7Days.length,
    mrrEstimate,
  })
}
