export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getAuthSession } from '@/lib/auth'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'
import { PlanType, DivisionSlug } from '@prisma/client'
import { canAccessFullExams } from '@/lib/access-control'

export const metadata = {
  title: 'Full Length Exams | NBRCprep',
  robots: { index: false, follow: false },
}

export default async function FullExamsPage() {
  const session = await getAuthSession()
  if (!session) redirect('/login?callbackUrl=/full-exams')

  const userId = session.user.id
  const plan = session.user.planType as PlanType

  const divisions = await prisma.division.findMany({ orderBy: { slug: 'asc' } })

  const [exams, results] = await Promise.all([
    prisma.fullExam.findMany({
      orderBy: [{ divisionId: 'asc' }, { examIndex: 'asc' }],
      include: {
        _count: { select: { questions: true } },
        division: { select: { slug: true, shortName: true, name: true } },
      },
    }),
    prisma.userFullExamResult.findMany({
      where: { userId },
      orderBy: { takenAt: 'desc' },
    }),
  ])

  const resultsByExam = new Map<string, typeof results>()
  for (const r of results) {
    if (!resultsByExam.has(r.fullExamId)) resultsByExam.set(r.fullExamId, [])
    resultsByExam.get(r.fullExamId)!.push(r)
  }

  const totalPassed = results.filter((r) => r.passed).length
  const totalTaken = results.length
  const bestScore = results.length > 0 ? Math.round(Math.max(...results.map(r => r.scorePercentage))) : null

  const examsByDivision = new Map<string, typeof exams>()
  for (const exam of exams) {
    const divId = exam.divisionId
    if (!examsByDivision.has(divId)) examsByDivision.set(divId, [])
    examsByDivision.get(divId)!.push(exam)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/dashboard" className="mb-6 flex items-center gap-1 text-sm text-brand-gray-500 hover:text-black">
            &larr; Back to Dashboard
          </Link>

          <div className="mb-3">
            <h1 className="text-3xl font-bold text-black">Full Length Exams</h1>
            <p className="mt-1 text-brand-gray-500">
              {exams.length} timed simulations - 100 questions each
            </p>
          </div>

          <div className="mb-8 flex gap-6 text-sm">
            <span className="text-brand-gray-500">{totalTaken} taken</span>
            <span className="text-brand-gray-500">{totalPassed} passed</span>
            {bestScore !== null && <span className="font-semibold text-teal-600">Best: {bestScore}%</span>}
          </div>

          {plan === 'FREE' && (
            <div className="card mb-6 border-amber-400/30 bg-amber-500/10 p-4">
              <p className="text-sm font-medium text-amber-700">
                Full exams require a paid plan.{' '}
                <Link href="/pricing" className="font-bold underline hover:text-amber-900">Upgrade now</Link>{' '}
                to unlock all full-length practice exams.
              </p>
            </div>
          )}

          {divisions.map((division) => {
            const divExams = examsByDivision.get(division.id) ?? []
            if (divExams.length === 0) return null

            const hasAccess = canAccessFullExams(plan, division.slug as DivisionSlug)
            const divSlug = division.slug.toLowerCase()

            return (
              <div key={division.id} className="mb-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded bg-teal-500/20 px-2 py-0.5 text-xs font-bold text-teal-700">
                    {division.shortName}
                  </span>
                  <h2 className="text-lg font-semibold text-black">{division.name}</h2>
                </div>

                <div className="space-y-4">
                  {divExams.map((exam) => {
                    const examResults = resultsByExam.get(exam.id) ?? []
                    const examBest = examResults.length > 0 ? Math.max(...examResults.map(r => r.scorePercentage)) : null
                    const passed = examResults.some((r) => r.passed)
                    const attempts = examResults.length

                    return (
                      <div key={exam.id} className={`card flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center ${!hasAccess ? 'opacity-50 grayscale' : ''}`}>
                        <div className="flex items-center gap-4">
                          <div className={`relative flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full text-sm font-bold ${
                            !hasAccess ? 'bg-brand-gray-200 text-brand-gray-400' : passed ? 'bg-green-500/20 text-green-400' : 'bg-brand-gray-200 text-brand-gray-500'
                          }`}>
                            {!hasAccess ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <>
                                <span className="text-xs">FULL</span>
                                <span>{exam.examIndex}</span>
                              </>
                            )}
                          </div>
                          <div>
                            <p className={`text-lg font-bold ${!hasAccess ? 'text-brand-gray-400' : 'text-black'}`}>{exam.title}</p>
                            <div className="mt-1 flex flex-wrap gap-3 text-xs text-brand-gray-500">
                              <span>{exam._count.questions} questions</span>
                              <span>&middot;</span>
                              <span>{exam.durationMinutes} minutes</span>
                              {!hasAccess && (
                                <>
                                  <span>&middot;</span>
                                  <span className="font-medium text-brand-gray-400">Requires upgrade</span>
                                </>
                              )}
                              {hasAccess && attempts > 0 && (
                                <>
                                  <span>&middot;</span>
                                  <span>{attempts} attempt{attempts > 1 ? 's' : ''}</span>
                                </>
                              )}
                              {hasAccess && examBest !== null && (
                                <>
                                  <span>&middot;</span>
                                  <span className={examBest >= 70 ? 'font-semibold text-green-400' : ''}>
                                    Best: {examBest}%
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {passed && (
                            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                              Passed
                            </span>
                          )}
                          {!hasAccess ? (
                            <Link href="/pricing" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gray-200 px-5 py-2 text-sm font-semibold text-brand-gray-500 transition-colors hover:bg-brand-gray-300">
                              Unlock
                            </Link>
                          ) : (
                            <Link
                              href={`/divisions/${divSlug}/full-exams/${exam.id}`}
                              className="btn-primary px-5 py-2 text-sm"
                            >
                              {attempts > 0 ? 'Retake' : 'Begin'}
                            </Link>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
