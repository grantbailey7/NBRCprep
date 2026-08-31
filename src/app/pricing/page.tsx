export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getAuthSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Pricing - NBRC Exam Prep Plans',
  description:
    'Affordable NBRC exam prep starting free. Monthly TMC access at $29/mo, lifetime TMC access at $149, or all 6 divisions for $249. Practice tests, flashcards, and full-length exam simulations.',
  alternates: { canonical: 'https://nbrcprep.app/pricing' },
  openGraph: {
    title: 'Pricing - NBRC Exam Prep Plans',
    description: 'Affordable NBRC exam prep starting free. Monthly TMC access at $29/mo, lifetime TMC access at $149, or all 6 divisions for $249.',
    url: 'https://nbrcprep.app/pricing',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Simple%20Pricing.%20No%20Tricks.&type=resource', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - NBRC Exam Prep Plans',
    description: 'Affordable NBRC exam prep starting free. Monthly TMC access at $29/mo, lifetime TMC access at $149, or all 6 divisions for $249.',
    images: ['/api/og?title=Simple%20Pricing.%20No%20Tricks.&type=resource'],
  },
}

const FAQ_ITEMS = [
  {
    question: 'What does the free tier include?',
    answer:
      'The free tier gives you 20 flashcards per division and 1 sample mini exam for TMC. No credit card required.',
  },
  {
    question: 'What is the difference between Full Access and Full Bundle?',
    answer:
      'Full Access ($149 one-time) unlocks all TMC content - 100 flashcards, 5 mini exams, and 3 full-length exams. Full Bundle ($249 one-time) unlocks all content across all 6 NBRC divisions (TMC, NPS, ACCS, SDS, CPFT, RPFT).',
  },
  {
    question: 'Can I cancel my Monthly plan?',
    answer:
      'Yes. Monthly plans can be cancelled anytime from your Billing page. You keep access through the end of your current billing period.',
  },
  {
    question: 'Is my payment secure?',
    answer:
      'Absolutely. All payments are processed securely through Stripe. We never see or store your credit card details.',
  },
  {
    question: 'What does "lifetime access" mean?',
    answer:
      'Full Access and Full Bundle are one-time purchases. Once you pay, you have access to the included content forever - no recurring charges.',
  },
  {
    question: 'Can I upgrade from Monthly to Full Access later?',
    answer:
      'Yes. You can upgrade at any time from the Billing page. Your monthly subscription will be cancelled automatically when you purchase a one-time plan.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'We offer a refund policy for qualifying purchases. See our Refund Policy page for full details, or contact certinhq@outlook.com.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'NBRCprep - NBRC Exam Prep Platform',
  description: 'Comprehensive study platform for NBRC respiratory therapy credentialing exams with flashcards, timed practice exams, and full-length simulations.',
  brand: { '@type': 'Brand', name: 'NBRCprep' },
  url: 'https://nbrcprep.app/pricing',
  category: 'Educational Software',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free Tier',
      price: '0',
      priceCurrency: 'USD',
      url: 'https://nbrcprep.app/signup',
      description: '20 flashcards per division + 1 sample TMC mini exam',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Monthly (TMC)',
      price: '29',
      priceCurrency: 'USD',
      url: 'https://nbrcprep.app/pricing',
      description: 'Full TMC access - 100 flashcards, 5 mini exams, 3 full exams. Cancel anytime.',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Full Access (TMC)',
      price: '149',
      priceCurrency: 'USD',
      url: 'https://nbrcprep.app/pricing',
      description: 'Lifetime TMC access - 100 flashcards, 5 mini exams, 3 full-length exams.',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Full Bundle (All 6 Divisions)',
      price: '249',
      priceCurrency: 'USD',
      url: 'https://nbrcprep.app/pricing',
      description: 'Lifetime access to all 6 NBRC divisions - 600 flashcards, 30 mini exams, 18 full-length exams.',
      availability: 'https://schema.org/InStock',
    },
  ],
}

