'use client'

import { useState, useEffect, useRef } from 'react'
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

interface GradedResult {
  questionId: string
  correct: boolean
  chosenAnswer: string | null
  correctAnswer: string
  explanationCorrect: string | null
  explanationWrong: string | null
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function FullExamPage() {
  const params = useParams()
  const router = useRouter()
  const { division, examId } = params as { division: string; examId: string }

  const [phase, setPhase] = useState<Phase>('loading')
  const [exam, setExam] = useState<any>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [results, setResults] = useState<any>(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [startTime, setStartTime] = useState<number | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const submitExamRef = useRef<() => Promise<void>>(async () => {})
  const submittingRef = useRef(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`/api/exams/full/${examId}`)
      .then(async (r) => {
        if (r.status === 403) { router.push('/pricing'); return }
        const data = await r.json()
        if (data.error) { setError(data.error); setPhase('intro'); return }
        setExam(data)
        setQuestions(data.questions)
        setTimeLeft(data.durationMinutes * 60)
        setPhase('intro')
      })
      .catch(() => { setError('Failed to load exam'); setPhase('intro') })
  }, [examId, router])

  useEffect(() => { submitExamRef.current = submitExam })

  // Timer
  useEffect(() => {
    if (phase !== 'taking') return
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!)
          submitExamRef.current()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  function startExam() {
    setStartTime(Date.now())
    setPhase('taking')
  }

  async function submitExam() {
    if (submittingRef.current) return
    submittingRef.current = true
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase('submitting')
    const timeTakenSeconds = startTime ? Math.round((Date.now() - startTime) / 1000) : null
    try {
      const answersArray = Object.entries(answers).map(([questionId, chosenAnswer]) => ({
        questionId,
        chosenAnswer,
      }))

      const res = await fetch(`/api/exams/full/${examId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersArray, timeTakenSeconds }),
      })
      const data = await res.json()
      setResults(data)
      setPhase('results')
    } catch {
      setError('Failed to submit exam. Click "Finish & Submit" to try again.')
      submittingRef.current = false
      setPhase('taking')
    }
  }

  function selectAnswer(questionId: string, choice: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: choice }))
  }

  const answeredCount = Object.keys(answers).length
  const timerDanger = timeLeft < 300

  // LOADING
  if (phase === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-gray-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-400 border-t-transparent" />
      </div>
    )
  }

  // RESULTS
  if (phase === 'results' && results) {
    const { score, passed, totalQuestions, correctCount, results: gradedResults } = results

    // Build a map of questions for display
    const questionsMap = new Map<string, Question>()
    for (const q of questions) {
      questionsMap.set(q.id, q)
    }

    return (
      <ContentProtection>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-brand-gray-50">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
              <div className={`card mb-8 p-8 text-center ${passed ? 'border-green-400 bg-green-500/10' : 'border-red-400 bg-red-500/10'}`}>
                <div className="mb-3 text-5xl">{passed ? '🏆' : '📚'}</div>
                <h1 className="text-4xl font-bold text-black">{score}%</h1>
                <p className="mt-1 text-lg font-semibold text-brand-gray-600">{correctCount} of {totalQuestions} correct</p>
                <div className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold ${
                  passed ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {passed ? '✓ PASSED - Full Exam Complete!' : '✗ Not passed - 70% required'}
                </div>
              </div>

              <h2 className="mb-4 text-xl font-bold text-black">Detailed Review</h2>
              <div className="space-y-5">
                {(gradedResults as GradedResult[]).map((gr, i) => {
                  const question = questionsMap.get(gr.questionId)
                  if (!question) return null
                  return (
                    <div key={gr.questionId} className={`card border-l-4 p-5 ${gr.correct ? 'border-l-green-400' : 'border-l-red-400'}`}>
                      <div className="mb-3 flex items-start gap-3">
                        <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          gr.correct ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {i + 1}
                        </span>
                        <p className="font-medium text-black">{question.questionText}</p>
                      </div>

                      <div className="mb-3 ml-9 space-y-1.5">
                        {Object.entries(question.choices).map(([key, val]) => {
                          const isCorrect = key === gr.correctAnswer
                          const isChosen = key === gr.chosenAnswer
                          return (
                            <div key={key} className={`flex gap-2 rounded-lg px-3 py-2 text-sm ${
                              isCorrect ? 'bg-green-500/20 font-semibold text-green-300' :
                              isChosen && !isCorrect ? 'bg-red-500/20 text-red-300 line-through' :
                              'text-brand-gray-500'
                            }`}>
                              <span className="font-bold">{key}.</span>
                              <span>{val}</span>
                              {isCorrect && <span className="ml-auto">{'✓'}</span>}
                              {isChosen && !isCorrect && <span className="ml-auto">{'✗'}</span>}
                            </div>
                          )
                        })}
                      </div>

                      {gr.explanationCorrect && (
                        <div className="ml-9 space-y-2">
                          <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-brand-gray-600">
                            <span className="font-semibold text-green-400">Why {gr.correctAnswer} is correct: </span>
                            {gr.explanationCorrect}
                          </div>
                          {!gr.correct && gr.explanationWrong && (
                            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-brand-gray-600">
                              <span className="font-semibold text-red-400">Why your answer was wrong: </span>
                              {gr.explanationWrong}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 flex gap-4">
                <Link href={`/divisions/${division}/full-exams`} className="btn-outline flex-1 py-3 text-center">
                  Back to Full Exams
                </Link>
                <button onClick={() => { submittingRef.current = false; setAnswers({}); setCurrentQ(0); setTimeLeft(exam.durationMinutes * 60); setPhase('intro') }} className="btn-primary flex-1 py-3">
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
            <div className="card w-full max-w-lg p-8 text-center">
              {error ? (
                <>
                  <p className="mb-4 text-red-400">{error}</p>
                  <Link href={`/divisions/${division}/full-exams`} className="btn-outline">Back</Link>
                </>
              ) : (
                <>
                  <div className="mb-4 text-5xl">{'🎯'}</div>
                  <h2 className="text-2xl font-bold text-black">{exam?.title}</h2>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-lg bg-brand-gray-200 p-3">
                      <p className="text-2xl font-bold text-black">{questions.length}</p>
                      <p className="text-xs text-brand-gray-500">Questions</p>
                    </div>
                    <div className="rounded-lg bg-brand-gray-200 p-3">
                      <p className="text-2xl font-bold text-black">{exam?.durationMinutes}</p>
                      <p className="text-xs text-brand-gray-500">Minutes</p>
                    </div>
                    <div className="rounded-lg bg-brand-gray-200 p-3">
                      <p className="text-2xl font-bold text-black">70%</p>
                      <p className="text-xs text-brand-gray-500">To Pass</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-lg border border-teal-400/30 bg-teal-500/10 p-4 text-left text-sm text-teal-700">
                    <p className="mb-1 font-semibold">Before you start:</p>
                    <ul className="list-inside list-disc space-y-1 text-xs">
                      <li>The timer starts when you click Begin</li>
                      <li>The exam auto-submits when time runs out</li>
                      <li>You can navigate between questions freely</li>
                      <li>Unanswered questions count as wrong</li>
                    </ul>
                  </div>
                  <button onClick={startExam} className="btn-primary mt-6 w-full py-3 text-base">
                    Begin Full Exam
                  </button>
                  <Link href={`/divisions/${division}/full-exams`} className="mt-3 block text-sm text-brand-gray-500 hover:text-black">
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
        {/* Sticky timer bar */}
        <div className={`sticky top-0 z-40 flex items-center justify-between px-4 py-2 ${timerDanger ? 'bg-red-600' : 'bg-brand-gray-900'}`}>
          <span className="text-sm font-semibold text-white">{exam?.title}</span>
          <span className={`text-lg font-bold ${timerDanger ? 'animate-pulse text-white' : 'text-teal-400'}`}>
            {formatTime(timeLeft)}
          </span>
          <span className="text-sm text-white/60">{answeredCount}/{questions.length} answered</span>
        </div>

        <main className="flex-1 bg-brand-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-brand-gray-500">Question {currentQ + 1} of {questions.length}</span>
            </div>
            <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-brand-gray-200">
              <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>

            <div className="card mb-5 p-6">
              <p className="text-base font-medium leading-relaxed text-black">{q.questionText}</p>
              <div className="mt-5 space-y-3">
                {Object.entries(q.choices).map(([key, val]) => {
                  const selected = answers[q.id] === key
                  return (
                    <button
                      key={key}
                      onClick={() => selectAnswer(q.id, key)}
                      className={`flex w-full gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-all ${
                        selected ? 'border-teal-400 bg-teal-500/10 font-semibold text-black' : 'border-brand-gray-300 bg-brand-gray-100 text-brand-gray-600 hover:border-brand-gray-500'
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

            <div className="flex justify-between">
              <button onClick={() => setCurrentQ((i) => Math.max(0, i - 1))} disabled={currentQ === 0} className="btn-outline px-5 py-2 text-sm disabled:opacity-30">
                &larr; Previous
              </button>
              {currentQ < questions.length - 1 ? (
                <button onClick={() => setCurrentQ((i) => i + 1)} className="btn-primary px-5 py-2 text-sm">Next &rarr;</button>
              ) : (
                <button onClick={submitExam} disabled={phase === 'submitting'} className="btn-primary px-5 py-2 text-sm bg-green-600 hover:bg-green-700">
                  {phase === 'submitting' ? 'Submitting...' : 'Finish & Submit'}
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {questions.map((qq, i) => (
                <button key={qq.id} onClick={() => setCurrentQ(i)} className={`h-8 w-8 rounded text-xs font-bold transition-colors ${
                  i === currentQ ? 'bg-white text-black' : answers[qq.id] ? 'bg-teal-500 text-black' : 'bg-brand-gray-200 text-brand-gray-500'
                }`}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ContentProtection>
  )
}
