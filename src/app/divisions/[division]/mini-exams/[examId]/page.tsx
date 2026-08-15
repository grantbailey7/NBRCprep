'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContentProtection } from '@/components/ContentProtection'

type Phase = 'loading' | 'intro' | 'taking' | 'submitting' | 'results'

interface Question {
  id: string
  questionIndex: number
  questionText: string
  choices: Record<string, string>
}

interface GradedAnswer {
  questionId: string
  questionIndex: number
  questionText: string
  choices: Record<string, string>
  chosenAnswer: string | null
  correctChoice: string
  isCorrect: boolean
  explanationCorrect: string | null
  explanationWrong: string | null
}

export default function MiniExamPage() {
  const params = useParams()
  const router = useRouter()
  const { division, examId } = params as { division: string; examId: string }

  const [phase, setPhase] = useState<Phase>('loading')
  const [exam, setExam] = useState<any>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`/api/exams/mini/${examId}`)
      .then(async (r) => {
        if (r.status === 403) {
          router.push('/pricing')
          return
        }
        const data = await r.json()
        if (data.error) { setError(data.error); setPhase('intro'); return }
        setExam(data)
        setQuestions(data.questions)
        setPhase('intro')
      })
      .catch(() => { setError('Failed to load exam'); setPhase('intro') })
  }, [examId, router])

  async function submitExam() {
    setPhase('submitting')
    try {
      // Convert answers map to array format expected by API
      const answersArray = Object.entries(answers).map(([questionId, chosenAnswer]) => ({
        questionId,
        chosenAnswer,
      }))

      const res = await fetch(`/api/exams/mini/${examId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersArray }),
      })
      const data = await res.json()
      setResults(data)
      setPhase('results')
    } catch {
      setError('Failed to submit exam')
      setPhase('taking')
    }
  }

  function selectAnswer(questionId: string, choice: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: choice }))
  }

  const answeredCount = Object.keys(answers).length
  const unansweredCount = questions.length - answeredCount

  if (phase === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-gray-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-400 border-t-transparent" />
      </div>
    )
  }

  // RESULTS
  if (phase === 'results' && results) {
    const { scorePercentage, passed, answers: gradedAnswers } = results
    const correctCount = (gradedAnswers as GradedAnswer[]).filter((a) => a.isCorrect).length
    const total = (gradedAnswers as GradedAnswer[]).length

    return (
      <ContentProtection>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-brand-gray-50">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
              {/* Score header */}
              <div className={`card mb-8 p-8 text-center ${passed ? 'border-green-400 bg-green-500/10' : 'border-red-400 bg-red-500/10'}`}>
                <div className="mb-3 text-5xl">{passed ? '🎉' : '📚'}</div>
                <h1 className="text-4xl font-bold text-black">{scorePercentage}%</h1>
                <p className="mt-1 text-lg font-semibold text-brand-gray-600">
                  {correctCount} out of {total} correct
                </p>
                <div className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold ${
                  passed ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {passed ? '✓ Passed (≥90%)' : '✗ Not passed - keep studying!'}
                </div>
              </div>

              {/* Review */}
              <h2 className="mb-4 text-xl font-bold text-black">Question Review</h2>
              <div className="space-y-5">
                {(gradedAnswers as GradedAnswer[]).map((ga, i) => (
                  <div
                    key={ga.questionId}
                    className={`card border-l-4 p-5 ${ga.isCorrect ? 'border-l-green-400' : 'border-l-red-400'}`}
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        ga.isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {i + 1}
                      </span>
                      <p className="font-medium text-black">{ga.questionText}</p>
                    </div>

                    <div className="mb-3 ml-9 space-y-1.5">
                      {Object.entries(ga.choices).map(([key, val]) => {
                        const isCorrect = key === ga.correctChoice
                        const isChosen = key === ga.chosenAnswer
                        return (
                          <div
                            key={key}
                            className={`flex gap-2 rounded-lg px-3 py-2 text-sm ${
                              isCorrect
                                ? 'bg-green-500/20 font-semibold text-green-300'
                                : isChosen && !isCorrect
                                ? 'bg-red-500/20 text-red-300 line-through'
                                : 'text-brand-gray-500'
                            }`}
                          >
                            <span className="font-bold">{key}.</span>
                            <span>{val}</span>
                            {isCorrect && <span className="ml-auto">{'✓'}</span>}
                            {isChosen && !isCorrect && <span className="ml-auto">{'✗'}</span>}
                          </div>
                        )
                      })}
                    </div>

                    {ga.explanationCorrect && (
                      <div className="ml-9 mt-3 space-y-2">
                        <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-brand-gray-600">
                          <span className="font-semibold text-green-400">Why {ga.correctChoice} is correct: </span>
                          {ga.explanationCorrect}
                        </div>
                        {!ga.isCorrect && ga.explanationWrong && (
                          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-brand-gray-600">
                            <span className="font-semibold text-red-400">Why your answer was wrong: </span>
                            {ga.explanationWrong}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Link href={`/divisions/${division}/mini-exams`} className="btn-outline flex-1 py-3 text-center">
                  Back to Mini Exams
                </Link>
                <button
                  onClick={() => { setAnswers({}); setCurrentQ(0); setPhase('intro') }}
                  className="btn-primary flex-1 py-3"
                >
                  Retake Exam
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </ContentProtection>
    )
  }

  // INTRO
  if (phase === 'intro') {
    return (
      <ContentProtection>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1 items-center justify-center bg-brand-gray-50 px-4">
            <div className="card w-full max-w-md p-8 text-center">
              {error ? (
                <>
                  <p className="mb-4 text-red-400">{error}</p>
                  <Link href={`/divisions/${division}/mini-exams`} className="btn-outline">
                    Back to Mini Exams
                  </Link>
                </>
              ) : (
                <>
                  <div className="mb-4 text-5xl">{'📝'}</div>
                  <h2 className="text-2xl font-bold text-black">{exam?.title}</h2>
                  <div className="mt-4 flex justify-center gap-4 text-sm text-brand-gray-500">
                    <span>{questions.length} questions</span>
                    <span>&middot;</span>
                    <span>Pass at 90%</span>
                  </div>
                  <button
                    onClick={() => setPhase('taking')}
                    className="btn-primary mt-6 w-full py-3 text-base"
                  >
                    Start Exam
                  </button>
                  <Link href={`/divisions/${division}/mini-exams`} className="mt-3 block text-sm text-brand-gray-500 hover:text-black">
                    Cancel
                  </Link>
                </>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </ContentProtection>
    )
  }

  // TAKING
  const q = questions[currentQ]
  if (!q) return null

  return (
    <ContentProtection>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 bg-brand-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            {/* Progress */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-brand-gray-500">Question {currentQ + 1} of {questions.length}</span>
              <span className="text-sm text-brand-gray-500">{answeredCount} answered</span>
            </div>
            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
              <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>

            {/* Question */}
            <div className="card mb-6 p-6">
              <p className="text-base font-medium leading-relaxed text-black">{q.questionText}</p>

              <div className="mt-6 space-y-3">
                {Object.entries(q.choices).map(([key, val]) => {
                  const selected = answers[q.id] === key
                  return (
                    <button
                      key={key}
                      onClick={() => selectAnswer(q.id, key)}
                      className={`flex w-full gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-all ${
                        selected
                          ? 'border-teal-400 bg-teal-500/10 font-semibold text-black'
                          : 'border-brand-gray-300 bg-brand-gray-100 text-brand-gray-600 hover:border-brand-gray-500'
                      }`}
                    >
                      <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                        selected ? 'border-teal-400 bg-teal-400 text-black' : 'border-brand-gray-300'
                      }`}>
                        {key}
                      </span>
                      {val}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentQ((i) => Math.max(0, i - 1))}
                disabled={currentQ === 0}
                className="btn-outline px-5 py-2 text-sm disabled:opacity-30"
              >
                &larr; Previous
              </button>

              {currentQ < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQ((i) => i + 1)}
                  className="btn-primary px-5 py-2 text-sm"
                >
                  Next &rarr;
                </button>
              ) : (
                <button
                  onClick={submitExam}
                  disabled={phase === 'submitting'}
                  className="btn-primary px-5 py-2 text-sm"
                >
                  {phase === 'submitting' ? 'Submitting...' : unansweredCount > 0
                    ? `Submit (${unansweredCount} unanswered)`
                    : 'Submit Exam'}
                </button>
              )}
            </div>

            {/* Question grid */}
            <div className="mt-6 flex flex-wrap gap-2">
              {questions.map((qq, i) => (
                <button
                  key={qq.id}
                  onClick={() => setCurrentQ(i)}
                  className={`h-8 w-8 rounded text-xs font-bold transition-colors ${
                    i === currentQ
                      ? 'bg-white text-black'
                      : answers[qq.id]
                      ? 'bg-teal-500 text-black'
                      : 'bg-brand-gray-200 text-brand-gray-500'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ContentProtection>
  )
}
