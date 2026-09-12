'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// ── Types ──────────────────────────────────────────────────────
interface GameItem {
  c: string
  d: string
  w: string[]
}

type GameQuestion =
  | { type: 'mc'; prompt: string; options: { key: string; text: string }[]; correctKey: string; explanation: string }
  | { type: 'tf'; statement: string; isTrue: boolean; explanation: string }
  | { type: 'fillblank'; sentence: string; blank: string; options: string[]; correctIdx: number; explanation: string }
  | { type: 'quick'; prompt: string; options: string[]; correctIdx: number; explanation: string }
  | { type: 'match'; pairs: { concept: string; definition: string }[]; explanation: string }

type Screen = 'home' | 'playing' | 'complete'
type GameMode = 'normal' | 'timed' | 'daily'

interface DivisionInfo {
  slug: string
  code: string
  name: string
  emoji: string
  color: string
}

const DIVISIONS: DivisionInfo[] = [
  { slug: 'tmc', code: 'TMC', name: 'Therapist Multiple-Choice', emoji: '🫁', color: '#0D9488' },
  { slug: 'nps', code: 'NPS', name: 'Neonatal/Pediatric Specialist', emoji: '👶', color: '#8B5CF6' },
  { slug: 'accs', code: 'ACCS', name: 'Adult Critical Care', emoji: '🏥', color: '#EF4444' },
  { slug: 'sds', code: 'SDS', name: 'Sleep Disorders Specialist', emoji: '😴', color: '#3B82F6' },
  { slug: 'cpft', code: 'CPFT', name: 'Certified PFT', emoji: '📊', color: '#F59E0B' },
  { slug: 'rpft', code: 'RPFT', name: 'Registered PFT', emoji: '🔬', color: '#10B981' },
]

const QUESTIONS_PER_LESSON = 10
const DAILY_QUESTIONS = 5
const MAX_HEARTS = 3
const XP_PENALTY = 10
const XP_PER_CORRECT = 10
const XP_STREAK_BONUS = 5
const DAILY_XP_MULTIPLIER = 2
const TIMED_XP_MULTIPLIER = 2

const ENCOURAGEMENTS = [
  'Nailed it!', 'Perfect!', 'You got this!', 'Sharp!',
  'Exactly right!', 'Spot on!', 'Well done!', 'Brilliant!',
]
const WRONG_MESSAGES = [
  "Not quite - let's learn from this.", "Close, but not this time.",
  "That's okay - keep going!", "Tricky one! Here's why:",
]

const TIMED_LIMITS: Record<string, number> = {
  mc: 40, tf: 24, quick: 30, fillblank: 30, match: 45,
}

// ── Helpers ────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getToday(): string {
  return new Date().toISOString().split('T')[0]
}

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff
    return s / 0x7fffffff
  }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function dateToSeed(dateStr: string): number {
  let hash = 0
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash + dateStr.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

// ── Data loading ───────────────────────────────────────────────
async function loadGameItems(slug: string): Promise<GameItem[]> {
  try {
    const mod = await import(`@/data/games/${slug}`)
    const key = Object.keys(mod).find(k => k.endsWith('_GAME_ITEMS'))
    if (key) return mod[key] as GameItem[]
  } catch { /* file might not exist */ }
  return []
}

async function loadAllGameItems(): Promise<GameItem[]> {
  const all: GameItem[] = []
  for (const div of DIVISIONS) {
    const items = await loadGameItems(div.slug)
    all.push(...items)
  }
  return all
}

// ── Question generators ──────────────────────────────────────
function makeGameMC(item: GameItem, pool: GameItem[]): GameQuestion {
  const wrongs = item.w.length >= 3 ? item.w : pick(pool.filter(p => p.c !== item.c).map(p => p.c), 3)
  const keys = ['A', 'B', 'C', 'D']
  const correctIdx = Math.floor(Math.random() * 4)
  const concepts = [...wrongs.slice(0, 3)]
  concepts.splice(correctIdx, 0, item.c)
  const options = concepts.map((text, i) => ({ key: keys[i], text }))
  return { type: 'mc', prompt: item.d, options, correctKey: keys[correctIdx], explanation: `${item.c}: ${item.d}` }
}

function makeGameTF(item: GameItem, pool: GameItem[]): GameQuestion {
  const isTrue = Math.random() > 0.4
  if (isTrue) {
    return { type: 'tf', statement: `${item.c}: ${item.d}`, isTrue: true, explanation: `Correct - ${item.c}: ${item.d}` }
  }
  const wrongItem = pickRandom(pool.filter(p => p.c !== item.c))
  return { type: 'tf', statement: `${item.c}: ${wrongItem.d}`, isTrue: false, explanation: `That description is actually "${wrongItem.c}". ${item.c}: ${item.d}` }
}

function makeGameQuick(item: GameItem, pool: GameItem[]): GameQuestion {
  const wrongs = item.w.length >= 3 ? item.w : pick(pool.filter(p => p.c !== item.c).map(p => p.c), 3)
  const correctIdx = Math.floor(Math.random() * 4)
  const options = [...wrongs.slice(0, 3)]
  options.splice(correctIdx, 0, item.c)
  return { type: 'quick', prompt: item.d, options, correctIdx, explanation: `${item.c}: ${item.d}` }
}

function makeGameFillBlank(item: GameItem, pool: GameItem[]): GameQuestion | null {
  const blankWord = item.c
  const sentence = `_____ : ${item.d}`
  const wrongs = item.w.length >= 3 ? item.w.slice(0, 3) : pick(pool.filter(p => p.c !== item.c), 3).map(p => p.c)
  if (wrongs.length < 3) return null
  const correctIdx = Math.floor(Math.random() * 4)
  const options = [...wrongs]
  options.splice(correctIdx, 0, blankWord)
  return { type: 'fillblank', sentence, blank: blankWord, options, correctIdx, explanation: `${item.c}: ${item.d}` }
}

function makeGameMatch(items: GameItem[]): GameQuestion {
  const selected = pick(items, 4)
  const pairs = selected.map(item => ({ concept: item.c, definition: item.d }))
  return { type: 'match', pairs, explanation: pairs.map(p => `${p.concept}: ${p.definition}`).join('\n') }
}

function generateLesson(items: GameItem[]): GameQuestion[] {
  const questions: GameQuestion[] = []
  const batch = pick(items, 30)
  for (const item of batch.slice(0, 3)) questions.push(makeGameMC(item, items))
  for (const item of batch.slice(3, 5)) questions.push(makeGameTF(item, items))
  for (const item of batch.slice(5, 8)) questions.push(makeGameQuick(item, items))
  for (const item of batch.slice(8, 12)) {
    const q = makeGameFillBlank(item, items)
    if (q) { questions.push(q); break }
  }
  questions.push(makeGameMatch(batch.slice(12, 20)))
  return shuffle(questions).slice(0, QUESTIONS_PER_LESSON)
}

function generateDailyChallenge(items: GameItem[]): GameQuestion[] {
  const today = getToday()
  const seed = dateToSeed(today)
  const rng = seededRandom(seed)
  const seeded = seededShuffle(items, rng).slice(0, 15)
  const questions: GameQuestion[] = []
  questions.push(makeGameMC(seeded[0], items))
  questions.push(makeGameTF(seeded[1], items))
  questions.push(makeGameQuick(seeded[2], items))
  questions.push(makeGameMatch(seeded.slice(3, 7)))
  const fb = makeGameFillBlank(seeded[7], items)
  if (fb) questions.push(fb)
  else questions.push(makeGameQuick(seeded[8], items))
  return seededShuffle(questions, rng).slice(0, DAILY_QUESTIONS)
}

// ── Fixed lessons for free users ──────────────────────────────
function generateFixedLesson(items: GameItem[], examIndex: number): GameQuestion[] {
  const offset = examIndex * 15
  const batch = items.slice(offset, offset + 15)
  if (batch.length < 15) return []
  const questions: GameQuestion[] = []
  const seed = examIndex * 9973 + 42
  const rng = seededRandom(seed)

  questions.push(makeDeterministicMC(batch[0], items, rng))
  questions.push(makeDeterministicMC(batch[1], items, rng))
  questions.push(makeDeterministicMC(batch[2], items, rng))
  questions.push(makeDeterministicTF(batch[3], items, rng))
  questions.push(makeDeterministicTF(batch[4], items, rng))
  questions.push(makeDeterministicQuick(batch[5], items, rng))
  questions.push(makeDeterministicQuick(batch[6], items, rng))
  questions.push(makeDeterministicQuick(batch[7], items, rng))
  const fbQ = makeDeterministicFillBlank(batch[8], items, rng)
  if (fbQ) questions.push(fbQ)
  else questions.push(makeDeterministicQuick(batch[9], items, rng))
  const matchItems = batch.slice(10, 14)
  questions.push({ type: 'match', pairs: matchItems.map(item => ({ concept: item.c, definition: item.d })), explanation: matchItems.map(p => `${p.c}: ${p.d}`).join('\n') })
  return seededShuffle(questions, rng).slice(0, QUESTIONS_PER_LESSON)
}

function makeDeterministicMC(item: GameItem, pool: GameItem[], rng: () => number): GameQuestion {
  const wrongs = item.w.length >= 3 ? item.w : seededShuffle(pool.filter(p => p.c !== item.c).map(p => p.c), rng).slice(0, 3)
  const keys = ['A', 'B', 'C', 'D']
  const correctIdx = Math.floor(rng() * 4)
  const concepts = [...wrongs.slice(0, 3)]
  concepts.splice(correctIdx, 0, item.c)
  return { type: 'mc', prompt: item.d, options: concepts.map((text, i) => ({ key: keys[i], text })), correctKey: keys[correctIdx], explanation: `${item.c}: ${item.d}` }
}

function makeDeterministicTF(item: GameItem, pool: GameItem[], rng: () => number): GameQuestion {
  const isTrue = rng() > 0.4
  if (isTrue) {
    return { type: 'tf', statement: `${item.c}: ${item.d}`, isTrue: true, explanation: `Correct - ${item.c}: ${item.d}` }
  }
  const filtered = pool.filter(p => p.c !== item.c)
  const wrongItem = filtered[Math.floor(rng() * filtered.length)]
  return { type: 'tf', statement: `${item.c}: ${wrongItem.d}`, isTrue: false, explanation: `That description is actually "${wrongItem.c}". ${item.c}: ${item.d}` }
}

function makeDeterministicQuick(item: GameItem, pool: GameItem[], rng: () => number): GameQuestion {
  const wrongs = item.w.length >= 3 ? item.w : seededShuffle(pool.filter(p => p.c !== item.c).map(p => p.c), rng).slice(0, 3)
  const correctIdx = Math.floor(rng() * 4)
  const options = [...wrongs.slice(0, 3)]
  options.splice(correctIdx, 0, item.c)
  return { type: 'quick', prompt: item.d, options, correctIdx, explanation: `${item.c}: ${item.d}` }
}

function makeDeterministicFillBlank(item: GameItem, pool: GameItem[], rng: () => number): GameQuestion | null {
  const blankWord = item.c
  const sentence = `_____ : ${item.d}`
  const wrongs = item.w.length >= 3 ? item.w.slice(0, 3) : seededShuffle(pool.filter(p => p.c !== item.c), rng).slice(0, 3).map(p => p.c)
  if (wrongs.length < 3) return null
  const correctIdx = Math.floor(rng() * 4)
  const options = [...wrongs]
  options.splice(correctIdx, 0, blankWord)
  return { type: 'fillblank', sentence, blank: blankWord, options, correctIdx, explanation: `${item.c}: ${item.d}` }
}

// ── Analytics ──────────────────────────────────────────────────
function getSessionId(userId: string): string {
  const key = `nbrcprep-play-sid-${userId}`
  try {
    let id = localStorage.getItem(key)
    if (id) return id
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem(key, id)
    return id
  } catch {
    return 'anon-' + Math.random().toString(36).slice(2)
  }
}

function logPlayEvent(data: {
  division: string
  questionsTotal: number
  questionsCorrect: number
  xpEarned: number
  completed: boolean
}, userId: string) {
  fetch('/api/play', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, sessionId: getSessionId(userId) }),
  }).catch(() => {})
}

