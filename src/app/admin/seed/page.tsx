'use client';

import { useState } from 'react';

const DIVISIONS = ['TMC', 'NPS', 'ACCS', 'SDS', 'CPFT', 'RPFT'];

export default function SeedPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSeed = async () => {
    setLoading(true);
    setStatus(null);
    setIsError(false);
    try {
      const res = await fetch('/api/admin/seed', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Seed failed');
      setStatus('Divisions seeded successfully!');
    } catch (err: any) {
      setIsError(true);
      setStatus(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Seed Database</h1>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Seed Divisions</h2>
        <p className="text-gray-300 text-sm mb-4">
          This will seed the following 6 divisions into the database:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm mb-6 space-y-1">
          {DIVISIONS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <button
          onClick={handleSeed}
          disabled={loading}
          className="bg-teal-500 text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Seeding...' : 'Seed Divisions'}
        </button>

        {status && (
          <p
            className={`mt-4 text-sm font-medium ${
              isError ? 'text-red-400' : 'text-green-400'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
