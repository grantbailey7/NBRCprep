import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-brand-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <p className="text-6xl font-black text-teal-400 mb-4">404</p>
          <h1 className="text-2xl font-bold text-black mb-3">Page not found</h1>
          <p className="text-brand-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary px-6 py-2.5 text-sm">
              Go Home
            </Link>
            <Link href="/resources" className="btn-secondary px-6 py-2.5 text-sm">
              Browse Resources
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <Link href="/guides" className="text-teal-600 hover:text-teal-700">Exam Guides</Link>
            <Link href="/topics" className="text-teal-600 hover:text-teal-700">Study Topics</Link>
            <Link href="/cheat-sheets" className="text-teal-600 hover:text-teal-700">Cheat Sheets</Link>
            <Link href="/blog" className="text-teal-600 hover:text-teal-700">Blog</Link>
            <Link href="/pricing" className="text-teal-600 hover:text-teal-700">Pricing</Link>
            <Link href="/glossary" className="text-teal-600 hover:text-teal-700">Glossary</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
