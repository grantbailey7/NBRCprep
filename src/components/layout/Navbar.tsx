'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect, useRef } from 'react'

const DIVISIONS = [
  { slug: 'tmc', label: 'TMC' },
  { slug: 'nps', label: 'NPS' },
  { slug: 'accs', label: 'ACCS' },
  { slug: 'sds', label: 'SDS' },
  { slug: 'cpft', label: 'CPFT' },
  { slug: 'rpft', label: 'RPFT' },
]

const RESOURCES = [
  { href: '/guides', label: 'Exam Guides' },
  { href: '/topics', label: 'Study Topics' },
  { href: '/cheat-sheets', label: 'Cheat Sheets' },
  { href: '/tips', label: 'Exam Tips' },
  { href: '/mistakes', label: 'Common Mistakes' },
  { href: '/exam-day', label: 'Exam Day' },
  { href: '/glossary', label: 'Glossary' },
]

export function Navbar() {
  const { data: session, status } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [divisionsOpen, setDivisionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const divisionsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (divisionsRef.current && !divisionsRef.current.contains(e.target as Node)) {
        setDivisionsOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight">
              NBRC<span className="text-teal-500">prep</span>
            </span>
            <a href="https://certinhq.com" className="text-xs font-medium text-brand-gray-400 tracking-wide hover:text-brand-gray-600 transition-colors">By Certin</a>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {session && (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-brand-gray-600 hover:text-black transition-colors"
                >
                  Dashboard
                </Link>
                <div className="relative" ref={divisionsRef}>
                  <button
                    onClick={() => setDivisionsOpen((o) => !o)}
                    className="text-sm font-medium text-brand-gray-600 hover:text-black transition-colors flex items-center gap-1"
                  >
                    Divisions
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {divisionsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-brand-gray-200 rounded-lg shadow-lg">
                      {DIVISIONS.map((d) => (
                        <Link
                          key={d.slug}
                          href={`/divisions/${d.slug}`}
                          onClick={() => setDivisionsOpen(false)}
                          className="block px-4 py-2 text-sm text-brand-gray-700 hover:bg-brand-gray-50 hover:text-black first:rounded-t-lg last:rounded-b-lg"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen((o) => !o)}
                className="text-sm font-medium text-brand-gray-600 hover:text-black transition-colors flex items-center gap-1"
              >
                Resources
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-brand-gray-200 rounded-lg shadow-lg">
                  {RESOURCES.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={() => setResourcesOpen(false)}
                      className="block px-4 py-2 text-sm text-brand-gray-700 hover:bg-brand-gray-50 hover:text-black first:rounded-t-lg last:rounded-b-lg"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-brand-gray-600 hover:text-black transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-brand-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {status === 'loading' ? (
              <div className="w-20 h-8 bg-brand-gray-100 rounded-lg animate-pulse" />
            ) : session ? (
              <>
                <Link href="/billing" className="text-sm font-medium text-brand-gray-600 hover:text-black">
                  {session.user.planType === 'FREE' ? (
                    <span className="text-teal-600 font-semibold">Upgrade</span>
                  ) : (
                    'Billing'
                  )}
                </Link>
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setProfileOpen((o) => !o)}
                    className="flex items-center gap-2 text-sm font-medium text-brand-gray-700 hover:text-black"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-black font-bold text-sm">
                      {session.user.name?.[0]?.toUpperCase() || session.user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                  </button>
                  {profileOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-brand-gray-200 rounded-lg shadow-lg">
                      <div className="px-4 py-2 border-b border-brand-gray-100">
                        <p className="text-xs text-brand-gray-500 truncate">{session.user.email}</p>
                      </div>
                      <Link
                        href="/settings"
                        onClick={() => setProfileOpen(false)}
                        className="block px-4 py-2 text-sm text-brand-gray-700 hover:bg-brand-gray-50"
                      >
                        Account Settings
                      </Link>
                      <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="w-full text-left px-4 py-2 text-sm text-brand-gray-700 hover:bg-brand-gray-50 rounded-b-lg"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-brand-gray-600 hover:text-black">
                  Sign In
                </Link>
                <Link href="/signup" className="btn-primary text-sm py-2 px-4">
                  Start Free
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-brand-gray-600 hover:bg-brand-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-brand-gray-200 bg-white px-4 py-4 space-y-3">
          {session ? (
            <>
              <Link href="/dashboard" className="block text-sm font-medium text-brand-gray-700">Dashboard</Link>
              {DIVISIONS.map((d) => (
                <Link key={d.slug} href={`/divisions/${d.slug}`} className="block text-sm text-brand-gray-600">{d.label}</Link>
              ))}
              <Link href="/billing" className="block text-sm font-medium text-brand-gray-700">Billing</Link>
              <Link href="/settings" className="block text-sm font-medium text-brand-gray-700">Settings</Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="block text-sm font-medium text-brand-gray-700 w-full text-left"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/resources" className="block text-sm font-medium text-brand-gray-700">Resources</Link>
              {RESOURCES.map((r) => (
                <Link key={r.href} href={r.href} className="block text-sm text-brand-gray-600 pl-3">{r.label}</Link>
              ))}
              <Link href="/blog" className="block text-sm font-medium text-brand-gray-700">Blog</Link>
              <Link href="/pricing" className="block text-sm font-medium text-brand-gray-700">Pricing</Link>
              <Link href="/login" className="block text-sm font-medium text-brand-gray-700">Sign In</Link>
              <Link href="/signup" className="btn-primary text-sm w-full text-center block py-2">Start Free</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
