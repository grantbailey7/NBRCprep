'use client';

import { useState, useEffect, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  name: string | null;
  planType: string;
  createdAt: string;
  flashcardsDone: number;
  miniExamsTaken: number;
  fullExamsTaken: number;
  studyDays: number;
}

const PLAN_TYPES = ['FREE', 'MONTHLY', 'FULL_ACCESS', 'FULL_BUNDLE'];
const PER_PAGE = 25;

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const totalPages = Math.ceil(total / PER_PAGE);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(PER_PAGE),
      });
      if (search) params.set('search', search);
      const res = await fetch(`/api/admin/users?${params}`);
      const data = await res.json();
      setUsers(data.users || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch users', err);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const handlePlanChange = async (userId: string, planType: string) => {
    try {
      await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, planType }),
      });
      fetchUsers();
    } catch (err) {
      console.error('Failed to update plan', err);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-72"
        />
        <button
          type="submit"
          className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-400 transition-colors"
        >
          Search
        </button>
        {search && (
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSearchInput('');
              setPage(1);
            }}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition-colors"
          >
            Clear
          </button>
        )}
      </form>

      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 text-left">
                <th className="px-4 py-3 text-gray-300 font-medium">Email</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Name</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Plan</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Flashcards</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Mini Exams</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Full Exams</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Study Days</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3 text-gray-300">{user.name || '—'}</td>
                    <td className="px-4 py-3">
                      <select
                        value={user.planType}
                        onChange={(e) => handlePlanChange(user.id, e.target.value)}
                        className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white"
                      >
                        {PLAN_TYPES.map((plan) => (
                          <option key={plan} value={plan}>
                            {plan}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-gray-300 text-center">{user.flashcardsDone}</td>
                    <td className="px-4 py-3 text-gray-300 text-center">{user.miniExamsTaken}</td>
                    <td className="px-4 py-3 text-gray-300 text-center">{user.fullExamsTaken}</td>
                    <td className="px-4 py-3 text-gray-300 text-center">{user.studyDays}</td>
                    <td className="px-4 py-3 text-gray-300 text-xs">
                      {formatDate(user.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-400">
            Page {page} of {totalPages} ({total} total)
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
