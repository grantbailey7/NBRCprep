export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getAuthSession } from '@/lib/auth'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'
import { PlanType, DivisionSlug } from '@prisma/client'
import { canAccessFullExams, FREE_MINI_EXAM_DIVISIONS } from '@/lib/access-control'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

const SLUG_TO_ENUM: Record<string, string> = {
  tmc: 'TMC',
  nps: 'NPS',
  accs: 'ACCS',
  sds: 'SDS',
  cpft: 'CPFT',
  rpft: 'RPFT',
}

const DIVISION_META: Record<string, { title: string; description: string; longName: string }> = {
  tmc: {
    title: 'TMC Exam Prep - Practice Tests & Flashcards',
    description: 'Prepare for the TMC exam with 400 flashcards, 30 timed mini exams, and 3 full-length simulations. Master patient assessment, ventilator management, and pharmacology.',
    longName: 'Therapist Multiple-Choice (TMC)',
  },
  nps: {
    title: 'NPS Exam Prep - Neonatal/Pediatric Specialist',
    description: 'NPS exam prep with 400 flashcards and 30 practice exams covering neonatal resuscitation, pediatric ventilation, surfactant therapy, and developmental physiology.',
    longName: 'Neonatal/Pediatric Specialist (NPS)',
  },
  accs: {
    title: 'ACCS Exam Prep - Adult Critical Care',
    description: 'ACCS exam prep with 400 flashcards and 30 practice exams covering advanced ventilator management, hemodynamic monitoring, ARDS, and critical care protocols.',
    longName: 'Adult Critical Care Specialist (ACCS)',
  },
  sds: {
    title: 'SDS Exam Prep - Sleep Disorders Specialist',
    description: 'SDS exam prep with 400 flashcards and 30 practice exams covering polysomnography, CPAP/BiPAP titration, sleep-disordered breathing, and scoring criteria.',
    longName: 'Sleep Disorders Specialist (SDS)',
  },
  cpft: {
    title: 'CPFT Exam Prep - Pulmonary Function Tech',
    description: 'CPFT exam prep with 400 flashcards and 30 practice exams covering spirometry, lung volumes, diffusion capacity, and quality assurance in PFT labs.',
    longName: 'Certified Pulmonary Function Technologist (CPFT)',
  },
  rpft: {
    title: 'RPFT Exam Prep - Registered PFT',
    description: 'RPFT exam prep with 400 flashcards and 30 practice exams covering advanced PFT interpretation, bronchial provocation, exercise testing, and research methodology.',
    longName: 'Registered Pulmonary Function Technologist (RPFT)',
  },
}

export async function generateMetadata({ params }: { params: { division: string } }): Promise<Metadata> {
  const slug = params.division.toLowerCase()
  const meta = DIVISION_META[slug]
  if (!meta) return {}
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://nbrcprep.app/divisions/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://nbrcprep.app/divisions/${slug}`,
    },
  }
}