// ── Persistent stats ───────────────────────────────────────────
interface DivisionMastery { totalAnswered: number; totalCorrect: number }

interface Stats {
  totalXP: number
  lessonsCompleted: number
  currentStreak: number
  bestStreak: number
  divisionXP: Record<string, number>
  divisionMastery: Record<string, DivisionMastery>
  playDates: string[]
  dailyCompleted: Record<string, { score: number; xp: number; passed: boolean }>
  achievements: string[]
  totalQuestionsAnswered: number
  totalQuestionsCorrect: number
  perfectLessons: number
  timedGamesPlayed: number
  bestTimedScore: number
}

const DEFAULT_STATS: Stats = {
  totalXP: 0, lessonsCompleted: 0, currentStreak: 0, bestStreak: 0,
  divisionXP: {}, divisionMastery: {}, playDates: [],
  dailyCompleted: {}, achievements: [],
  totalQuestionsAnswered: 0, totalQuestionsCorrect: 0,
  perfectLessons: 0, timedGamesPlayed: 0, bestTimedScore: 0,
}

function loadStats(userId: string): Stats {
  try {
    const raw = localStorage.getItem(`nbrcprep-play-stats-${userId}`)
    if (raw) return { ...DEFAULT_STATS, ...JSON.parse(raw) }
  } catch {}
  return { ...DEFAULT_STATS }
}

function saveStats(s: Stats, userId: string) {
  try { localStorage.setItem(`nbrcprep-play-stats-${userId}`, JSON.stringify(s)) } catch {}
}

function getDivisionStars(mastery: DivisionMastery | undefined): number {
  if (!mastery || mastery.totalAnswered === 0) return 0
  const accuracy = mastery.totalCorrect / mastery.totalAnswered
  return Math.round(accuracy * 50) / 10
}

function recordPlayDate(stats: Stats): Stats {
  const today = getToday()
  const dates = [...(stats.playDates || [])]
  if (!dates.includes(today)) dates.push(today)
  const unique = Array.from(new Set(dates)).sort().slice(-90)
  return { ...stats, playDates: unique }
}

function calcDayStreak(playDates: string[]): number {
  if (!playDates || playDates.length === 0) return 0
  const sorted = [...playDates].sort().reverse()
  const today = getToday()
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0
  let streak = 1
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1])
    const curr = new Date(sorted[i])
    const diffDays = (prev.getTime() - curr.getTime()) / 86400000
    if (Math.round(diffDays) === 1) streak++
    else break
  }
  return streak
}

// ── Review items ───────────────────────────────────────────────
interface ReviewItem { question: string; correctAnswer: string; division: string; timestamp: number }