export default async function PricingPage() {
  const session = await getAuthSession()
  const isLoggedIn = !!session

  const plans = [
    {
      name: 'Monthly',
      subtitle: 'TMC Only',
      price: '$29',
      period: 'per month',
      features: [
        'TMC flashcards (100)',
        'TMC mini exams (5)',
        'TMC full exams (3)',
        'Metrics dashboard',
        'Cancel anytime',
      ],
      cta: 'Start Monthly',
      href: isLoggedIn ? '/billing?upgrade=monthly' : '/signup?plan=monthly',
      highlight: false,
    },
    {
      name: 'Full Access',
      subtitle: 'TMC Only',
      price: '$149',
      period: 'one-time',
      features: [
        'All TMC content',
        '100 flashcards',
        '5 mini exams',
        '3 full-length exams',
        'Metrics dashboard',
        'Lifetime access',
      ],
      cta: 'Get Full Access',
      href: isLoggedIn ? '/billing?upgrade=full_access' : '/signup?plan=full_access',
      highlight: true,
    },
    {
      name: 'Full Bundle',
      subtitle: 'All 6 Divisions',
      price: '$249',
      period: 'one-time',
      features: [
        'All 6 divisions',
        '600 flashcards',
        '30 mini exams',
        '18 full-length exams',
        'Metrics dashboard',
        'Lifetime access',
      ],
      cta: 'Get Full Bundle',
      href: isLoggedIn ? '/billing?upgrade=full_bundle' : '/signup?plan=full_bundle',
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Simple pricing.<br />
            <span className="text-teal-400">No tricks.</span>
          </h1>
          <p className="mt-4 text-xl text-brand-gray-500 max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re ready. Every plan includes full access to the Metrics dashboard.
          </p>
        </div>
      </section>

      {/* Free tier callout */}
      <section className="bg-brand-gray-50 py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-brand-gray-600">
            <span className="font-semibold text-black">Free forever:</span>{' '}
            20 flashcards per division + 1 sample TMC mini exam. No credit card required.{' '}
            {!isLoggedIn && (
              <Link href="/signup" className="text-teal-600 hover:text-teal-700 font-medium">
                Sign up free &rarr;
              </Link>
            )}
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 border-2 relative ${
                  plan.highlight
                    ? 'border-teal-400 bg-white shadow-lg'
                    : 'border-brand-gray-200 bg-white'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-bold text-xl text-black">{plan.name}</h3>
                <p className="text-xs font-semibold text-brand-gray-400 mt-0.5">{plan.subtitle}</p>
                <div className="mt-3">
                  <span className="text-4xl font-black text-black">{plan.price}</span>
                  <span className="text-sm ml-1 text-brand-gray-400">/{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-brand-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`mt-8 block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-teal-500 text-black hover:bg-teal-500'
                      : 'bg-black text-white hover:bg-brand-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-black text-center mb-10">What&apos;s included</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-brand-gray-600">Feature</th>
                  <th className="py-3 px-4 font-semibold text-brand-gray-600">Free</th>
                  <th className="py-3 px-4 font-semibold text-brand-gray-600">Monthly</th>
                  <th className="py-3 px-4 font-semibold text-brand-gray-600">Full Access</th>
                  <th className="py-3 px-4 font-semibold text-brand-gray-600">Full Bundle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-100">
                {[
                  ['TMC Flashcards', '20', '100', '100', '100'],
                  ['Other Division Flashcards', '20 each', '-', '-', '100 each'],
                  ['TMC Mini Exams', '1 sample', '5', '5', '5'],
                  ['Other Division Mini Exams', '-', '-', '-', '5 each'],
                  ['TMC Full Exams', '-', '3', '3', '3'],
                  ['Other Division Full Exams', '-', '-', '-', '3 each'],
                  ['Metrics Dashboard', 'Yes', 'Yes', 'Yes', 'Yes'],
                  ['Divisions', 'All (limited)', 'TMC only', 'TMC only', 'All 6'],
                ].map(([feature, ...values]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-4 font-medium text-black">{feature}</td>
                    {values.map((v, i) => (
                      <td key={i} className="py-3 px-4 text-center text-brand-gray-600">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-black text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="border-b border-brand-gray-100 pb-6">
                <h3 className="font-bold text-black text-base">{item.question}</h3>
                <p className="mt-2 text-sm text-brand-gray-500 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-black">Ready to start studying?</h2>
          <p className="mt-3 text-black/70">
            Join thousands of respiratory therapy students preparing for NBRC exams.
          </p>
          <div className="mt-8">
            <Link
              href={isLoggedIn ? '/dashboard' : '/signup'}
              className="btn-secondary text-base px-8 py-4"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Create Free Account'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
