'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContentProtection } from '@/components/ContentProtection'

type FlashcardStatus = 'UNKNOWN' | 'KNOWN' | 'REVIEW_LATER'

interface Flashcard {
  id: string
  question: string
  answer: string
  choices?: Record<string, string> | null
  correctChoice?: string | null
  difficulty: number
  topic?: string | null
  userStatus: FlashcardStatus
}

interface Progress {
  total: number
  known: number
  reviewLater: number
  percentage: number
}

function getCardHeight(card: Flashcard): number {
  const choicesText = card.choices
    ? Object.values(card.choices as Record<string, string>).join(' ')
    : ''
  const maxLen = Math.max(card.question.length + choicesText.length, card.answer.length)
  if (maxLen > 700) return 580
  if (maxLen > 450) return 480
  if (maxLen > 280) return 400
  return 340
}

function getQuestionClass(card: Flashcard): string {
  const choicesText = card.choices
    ? Object.values(card.choices as Record<string, string>).join(' ')
    : ''
  const len = card.question.length + choicesText.length
  if (len > 500) return 'text-sm'
  if (len > 280) return 'text-base'
  return 'text-lg'
}

function getAnswerClass(card: Flashcard): string {
  if (card.answer.length > 300) return 'text-sm'
  if (card.answer.length > 150) return 'text-base'
  return 'text-base'
}

