import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SignupCTA } from '@/components/seo/SignupCTA'

export const metadata: Metadata = {
  title: 'Free Respiratory Therapy Tools',
  description: 'Free clinical tools for respiratory therapy students - ABG interpreter, oxygen calculators, and more. No login required. Built for NBRC exam prep.',
  alternates: { canonical: 'https://nbrcprep.app/tools' },
  openGraph: {
    title: 'Free Respiratory Therapy Tools',
    description: 'Free clinical tools for RT students - ABG interpreter, oxygen calculators, and more. No login required.',
    url: 'https://nbrcprep.app/tools',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Free%20RT%20Tools&type=tool', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Respiratory Therapy Tools',
    description: 'Free clinical tools for RT students - ABG interpreter, oxygen calculators, and more. No login required.',
    images: ['/api/og?title=Free%20RT%20Tools&type=tool'],
  },
}

const TOOLS = [
  {
    title: 'ABG Interpreter',
    href: '/tools/abg-interpreter',
    description: 'Enter pH, PaCO2, HCO3, and PaO2 to get instant acid-base interpretation with compensation status and clinical context.',
    tag: 'Most Popular',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-brand-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="section-title">Free Respiratory Therapy Tools</h1>
            <p className="section-subtitle">
              Clinical calculators and reference tools for RT students. No login required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="card p-6 hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  {tool.tag && (
                    <span className="bg-teal-500/20 text-teal-700 text-xs font-bold px-2.5 py-1 rounded">
                      {tool.tag}
                    </span>
                  )}
                  <span className="text-xs text-brand-gray-400">Free</span>
                </div>
                <h2 className="font-bold text-black text-lg group-hover:text-teal-600 transition-colors">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm text-brand-gray-500">{tool.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-600">
                  Use Tool &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <SignupCTA
              variant="banner"
              heading="Want 600+ practice questions too?"
              description="NBRCprep has flashcards, mini exams, and full-length simulations for all 6 NBRC divisions. Free tier available."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
