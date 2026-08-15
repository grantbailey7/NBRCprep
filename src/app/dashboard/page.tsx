export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const metadata = { title: 'Dashboard | NBRCprep' };

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

  if (unique[0] !== todayMs && unique[0] !== todayMs - oneDayMs) return 0;

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

function getStreakMilestone(streak: number): { label: string; emoji: string } | null {
  if (streak >= 30) return { label: 'Legend!', emoji: '👑' };
  if (streak >= 14) return { label: 'Unstoppable!', emoji: '⚡' };
  if (streak >= 7) return { label: "You're on a roll!", emoji: '🔥' };
  return null;
}

function getReadinessLabel(score: number): { label: string; color: string } {
  if (score >= 80) return { label: 'Strong exam readiness', color: 'text-green-600' };
  if (score >= 60) return { label: 'Approaching exam-ready', color: 'text-teal-600' };
  if (score >= 40) return { label: 'Developing readiness', color: 'text-yellow-600' };
  if (score >= 20) return { label: 'Building foundations', color: 'text-orange-500' };
  return { label: 'Just getting started', color: 'text-brand-gray-500' };
}

function getReadinessBarColor(score: number): string {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-teal-500';
  if (score >= 40) return 'bg-yellow-500';
  if (score >= 20) return 'bg-orange-500';
  return 'bg-brand-gray-400';
}

