import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getAuthSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'NBRCprep - Pass the NBRC. The First Time.',
  description:
    'NBRCprep is the #1 NBRC study platform. 2,400 original flashcards, 180 timed mini exams, and full-length simulations across all 6 NBRC divisions. Start free today.',
  alternates: { canonical: 'https://nbrcprep.app' },
}

const HOMEPAGE_FAQ = [
  {
    question: 'How hard is the TMC exam?',
    answer: 'The TMC (Therapist Multiple-Choice) exam is considered moderately difficult. It has 160 questions (140 scored, 20 pretest) covering patient assessment, airway management, ventilator management, and pharmacology. The national pass rate is around 90% for first-time test-takers from accredited programs, but thorough preparation is essential.',
  },
  {
    question: 'How many questions are on the NBRC exam?',
    answer: 'The TMC exam has 160 multiple-choice questions (140 scored). The Clinical Simulation Exam (CSE) for RRT has 22 clinical scenarios. Specialty exams vary: NPS has 115 questions, ACCS has 115, SDS has 135, CPFT has 200, and RPFT has 200.',
  },
  {
    question: 'What is a passing score on the TMC?',
    answer: 'The TMC uses a scaled scoring system. A score at or above the CRT cut score earns the CRT credential. A higher score at or above the RRT cut score qualifies you to take the Clinical Simulation Exam (CSE) for the RRT credential. Exact cut scores are set by the NBRC and may be adjusted periodically.',
  },
  {
    question: 'How long should I study for the NBRC?',
    answer: 'Most successful candidates study 4 to 8 weeks for the TMC exam, dedicating 1 to 3 hours per day. NBRCprep is designed for efficient daily study sessions using flashcards for foundational knowledge, mini exams for targeted practice, and full-length simulations to build test-day stamina.',
  },
  {
    question: "What's the difference between CRT and RRT?",
    answer: 'CRT (Certified Respiratory Therapist) and RRT (Registered Respiratory Therapist) are both earned through the TMC exam. A lower passing score earns the CRT credential, while a higher score qualifies you for the Clinical Simulation Exam (CSE). Passing the CSE earns the RRT credential, which is preferred by most employers.',
  },
  {
    question: 'What are the NBRC exams?',
    answer: 'The NBRC (National Board for Respiratory Care) administers credentialing exams for respiratory therapists. The TMC exam is the entry-level exam required for CRT and RRT credentials. Specialty exams include NPS (Neonatal/Pediatric), ACCS (Adult Critical Care), SDS (Sleep Disorders), CPFT (Certified Pulmonary Function Tech), and RPFT (Registered Pulmonary Function Tech).',
  },
  {
    question: 'How many NBRC practice questions does NBRCprep have?',
    answer: 'NBRCprep has 2,400 original flashcards (400 per division), 3,600 mini exam questions (180 exams x 20 questions), and 18 full-length simulations across all 6 NBRC divisions.',
  },
  {
    question: 'Is NBRCprep free?',
    answer: 'Yes. NBRCprep has a free tier with 20 flashcards per division and a sample mini exam. No credit card required. Monthly access starts at $29/month, and one-time lifetime access starts at $149.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'NBRCprep',
      url: 'https://nbrcprep.app',
      description: 'NBRC exam prep platform with 2,400 flashcards, 180 mini exams, and full-length practice exams for all 6 NBRC divisions.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      offers: [
        { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
        { '@type': 'Offer', price: '29', priceCurrency: 'USD', name: 'Monthly (TMC)', billingIncrement: 'P1M' },
        { '@type': 'Offer', price: '149', priceCurrency: 'USD', name: 'Full Access (TMC)' },
        { '@type': 'Offer', price: '249', priceCurrency: 'USD', name: 'Full Bundle' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: HOMEPAGE_FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

const TESTIMONIALS = [
  { text: "NBRCprep made the TMC feel manageable for the first time", author: "Alex M., RRT" },
  { text: "The explanations are better than anything else I've used", author: "Jordan T." },
  { text: "Passed the TMC on my first attempt after 3 weeks", author: "Sam K., CRT" },
  { text: "The mini exams are brutally hard - exactly what I needed", author: "Morgan L." },
  { text: "Best value study tool for respiratory therapists. Period.", author: "Taylor B." },
  { text: "Finally passed after failing twice. This site is the difference maker", author: "Riley S., RRT" },
  { text: "The metrics dashboard kept me motivated every single day", author: "Drew F." },
  { text: "I recommend NBRCprep to every RT student I mentor", author: "Casey R., RRT-ACCS" },
]

const DIVISIONS = [
  { slug: 'tmc', code: 'TMC', name: 'Therapist Multiple-Choice', description: 'Patient assessment, airway management, ventilator management, pharmacology, and clinical decision-making.' },
  { slug: 'nps', code: 'NPS', name: 'Neonatal/Pediatric Specialist', description: 'Neonatal resuscitation, pediatric ventilation, surfactant therapy, and developmental physiology.' },
  { slug: 'accs', code: 'ACCS', name: 'Adult Critical Care Specialist', description: 'Advanced ventilator management, hemodynamic monitoring, ARDS, and critical care protocols.' },
  { slug: 'sds', code: 'SDS', name: 'Sleep Disorders Specialist', description: 'Polysomnography, CPAP/BiPAP titration, sleep-disordered breathing, and scoring criteria.' },
  { slug: 'cpft', code: 'CPFT', name: 'Certified Pulmonary Function Tech', description: 'Spirometry, lung volumes, diffusion capacity, and quality assurance in PFT labs.' },
  { slug: 'rpft', code: 'RPFT', name: 'Registered Pulmonary Function Tech', description: 'Advanced PFT interpretation, bronchial provocation, exercise testing, and research methodology.' },
]

export default async function HomePage() {
  const session = await getAuthSession()
  const isLoggedIn = !!session
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="bg-white pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            2,400+ Flashcards · 3,600 Practice Questions · 6 Divisions
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-black leading-[1.05] tracking-tight">
            Pass the NBRC.<br />
            <span className="text-teal-500">The first time.</span>
          </h1>
          <p className="mt-6 text-xl text-brand-gray-500 max-w-2xl mx-auto leading-relaxed">
            NBRCprep gives you the sharpest flashcards, the hardest practice exams, and the
            metrics to track exactly where you stand - across all 6 NBRC divisions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
              Start Free - No Card Required
            </Link>
            <Link href="/pricing" className="btn-outline text-base px-8 py-4 w-full sm:w-auto">
              View Plans
            </Link>
          </div>
          <p className="mt-4 text-sm text-brand-gray-400">
            Free tier includes 20 flashcards per division + 1 sample mini exam
          </p>
        </div>
      </section>

      <section className="bg-brand-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Everything you need to pass</h2>
            <p className="section-subtitle">Designed around how the NBRC actually tests you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🗂',
                title: 'Flashcards',
                count: '2,400+',
                desc: '400 original, clinically-focused flashcards per division with immediate answer reveals and progress tracking.',
              },
              {
                icon: '📝',
                title: 'Mini Exams',
                count: '180',
                desc: '30 × 20-question mini exams per division. Timed, scored, and reviewed with detailed explanations.',
              },
              {
                icon: '🎯',
                title: 'Full Exams',
                count: '18',
                desc: '3 full-length simulations per division, timed to mirror the real NBRC exams. Pass with ≥90%.',
              },
              {
                icon: '📊',
                title: 'Metrics',
                count: '6',
                desc: 'Per-division dashboards track flashcard completion, exam history, average scores, and study streaks.',
              },
            ].map((f) => (
              <div key={f.title} className="card p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="text-3xl font-black text-teal-500 mb-1">{f.count}</div>
                <h3 className="font-bold text-black text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-brand-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">All 6 NBRC Divisions</h2>
            <p className="section-subtitle">Complete coverage, exam-aligned depth</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((div) => (
              <Link
                key={div.slug}
                href={`/divisions/${div.slug}`}
                className="card p-6 hover:border-teal-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block bg-teal-500 text-black text-xs font-black px-2.5 py-1 rounded">
                    {div.code}
                  </span>
                  <svg
                    className="w-5 h-5 text-brand-gray-300 group-hover:text-teal-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-black text-lg mb-1">{div.name}</h3>
                <p className="text-sm text-brand-gray-500">{div.description}</p>
                <div className="mt-4 flex gap-3 text-xs text-brand-gray-400">
                  <span>400 flashcards</span>
                  <span>·</span>
                  <span>30 mini exams</span>
                  <span>·</span>
                  <span>3 full exams</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">How NBRCprep works</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Build your foundation with Flashcards',
                desc: 'Work through 400 original flashcards per division. Mark cards as Known or flag them for Review Later. Your progress is tracked and visualized in real time.',
              },
              {
                step: '02',
                title: 'Test yourself with Mini Exams',
                desc: 'Take 20-question mini exams that hit specific topic clusters. After each exam, every wrong answer gets a detailed deep-dive explanation.',
              },
              {
                step: '03',
                title: 'Simulate the real thing with Full Exams',
                desc: 'Sit full-length timed simulations that mirror the actual NBRC format. Score ≥90% to earn a pass badge. See exactly what to study next.',
              },
              {
                step: '04',
                title: 'Track everything on your Dashboard',
                desc: 'Your Metrics Dashboard shows per-division progress bars, exam history, average scores, and streaks - so you always know where you stand.',
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-black font-black text-sm rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">{step.title}</h3>
                  <p className="mt-1 text-brand-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white">Simple pricing. No tricks.</h2>
            <p className="text-brand-gray-400 mt-2">Start free. Upgrade when you&apos;re ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Monthly',
                subtitle: 'TMC Only',
                price: '$29',
                period: 'per month',
                features: ['TMC flashcards (400)', 'TMC mini exams (30)', 'TMC full exams (3)', 'Cancel anytime'],
                cta: 'Start Monthly',
                href: isLoggedIn ? '/billing?upgrade=monthly' : '/signup?plan=monthly',
                highlight: false,
              },
              {
                name: 'Full Access',
                subtitle: 'TMC Only',
                price: '$149',
                period: 'one-time',
                features: ['All TMC content', '400 flashcards', '30 mini exams', '3 full-length exams', 'Lifetime access'],
                cta: 'Get Full Access',
                href: isLoggedIn ? '/billing?upgrade=full_access' : '/signup?plan=full_access',
                highlight: true,
              },
              {
                name: 'Full Bundle',
                subtitle: 'All 6 Divisions',
                price: '$249',
                period: 'one-time',
                features: ['All 6 divisions', '2,400 flashcards', '180 mini exams', '18 full-length exams', 'Lifetime access'],
                cta: 'Get Full Bundle',
                href: isLoggedIn ? '/billing?upgrade=full_bundle' : '/signup?plan=full_bundle',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 border ${
                  plan.highlight
                    ? 'bg-teal-500 border-teal-500 text-black'
                    : 'bg-brand-gray-900 border-brand-gray-800 text-white'
                }`}
              >
                {plan.highlight && (
                  <div className="text-xs font-bold uppercase tracking-wider mb-3">Most Popular</div>
                )}
                <h3 className="font-bold text-xl">{plan.name}</h3>
                <p className={`text-xs font-semibold mt-0.5 ${plan.highlight ? 'text-black/50' : 'text-brand-gray-400'}`}>{plan.subtitle}</p>
                <div className="mt-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-black/60' : 'text-brand-gray-400'}`}>
                    /{plan.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      ? 'bg-black text-white hover:bg-brand-gray-800'
                      : 'bg-white text-black hover:bg-brand-gray-100'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 overflow-hidden">
        <div className="mb-6 text-center">
          <p className="text-sm text-brand-gray-400 uppercase font-semibold tracking-wider">What our users say</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="mx-4 flex-shrink-0 bg-brand-gray-50 border border-brand-gray-200 rounded-xl p-5 w-72"
              >
                <div className="flex gap-0.5 mb-3 text-teal-500">
                  {'★★★★★'.split('').map((star, j) => (
                    <span key={j}>{star}</span>
                  ))}
                </div>
                <p className="text-sm text-black font-medium leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-2 text-xs text-brand-gray-400">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">NBRC Exam FAQ</h2>
            <p className="section-subtitle">Answers to the most common questions about the NBRC exams</p>
          </div>
          <div className="space-y-6">
            {HOMEPAGE_FAQ.map((item) => (
              <div key={item.question} className="border-b border-brand-gray-100 pb-6">
                <h3 className="font-bold text-black text-base">{item.question}</h3>
                <p className="mt-2 text-sm text-brand-gray-500 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white">Ready to pass the NBRC?</h2>
          <p className="mt-3 text-white/80">
            Start with the free tier today - no credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto">
              Create Free Account
            </Link>
            <Link href="/pricing" className="btn-outline border-black text-base px-8 py-4 w-full sm:w-auto">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
