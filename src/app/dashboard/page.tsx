export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard | NBRCprep',
  robots: { index: false, follow: false },
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

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect('/login');

  const userId = session.user.id;

  const [
    totalFlashcards,
    userFlashcardProgress,
    miniExams,
    miniExamResults,
    fullExams,
    fullExamResults,
    studyStreaks,
  ] = await Promise.all([
    prisma.flashcard.count({ where: { orderIndex: { lte: 100 } } }),
    prisma.userFlashcardProgress.findMany({
      where: { userId, flashcard: { orderIndex: { lte: 100 } } },
      select: { status: true },
    }),
    prisma.miniExam.count({ where: { examIndex: { lte: 5 } } }),
    prisma.userMiniExamResult.findMany({
      where: { userId, miniExam: { examIndex: { lte: 5 } } },
      select: { passed: true, scorePercentage: true },
    }),
    prisma.fullExam.count(),
    prisma.userFullExamResult.findMany({
      where: { userId },
      select: { passed: true, scorePercentage: true },
    }),
    prisma.studyStreak.findMany({ where: { userId }, select: { studyDate: true } }),
  ]);

  const streak = calculateStreak(studyStreaks.map((s) => s.studyDate));
  const milestone = getStreakMilestone(streak);

  const flashcardsKnown = userFlashcardProgress.filter((p) => p.status === 'KNOWN').length;
  const flashcardsReview = userFlashcardProgress.filter((p) => p.status === 'REVIEW_LATER').length;
  const flashcardPct = totalFlashcards > 0 ? Math.round((flashcardsKnown / totalFlashcards) * 100) : 0;

  const miniTaken = miniExamResults.length;
  const miniPassed = miniExamResults.filter((r) => r.passed).length;
  const miniPassRate = miniTaken > 0 ? Math.round((miniPassed / miniTaken) * 100) : 0;

  const fullTaken = fullExamResults.length;
  const fullPassed = fullExamResults.filter((r) => r.passed).length;
  const fullPassRate = fullTaken > 0 ? Math.round((fullPassed / fullTaken) * 100) : 0;
  const fullBestScore = fullExamResults.length > 0
    ? Math.round(Math.max(...fullExamResults.map((r) => r.scorePercentage)))
    : null;

  const readinessScore = Math.round(
    (flashcardPct * 0.4 + miniPassRate * 0.35 + fullPassRate * 0.25) * 0.83
  );
  const readinessInfo = getReadinessLabel(readinessScore);

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
            <div className="card p-5 text-center">
              <span className="text-3xl">🔥</span>
              <p className="mt-2 text-2xl font-bold text-black">{streak}</p>
              <p className="text-sm text-brand-gray-500">Day Streak</p>
            </div>
            <div className="card p-5 text-center">
              <span className="text-3xl">📝</span>
              <p className="mt-2 text-2xl font-bold text-black">{flashcardsKnown}</p>
              <p className="text-sm text-brand-gray-500">Flashcards Known</p>
            </div>
            <div className="card p-5 text-center">
              <span className="text-3xl">✅</span>
              <p className="mt-2 text-2xl font-bold text-black">{miniPassed}</p>
              <p className="text-sm text-brand-gray-500">Mini Exams Passed</p>
            </div>
            <div className="card p-5 text-center">
              <span className="text-3xl">🏆</span>
              <p className="mt-2 text-2xl font-bold text-black">{fullPassed}</p>
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
                <p className={`text-4xl font-black ${readinessInfo.color}`}>{readinessScore}%</p>
              </div>
            </div>
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-brand-gray-200">
              <div
                className={`h-full rounded-full transition-all ${getReadinessBarColor(readinessScore)}`}
                style={{ width: `${readinessScore}%` }}
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
                    Unlock all flashcards, unlimited exams, and full-length practice tests.
                  </p>
                </div>
                <Link href="/pricing" className="btn-primary whitespace-nowrap">
                  View Plans
                </Link>
              </div>
            </div>
          )}

          {/* 3 Content Cards */}
          <h2 className="mb-4 text-xl font-semibold text-black">Study Materials</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Flashcards Card */}
            <Link
              href="/flashcards"
              className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-2xl">
                  🗂️
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-teal-600">{flashcardPct}%</p>
                  <p className="text-xs text-brand-gray-500">mastered</p>
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold text-black">Flashcards</h3>
              <p className="mb-4 text-sm text-brand-gray-500">
                {totalFlashcards} cards across 6 divisions
              </p>
              <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
                <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${flashcardPct}%` }} />
              </div>
              <div className="flex gap-4 text-xs text-brand-gray-500">
                <span>{flashcardsKnown} known</span>
                {flashcardsReview > 0 && <span>{flashcardsReview} to review</span>}
              </div>
              <div className="mt-4 text-sm font-semibold text-teal-600">
                Study Flashcards &rarr;
              </div>
            </Link>

            {/* Mini Exams Card */}
            <Link
              href="/mini-exams"
              className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-2xl">
                  📋
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-teal-600">
                    {miniPassed}<span className="text-base text-brand-gray-400">/{miniTaken}</span>
                  </p>
                  <p className="text-xs text-brand-gray-500">passed</p>
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold text-black">Mini Exams</h3>
              <p className="mb-4 text-sm text-brand-gray-500">
                {miniExams} practice exams - 20 questions each
              </p>
              <div className="flex gap-4 text-xs text-brand-gray-500">
                <span>{miniTaken} taken</span>
                {miniPassRate > 0 && <span>{miniPassRate}% pass rate</span>}
              </div>
              <div className="mt-4 text-sm font-semibold text-teal-600">
                Take a Mini Exam &rarr;
              </div>
            </Link>

            {/* Full Length Exams Card */}
            <Link
              href="/full-exams"
              className="card block p-6 transition-all hover:ring-2 hover:ring-teal-400/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-2xl">
                  🎯
                </div>
                <div className="text-right">
                  {fullBestScore !== null ? (
                    <>
                      <p className="text-2xl font-bold text-teal-600">{fullBestScore}%</p>
                      <p className="text-xs text-brand-gray-500">best score</p>
                    </>
                  ) : (
                    <>
                      <p className="text-2xl font-bold text-brand-gray-400">-</p>
                      <p className="text-xs text-brand-gray-500">not started</p>
                    </>
                  )}
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold text-black">Full Length Exams</h3>
              <p className="mb-4 text-sm text-brand-gray-500">
                {fullExams} timed simulations - 100 questions each
              </p>
              <div className="flex gap-4 text-xs text-brand-gray-500">
                <span>{fullTaken} taken</span>
                <span>{fullPassed} passed</span>
              </div>
              <div className="mt-4 text-sm font-semibold text-teal-600">
                Start Full Exam &rarr;
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
