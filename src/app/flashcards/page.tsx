export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getAuthSession } from '@/lib/auth'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'
import { PlanType, DivisionSlug } from '@prisma/client'
import { canAccessFlashcards } from '@/lib/access-control'

export const metadata = { title: 'Flashcards | NBRCprep' }

export default async function FlashcardsPage() {
  const session = await getAuthSession()
  if (!session) redirect('/login?callbackUrl=/flashcards')

  const userId = session.user.id
  const plan = session.user.planType as PlanType

  const divisions = await prisma.division.findMany({
    orderBy: { slug: 'asc' },
  })

  const [flashcardCounts, progressData] = await Promise.all([
    prisma.flashcard.groupBy({
      by: ['divisionId'],
      where: { orderIndex: { lte: 100 } },
      _count: { id: true },
    }),
    prisma.userFlashcardProgress.findMany({
      where: { userId, flashcard: { orderIndex: { lte: 100 } } },
      select: { status: true, flashcard: { select: { divisionId: true } } },
    }),
  ])

  const countMap = new Map(flashcardCounts.map((c) => [c.divisionId, c._count.id]))

  const divisionStats = divisions.map((division) => {
    const total = countMap.get(division.id) ?? 0
    const divProgress = progressData.filter((p) => p.flashcard.divisionId === division.id)
    const known = divProgress.filter((p) => p.status === 'KNOWN').length
    const review = divProgress.filter((p) => p.status === 'REVIEW_LATER').length
    const pct = total > 0 ? Math.round((known / total) * 100) : 0
    const hasAccess = canAccessFlashcards(plan, division.slug as DivisionSlug)

    return { division, total, known, review, pct, hasAccess }
  })

  const totalCards = divisionStats.reduce((s, d) => s + d.total, 0)
  const totalKnown = divisionStats.reduce((s, d) => s + d.known, 0)
  const overallPct = totalCards > 0 ? Math.round((totalKnown / totalCards) * 100) : 0

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/dashboard" className="mb-6 flex items-center gap-1 text-sm text-brand-gray-500 hover:text-black">
            &larr; Back to Dashboard
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Flashcards</h1>
            <p className="mt-1 text-brand-gray-500">
              {totalCards} cards across 6 divisions - {overallPct}% mastered
            </p>
          </div>

          {/* Overall progress */}
          <div className="card mb-8 p-5">
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-brand-gray-700">Overall Progress</span>
              <span className="font-bold text-teal-600">{overallPct}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-brand-gray-200">
              <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${overallPct}%` }} />
            </div>
            <p className="mt-2 text-xs text-brand-gray-500">
              {totalKnown} of {totalCards} cards known
            </p>
          </div>

          {/* Division cards */}
          <div className="space-y-4">
            {divisionStats.map(({ division, total, known, review, pct, hasAccess }) => (
              <Link
                key={division.id}
                href={`/divisions/${division.slug.toLowerCase()}/flashcards`}
                className={`card flex flex-col justify-between gap-4 p-5 transition-all hover:ring-2 hover:ring-teal-400/50 sm:flex-row sm:items-center ${!hasAccess && plan === 'FREE' ? '' : ''}`}
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-block rounded bg-teal-500/20 px-2 py-0.5 text-xs font-bold text-teal-700">
                      {division.shortName}
                    </span>
                    <h3 className="font-semibold text-black">{division.name}</h3>
                  </div>
                  <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
                    <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="flex gap-4 text-xs text-brand-gray-500">
                    <span>{known}/{total} known</span>
                    {review > 0 && <span>{review} to review</span>}
                    <span>{pct}%</span>
                  </div>
                </div>
                <div className="text-sm font-semibold text-teal-600 whitespace-nowrap">
                  Study &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
