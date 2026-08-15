'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'

const PLAN_LABELS: Record<string, string> = {
  FREE: 'Free',
  MONTHLY: 'Monthly ($29/mo)',
  FULL_ACCESS: 'Full Access ($149 one-time)',
  FULL_BUNDLE: 'Full Bundle ($249 one-time)',
}

const PLAN_DESCRIPTIONS: Record<string, string> = {
  FREE: 'Limited access - 20 flashcards per division and 1 sample TMC mini exam.',
  MONTHLY: 'Full TMC access - 400 flashcards, 30 mini exams, 3 full exams. Billed monthly.',
  FULL_ACCESS: 'Full TMC access - 400 flashcards, 30 mini exams, 3 full exams. Lifetime access.',
  FULL_BUNDLE: 'All 6 divisions - 2,400 flashcards, 180 mini exams, 18 full exams. Lifetime access.',
}

export default function BillingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [portalLoading, setPortalLoading] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/billing')
    }
  }, [status, router])

  async function handleUpgrade(plan: string) {
    setError('')
    setLoading(plan)

    try {
      const planType = plan.toUpperCase()
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planType }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to create checkout session.')
        setLoading(null)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(null)
    }
  }

  async function handleManageBilling() {
    setError('')
    setPortalLoading(true)

    try {
      const res = await fetch('/api/stripe/portal', {
        method: 'POST',
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to open billing portal.')
        setPortalLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setPortalLoading(false)
    }
  }

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  const planType = session?.user?.planType || 'FREE'
  const isFree = planType === 'FREE'
  const isMonthly = planType === 'MONTHLY'
  const isFullAccess = planType === 'FULL_ACCESS'
  const isFullBundle = planType === 'FULL_BUNDLE'

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-black text-black mb-2">Billing</h1>
          <p className="text-brand-gray-500 mb-8">Manage your subscription and plan</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Current plan */}
          <div className="card p-6 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-brand-gray-500 mb-1">Current Plan</p>
                <h2 className="text-xl font-bold text-black">
                  {PLAN_LABELS[planType] || planType}
                </h2>
                <p className="text-sm text-brand-gray-500 mt-1">
                  {PLAN_DESCRIPTIONS[planType] || ''}
                </p>
              </div>
              <span
                className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  isFree
                    ? 'bg-brand-gray-100 text-brand-gray-600'
                    : 'bg-teal-500/20 text-teal-700'
                }`}
              >
                {isFree ? 'Free' : 'Active'}
              </span>
            </div>

            {isMonthly && (
              <div className="mt-6 pt-4 border-t border-brand-gray-100">
                <button
                  onClick={handleManageBilling}
                  disabled={portalLoading}
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium disabled:opacity-50"
                >
                  {portalLoading ? 'Opening...' : 'Manage Subscription / Cancel'}
                </button>
              </div>
            )}
          </div>

          {/* Upgrade options */}
          {isFree && (
            <div>
              <h2 className="text-xl font-bold text-black mb-4">Upgrade your plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-5">
                  <h3 className="font-bold text-black">Monthly</h3>
                  <p className="text-2xl font-black text-black mt-1">
                    $29<span className="text-sm font-normal text-brand-gray-400">/mo</span>
                  </p>
                  <p className="text-xs text-brand-gray-500 mt-2">Full TMC access. Cancel anytime.</p>
                  <button
                    onClick={() => handleUpgrade('monthly')}
                    disabled={loading === 'monthly'}
                    className="btn-primary w-full py-2 mt-4 text-sm disabled:opacity-50"
                  >
                    {loading === 'monthly' ? 'Loading...' : 'Start Monthly'}
                  </button>
                </div>

                <div className="card p-5 border-teal-400 border-2">
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
                    Most Popular
                  </div>
                  <h3 className="font-bold text-black">Full Access</h3>
                  <p className="text-2xl font-black text-black mt-1">
                    $149<span className="text-sm font-normal text-brand-gray-400"> one-time</span>
                  </p>
                  <p className="text-xs text-brand-gray-500 mt-2">Full TMC access. Lifetime.</p>
                  <button
                    onClick={() => handleUpgrade('full_access')}
                    disabled={loading === 'full_access'}
                    className="btn-primary w-full py-2 mt-4 text-sm disabled:opacity-50"
                  >
                    {loading === 'full_access' ? 'Loading...' : 'Get Full Access'}
                  </button>
                </div>

                <div className="card p-5">
                  <h3 className="font-bold text-black">Full Bundle</h3>
                  <p className="text-2xl font-black text-black mt-1">
                    $249<span className="text-sm font-normal text-brand-gray-400"> one-time</span>
                  </p>
                  <p className="text-xs text-brand-gray-500 mt-2">All 6 divisions. Lifetime.</p>
                  <button
                    onClick={() => handleUpgrade('full_bundle')}
                    disabled={loading === 'full_bundle'}
                    className="btn-primary w-full py-2 mt-4 text-sm disabled:opacity-50"
                  >
                    {loading === 'full_bundle' ? 'Loading...' : 'Get Full Bundle'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {isMonthly && (
            <div>
              <h2 className="text-xl font-bold text-black mb-4">Upgrade to lifetime access</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-5 border-teal-400 border-2">
                  <h3 className="font-bold text-black">Full Access</h3>
                  <p className="text-2xl font-black text-black mt-1">
                    $149<span className="text-sm font-normal text-brand-gray-400"> one-time</span>
                  </p>
                  <p className="text-xs text-brand-gray-500 mt-2">
                    Full TMC access. Lifetime. Your monthly subscription will be cancelled.
                  </p>
                  <button
                    onClick={() => handleUpgrade('full_access')}
                    disabled={loading === 'full_access'}
                    className="btn-primary w-full py-2 mt-4 text-sm disabled:opacity-50"
                  >
                    {loading === 'full_access' ? 'Loading...' : 'Upgrade to Full Access'}
                  </button>
                </div>

                <div className="card p-5">
                  <h3 className="font-bold text-black">Full Bundle</h3>
                  <p className="text-2xl font-black text-black mt-1">
                    $249<span className="text-sm font-normal text-brand-gray-400"> one-time</span>
                  </p>
                  <p className="text-xs text-brand-gray-500 mt-2">
                    All 6 divisions. Lifetime. Your monthly subscription will be cancelled.
                  </p>
                  <button
                    onClick={() => handleUpgrade('full_bundle')}
                    disabled={loading === 'full_bundle'}
                    className="btn-primary w-full py-2 mt-4 text-sm disabled:opacity-50"
                  >
                    {loading === 'full_bundle' ? 'Loading...' : 'Upgrade to Full Bundle'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {isFullAccess && (
            <div>
              <h2 className="text-xl font-bold text-black mb-4">Upgrade to all divisions</h2>
              <div className="card p-5 max-w-sm">
                <h3 className="font-bold text-black">Full Bundle</h3>
                <p className="text-2xl font-black text-black mt-1">
                  $249<span className="text-sm font-normal text-brand-gray-400"> one-time</span>
                </p>
                <p className="text-xs text-brand-gray-500 mt-2">
                  Unlock all 6 divisions - 2,400 flashcards, 180 mini exams, 18 full exams.
                </p>
                <button
                  onClick={() => handleUpgrade('full_bundle')}
                  disabled={loading === 'full_bundle'}
                  className="btn-primary w-full py-2 mt-4 text-sm disabled:opacity-50"
                >
                  {loading === 'full_bundle' ? 'Loading...' : 'Upgrade to Full Bundle'}
                </button>
              </div>
            </div>
          )}

          {isFullBundle && (
            <div className="card p-6 bg-teal-500/10 border-teal-400">
              <p className="text-sm text-black font-medium">
                You have the Full Bundle - lifetime access to all 6 NBRC divisions. Nothing more to unlock.
              </p>
            </div>
          )}

          {/* Support */}
          <div className="mt-12 text-center">
            <p className="text-sm text-brand-gray-400">
              Need help with billing?{' '}
              <a href="mailto:certinhq@outlook.com" className="text-teal-600 hover:text-teal-700 font-medium">
                certinhq@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