function loadReviewItems(userId: string): ReviewItem[] {
  try {
    const raw = localStorage.getItem(`nbrcprep-play-review-${userId}`)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

function saveReviewItems(items: ReviewItem[], userId: string) {
  try { localStorage.setItem(`nbrcprep-play-review-${userId}`, JSON.stringify(items.slice(-50))) } catch {}
}

function addReviewItem(item: ReviewItem, userId: string) {
  const items = loadReviewItems(userId)
  if (!items.some(i => i.question === item.question)) {
    items.push(item)
    saveReviewItems(items, userId)
  }
}

function removeReviewItem(question: string, userId: string) {
  const items = loadReviewItems(userId).filter(i => i.question !== question)
  saveReviewItems(items, userId)
}

// ── Achievements ──────────────────────────────────────────────
interface Achievement { id: string; title: string; description: string; emoji: string; check: (stats: Stats) => boolean }

const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_lesson', title: 'First Steps', description: 'Complete your first lesson', emoji: '🎯', check: s => s.lessonsCompleted >= 1 },
  { id: 'five_lessons', title: 'Getting Started', description: 'Complete 5 lessons', emoji: '📚', check: s => s.lessonsCompleted >= 5 },
  { id: 'ten_lessons', title: 'Dedicated Learner', description: 'Complete 10 lessons', emoji: '🎓', check: s => s.lessonsCompleted >= 10 },
  { id: 'twenty_five_lessons', title: 'Committed', description: 'Complete 25 lessons', emoji: '💪', check: s => s.lessonsCompleted >= 25 },
  { id: 'fifty_lessons', title: 'NBRC Warrior', description: 'Complete 50 lessons', emoji: '⚔️', check: s => s.lessonsCompleted >= 50 },
  { id: 'hundred_lessons', title: 'Centurion', description: 'Complete 100 lessons', emoji: '🏅', check: s => s.lessonsCompleted >= 100 },
  { id: 'perfect_lesson', title: 'Flawless', description: 'Get 100% on a lesson', emoji: '💎', check: s => s.perfectLessons >= 1 },
  { id: 'five_perfect', title: 'Perfectionist', description: 'Get 100% on 5 lessons', emoji: '✨', check: s => s.perfectLessons >= 5 },
  { id: 'streak_3', title: 'On a Roll', description: '3-day play streak', emoji: '🔥', check: s => calcDayStreak(s.playDates) >= 3 },
  { id: 'streak_7', title: 'Week Warrior', description: '7-day play streak', emoji: '🗓️', check: s => calcDayStreak(s.playDates) >= 7 },
  { id: 'streak_14', title: 'Unstoppable', description: '14-day play streak', emoji: '💥', check: s => calcDayStreak(s.playDates) >= 14 },
  { id: 'streak_30', title: 'Iron Will', description: '30-day play streak', emoji: '🏆', check: s => calcDayStreak(s.playDates) >= 30 },
  { id: 'all_divisions', title: 'Well-Rounded', description: 'Play all 6 divisions', emoji: '🌟', check: s => DIVISIONS.every(d => (s.divisionXP[d.slug] || 0) > 0) },
  { id: 'xp_500', title: 'Rising Star', description: 'Earn 500 XP', emoji: '⭐', check: s => s.totalXP >= 500 },
  { id: 'xp_1000', title: 'Knowledge Builder', description: 'Earn 1,000 XP', emoji: '🌙', check: s => s.totalXP >= 1000 },
  { id: 'xp_5000', title: 'XP Machine', description: 'Earn 5,000 XP', emoji: '🚀', check: s => s.totalXP >= 5000 },
  { id: 'daily_first', title: 'Daily Player', description: 'Complete a daily challenge', emoji: '📅', check: s => Object.keys(s.dailyCompleted || {}).length >= 1 },
  { id: 'daily_7', title: 'Regular', description: 'Complete 7 daily challenges', emoji: '📆', check: s => Object.keys(s.dailyCompleted || {}).length >= 7 },
  { id: 'timed_first', title: 'Speed Demon', description: 'Complete a timed lesson', emoji: '⚡', check: s => s.timedGamesPlayed >= 1 },
  { id: 'timed_10', title: 'Lightning Fast', description: 'Complete 10 timed lessons', emoji: '🏎️', check: s => s.timedGamesPlayed >= 10 },
  { id: 'questions_100', title: 'Century Club', description: 'Answer 100 questions', emoji: '💯', check: s => s.totalQuestionsAnswered >= 100 },
  { id: 'questions_500', title: 'Question Master', description: 'Answer 500 questions', emoji: '🧠', check: s => s.totalQuestionsAnswered >= 500 },
  { id: 'mastery_4star', title: 'Expert', description: 'Reach 4+ stars in any division', emoji: '🫁', check: s => DIVISIONS.some(d => getDivisionStars(s.divisionMastery?.[d.slug]) >= 4) },
  { id: 'mastery_all_3star', title: 'NBRC Ready', description: 'Reach 3+ stars in all divisions', emoji: '👑', check: s => DIVISIONS.every(d => getDivisionStars(s.divisionMastery?.[d.slug]) >= 3) },
]

function checkNewAchievements(stats: Stats): string[] {
  const current = stats.achievements || []
  return ACHIEVEMENTS.filter(a => !current.includes(a.id) && a.check(stats)).map(a => a.id)
}

// ── Rank system ─────────────────────────────────────────────
const RANKS = [
  { title: 'Student', minXP: 0, emoji: '📎', color: '#9CA3AF' },
  { title: 'RT Candidate', minXP: 100, emoji: '📏', color: '#60A5FA' },
  { title: 'CRT', minXP: 600, emoji: '✏️', color: '#34D399' },
  { title: 'RRT', minXP: 1200, emoji: '🫁', color: '#FBBF24' },
  { title: 'RRT-ACCS', minXP: 2000, emoji: '🏥', color: '#F97316' },
  { title: 'RRT-NPS', minXP: 4000, emoji: '👶', color: '#8B5CF6' },
  { title: 'Department Lead', minXP: 16000, emoji: '⭐', color: '#EC4899' },
  { title: 'RT Director', minXP: 25000, emoji: '👑', color: '#0D9488' },
]

function getRank(xp: number) {
  let rank = RANKS[0]
  for (const r of RANKS) {
    if (xp >= r.minXP) rank = r
    else break
  }
  const idx = RANKS.indexOf(rank)
  const nextRank = idx < RANKS.length - 1 ? RANKS[idx + 1] : null
  const progress = nextRank ? (xp - rank.minXP) / (nextRank.minXP - rank.minXP) : 1
  return { ...rank, nextRank, progress, xpToNext: nextRank ? nextRank.minXP - xp : 0 }
}

interface LeaderboardData { totalPlayers: number; totalGames: number; yourRank: number; yourXP: number; yourGames: number; percentile: number }

async function fetchLeaderboard(userId: string): Promise<LeaderboardData> {
  try {
    const sid = getSessionId(userId)
    const res = await fetch(`/api/play/leaderboard?sid=${encodeURIComponent(sid)}`)
    return await res.json()
  } catch {
    return { totalPlayers: 0, totalGames: 0, yourRank: 0, yourXP: 0, yourGames: 0, percentile: 0 }
  }
}

// ══════════════════════════════════════════════════════════════
// ██  COMPONENTS
// ══════════════════════════════════════════════════════════════

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`transition-all duration-300 ${filled ? 'scale-100' : 'scale-75 opacity-30'}`}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={filled ? '#EF4444' : '#D0D0D0'} />
    </svg>
  )
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? (current / total) * 100 : 0
  return (
    <div className="w-full h-3 bg-brand-gray-200 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }} />
    </div>
  )
}

function StarDisplay({ stars, size = 'sm' }: { stars: number; size?: 'sm' | 'lg' }) {
  const full = Math.floor(stars)
  const partial = stars - full
  const empty = 5 - full - (partial > 0 ? 1 : 0)
  const sz = size === 'lg' ? 'w-5 h-5' : 'w-3.5 h-3.5'
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f-${i}`} className={sz} viewBox="0 0 20 20" fill="#0D9488"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.21l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" /></svg>
      ))}
      {partial > 0 && (
        <svg key="partial" className={sz} viewBox="0 0 20 20">
          <defs><linearGradient id={`star-grad-${Math.round(partial * 10)}`}><stop offset={`${partial * 100}%`} stopColor="#0D9488" /><stop offset={`${partial * 100}%`} stopColor="#E5E7EB" /></linearGradient></defs>
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.21l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" fill={`url(#star-grad-${Math.round(partial * 10)})`} />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e-${i}`} className={sz} viewBox="0 0 20 20" fill="#E5E7EB"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.21l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" /></svg>
      ))}
    </div>
  )
}