function calculateDivisionReadiness(
  flashcardPercent: number,
  miniPassRate: number,
  fullPassRate: number,
): number {
  const flashcardScore = flashcardPercent * 0.4;
  const miniScore = miniPassRate * 0.35;
  const fullScore = fullPassRate * 0.25;
  return Math.round((flashcardScore + miniScore + fullScore) * 0.83);
}

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect('/login');

  const userId = session.user.id;

  const [divisions, userFlashcardProgress, miniExamResults, fullExamResults, studyStreaks, totalMiniExams, totalFullExams] = await Promise.all([
    prisma.division.findMany({ include: { _count: { select: { flashcards: true, miniExams: true, fullExams: true } } } }),
    prisma.userFlashcardProgress.findMany({ where: { userId }, include: { flashcard: { select: { divisionId: true } } } }),
    prisma.userMiniExamResult.findMany({ where: { userId }, include: { miniExam: { select: { divisionId: true } } } }),
    prisma.userFullExamResult.findMany({ where: { userId }, include: { fullExam: { select: { divisionId: true } } } }),
    prisma.studyStreak.findMany({ where: { userId }, select: { studyDate: true } }),
    prisma.userMiniExamResult.count({ where: { userId } }),
    prisma.userFullExamResult.count({ where: { userId } }),
  ]);

  const streak = calculateStreak(studyStreaks.map((s) => s.studyDate));
  const milestone = getStreakMilestone(streak);

  const totalFlashcardsKnown = userFlashcardProgress.filter((p) => p.status === 'KNOWN').length;
  const totalMiniPassed = miniExamResults.filter((r) => r.passed).length;
  const totalFullPassed = fullExamResults.filter((r) => r.passed).length;

  const divisionStats = divisions.map((division) => {
    const info = DIVISION_INFO[division.slug] ?? {
      name: division.name, code: division.shortName, slug: division.slug.toLowerCase(),
    };

    const totalFlashcards = division._count.flashcards;
    const knownCount = userFlashcardProgress.filter(
      (p) => p.flashcard.divisionId === division.id && p.status === 'KNOWN'
    ).length;
    const reviewCount = userFlashcardProgress.filter(
      (p) => p.flashcard.divisionId === division.id && p.status === 'REVIEW_LATER'
    ).length;
    const flashcardPercent = totalFlashcards > 0 ? Math.round((knownCount / totalFlashcards) * 100) : 0;

    const divMiniResults = miniExamResults.filter((r) => r.miniExam.divisionId === division.id);
    const miniPassed = divMiniResults.filter((r) => r.passed).length;
    const miniPassRate = divMiniResults.length > 0 ? Math.round((miniPassed / divMiniResults.length) * 100) : 0;
    const totalDivMiniExams = division._count.miniExams;

    const divFullResults = fullExamResults.filter((r) => r.fullExam.divisionId === division.id);
    const fullPassed = divFullResults.filter((r) => r.passed).length;
    const fullPassRate = divFullResults.length > 0 ? Math.round((fullPassed / divFullResults.length) * 100) : 0;
    const bestFullScore = divFullResults.length > 0 ? Math.max(...divFullResults.map((r) => r.scorePercentage)) : null;

    const readiness = calculateDivisionReadiness(flashcardPercent, miniPassRate, fullPassRate);

    return {
      ...info, divisionId: division.id,
      totalFlashcards, knownCount, reviewCount, flashcardPercent,
      miniAttempts: divMiniResults.length, miniPassed, miniPassRate, totalDivMiniExams,
      fullAttempts: divFullResults.length, fullPassed, fullPassRate, bestFullScore,
      readiness,
    };
  });

  const overallReadiness = divisionStats.length > 0
    ? Math.round(divisionStats.reduce((sum, d) => sum + d.readiness, 0) / divisionStats.length)
    : 0;
  const readinessInfo = getReadinessLabel(overallReadiness);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">
              Welcome back, {session.user.name ?? 'Student'}!
            </h1>

            {/* Streak Milestone Banner */}
            {milestone && (
              <div className="mt-4 rounded-lg border border-teal-400/30 bg-gradient-to-r from-teal-50 to-teal-100/50 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{milestone.emoji}</span>
                  <div>
                    <p className="font-bold text-teal-700">{milestone.label}</p>
                    <p className="text-sm text-teal-600">
                      {streak} day study streak - keep it going!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Overall Stats Row */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Study Streak */}
            <div className="card p-5 text-center">
              <span className="text-3xl">🔥</span>
              <p className="mt-2 text-2xl font-bold text-black">{streak}</p>
              <p className="text-sm text-brand-gray-500">Day Streak</p>
            </div>

            {/* Flashcards Known */}
            <div className="card p-5 text-center">
              <span className="text-3xl">📝</span>
              <p className="mt-2 text-2xl font-bold text-black">{totalFlashcardsKnown}</p>
              <p className="text-sm text-brand-gray-500">Flashcards Known</p>
            </div>

            {/* Mini Exams Passed */}
            <div className="card p-5 text-center">
              <span className="text-3xl">✅</span>
              <p className="mt-2 text-2xl font-bold text-black">{totalMiniPassed}</p>
              <p className="text-sm text-brand-gray-500">Mini Exams Passed</p>
            </div>

            {/* Full Exams Passed */}
            <div className="card p-5 text-center">
              <span className="text-3xl">🏆</span>
              <p className="mt-2 text-2xl font-bold text-black">{totalFullPassed}</p>
              <p className="text-sm text-brand-gray-500">Full Exams Passed</p>
            </div>
          </div>

          {/* Test Readiness Score */}
          <div className="card mb-8 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-black">Test Readiness Score</h2>
                <p className={`text-sm font-medium ${readinessInfo.color}`}>{readinessInfo.label}</p>
                <p className="mt-1 text-xs text-brand-gray-400">
                  Based on flashcard mastery (40%), mini exam pass rate (35%), and full exam pass rate (25%)
                </p>
              </div>
              <div className="text-right">
                <p className={`text-4xl font-black ${readinessInfo.color}`}>{overallReadiness}%</p>
              </div>
            </div>
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-brand-gray-200">
              <div
                className={`h-full rounded-full transition-all ${getReadinessBarColor(overallReadiness)}`}
                style={{ width: `${overallReadiness}%` }}
              />
            </div>
          </div>

          {/* Upgrade Nudge */}
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
          <h2 className="mb-4 text-xl font-semibold text-black">Your Divisions</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisionStats.map((division) => {
              const divReadiness = getReadinessLabel(division.readiness);
              return (
                <Link
                  key={division.slug}
                  href={`/divisions/${division.slug}`}
                  className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
                >
                  {/* Division Header */}
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <span className="inline-block rounded bg-teal-500/20 px-2 py-0.5 text-xs font-bold text-teal-700">
                        {division.code}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-black">{division.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${divReadiness.color}`}>{division.readiness}%</p>
                      <p className={`text-xs ${divReadiness.color}`}>{divReadiness.label}</p>
                    </div>
                  </div>

                  {/* Readiness Bar */}
                  <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
                    <div
                      className={`h-full rounded-full transition-all ${getReadinessBarColor(division.readiness)}`}
                      style={{ width: `${division.readiness}%` }}
                    />
                  </div>

                  {/* Flashcard Progress */}
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-brand-gray-500">Flashcards Known</span>
                    <span className="text-brand-gray-700">
                      {division.knownCount} / {division.totalFlashcards}
                      {division.reviewCount > 0 && (
                        <span className="ml-1 text-xs text-yellow-600">({division.reviewCount} to review)</span>
                      )}
                    </span>
                  </div>

                  {/* Mini Exams */}
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-brand-gray-500">Mini Exams</span>
                    <span className="text-brand-gray-700">
                      {division.miniPassed} passed / {division.miniAttempts} taken
                    </span>
                  </div>

                  {/* Full Exams */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-gray-500">Full Exam Best</span>
                    <span className="font-medium text-teal-600">
                      {division.bestFullScore !== null ? `${Math.round(division.bestFullScore)}%` : '—'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
