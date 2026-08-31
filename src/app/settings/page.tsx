'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState('')
  const [passwordLoading, setPasswordLoading] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/settings')
    }
  }, [status, router])

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault()
    setPasswordError('')
    setPasswordSuccess('')

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.')
      return
    }

    if (newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters.')
      return
    }

    setPasswordLoading(true)

    try {
      const res = await fetch('/api/user/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setPasswordError(data.error || 'Failed to update password.')
        setPasswordLoading(false)
        return
      }

      setPasswordSuccess('Password updated successfully.')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch {
      setPasswordError('Something went wrong. Please try again.')
    } finally {
      setPasswordLoading(false)
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black text-black mb-2">Account Settings</h1>
          <p className="text-brand-gray-500 mb-8">Manage your account information</p>

          {/* Account info */}
          <div className="card p-6 mb-8">
            <h2 className="text-lg font-bold text-black mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-brand-gray-500">Name</p>
                <p className="text-black font-medium">{session?.user?.name || '-'}</p>
              </div>
              <div>
                <p className="text-sm text-brand-gray-500">Email</p>
                <p className="text-black font-medium">{session?.user?.email || '-'}</p>
              </div>
              <div>
                <p className="text-sm text-brand-gray-500">Plan</p>
                <p className="text-black font-medium">
                  {session?.user?.planType === 'FREE' && 'Free'}
                  {session?.user?.planType === 'MONTHLY' && 'Monthly ($29/mo)'}
                  {session?.user?.planType === 'FULL_ACCESS' && 'Full Access ($149)'}
                  {session?.user?.planType === 'FULL_BUNDLE' && 'Full Bundle ($249)'}
                </p>
              </div>
            </div>
          </div>

          {/* Change password */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-black mb-4">Change Password</h2>

            {passwordError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {passwordError}
              </div>
            )}

            {passwordSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                {passwordSuccess}
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-5">
              <div>
                <label htmlFor="currentPassword" className="label">
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="input"
                  required
                  autoComplete="current-password"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="label">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input"
                  placeholder="At least 8 characters"
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label htmlFor="confirmNewPassword" className="label">
                  Confirm New Password
                </label>
                <input
                  id="confirmNewPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input"
                  placeholder="Re-enter new password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
              </div>

              <button
                type="submit"
                disabled={passwordLoading}
                className="btn-primary py-2.5 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {passwordLoading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>

          {/* Support */}
          <div className="mt-12 text-center">
            <p className="text-sm text-brand-gray-400">
              Need help?{' '}
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