function StreakCalendar({ playDates }: { playDates: string[] }) {
  const today = new Date()
  const dateSet = new Set(playDates || [])
  const dayStreak = calcDayStreak(playDates || [])
  const days: { date: string; played: boolean; isToday: boolean; dayNum: number; inMonth: boolean }[] = []
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
  const startDow = startOfMonth.getDay()
  for (let i = 0; i < startDow; i++) days.push({ date: '', played: false, isToday: false, dayNum: 0, inMonth: false })
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({ date: dateStr, played: dateSet.has(dateStr), isToday: dateStr === getToday(), dayNum: d, inMonth: true })
  }
  const monthName = today.toLocaleString('default', { month: 'long', year: 'numeric' })
  return (
    <div className="bg-white rounded-2xl border border-brand-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-brand-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-brand-black flex items-center gap-2">🔥 Study Streak</h3>
          {dayStreak > 0 && <span className="text-sm font-bold text-orange-500">{dayStreak} day{dayStreak !== 1 ? 's' : ''}</span>}
        </div>
        <p className="text-xs text-brand-gray-400 mt-1">{monthName}</p>
      </div>
      <div className="px-5 py-4">
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} className="text-center text-[10px] font-semibold text-brand-gray-300">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d, i) => (
            <div key={i} className={`aspect-square rounded-md flex flex-col items-center justify-center ${
              !d.inMonth ? '' :
              d.isToday && d.played ? 'bg-orange-400 text-white ring-2 ring-orange-300' :
              d.isToday ? 'bg-brand-gray-100 text-brand-black ring-2 ring-teal-300' :
              d.played ? 'bg-emerald-400 text-white' : 'bg-brand-gray-50 text-brand-gray-300'
            }`}>
              {d.inMonth && d.played && <span className="text-[8px] leading-none">🔥</span>}
              {d.inMonth && <span className="text-[9px] font-medium leading-none">{d.dayNum}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AchievementsSection({ stats }: { stats: Stats }) {
  const [showAll, setShowAll] = useState(false)
  const unlocked = stats.achievements || []
  const unlockedA = ACHIEVEMENTS.filter(a => unlocked.includes(a.id))
  const lockedA = ACHIEVEMENTS.filter(a => !unlocked.includes(a.id))
  const shown = showAll ? [...unlockedA, ...lockedA] : [...unlockedA, ...lockedA].slice(0, 8)
  return (
    <div className="bg-white rounded-2xl border border-brand-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-brand-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-brand-black">Achievements</h3>
          <span className="text-xs text-brand-gray-400">{unlockedA.length}/{ACHIEVEMENTS.length}</span>
        </div>
      </div>
      <div className="px-5 py-4 grid grid-cols-4 gap-3">
        {shown.map((a) => {
          const isUnlocked = unlocked.includes(a.id)
          return (
            <div key={a.id} className="text-center" title={`${a.title}: ${a.description}`}>
              <div className={`text-2xl mb-1 ${isUnlocked ? '' : 'grayscale opacity-30'}`}>{a.emoji}</div>
              <div className={`text-[9px] font-medium leading-tight ${isUnlocked ? 'text-brand-black' : 'text-brand-gray-300'}`}>{a.title}</div>
            </div>
          )
        })}
      </div>
      {ACHIEVEMENTS.length > 8 && (
        <button onClick={() => setShowAll(!showAll)} className="w-full py-2.5 text-xs font-semibold text-brand-gray-400 hover:text-brand-gray-600 transition-colors border-t border-brand-gray-100">
          {showAll ? 'Show less' : `Show all ${ACHIEVEMENTS.length}`}
        </button>
      )}
    </div>
  )
}

function DailyChallengeCard({ status, onStart, loading }: { status: 'available' | 'passed' | 'failed'; onStart: () => void; loading: boolean }) {
  const done = status !== 'available'
  return (
    <div className={`rounded-2xl border-2 p-5 transition-all ${
      status === 'passed' ? 'border-emerald-200 bg-emerald-50' :
      status === 'failed' ? 'border-red-200 bg-red-50' :
      'border-teal-300 bg-gradient-to-r from-teal-50 to-emerald-50'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{status === 'passed' ? '✅' : status === 'failed' ? '❌' : '⭐'}</div>
          <div>
            <h3 className="font-bold text-brand-black">Daily Challenge</h3>
            <p className="text-xs text-brand-gray-500">{status === 'passed' ? 'Completed today!' : status === 'failed' ? 'Failed - try again tomorrow!' : '5 questions - 2x XP bonus'}</p>
          </div>
        </div>
        {!done && (
          <button onClick={onStart} disabled={loading} className="px-5 py-2.5 rounded-xl font-bold text-sm bg-brand-teal text-white hover:bg-brand-teal-hover transition-colors active:scale-[0.97] disabled:opacity-50">
            {loading ? '...' : 'Play'}
          </button>
        )}
      </div>
    </div>
  )
}

function ModeSelector({ onSelect }: { onSelect: (mode: GameMode) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <button onClick={() => onSelect('normal')} className="p-4 rounded-xl border-2 border-brand-gray-200 bg-white hover:border-teal-400 transition-all text-left active:scale-[0.98]">
        <div className="text-xl mb-1">📝</div>
        <div className="font-bold text-sm text-brand-black">Normal</div>
        <div className="text-[10px] text-brand-gray-400">10 questions, no timer</div>
      </button>
      <button onClick={() => onSelect('timed')} className="p-4 rounded-xl border-2 border-brand-gray-200 bg-white hover:border-orange-400 transition-all text-left active:scale-[0.98]">
        <div className="text-xl mb-1">⚡</div>
        <div className="font-bold text-sm text-brand-black">Timed</div>
        <div className="text-[10px] text-brand-gray-400">Beat the clock, bonus XP</div>
      </button>
    </div>
  )
}

function RankSection({ stats, serverData }: { stats: Stats; serverData: LeaderboardData | null }) {
  const rank = getRank(stats.totalXP)
  return (
    <div className="bg-white rounded-2xl border border-brand-gray-200 overflow-hidden">
      <div className="px-5 py-5">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{rank.emoji}</div>
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-0.5">Your Rank</div>
            <div className="text-xl font-bold" style={{ color: rank.color }}>{rank.title}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-brand-teal">{stats.totalXP.toLocaleString()}</div>
            <div className="text-[10px] text-brand-gray-400 uppercase tracking-wider">Total XP</div>
          </div>
        </div>
        {rank.nextRank && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-brand-gray-400 mb-1.5">
              <span>{rank.title}</span>
              <span>{rank.xpToNext.toLocaleString()} XP to {rank.nextRank.title} {rank.nextRank.emoji}</span>
            </div>
            <div className="w-full h-2.5 bg-brand-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${Math.min(rank.progress * 100, 100)}%`, background: `linear-gradient(90deg, ${rank.color}, ${rank.nextRank.color})` }} />
            </div>
          </div>
        )}
      </div>
      {serverData && serverData.totalPlayers > 0 && (
        <div className="px-5 py-4 border-t border-brand-gray-100 bg-brand-gray-50/50">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              {serverData.yourRank > 0 ? (
                <><span className="font-bold text-brand-black">Top {Math.max(100 - serverData.percentile, 1)}%</span><span className="text-brand-gray-400"> of NBRC players</span></>
              ) : (
                <span className="text-brand-gray-400">{serverData.totalPlayers.toLocaleString()} players worldwide</span>
              )}
            </div>
            {serverData.yourRank > 0 && <span className="text-xs text-brand-gray-400">#{serverData.yourRank} of {serverData.totalPlayers}</span>}
          </div>
        </div>
      )}
    </div>
  )
}

function AchievementToast({ achievementId, onDone }: { achievementId: string; onDone: () => void }) {
  const achievement = ACHIEVEMENTS.find(a => a.id === achievementId)
  useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t) }, [onDone])
  if (!achievement) return null
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slideUp">
      <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-300 px-6 py-4 flex items-center gap-3">
        <span className="text-3xl">{achievement.emoji}</span>
        <div>
          <div className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Achievement Unlocked!</div>
          <div className="font-bold text-brand-black">{achievement.title}</div>
          <div className="text-xs text-brand-gray-500">{achievement.description}</div>
        </div>
      </div>
    </div>
  )
}

