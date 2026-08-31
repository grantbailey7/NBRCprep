'use client';

import { useState, useEffect, useCallback } from 'react';

interface MiniExam {
  id: string;
  division: string;
  title: string;
  examIndex: number;
  isFree: boolean;
  _count?: { questions: number };
}

interface ExamQuestion {
  id: string;
  question: string;
  answer: string;
  choices: any;
  correctChoice: string;
}

const DIVISIONS = ['TMC', 'NPS', 'ACCS', 'SDS', 'CPFT', 'RPFT'];
const PER_PAGE = 25;

const emptyForm = {
  division: 'TMC',
  title: '',
  examIndex: 1,
  isFree: false,
};

export default function ExamsPage() {
  const [exams, setExams] = useState<MiniExam[]>([]);
  const [division, setDivision] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<MiniExam | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  // Questions management
  const [questionsModalOpen, setQuestionsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<MiniExam | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);

  const totalPages = Math.ceil(total / PER_PAGE);

  const fetchExams = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(PER_PAGE),
      });
      if (division) params.set('division', division);
      const res = await fetch(`/api/admin/mini-exams?${params}`);
      const data = await res.json();
      setExams(data.exams || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch exams', err);
    } finally {
      setLoading(false);
    }
  }, [page, division]);

  useEffect(() => {
    fetchExams();
  }, [fetchExams]);

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (exam: MiniExam) => {
    setEditing(exam);
    setForm({
      division: exam.division,
      title: exam.title,
      examIndex: exam.examIndex,
      isFree: exam.isFree,
    });
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editing) {
        await fetch('/api/admin/mini-exams', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editing.id, ...form }),
        });
      } else {
        await fetch('/api/admin/mini-exams', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      setModalOpen(false);
      fetchExams();
    } catch (err) {
      console.error('Save failed', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this exam?')) return;
    try {
      await fetch('/api/admin/mini-exams', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchExams();
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  const openQuestions = async (exam: MiniExam) => {
    setSelectedExam(exam);
    setQuestionsModalOpen(true);
    setQuestionsLoading(true);
    try {
      const res = await fetch(`/api/admin/mini-exams/${exam.id}/questions`);
      const data = await res.json();
      setQuestions(data.questions || []);
    } catch (err) {
      console.error('Failed to fetch questions', err);
    } finally {
      setQuestionsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Mini Exams</h1>
        <button
          onClick={openAdd}
          className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-teal-400 transition-colors"
        >
          Add Exam
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
                <th className="px-4 py-3 text-gray-300 font-medium">Title</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Division</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Exam Index</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Free</th>
                <th className="px-4 py-3 text-gray-300 font-medium">Questions</th>
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
              ) : exams.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                    No exams found.
                  </td>
                </tr>
              ) : (
                exams.map((exam) => (
                  <tr key={exam.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="px-4 py-3">{exam.title}</td>
                    <td className="px-4 py-3 text-gray-300">{exam.division}</td>
                    <td className="px-4 py-3 text-gray-300">{exam.examIndex}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${
                          exam.isFree
                            ? 'bg-green-900 text-green-300'
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {exam.isFree ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {exam._count?.questions ?? '-'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openQuestions(exam)}
                          className="text-blue-400 hover:text-blue-300 text-xs font-medium"
                        >
                          Questions
                        </button>
                        <button
                          onClick={() => openEdit(exam)}
                          className="text-teal-400 hover:text-teal-300 text-xs font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(exam.id)}
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

      {/* Add/Edit Exam Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-md p-6">
            <h2 className="text-lg font-bold mb-4">
              {editing ? 'Edit Exam' : 'Add Exam'}
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
                <label className="block text-sm text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Exam Index</label>
                <input
                  type="number"
                  value={form.examIndex}
                  onChange={(e) => setForm({ ...form, examIndex: Number(e.target.value) })}
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

      {/* Questions Modal */}
      {questionsModalOpen && selectedExam && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">
                Questions: {selectedExam.title}
              </h2>
              <button
                onClick={() => setQuestionsModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            {questionsLoading ? (
              <p className="text-gray-400 text-center py-8">Loading questions...</p>
            ) : questions.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No questions in this exam.</p>
            ) : (
              <div className="space-y-3">
                {questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-4"
                  >
                    <p className="text-sm font-medium mb-1">
                      {idx + 1}. {q.question}
                    </p>
                    <p className="text-xs text-gray-400">
                      Answer: {q.correctChoice}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