export default async function DivisionPage({ params }: { params: { division: string } }) {
  const session = await getAuthSession()
  if (!session) redirect(`/login?callbackUrl=/divisions/${params.division}`)

  const slugEnum = SLUG_TO_ENUM[params.division.toLowerCase()]
  if (!slugEnum) redirect('/dashboard')

  const division = await prisma.division.findUnique({
    where: { slug: slugEnum as any },
  })
  if (!division) redirect('/dashboard')

  const userId = session.user.id
  const plan = session.user.planType as PlanType

  // Flashcard metrics
  const totalFlashcards = await prisma.flashcard.count({ where: { divisionId: division.id } })
  const progressRows = await prisma.userFlashcardProgress.groupBy({
    by: ['status'],
    where: { userId, flashcard: { divisionId: division.id } },
    _count: { status: true },
  })
  const known = progressRows.find((p) => p.status === 'KNOWN')?._count.status ?? 0
  const reviewLater = progressRows.find((p) => p.status === 'REVIEW_LATER')?._count.status ?? 0
  const flashPct = totalFlashcards > 0 ? Math.round((known / totalFlashcards) * 100) : 0

  // Mini exam metrics
  const totalMiniExams = await prisma.miniExam.count({ where: { divisionId: division.id } })
  const miniResults = await prisma.userMiniExamResult.findMany({
    where: { userId, miniExam: { divisionId: division.id } },
  })
  const miniTaken = miniResults.length
  const miniPassed = miniResults.filter((r) => r.passed).length

  // Full exam metrics
  const totalFullExams = await prisma.fullExam.count({ where: { divisionId: division.id } })
  const fullResults = await prisma.userFullExamResult.findMany({
    where: { userId, fullExam: { divisionId: division.id } },
  })
  const fullTaken = fullResults.length
  const fullPassed = fullResults.filter((r) => r.passed).length

  const divSlug = params.division.toLowerCase()
  const hasFullAccess = canAccessFullExams(plan, slugEnum as DivisionSlug)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: 'Dashboard', href: '/dashboard' }, { label: division.name }]} />
          {/* Header */}
          <div className="mb-8">
            <Link href="/dashboard" className="mb-3 flex items-center gap-1 text-sm text-brand-gray-500 hover:text-black">
              &larr; Back to Dashboard
            </Link>
            <div className="flex items-center gap-3">
              <span className="inline-block rounded bg-teal-500/20 px-3 py-1 text-sm font-bold text-teal-600">
                {division.shortName}
              </span>
              <h1 className="text-3xl font-bold text-black">{division.name}</h1>
            </div>
            <p className="mt-2 text-brand-gray-500">{division.description}</p>
          </div>

          {/* Metrics row */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="card p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gray-500">Flashcards</p>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-brand-gray-500">Known</span>
                <span className="font-bold text-teal-600">{flashPct}%</span>
              </div>
              <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
                <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${flashPct}%` }} />
              </div>
              <div className="flex gap-4 text-xs text-brand-gray-500">
                <span>{known} known</span>
                <span>{reviewLater} review later</span>
                <span>{totalFlashcards} total</span>
              </div>
            </div>

            <div className="card p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gray-500">Mini Exams</p>
              <p className="text-3xl font-bold text-black">{miniPassed}<span className="text-lg text-brand-gray-500">/{miniTaken}</span></p>
              <p className="mt-1 text-sm text-brand-gray-500">passed of taken</p>
              <p className="mt-1 text-xs text-brand-gray-500">{totalMiniExams} available</p>
            </div>

            <div className="card p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-gray-500">Full Exams</p>
              <p className="text-3xl font-bold text-black">{fullPassed}<span className="text-lg text-brand-gray-500">/{fullTaken}</span></p>
              <p className="mt-1 text-sm text-brand-gray-500">passed of taken</p>
              <p className="mt-1 text-xs text-brand-gray-500">{totalFullExams} available</p>
            </div>
          </div>

          {/* Navigation tiles */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Flashcards */}
            <Link
              href={`/divisions/${divSlug}/flashcards`}
              className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
            >
              <div className="mb-3 text-3xl">&#x1F5C2;</div>
              <h3 className="mb-1 text-xl font-bold text-black">Flashcards</h3>
              <p className="mb-4 text-sm text-brand-gray-500">
                {plan === 'FREE'
                  ? `20 preview cards available. Upgrade for all ${totalFlashcards}.`
                  : `${totalFlashcards} flashcards - ${flashPct}% known`}
              </p>
              <span className="text-sm font-semibold text-teal-600">
                Study Flashcards &rarr;
              </span>
            </Link>

            {/* Mini Exams */}
            <Link
              href={`/divisions/${divSlug}/mini-exams`}
              className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
            >
              <div className="mb-3 text-3xl">&#x1F4DD;</div>
              <h3 className="mb-1 text-xl font-bold text-black">Mini Exams</h3>
              <p className="mb-4 text-sm text-brand-gray-500">
                {plan === 'FREE'
                  ? FREE_MINI_EXAM_DIVISIONS.includes(slugEnum as DivisionSlug)
                    ? '1 free mini exam available for this division.'
                    : 'Upgrade for mini exam access.'
                  : `${totalMiniExams} exams · ${miniPassed} passed`}
              </p>
              <span className="text-sm font-semibold text-teal-600">
                Take a Mini Exam &rarr;
              </span>
            </Link>

            {/* Full Exams */}
            {hasFullAccess ? (
              <Link
                href={`/divisions/${divSlug}/full-exams`}
                className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
              >
                <div className="mb-3 text-3xl">&#x1F3AF;</div>
                <h3 className="mb-1 text-xl font-bold text-black">Full Exams</h3>
                <p className="mb-4 text-sm text-brand-gray-500">
                  {totalFullExams} full-length simulations &middot; {fullPassed} passed
                </p>
                <span className="text-sm font-semibold text-teal-600">
                  Start Full Exam &rarr;
                </span>
              </Link>
            ) : (
              <div className="card block p-6 opacity-50 grayscale">
                <div className="mb-3 text-3xl">&#x1F3AF;</div>
                <h3 className="mb-1 text-xl font-bold text-brand-gray-400">Full Exams</h3>
                <p className="mb-4 text-sm text-brand-gray-400">
                  Upgrade your plan to unlock full-length practice exams.
                </p>
                <Link href="/pricing" className="text-sm font-semibold text-brand-gray-400 hover:text-teal-600">
                  Upgrade to Unlock &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
