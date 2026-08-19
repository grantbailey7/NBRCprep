import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'NBRC Study Resources',
  description: 'Free respiratory therapy study resources - exam guides, cheat sheets, topic deep dives, glossaries, tips, and exam day walkthroughs for all 6 NBRC divisions.',
  alternates: { canonical: 'https://nbrcprep.app/resources' },
}

const CATEGORIES = [
  {
    title: 'Exam Guides',
    href: '/guides',
    description: 'Comprehensive authority guides for each NBRC exam - content domains, scoring, clinical scenarios, and strategies.',
    count: 6,
  },
  {
    title: 'Study Topics',
    href: '/topics',
    description: 'Deep-dive guides on high-yield clinical topics - ABG interpretation, ventilator modes, airway management, and more.',
    count: 45,
  },
  {
    title: 'Cheat Sheets',
    href: '/cheat-sheets',
    description: 'Quick-reference sheets with key values, formulas, and normal ranges - designed to be bookmarked and shared.',
    count: 15,
  },
  {
    title: 'Common Mistakes',
    href: '/mistakes',
    description: 'The most frequent errors students make on each NBRC exam - and how to avoid them.',
    count: 12,
  },
  {
    title: 'Exam Tips',
    href: '/tips',
    description: 'Proven strategies for time management, question approach, and content prioritization on every NBRC exam.',
    count: 8,
  },
  {
    title: 'Exam Day Walkthroughs',
    href: '/exam-day',
    description: 'Step-by-step guides for test day at Pearson VUE - what to expect, pacing, and anxiety management.',
    count: 6,
  },
  {
    title: 'Glossary',
    href: '/glossary',
    description: 'Comprehensive terminology glossaries for respiratory therapy - ventilator terms, ABG, PFT, pharmacology, and more.',
    count: 12,
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-brand-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: 'Resources' }]} />

          <div className="text-center mb-12">
            <h1 className="section-title">NBRC Study Resources</h1>
            <p className="section-subtitle">
              104 free study resources across 7 categories - everything you need to pass your NBRC exam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="card p-6 hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-bold text-black group-hover:text-teal-600 transition-colors">
                    {cat.title}
                  </h2>
                  <span className="bg-teal-500/20 text-teal-700 text-xs font-bold px-2 py-0.5 rounded">
                    {cat.count}
                  </span>
                </div>
                <p className="text-sm text-brand-gray-500">{cat.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-600">
                  Browse {cat.title} &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card p-8 bg-teal-500/10 border-teal-400/30 max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-black mb-2">Ready to practice?</h2>
              <p className="text-sm text-brand-gray-500 mb-4">
                Pair these resources with 600+ flashcards, 30 mini exams, and 18 full-length practice tests.
              </p>
              <Link href="/pricing" className="btn-primary px-6 py-2.5 text-sm inline-block">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
