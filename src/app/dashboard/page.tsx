export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const metadata = { title: 'Dashboard' };

const DIVISION_INFO: Record<string, { name: string; code: string; slug: string }> = {
  TMC: { name: 'Therapist Multiple-Choice', code: 'TMC', slug: 'tmc' },
  NPS: { name: 'Neonatal/Pediatric Specialist', code: 'NPS', slug: 'nps' },
  ACCS: { name: 'Adult Critical Care Specialist', code: 'ACCS', slug: 'accs' },
  SDS: { name: 'Sleep Disorders Specialist', code: 'SDS', slug: 'sds' },
  CPFT: { name: 'Certified Pulmonary Function Technologist', code: 'CPFT', slug: 'cpft' },
  RPFT: { name: 'Registered Pulmonary Function Technologist', code: 'RPFT', slug: 'rpft' },
};

function calculateStreak(studyDates: Date[]): number {
  if (studyDates.length === 0) return 0;

  const sorted = studyDates
    .map((d) => {
      const date = new Date(d);
      date.setHours(0, 0, 0, 0);
      return date.getTime();
    })
    .sort((a, b) => b - a);

  const unique = Array.from(new Set(sorted));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayMs = today.getTime();
  const oneDayMs = 86400000;

  // Streak must include today or yesterday to be active
  if (unique[0] !== todayMs && unique[0] !== todayMs - oneDayMs) {
    return 0;
  }

  let streak = 1;
  for (let i = 1; i < unique.length; i++) {
    if (unique[i - 1] - unique[i] === oneDayMs) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export default async function DashboardPage() {
  const session = await getAuthSession();

  if (!session) {
    redirect('/login');
  }

  const userId = session.user.id;

  // Fetch all divisions with flashcard counts
  const divisions = await prisma.division.findMany({
    include: {
      _count: {
        select: { flashcards: true },
      },
    },
  });

  // Fetch user flashcard progress grouped by division
  const userFlashcardProgress = await prisma.userFlashcardProgress.findMany({
    where: { userId },
    include: {
      flashcard: {
        select: { divisionId: true },
      },
    },
  });

  // Fetch mini exam attempts count per division
  const miniExamResults = await prisma.userMiniExamResult.findMany({
    where: { userId },
    include: {
      miniExam: {
        select: { divisionId: true },
      },
    },
  });

  // Fetch full exam best scores per division
  const fullExamResults = await prisma.userFullExamResult.findMany({
    where: { userId },
    include: {
      fullExam: {
        select: { divisionId: true },
      },
    },
  });

  // Fetch study streak
  const studyStreaks = await prisma.studyStreak.findMany({
    where: { userId },
    select: { studyDate: true },
  });

  const streak = calculateStreak(studyStreaks.map((s) => s.studyDate));

  // Build division stats
  const divisionStats = divisions.map((division) => {
    const info = DIVISION_INFO[division.slug] ?? {
      name: division.name,
      code: division.shortName,
      slug: division.slug.toLowerCase(),
    };

    const totalFlashcards = division._count.flashcards;
    const knownCount = userFlashcardProgress.filter(
      (p) => p.flashcard.divisionId === division.id && p.status === 'KNOWN'
    ).length;

    const progressPercent = totalFlashcards > 0 ? Math.round((knownCount / totalFlashcards) * 100) : 0;

    const miniExamAttempts = miniExamResults.filter(
      (r) => r.miniExam.divisionId === division.id
    ).length;

    const divisionFullExamScores = fullExamResults
      .filter((r) => r.fullExam.divisionId === division.id)
      .map((r) => r.scorePercentage);
    const bestFullExamScore =
      divisionFullExamScores.length > 0 ? Math.max(...divisionFullExamScores) : null;

    return {
      ...info,
      divisionId: division.id,
      totalFlashcards,
      knownCount,
      progressPercent,
      miniExamAttempts,
      bestFullExamScore,
    };
  });

  // Test readiness: average of all division flashcard progress percentages
  const testReadiness =
    divisionStats.length > 0
      ? Math.round(
          divisionStats.reduce((sum, d) => sum + d.progressPercent, 0) / divisionStats.length
        )
      : 0;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Welcome and Stats Header */}
          <div className="mb-8">
            <h1 className="section-title text-3xl font-bold text-black">
              Welcome back, {session.user.name ?? 'Student'}!
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              {/* Study Streak */}
              <div className="card flex items-center gap-3 px-5 py-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-sm text-brand-gray-500">Study Streak</p>
                  <p className="text-xl font-bold text-teal-600">
                    {streak} day{streak !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Test Readiness */}
              <div className="card flex items-center gap-3 px-5 py-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-sm text-brand-gray-500">Test Readiness</p>
                  <p className="text-xl font-bold text-teal-600">{testReadiness}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upgrade Nudge for Free Users */}
          {session.user.planType === 'FREE' && (
            <div className="mb-8 rounded-lg border border-teal-400/30 bg-teal-50 p-4">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-teal-700">Upgrade Your Plan</p>
                  <p className="text-sm text-brand-gray-600">
                    Unlock all divisions, unlimited exams, and advanced analytics.
                  </p>
                </div>
                <Link href="/pricing" className="btn-primary whitespace-nowrap">
                  View Plans
                </Link>
              </div>
            </div>
          )}

          {/* Division Cards Grid */}
          <h2 className="section-title mb-4 text-xl font-semibold text-black">Your Divisions</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisionStats.map((division) => (
              <Link
                key={division.slug}
                href={`/divisions/${division.slug}`}
                className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
              >
                {/* Division Header */}
                <div className="mb-4">
                  <span className="inline-block rounded bg-teal-500/20 px-2 py-0.5 text-xs font-bold text-teal-700">
                    {division.code}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-black">{division.name}</h3>
                </div>

                {/* Flashcard Progress */}
                <div className="mb-3">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-brand-gray-500">Flashcards</span>
                    <span className="text-brand-gray-600">
                      {division.knownCount} / {division.totalFlashcards} known
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
                    <div
                      className="h-full rounded-full bg-teal-500 transition-all"
                      style={{ width: `${division.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Mini Exam Attempts */}
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-brand-gray-500">Mini Exam Attempts</span>
                  <span className="font-medium text-brand-gray-700">
                    {division.miniExamAttempts}
                  </span>
                </div>

                {/* Full Exam Best Score */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-gray-500">Full Exam Best Score</span>
                  <span className="font-medium text-teal-600">
                    {division.bestFullExamScore !== null
                      ? `${Math.round(division.bestFullExamScore)}%`
                      : '—'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
