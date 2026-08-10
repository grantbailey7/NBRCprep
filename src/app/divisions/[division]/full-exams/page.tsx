export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getAuthSession } from '@/lib/auth'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'
import { PlanType, DivisionSlug } from '@prisma/client'
import { canAccessFullExam } from '@/lib/access-control'

const SLUG_TO_ENUM: Record<string, string> = {
  tmc: 'TMC', nps: 'NPS', accs: 'ACCS', sds: 'SDS', cpft: 'CPFT', rpft: 'RPFT',
}

export default async function FullExamsListPage({ params }: { params: { division: string } }) {
  const session = await getAuthSession()
  if (!session) redirect(`/login?callbackUrl=/divisions/${params.division}/full-exams`)

  const plan = session.user.planType as PlanType
  const slugEnum = SLUG_TO_ENUM[params.division.toLowerCase()]
  if (!slugEnum) redirect('/dashboard')

  const division = await prisma.division.findUnique({ where: { slug: slugEnum as any } })
  if (!division) redirect('/dashboard')

  const userId = session.user.id
  const exams = await prisma.fullExam.findMany({
    where: { divisionId: division.id },
    orderBy: { examIndex: 'asc' },
    include: { _count: { select: { questions: true } } },
  })

  const results = await prisma.userFullExamResult.findMany({
    where: { userId, fullExam: { divisionId: division.id } },
    orderBy: { takenAt: 'desc' },
  })

  const resultsByExam = new Map<string, typeof results[0][]>()
  for (const r of results) {
    if (!resultsByExam.has(r.fullExamId)) resultsByExam.set(r.fullExamId, [])
    resultsByExam.get(r.fullExamId)!.push(r)
  }

  const divSlug = params.division.toLowerCase()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href={`/divisions/${divSlug}`} className="mb-6 flex items-center gap-1 text-sm text-brand-gray-500 hover:text-black">
            &larr; Back to {division.shortName}
          </Link>
          <div className="mb-3">
            <h1 className="text-3xl font-bold text-black">{division.name}</h1>
            <p className="mt-1 text-brand-gray-500">Full-Length Practice Exams &mdash; timed, full simulation</p>
          </div>

          <div className="card mb-6 border-teal-400/30 bg-teal-500/10 p-4">
            <p className="text-sm font-medium text-teal-700">
              Full Exam 1 is free for all users. Upgrade your plan to unlock all full-length exams. Score 70% or higher to pass.
            </p>
          </div>

          <div className="space-y-4">
            {exams.map((exam) => {
              const accessible = canAccessFullExam(plan, slugEnum as DivisionSlug, exam.isFree)
              const examResults = resultsByExam.get(exam.id) ?? []
              const bestScore = examResults.length > 0 ? Math.max(...examResults.map(r => r.scorePercentage)) : null
              const passed = examResults.some((r) => r.passed)
              const attempts = examResults.length

              return (
                <div key={exam.id} className={`card flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center ${!accessible ? 'opacity-50 grayscale' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`relative flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full text-sm font-bold ${
                      !accessible ? 'bg-brand-gray-200 text-brand-gray-400' : passed ? 'bg-green-500/20 text-green-400' : 'bg-brand-gray-200 text-brand-gray-500'
                    }`}>
                      {!accessible ? (
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
                      <div className="flex items-center gap-2">
                        <p className={`text-lg font-bold ${!accessible ? 'text-brand-gray-400' : 'text-black'}`}>{exam.title}</p>
                        {exam.isFree && (
                          <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-xs font-bold text-teal-600">FREE</span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap gap-3 text-xs text-brand-gray-500">
                        <span>{exam._count.questions} questions</span>
                        <span>&middot;</span>
                        <span>{exam.durationMinutes} minutes</span>
                        {!accessible && (
                          <>
                            <span>&middot;</span>
                            <span className="font-medium text-brand-gray-400">Requires upgrade</span>
                          </>
                        )}
                        {accessible && attempts > 0 && (
                          <>
                            <span>&middot;</span>
                            <span>{attempts} attempt{attempts > 1 ? 's' : ''}</span>
                          </>
                        )}
                        {accessible && bestScore !== null && (
                          <>
                            <span>&middot;</span>
                            <span className={bestScore >= 70 ? 'font-semibold text-green-400' : ''}>
                              Best: {bestScore}%
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {passed && (
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                        {'✓'} Passed
                      </span>
                    )}
                    {!accessible ? (
                      <Link href="/pricing" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gray-200 px-5 py-2 text-sm font-semibold text-brand-gray-500 transition-colors hover:bg-brand-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
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

            {exams.length === 0 && (
              <div className="card p-10 text-center">
                <p className="text-brand-gray-500">No full exams available for this division yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
