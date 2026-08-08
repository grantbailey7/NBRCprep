import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <div className="text-6xl font-black text-teal-400 mb-4">404</div>
          <h1 className="text-2xl font-bold text-black mb-2">Page not found</h1>
          <p className="text-brand-gray-500 mb-8 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn-primary py-3 px-8">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
