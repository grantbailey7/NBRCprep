'use client';

import { useState, useEffect, useCallback } from 'react';

interface Flashcard {
  id: string;
  division: { slug: string; name: string } | null;
  divisionId: string;
  question: string;
  answer: string;
  choices: any;
  correctChoice: string;
  difficulty: number;
  topic: string;
  isFree: boolean;
}

interface FlashcardForm {
  division: string;
  question: string;
  answer: string;
  choices: any;
  correctChoice: string;
  difficulty: number;
  topic: string;
  isFree: boolean;
}

const DIVISIONS = ['TMC', 'NPS', 'ACCS', 'SDS', 'CPFT', 'RPFT'];
const PER_PAGE = 25;

const emptyForm: FlashcardForm = {
  division: 'TMC',
  question: '',
  answer: '',
  choices: [],
  correctChoice: '',
  difficulty: 1,
  topic: '',
  isFree: false,
};

export default function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [division, setDivision] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Flashcard | null>(null);
  const [form, setForm] = useState<FlashcardForm>(emptyForm);
  const [choicesJson, setChoicesJson] = useState('[]');
  const [saving, setSaving] = useState(false);

  const totalPages = Math.ceil(total / PER_PAGE);

  const fetchFlashcards = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(PER_PAGE),
      });
      if (division) params.set('division', division);
      const res = await fetch(`/api/admin/flashcards?${params}`);
      const data = await res.json();
      setFlashcards(data.flashcards || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch flashcards', err);
    } finally {
      setLoading(false);
    }
  }, [page, division]);

  useEffect(() => {
    fetchFlashcards();
  }, [fetchFlashcards]);

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setChoicesJson('[]');
    setModalOpen(true);
  };

  const openEdit = (card: Flashcard) => {
    setEditing(card);
    setForm({
      division: card.division?.slug || 'TMC',
      question: card.question,
      answer: card.answer,
      choices: card.choices,
      correctChoice: card.correctChoice,
      difficulty: card.difficulty,
      topic: card.topic,
      isFree: card.isFree,
    });
    setChoicesJson(JSON.stringify(card.choices, null, 2));
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      let parsedChoices;
      try {
        parsedChoices = JSON.parse(choicesJson);
      } catch {
        alert('Invalid JSON for choices');
        setSaving(false);
        return;
      }
      const body = { ...form, choices: parsedChoices };

      if (editing) {
        await fetch('/api/admin/flashcards', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editing.id, ...body }),
        });
      } else {
        await fetch('/api/admin/flashcards', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      }
      setModalOpen(false);
      fetchFlashcards();
    } catch (err) {
      console.error('Save failed', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this flashcard?')) return;
    try {
      await fetch('/api/admin/flashcards', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchFlashcards();
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Flashcards</h1>
        <button
          onClick={openAdd}
          className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-teal-400 transition-colors"
        >
          Add Flashcard
        </button>
      </div>

      <div className="mb-4">
        <select
          value={division}
          onChange={(e) => {
            setDivision(e.target.value);
            setPage(1);
          }}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
        >
          <option value="">All Divisions</option>
          {DIVISIONS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 text-left">
                <th className="px-4 py-3 text-gray-300 font-medium">Question</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Division</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Difficulty</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Topic</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Free</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : flashcards.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                    No flashcards found.
                  </td>
                </tr>
              ) : (
                flashcards.map((card) => (
                  <tr key={card.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="px-4 py-3 max-w-xs truncate">{card.question}</td>
                    <td className="px-4 py-3 text-gray-300">{card.division?.slug || '-'}</td>
                    <td className="px-4 py-3 text-gray-300">{card.difficulty}</td>
                    <td className="px-4 py-3 text-gray-300">{card.topic}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${
                          card.isFree
                            ? 'bg-green-900 text-green-300'
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {card.isFree ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(card)}
                          className="text-teal-400 hover:text-teal-300 text-xs font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(card.id)}
                          className="text-red-400 hover:text-red-300 text-xs font-medium"
                        >
                          Delete
                        </button>
                      </div>
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

      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-lg font-bold mb-4">
              {editing ? 'Edit Flashcard' : 'Add Flashcard'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Division</label>
                <select
                  value={form.division}
                  onChange={(e) => setForm({ ...form, division: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                >
                  {DIVISIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Question</label>
                <textarea
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white resize-y"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Answer</label>
                <textarea
                  value={form.answer}
                  onChange={(e) => setForm({ ...form, answer: e.target.value })}
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white resize-y"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Choices (JSON)</label>
                <textarea
                  value={choicesJson}
                  onChange={(e) => setChoicesJson(e.target.value)}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white font-mono resize-y"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Correct Choice</label>
                <input
                  type="text"
                  value={form.correctChoice}
                  onChange={(e) => setForm({ ...form, correctChoice: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Difficulty (1-5)</label>
                <select
                  value={form.difficulty}
                  onChange={(e) => setForm({ ...form, difficulty: Number(e.target.value) })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Topic</label>
                <input
                  type="text"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isFree"
                  checked={form.isFree}
                  onChange={(e) => setForm({ ...form, isFree: e.target.checked })}
                  className="rounded border-gray-700"
                />
                <label htmlFor="isFree" className="text-sm text-gray-300">
                  Free
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-teal-500 text-gray-900 rounded-lg text-sm font-semibold hover:bg-teal-400 disabled:opacity-50 transition-colors"
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