function TimerBar({ timeLeft, timeTotal }: { timeLeft: number; timeTotal: number }) {
  const pct = timeTotal > 0 ? (timeLeft / timeTotal) * 100 : 0
  const urgent = timeLeft <= 5
  return (
    <div className="w-full h-2 bg-brand-gray-100 rounded-full overflow-hidden">
      <div className={`h-full rounded-full transition-all duration-1000 ease-linear ${urgent ? 'bg-red-500' : 'bg-brand-teal'}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

// ── Home screen ────────────────────────────────────────────────
function HomeScreen({
  stats, onSelectDivision, onStartDaily, loading, reviewItems, onOpenReview,
  showModeSelect, selectedDivision, onModeSelect, onCancelMode,
  isPaidUser, onStartFreeExam, userId,
}: {
  stats: Stats; onSelectDivision: (slug: string) => void; onStartDaily: () => void
  loading: string | null; reviewItems: ReviewItem[]; onOpenReview: () => void
  showModeSelect: boolean; selectedDivision: string | null; onModeSelect: (mode: GameMode) => void
  onCancelMode: () => void; isPaidUser: boolean; onStartFreeExam: (slug: string, examIndex: number) => void; userId: string
}) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null)
  const modeSelectRef = useRef<HTMLDivElement>(null)
  useEffect(() => { fetchLeaderboard(userId).then(setLeaderboard) }, [userId])
  useEffect(() => { if (showModeSelect && modeSelectRef.current) modeSelectRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) }, [showModeSelect])

  const today = getToday()
  const dailyEntry = stats.dailyCompleted?.[today]
  const dailyStatus: 'available' | 'passed' | 'failed' = !dailyEntry ? 'available' : dailyEntry.passed ? 'passed' : 'failed'
  const dayStreak = calcDayStreak(stats.playDates || [])

  return (
    <div className="min-h-screen bg-brand-gray-50">
      <div className="sticky top-0 z-50 bg-white border-b border-brand-gray-200">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between h-14">
          <a href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-brand-gray-600 hover:text-black transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            Dashboard
          </a>
          <h1 className="text-lg font-black text-black">Play & Learn</h1>
          <div className="w-20" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-6 mb-6 p-4 bg-white rounded-2xl border border-brand-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-black">{stats.totalXP.toLocaleString()}</div>
            <div className="text-xs text-brand-gray-400 font-medium uppercase tracking-wider">Total XP</div>
          </div>
          <div className="w-px h-10 bg-brand-gray-200" />
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-black">{stats.lessonsCompleted}</div>
            <div className="text-xs text-brand-gray-400 font-medium uppercase tracking-wider">Lessons</div>
          </div>
          <div className="w-px h-10 bg-brand-gray-200" />
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 flex items-center gap-1">🔥 {dayStreak}</div>
            <div className="text-xs text-brand-gray-400 font-medium uppercase tracking-wider">Streak</div>
          </div>
        </div>

        {isPaidUser && (
          <div className="mb-6"><DailyChallengeCard status={dailyStatus} onStart={onStartDaily} loading={loading === 'daily'} /></div>
        )}

        {showModeSelect && selectedDivision && (
          <div ref={modeSelectRef} className="mb-6 bg-white rounded-2xl border-2 border-teal-300 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-brand-black">{isPaidUser ? 'Choose Mode' : 'Free Games'} - {DIVISIONS.find(d => d.slug === selectedDivision)?.code}</h3>
              <button onClick={onCancelMode} className="text-brand-gray-400 hover:text-brand-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            {isPaidUser ? (
              <ModeSelector onSelect={onModeSelect} />
            ) : (
              <div className="space-y-3">
                <button onClick={() => onStartFreeExam(selectedDivision, 0)} className="w-full p-4 rounded-xl border-2 border-brand-gray-200 hover:border-teal-400 bg-brand-gray-50 hover:bg-teal-50 transition-all text-left">
                  <div className="font-bold text-brand-black">Sample Game</div>
                  <div className="text-sm text-brand-gray-500">10 questions - fixed content</div>
                </button>
                <a href="/billing" className="block w-full p-4 rounded-xl bg-brand-teal text-center font-bold text-white hover:bg-brand-teal-hover transition-colors">
                  Upgrade for Unlimited Games
                </a>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          {DIVISIONS.map((div) => {
            const divXP = stats.divisionXP[div.slug] || 0
            const mastery = stats.divisionMastery?.[div.slug]
            const stars = getDivisionStars(mastery)
            const isLoading = loading === div.slug
            return (
              <button key={div.slug} onClick={() => onSelectDivision(div.slug)} disabled={!!loading || showModeSelect}
                className="group relative bg-white rounded-2xl border-2 border-brand-gray-200 p-5 text-left transition-all duration-200 hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${div.color}18` }}>{div.emoji}</div>
                  {divXP > 0 && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-700">{divXP} XP</span>}
                </div>
                <div className="font-bold text-brand-black text-lg leading-tight mb-0.5">{div.code}</div>
                <div className="text-sm text-brand-gray-500 leading-snug mb-2">{div.name}</div>
                {mastery && mastery.totalAnswered > 0 && (
                  <div className="flex items-center gap-1.5"><StarDisplay stars={stars} /><span className="text-[10px] text-brand-gray-400 font-medium">{stars.toFixed(1)}</span></div>
                )}
                {isLoading && (
                  <div className="absolute inset-0 bg-white/80 rounded-2xl flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        <div className="mb-6"><RankSection stats={stats} serverData={leaderboard} /></div>

        {reviewItems.length > 0 && (
          <button onClick={onOpenReview} className="w-full mb-6 bg-red-50 rounded-2xl border border-red-200 p-5 text-left hover:bg-red-100/50 transition-colors active:scale-[0.99]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h3 className="font-bold text-red-700">To Review ({reviewItems.length})</h3>
                  <p className="text-xs text-red-500">Questions you got wrong - tap to study</p>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          </button>
        )}

        <div className="mb-6"><StreakCalendar playDates={stats.playDates || []} /></div>
        <div className="mb-6"><AchievementsSection stats={stats} /></div>
        <p className="text-center text-xs text-brand-gray-400 mt-8">Questions drawn from NBRCprep flashcards and practice exams</p>
      </div>
    </div>
  )
}

// ── Lesson screen ──────────────────────────────────────────────
function LessonScreen({
  division, questions, mode, onFinish, onGameOver, onWrongAnswer,
}: {
  division: DivisionInfo; questions: GameQuestion[]; mode: GameMode
  onFinish: (xp: number, correct: number, total: number) => void
  onGameOver: (xp: number, correct: number, answered: number) => void
  onWrongAnswer: (question: string, correctAnswer: string) => void
}) {
  const [qIdx, setQIdx] = useState(0)
  const [hearts, setHearts] = useState(MAX_HEARTS)
  const [xp, setXP] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [streak, setStreak] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; explanation: string } | null>(null)
  const [answered, setAnswered] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [timeTotal, setTimeTotal] = useState(0)
  const feedbackTimeout = useRef<ReturnType<typeof setTimeout>>()
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  const q = questions[qIdx]
  const total = questions.length
  const isTimed = mode === 'timed'
  const isDaily = mode === 'daily'

  useEffect(() => {
    if (isTimed && !answered && !feedback) {
      const limit = TIMED_LIMITS[q.type] || 15
      setTimeTotal(limit)
      setTimeLeft(limit)
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => { if (prev <= 1) { clearInterval(timerRef.current!); return 0 }; return prev - 1 })
      }, 1000)
      return () => { if (timerRef.current) clearInterval(timerRef.current) }
    }
  }, [isTimed, qIdx, answered, feedback, q.type])

  useEffect(() => {
    if (isTimed && timeLeft === 0 && !answered && !feedback && timeTotal > 0) handleAnswer(false, 'Time ran out!')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isTimed, answered, feedback, timeTotal])

  const handleAnswer = useCallback((isCorrect: boolean, explanation: string) => {
    if (answered) return
    setAnswered(true)
    if (timerRef.current) clearInterval(timerRef.current)

    if (isCorrect) {
      let bonus = streak >= 2 ? XP_STREAK_BONUS : 0
      let baseXP = XP_PER_CORRECT
      if (isTimed && timeLeft > 0) baseXP += Math.round((timeLeft / timeTotal) * 10)
      if (isTimed) baseXP *= TIMED_XP_MULTIPLIER
      if (isDaily) baseXP *= DAILY_XP_MULTIPLIER
      setXP(prev => prev + baseXP + bonus)
      setCorrect(prev => prev + 1)
      setStreak(prev => prev + 1)
      setFeedback({ correct: true, message: pickRandom(ENCOURAGEMENTS) + (bonus > 0 ? ` +${bonus} streak bonus!` : '') + (isTimed && timeLeft > 3 ? ' Quick!' : ''), explanation: '' })
    } else {
      setStreak(0)
      const currentQ = questions[qIdx]
      let qText = '', aText = ''
      if (currentQ.type === 'mc') { qText = currentQ.prompt; aText = explanation }
      else if (currentQ.type === 'tf') { qText = currentQ.statement; aText = explanation }
      else if (currentQ.type === 'quick') { qText = currentQ.prompt; aText = explanation }
      else if (currentQ.type === 'fillblank') { qText = currentQ.sentence.replace('_____', `[${currentQ.blank}]`); aText = currentQ.explanation }
      if (qText) onWrongAnswer(qText, aText)

      if (hearts > 0) {
        setHearts(prev => prev - 1)
        setFeedback({ correct: false, message: pickRandom(WRONG_MESSAGES), explanation })
      } else {
        const penalty = Math.min(XP_PENALTY, xp)
        setXP(prev => Math.max(0, prev - penalty))
        setFeedback({ correct: false, message: penalty > 0 ? `${pickRandom(WRONG_MESSAGES)} -${penalty} XP` : pickRandom(WRONG_MESSAGES), explanation })
      }
    }
  }, [answered, streak, hearts, xp, qIdx, questions, onWrongAnswer, isTimed, isDaily, timeLeft, timeTotal])

  const handleContinue = useCallback(() => {
    if (feedbackTimeout.current) clearTimeout(feedbackTimeout.current)
    setFeedback(null)
    setAnswered(false)
    if (qIdx + 1 >= total) onFinish(xp, correct, total)
    else setQIdx(prev => prev + 1)
  }, [qIdx, total, xp, correct, onFinish])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-brand-gray-100 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <button onClick={() => onGameOver(xp, correct, qIdx)} className="text-brand-gray-400 hover:text-brand-gray-600 transition-colors" aria-label="Quit lesson">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div className="flex-1"><ProgressBar current={qIdx + (answered ? 1 : 0)} total={total} /></div>
            <div className="flex items-center gap-1">
              {Array.from({ length: MAX_HEARTS }).map((_, i) => <HeartIcon key={i} filled={i < hearts} />)}
              {hearts <= 0 && <span className="text-xs font-bold text-red-500 ml-1">-XP</span>}
            </div>
          </div>
          {isTimed && !answered && !feedback && (
            <div className="mb-1"><TimerBar timeLeft={timeLeft} timeTotal={timeTotal} /><div className="text-right text-xs font-mono text-brand-gray-400 mt-0.5">{timeLeft}s</div></div>
          )}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: division.color }}>{division.code}</span>
              {isDaily && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-700 font-bold">DAILY 2x</span>}
              {isTimed && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-700 font-bold">TIMED</span>}
            </div>
            <div className="flex items-center gap-3">
              {streak >= 2 && <span className="text-orange-500 font-bold">🔥 {streak}</span>}
              <span className="font-semibold text-brand-teal">{xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-6">
        <div className="flex-1">
          {q.type === 'mc' && <MultipleChoiceQ q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'tf' && <TrueFalseQ q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'fillblank' && <FillBlankQ q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'quick' && <QuickChoiceQ q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'match' && <MatchQ q={q} answered={answered} onAnswer={handleAnswer} />}
        </div>

        {feedback && (
          <div className={`mt-4 rounded-2xl p-5 transition-all duration-300 animate-slideUp ${feedback.correct ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-red-50 border-2 border-red-200'}`}>
            <span className={`font-bold text-lg ${feedback.correct ? 'text-emerald-700' : 'text-red-700'}`}>{feedback.correct ? '✓' : '✗'} {feedback.message}</span>
            {feedback.explanation && <p className="text-sm text-brand-gray-600 mt-2 leading-relaxed">{feedback.explanation}</p>}
            <button onClick={handleContinue} className={`mt-4 w-full py-3 rounded-xl font-bold text-white transition-colors ${feedback.correct ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'}`}>
              {qIdx + 1 >= total && feedback.correct ? 'Finish Lesson!' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Question type components ──────────────────────────────────
function MultipleChoiceQ({ q, answered, onAnswer }: { q: Extract<GameQuestion, { type: 'mc' }>; answered: boolean; onAnswer: (c: boolean, e: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-2">Select the best answer</div>
      <p className="text-lg font-medium text-brand-black leading-relaxed mb-6">{q.prompt}</p>
      <div className="space-y-3">
        {q.options.map((opt) => {
          const isCorrect = opt.key === q.correctKey
          const isSelected = selected === opt.key
          let borderColor = 'border-brand-gray-200 hover:border-teal-400'
          let bg = 'bg-white'
          if (answered && isSelected && isCorrect) { borderColor = 'border-emerald-400'; bg = 'bg-emerald-50' }
          else if (answered && isSelected && !isCorrect) { borderColor = 'border-red-400'; bg = 'bg-red-50' }
          else if (answered && isCorrect) { borderColor = 'border-emerald-400'; bg = 'bg-emerald-50/50' }
          return (
            <button key={opt.key} onClick={() => { if (!answered) { setSelected(opt.key); onAnswer(isCorrect, q.explanation) } }} disabled={answered}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${borderColor} ${bg} ${!answered ? 'active:scale-[0.98]' : ''}`}>
              <span className="inline-flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${answered && isCorrect ? 'bg-emerald-500 text-white' : answered && isSelected && !isCorrect ? 'bg-red-500 text-white' : 'bg-brand-gray-100 text-brand-gray-500'}`}>{opt.key}</span>
                <span className="text-sm leading-relaxed">{opt.text}</span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function TrueFalseQ({ q, answered, onAnswer }: { q: Extract<GameQuestion, { type: 'tf' }>; answered: boolean; onAnswer: (c: boolean, e: string) => void }) {
  const [selected, setSelected] = useState<boolean | null>(null)
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-2">True or False?</div>
      <div className="text-xs text-brand-gray-400 mb-4">Is this description correct for the given term?</div>
      <div className="bg-brand-gray-50 rounded-xl p-5 mb-6"><p className="font-medium text-brand-black leading-relaxed">{q.statement}</p></div>
      <div className="grid grid-cols-2 gap-4">
        {[true, false].map((val) => {
          const isCorrectAnswer = val === q.isTrue
          const isSelected = selected === val
          let style = 'border-brand-gray-200 hover:border-teal-400 bg-white'
          if (answered && isSelected && isCorrectAnswer) style = 'border-emerald-400 bg-emerald-50'
          else if (answered && isSelected && !isCorrectAnswer) style = 'border-red-400 bg-red-50'
          else if (answered && isCorrectAnswer) style = 'border-emerald-400 bg-emerald-50/50'
          return (
            <button key={String(val)} onClick={() => { if (!answered) { setSelected(val); onAnswer(isCorrectAnswer, q.explanation) } }} disabled={answered}
              className={`py-5 rounded-xl border-2 font-bold text-lg transition-all duration-200 active:scale-[0.97] ${style}`}>
              {val ? '✓ TRUE' : '✗ FALSE'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuickChoiceQ({ q, answered, onAnswer }: { q: Extract<GameQuestion, { type: 'quick' }>; answered: boolean; onAnswer: (c: boolean, e: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-2">What concept is this describing?</div>
      <div className="bg-brand-gray-50 rounded-xl p-5 mb-6"><p className="text-sm font-medium text-brand-black leading-relaxed italic">{q.prompt}</p></div>
      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctIdx
          const isSelected = selected === i
          let style = 'border-brand-gray-200 hover:border-teal-400 bg-white'
          if (answered && isSelected && isCorrect) style = 'border-emerald-400 bg-emerald-50'
          else if (answered && isSelected && !isCorrect) style = 'border-red-400 bg-red-50'
          else if (answered && isCorrect) style = 'border-emerald-400 bg-emerald-50/50'
          return (
            <button key={i} onClick={() => { if (!answered) { setSelected(i); onAnswer(isCorrect, q.explanation) } }} disabled={answered}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 active:scale-[0.98] ${style}`}>
              <span className="text-sm font-medium leading-relaxed">{opt}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function FillBlankQ({ q, answered, onAnswer }: { q: Extract<GameQuestion, { type: 'fillblank' }>; answered: boolean; onAnswer: (c: boolean, e: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-2">Fill in the blank</div>
      <div className="bg-brand-gray-50 rounded-xl p-5 mb-6">
        <p className="font-medium text-brand-black leading-relaxed">
          {q.sentence.split('_____').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className={`inline-block px-2 py-0.5 mx-1 rounded font-bold ${
                  answered && selected === q.correctIdx ? 'bg-emerald-200 text-emerald-800' :
                  answered ? 'bg-teal-200 text-teal-800' : 'bg-teal-100 text-teal-600 border-b-2 border-teal-400'
                }`}>{answered ? q.blank : '???'}</span>
              )}
            </span>
          ))}
        </p>
      </div>
      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctIdx
          const isSelected = selected === i
          let style = 'border-brand-gray-200 hover:border-teal-400 bg-white'
          if (answered && isSelected && isCorrect) style = 'border-emerald-400 bg-emerald-50'
          else if (answered && isSelected && !isCorrect) style = 'border-red-400 bg-red-50'
          else if (answered && isCorrect) style = 'border-emerald-400 bg-emerald-50/50'
          return (
            <button key={i} onClick={() => { if (!answered) { setSelected(i); onAnswer(isCorrect, q.explanation) } }} disabled={answered}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 active:scale-[0.98] ${style}`}>
              <span className="text-sm leading-relaxed">{opt}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function MatchQ({ q, answered, onAnswer }: { q: Extract<GameQuestion, { type: 'match' }>; answered: boolean; onAnswer: (c: boolean, e: string) => void }) {
  const [selectedConcept, setSelectedConcept] = useState<number | null>(null)
  const [matches, setMatches] = useState<Record<number, number>>({})
  const [defOrder] = useState(() => shuffle(q.pairs.map((_, i) => i)))
  const [submitted, setSubmitted] = useState(false)

  const handleConceptClick = (idx: number) => { if (!submitted) setSelectedConcept(selectedConcept === idx ? null : idx) }
  const handleDefClick = (defIdx: number) => {
    if (submitted || selectedConcept === null) return
    const alreadyMatchedConcept = Object.entries(matches).find(([, v]) => v === defIdx)
    const newMatches = { ...matches }
    if (alreadyMatchedConcept) delete newMatches[Number(alreadyMatchedConcept[0])]
    newMatches[selectedConcept] = defIdx
    setMatches(newMatches)
    setSelectedConcept(null)
    if (Object.keys(newMatches).length === q.pairs.length) {
      const allCorrect = q.pairs.every((_, i) => newMatches[i] === i)
      setSubmitted(true)
      onAnswer(allCorrect, q.explanation)
    }
  }

  const colors = ['bg-blue-100 border-blue-400 text-blue-800', 'bg-purple-100 border-purple-400 text-purple-800', 'bg-emerald-100 border-emerald-400 text-emerald-800', 'bg-amber-100 border-amber-400 text-amber-800']
  const getMatchColor = (conceptIdx: number) => colors[conceptIdx % colors.length]

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400 mb-4">Match each concept to its definition</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="text-[10px] font-bold uppercase text-brand-gray-400 tracking-wider mb-1">Concepts</div>
          {q.pairs.map((pair, i) => {
            const isMatched = i in matches
            const isSelected = selectedConcept === i
            return (
              <button key={i} onClick={() => handleConceptClick(i)}
                className={`w-full text-left p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                  submitted && matches[i] === i ? 'border-emerald-400 bg-emerald-50' :
                  submitted && matches[i] !== i ? 'border-red-400 bg-red-50' :
                  isMatched ? `${getMatchColor(i)} border-2` :
                  isSelected ? 'border-teal-400 bg-teal-50 ring-2 ring-teal-300' :
                  'border-brand-gray-200 bg-white hover:border-teal-400'
                }`}>{pair.concept}</button>
            )
          })}
        </div>
        <div className="space-y-2">
          <div className="text-[10px] font-bold uppercase text-brand-gray-400 tracking-wider mb-1">Definitions</div>
          {defOrder.map((defIdx) => {
            const matchedBy = Object.entries(matches).find(([, v]) => v === defIdx)
            const matchedConceptIdx = matchedBy ? Number(matchedBy[0]) : null
            return (
              <button key={defIdx} onClick={() => handleDefClick(defIdx)}
                className={`w-full text-left p-3 rounded-xl border-2 text-xs leading-relaxed transition-all ${
                  submitted && matchedConceptIdx === defIdx ? 'border-emerald-400 bg-emerald-50' :
                  submitted && matchedConceptIdx !== null && matchedConceptIdx !== defIdx ? 'border-red-400 bg-red-50' :
                  matchedConceptIdx !== null ? `${getMatchColor(matchedConceptIdx)} border-2` :
                  selectedConcept !== null ? 'border-brand-gray-200 bg-white hover:border-teal-400 cursor-pointer' :
                  'border-brand-gray-200 bg-white'
                }`}>{q.pairs[defIdx].definition}</button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── Complete screen ────────────────────────────────────────────
function CompleteScreen({ xp, correct, total, division, onHome, onPlayAgain, isGameOver, newAchievements, missedQuestions }: {
  xp: number; correct: number; total: number; division: DivisionInfo; onHome: () => void; onPlayAgain: () => void; isGameOver: boolean; newAchievements: string[]; missedQuestions: ReviewItem[]
}) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const [showConfetti, setShowConfetti] = useState(!isGameOver)
  const [toastIdx, setToastIdx] = useState(0)
  useEffect(() => { if (showConfetti) { const t = setTimeout(() => setShowConfetti(false), 3000); return () => clearTimeout(t) } }, [showConfetti])

  return (
    <div className="min-h-screen bg-brand-gray-50 flex items-center justify-center px-4">
      {showConfetti && <Confetti />}
      {toastIdx < newAchievements.length && <AchievementToast achievementId={newAchievements[toastIdx]} onDone={() => setToastIdx(i => i + 1)} />}
      <div className="max-w-sm w-full text-center">
        <div className="text-6xl mb-4">{isGameOver ? '💔' : pct === 100 ? '🏆' : '🎉'}</div>
        <h2 className="text-2xl font-bold text-brand-black mb-2">{isGameOver ? 'Out of Hearts!' : pct === 100 ? 'Perfect Lesson!' : 'Lesson Complete!'}</h2>
        <p className="text-brand-gray-500 mb-8">{isGameOver ? "Don't worry - review and try again!" : `Great work on ${division.code}!`}</p>
        <div className="bg-white rounded-2xl border border-brand-gray-200 p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div><div className="text-3xl font-bold text-brand-teal">{xp}</div><div className="text-xs text-brand-gray-400 font-medium uppercase tracking-wider mt-1">XP</div></div>
            <div><div className="text-3xl font-bold text-brand-black">{pct}%</div><div className="text-xs text-brand-gray-400 font-medium uppercase tracking-wider mt-1">Accuracy</div></div>
            <div><div className="text-3xl font-bold text-emerald-500">{correct}/{total}</div><div className="text-xs text-brand-gray-400 font-medium uppercase tracking-wider mt-1">Correct</div></div>
          </div>
        </div>
        {missedQuestions.length > 0 && (
          <div className="bg-red-50 rounded-2xl border border-red-200 p-5 mb-6 text-left">
            <h3 className="font-bold text-red-700 text-sm mb-3">Review These ({missedQuestions.length})</h3>
            <div className="space-y-3">
              {missedQuestions.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-medium text-brand-black leading-snug mb-2">{item.question}</p>
                  <p className="text-xs text-brand-gray-500 leading-relaxed">{item.correctAnswer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-3">
          <button onClick={onPlayAgain} className="w-full py-4 rounded-xl font-bold text-white border-2 border-brand-teal bg-brand-teal hover:bg-brand-teal-hover transition-colors active:scale-[0.98]">
            {isGameOver ? 'Try Again' : 'Play Another Game'}
          </button>
          <button onClick={onHome} className="w-full py-4 rounded-xl font-bold text-brand-gray-500 border-2 border-brand-gray-200 bg-white hover:bg-brand-gray-50 transition-colors active:scale-[0.98]">
            Pick Another Division
          </button>
        </div>
      </div>
    </div>
  )
}

function generateReviewQuestions(items: ReviewItem[]): GameQuestion[] {
  return items.slice(0, 10).map((item) => {
    const wrongPool = items.filter(other => other.question !== item.question && other.correctAnswer !== item.correctAnswer).map(other => other.correctAnswer)
    const wrongs = pick(wrongPool.length >= 3 ? wrongPool : wrongPool.concat(['None of the above', 'All of the above', 'Not enough information']), 3)
    const correctIdx = Math.floor(Math.random() * 4)
    const options = [...wrongs]
    options.splice(correctIdx, 0, item.correctAnswer)
    return { type: 'quick' as const, prompt: item.question, options, correctIdx, explanation: item.correctAnswer }
  })
}

function Confetti() {
  const particles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i, x: Math.random() * 100, delay: Math.random() * 0.5, dur: 1.5 + Math.random() * 1.5,
      color: ['#0D9488', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][i % 6],
      size: 6 + Math.random() * 6,
    }))
  )
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.current.map((p) => (
        <div key={p.id} className="absolute animate-confetti" style={{
          left: `${p.x}%`, top: '-10px', width: p.size, height: p.size, backgroundColor: p.color,
          borderRadius: Math.random() > 0.5 ? '50%' : '2px', animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
        }} />
      ))}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// ██  MAIN GAME COMPONENT
// ══════════════════════════════════════════════════════════════
export function PlayGame({ planType = 'FREE', userId }: { planType?: string; userId: string }) {
  const isPaidUser = planType === 'MONTHLY' || planType === 'FULL_ACCESS' || planType === 'FULL_BUNDLE'
  const [screen, setScreen] = useState<Screen>('home')
  const [stats, setStats] = useState<Stats>({ ...DEFAULT_STATS })
  const [activeDivision, setActiveDivision] = useState<DivisionInfo | null>(null)
  const [questions, setQuestions] = useState<GameQuestion[]>([])
  const [loading, setLoading] = useState<string | null>(null)
  const [gameItemCache, setGameItemCache] = useState<Record<string, GameItem[]>>({})
  const [endState, setEndState] = useState<{ xp: number; correct: number; total: number; gameOver: boolean } | null>(null)
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([])
  const [gameMode, setGameMode] = useState<GameMode>('normal')
  const [showModeSelect, setShowModeSelect] = useState(false)
  const [selectedDivSlug, setSelectedDivSlug] = useState<string | null>(null)
  const [newAchievements, setNewAchievements] = useState<string[]>([])
  const [sessionMissed, setSessionMissed] = useState<ReviewItem[]>([])

  useEffect(() => { setStats(loadStats(userId)); setReviewItems(loadReviewItems(userId)) }, [userId])

  const handleWrongAnswer = useCallback((question: string, correctAnswer: string) => {
    if (!activeDivision) return
    const item = { question, correctAnswer, division: activeDivision.code, timestamp: Date.now() }
    addReviewItem(item, userId)
    setSessionMissed(prev => [...prev, item])
    setReviewItems(loadReviewItems(userId))
  }, [activeDivision, userId])

  const startFreeExam = useCallback(async (slug: string, examIndex: number) => {
    const div = DIVISIONS.find(d => d.slug === slug)
    if (!div) return
    setLoading(slug)
    let items = gameItemCache[slug]
    if (!items) { items = await loadGameItems(slug); setGameItemCache(prev => ({ ...prev, [slug]: items! })) }
    const lesson = generateFixedLesson(items, examIndex)
    if (lesson.length === 0) return
    setQuestions(lesson); setActiveDivision(div); setGameMode('normal'); setSessionMissed([]); setScreen('playing'); setLoading(null); setShowModeSelect(false); setSelectedDivSlug(null)
  }, [gameItemCache])

  const startDivisionGame = useCallback(async (slug: string, mode: GameMode) => {
    const div = DIVISIONS.find(d => d.slug === slug)
    if (!div) return
    setLoading(slug)
    let items = gameItemCache[slug]
    if (!items) { items = await loadGameItems(slug); setGameItemCache(prev => ({ ...prev, [slug]: items! })) }
    const lesson = generateLesson(items)
    setQuestions(lesson); setActiveDivision(div); setGameMode(mode); setSessionMissed([]); setScreen('playing'); setLoading(null); setShowModeSelect(false)
  }, [gameItemCache])

  const selectDivision = useCallback((slug: string) => { setSelectedDivSlug(slug); setShowModeSelect(true) }, [])
  const handleModeSelect = useCallback((mode: GameMode) => { if (selectedDivSlug) startDivisionGame(selectedDivSlug, mode) }, [selectedDivSlug, startDivisionGame])
  const handleCancelMode = useCallback(() => { setShowModeSelect(false); setSelectedDivSlug(null) }, [])

  const startReviewGame = useCallback(() => {
    if (reviewItems.length === 0) return
    const lesson = generateReviewQuestions(reviewItems)
    setQuestions(lesson); setActiveDivision({ slug: 'review', code: 'Review', name: 'To Review', emoji: '📝', color: '#EF4444' }); setGameMode('normal'); setSessionMissed([]); setScreen('playing')
  }, [reviewItems])

  const startDailyChallenge = useCallback(async () => {
    const today = getToday()
    if (stats.dailyCompleted?.[today]) return
    setLoading('daily')
    const allItems = await loadAllGameItems()
    const lesson = generateDailyChallenge(allItems)
    setQuestions(lesson); setActiveDivision({ slug: 'daily', code: 'Daily', name: 'Daily Challenge', emoji: '⭐', color: '#F59E0B' }); setGameMode('daily'); setSessionMissed([]); setScreen('playing'); setLoading(null)
  }, [stats.dailyCompleted])

  const updateStats = useCallback((xp: number, correct: number, total: number, completed: boolean) => {
    const isPerfect = correct === total && total > 0
    setStats(prev => {
      let next: Stats = { ...prev, totalXP: prev.totalXP + xp, totalQuestionsAnswered: (prev.totalQuestionsAnswered || 0) + total, totalQuestionsCorrect: (prev.totalQuestionsCorrect || 0) + correct }
      if (completed) { next.lessonsCompleted = prev.lessonsCompleted + 1; if (isPerfect) next.perfectLessons = (prev.perfectLessons || 0) + 1 }
      if (gameMode === 'timed') { next.timedGamesPlayed = (prev.timedGamesPlayed || 0) + 1; next.bestTimedScore = Math.max(prev.bestTimedScore || 0, Math.round((correct / Math.max(total, 1)) * 100)) }
      if (gameMode === 'daily') { const dailyPassed = correct >= Math.ceil(DAILY_QUESTIONS / 2); next.dailyCompleted = { ...(prev.dailyCompleted || {}), [getToday()]: { score: correct, xp, passed: dailyPassed } } }
      if (activeDivision && activeDivision.slug !== 'daily' && activeDivision.slug !== 'review') {
        next.divisionXP = { ...prev.divisionXP, [activeDivision.slug]: (prev.divisionXP[activeDivision.slug] || 0) + xp }
        const prevMastery = prev.divisionMastery?.[activeDivision.slug] || { totalAnswered: 0, totalCorrect: 0 }
        next.divisionMastery = { ...(prev.divisionMastery || {}), [activeDivision.slug]: { totalAnswered: prevMastery.totalAnswered + total, totalCorrect: prevMastery.totalCorrect + correct } }
      }
      next = recordPlayDate(next); next.currentStreak = calcDayStreak(next.playDates); next.bestStreak = Math.max(next.bestStreak || 0, next.currentStreak)
      const newlyUnlocked = checkNewAchievements(next)
      if (newlyUnlocked.length > 0) { next.achievements = [...(next.achievements || []), ...newlyUnlocked]; setNewAchievements(newlyUnlocked) }
      saveStats(next, userId)
      return next
    })
  }, [activeDivision, gameMode, userId])

  const handleFinish = useCallback((xp: number, correct: number, total: number) => {
    if (activeDivision && activeDivision.slug !== 'daily' && activeDivision.slug !== 'review') logPlayEvent({ division: activeDivision.slug, questionsTotal: total, questionsCorrect: correct, xpEarned: xp, completed: true }, userId)
    setEndState({ xp, correct, total, gameOver: false }); updateStats(xp, correct, total, true); setScreen('complete')
  }, [activeDivision, updateStats, userId])

  const handleGameOver = useCallback((xp: number, correct: number, answered: number) => {
    if (activeDivision && activeDivision.slug !== 'daily' && activeDivision.slug !== 'review') logPlayEvent({ division: activeDivision.slug, questionsTotal: answered, questionsCorrect: correct, xpEarned: xp, completed: false }, userId)
    setEndState({ xp, correct, total: answered, gameOver: true }); updateStats(xp, correct, answered, false); setScreen('complete')
  }, [activeDivision, updateStats, userId])

  const goHome = useCallback(() => { setScreen('home'); setEndState(null); setNewAchievements([]); setReviewItems(loadReviewItems(userId)) }, [userId])

  const playAgain = useCallback(() => {
    setNewAchievements([])
    if (gameMode === 'daily') goHome()
    else if (activeDivision && activeDivision.slug === 'review') { setReviewItems(loadReviewItems(userId)); startReviewGame() }
    else if (activeDivision && activeDivision.slug !== 'daily') startDivisionGame(activeDivision.slug, gameMode)
  }, [activeDivision, gameMode, startDivisionGame, startReviewGame, goHome, userId])

  if (screen === 'home') {
    return <HomeScreen stats={stats} onSelectDivision={selectDivision} onStartDaily={startDailyChallenge} loading={loading} reviewItems={reviewItems} onOpenReview={startReviewGame}
      showModeSelect={showModeSelect} selectedDivision={selectedDivSlug} onModeSelect={handleModeSelect} onCancelMode={handleCancelMode} isPaidUser={isPaidUser} onStartFreeExam={startFreeExam} userId={userId} />
  }
  if (screen === 'playing' && activeDivision) {
    return <LessonScreen division={activeDivision} questions={questions} mode={gameMode} onFinish={handleFinish} onGameOver={handleGameOver} onWrongAnswer={handleWrongAnswer} />
  }
  if (screen === 'complete' && activeDivision && endState) {
    return <CompleteScreen xp={endState.xp} correct={endState.correct} total={endState.total} division={activeDivision} onHome={goHome} onPlayAgain={playAgain} isGameOver={endState.gameOver} newAchievements={newAchievements} missedQuestions={sessionMissed} />
  }
  return null
}
