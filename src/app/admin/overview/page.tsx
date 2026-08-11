'use client';

import { useEffect, useState } from 'react';

interface Stats {
  totalUsers: number;
  usersByPlan: {
    FREE: number;
    MONTHLY: number;
    FULL_ACCESS: number;
    FULL_BUNDLE: number;
  };
  newUsersLast7Days: number;
  newUsersLast30Days: number;
  totalFlashcards: number;
  totalMiniExams: number;
  totalFullExams: number;
  totalMiniExamAttempts: number;
  totalFullExamAttempts: number;
  avgMiniExamScore: number;
  avgFullExamScore: number;
  activeUsersLast7Days: number;
  mrrEstimate: number;
}

function StatCard({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className={`text-2xl font-bold ${accent ? 'text-teal-400' : 'text-white'}`}>
        {value}
      </p>
    </div>
  );
}

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch stats');
        return res.json();
      })
      .then((data) => setStats(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-400 text-lg">Loading stats...</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-400 text-lg">Error: {error || 'Unknown error'}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Admin Overview</h1>

      {/* Row 1: User metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Users" value={stats.totalUsers} accent />
        <StatCard label="Active Users (7d)" value={stats.activeUsersLast7Days} accent />
        <StatCard label="New Users (7d)" value={stats.newUsersLast7Days} />
        <StatCard label="New Users (30d)" value={stats.newUsersLast30Days} />
      </div>

      {/* Row 2: Revenue & plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="MRR Estimate" value={`$${stats.mrrEstimate.toLocaleString()}`} accent />
        <StatCard label="Monthly Subscribers" value={stats.usersByPlan.MONTHLY} />
        <StatCard label="Full Access" value={stats.usersByPlan.FULL_ACCESS} />
        <StatCard label="Full Bundle" value={stats.usersByPlan.FULL_BUNDLE} />
      </div>

      {/* Row 3: Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard label="Total Flashcards" value={stats.totalFlashcards} />
        <StatCard label="Total Mini Exams" value={stats.totalMiniExams} />
        <StatCard label="Total Full Exams" value={stats.totalFullExams} />
      </div>

      {/* Row 4: Exam attempts & scores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Mini Exam Attempts" value={stats.totalMiniExamAttempts} />
        <StatCard label="Full Exam Attempts" value={stats.totalFullExamAttempts} />
        <StatCard label="Avg Mini Score" value={`${stats.avgMiniExamScore.toFixed(1)}%`} />
        <StatCard label="Avg Full Score" value={`${stats.avgFullExamScore.toFixed(1)}%`} />
      </div>
    </div>
  );
}
