'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Turnstile } from '@/components/Turnstile'
import { v4 as uuidv4 } from 'uuid'

function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') return ''
  let deviceId = localStorage.getItem('nbrcprep_device_id')
  if (!deviceId) {
    deviceId = uuidv4()
    localStorage.setItem('nbrcprep_device_id', deviceId)
  }
  return deviceId
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const errorParam = searchParams.get('error')

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token)
  }, [])

  useEffect(() => {
    if (errorParam === 'CredentialsSignin') {
      setError('Invalid email/username or password.')
    }
  }, [errorParam])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const deviceId = getOrCreateDeviceId()

    try {
      const result = await signIn('credentials', {
        email: identifier.trim(),
        password,
        deviceId,
        turnstileToken,
        redirect: false,
      })

      if (result?.error) {
        if (result.error === 'DEVICE_MISMATCH') {
          setError(
            'This account is locked to a different device. Full Access plans are single-device only. Contact certinhq@outlook.com for help.'
          )
        } else {
          setError('Invalid email/username or password.')
        }
      } else {
        router.push(callbackUrl)
        router.refresh()
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-black">Welcome back</h1>
            <p className="mt-2 text-brand-gray-500">
              Sign in to your NBRCprep account
            </p>
          </div>

          <div className="card p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="identifier" className="label">
                  Email or Username
                </label>
                <input
                  id="identifier"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="input"
                  placeholder="you@example.com"
                  required
                  autoComplete="username"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="Your password"
                  required
                  autoComplete="current-password"
                />
              </div>

              <Turnstile onToken={handleTurnstileToken} />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-brand-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-teal-600 hover:text-teal-700 font-medium">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <div className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