export default function FlashcardsPage() {
  const params = useParams()
  const division = params.division as string

  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [progress, setProgress] = useState<Progress | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [mode, setMode] = useState<'all' | 'review_later'>('all')
  const [savingStatus, setSavingStatus] = useState<FlashcardStatus | null>(null)
  const [isLimited, setIsLimited] = useState(false)

  const loadFlashcards = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/flashcards?divisionSlug=${division.toUpperCase()}`)
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()

      // Merge progress into flashcards
      const progressMap = new Map<string, FlashcardStatus>()
      if (data.progress) {
        for (const p of data.progress) {
          progressMap.set(p.flashcardId, p.status)
        }
      }

      let cards: Flashcard[] = data.flashcards.map((f: any) => ({
        ...f,
        userStatus: progressMap.get(f.id) || 'UNKNOWN',
      }))

      // Filter by mode
      if (mode === 'review_later') {
        cards = cards.filter((c) => c.userStatus === 'REVIEW_LATER')
      }

      const total = data.flashcards.length
      const knownCount = Array.from(progressMap.values()).filter((s) => s === 'KNOWN').length
      const reviewCount = Array.from(progressMap.values()).filter((s) => s === 'REVIEW_LATER').length

      setFlashcards(cards)
      setProgress({
        total,
        known: knownCount,
        reviewLater: reviewCount,
        percentage: total > 0 ? Math.round((knownCount / total) * 100) : 0,
      })
      setIsLimited(!data.hasAccess)
      setCurrentIndex(0)
      setIsFlipped(false)
    } catch {
      setError('Failed to load flashcards. Please refresh.')
    } finally {
      setLoading(false)
    }
  }, [division, mode])

  useEffect(() => { loadFlashcards() }, [loadFlashcards])

  const currentCard = flashcards[currentIndex]

  async function updateStatus(status: FlashcardStatus) {
    if (!currentCard) return
    setSavingStatus(status)

    try {
      const res = await fetch('/api/flashcards/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flashcardId: currentCard.id, status }),
      })
      if (!res.ok) throw new Error('Failed to save progress')

      // Update local state
      setFlashcards((prev) =>
        prev.map((c) => (c.id === currentCard.id ? { ...c, userStatus: status } : c))
      )
      if (progress) {
        const oldStatus = currentCard.userStatus
        setProgress((p) => {
          if (!p) return p
          let known = p.known
          let reviewLater = p.reviewLater
          if (oldStatus === 'KNOWN') known--
          if (oldStatus === 'REVIEW_LATER') reviewLater--
          if (status === 'KNOWN') known++
          if (status === 'REVIEW_LATER') reviewLater++
          return {
            ...p,
            known,
            reviewLater,
            percentage: p.total > 0 ? Math.round((known / p.total) * 100) : 0,
          }
        })
      }

      goNext()
    } catch {
      setError('Could not save progress. Please check your connection and try again.')
    } finally {
      setSavingStatus(null)
    }
  }

  function goNext() {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1 < flashcards.length ? i + 1 : 0))
    }, 150)
  }

  function goPrev() {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((i) => (i - 1 >= 0 ? i - 1 : flashcards.length - 1))
    }, 150)
  }

  const divisionLabel = division.toUpperCase()

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center bg-brand-gray-950">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-teal-400 border-t-transparent" />
            <p className="text-brand-gray-400">Loading flashcards...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ContentProtection>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 bg-brand-gray-950">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            {/* Nav */}
            <div className="mb-6 flex items-center justify-between">
              <Link href={`/divisions/${division}`} className="flex items-center gap-1 text-sm text-brand-gray-400 hover:text-white">
                &larr; Back to {divisionLabel}
              </Link>
              <div className="flex gap-2">
                {(['all', 'review_later'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      mode === m ? 'bg-teal-500 text-white' : 'bg-brand-gray-800 text-brand-gray-400 hover:bg-brand-gray-700'
                    }`}
                  >
                    {m === 'all' ? 'All Cards' : 'Review Later'}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            {progress && (
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-brand-gray-300">
                    {progress.percentage}% Known
                  </span>
                  <span className="text-brand-gray-500">
                    {progress.known}/{progress.total} cards
                    {progress.reviewLater > 0 && ` · ${progress.reviewLater} review later`}
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-brand-gray-800">
                  <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${progress.percentage}%` }} />
                </div>
                {isLimited && (
                  <p className="mt-2 text-xs text-brand-gray-500">
                    Showing 20 free preview cards.{' '}
                    <Link href="/pricing" className="font-semibold text-teal-400">Upgrade for all cards</Link>
                  </p>
                )}
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="card p-6 text-center">
                <p className="text-red-400">{error}</p>
                <button onClick={loadFlashcards} className="btn-primary mt-4">Retry</button>
              </div>
            )}

            {/* Empty state */}
            {!error && flashcards.length === 0 && (
              <div className="card p-10 text-center">
                <div className="mb-4 text-5xl">
                  {mode === 'review_later' ? '✅' : '🎉'}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {mode === 'review_later'
                    ? 'No cards in Review Later'
                    : 'No flashcards found'}
                </h3>
                {mode === 'review_later' && (
                  <button onClick={() => setMode('all')} className="btn-primary mt-6">
                    Back to All Cards
                  </button>
                )}
              </div>
            )}

            {/* Flashcard */}
            {!error && currentCard && (
              <>
                <div className="mb-3 flex items-center justify-between text-sm text-brand-gray-500">
                  <span>{currentIndex + 1} of {flashcards.length}</span>
                  {currentCard.topic && (
                    <span className="rounded-full bg-brand-gray-800 px-2.5 py-0.5 text-xs text-brand-gray-400">
                      {currentCard.topic}
                    </span>
                  )}
                  {currentCard.userStatus === 'KNOWN' && (
                    <span className="text-xs font-semibold text-green-400">{'✓'} Known</span>
                  )}
                  {currentCard.userStatus === 'REVIEW_LATER' && (
                    <span className="text-xs font-semibold text-yellow-400">{'⟳'} Review Later</span>
                  )}
                </div>

                {/* Card with flip */}
                {(() => {
                  const cardH = getCardHeight(currentCard)
                  const qClass = getQuestionClass(currentCard)
                  const aClass = getAnswerClass(currentCard)
                  return (
                    <div
                      className={`flip-card w-full ${isFlipped ? 'flipped' : ''}`}
                      style={{ height: cardH, position: 'relative' }}
                    >
                      <div className="flip-card-inner w-full h-full" style={{ height: cardH }}>
                        {/* Front */}
                        <div
                          className="flip-card-front card flex cursor-pointer select-none flex-col p-8"
                          style={{ height: cardH }}
                          onClick={() => setIsFlipped(true)}
                        >
                          <div className="flex flex-1 flex-col justify-center">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-gray-500">Question</p>
                            <p className={`${qClass} font-medium leading-relaxed text-white`}>{currentCard.question}</p>

                            {currentCard.choices && (
                              <div className="mt-6 space-y-2">
                                {Object.entries(currentCard.choices as Record<string, string>).map(([key, val]) => (
                                  <div key={key} className="flex gap-3 rounded-lg bg-brand-gray-800 px-4 py-2 text-sm text-brand-gray-300">
                                    <span className="font-bold text-brand-gray-500">{key}.</span>
                                    <span>{val}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="mt-4 text-center text-sm text-brand-gray-500">
                            Tap to reveal answer
                          </div>
                        </div>

                        {/* Back */}
                        <div
                          className="flip-card-back card flex flex-col border-2 border-teal-400 p-8"
                          style={{ height: cardH, position: 'absolute', top: 0, left: 0, right: 0 }}
                        >
                          <div className="flex flex-1 flex-col justify-center">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-400">Answer</p>
                            {currentCard.correctChoice && (
                              <p className="mb-2 text-sm font-bold text-teal-400">
                                Correct: {currentCard.correctChoice}
                              </p>
                            )}
                            <p className={`${aClass} leading-relaxed text-white`}>{currentCard.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })()}

                {/* Action buttons */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => { setIsFlipped(false); goNext() }}
                    disabled={!!savingStatus}
                    className="btn-outline flex-1 py-3"
                  >
                    Next &rarr;
                  </button>
                  <button
                    onClick={() => updateStatus('KNOWN')}
                    disabled={!!savingStatus}
                    className="flex-1 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600 disabled:opacity-50"
                  >
                    {savingStatus === 'KNOWN' ? '...' : '✓ Mark as Known'}
                  </button>
                  <button
                    onClick={() => updateStatus('REVIEW_LATER')}
                    disabled={!!savingStatus}
                    className="flex-1 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-600 disabled:opacity-50"
                  >
                    {savingStatus === 'REVIEW_LATER' ? '...' : '⟳ Review Later'}
                  </button>
                </div>

                {/* Prev button */}
                <button
                  onClick={goPrev}
                  className="mt-3 w-full text-sm text-brand-gray-500 transition-colors hover:text-white"
                >
                  &larr; Previous
                </button>
              </>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </ContentProtection>
  )
}
