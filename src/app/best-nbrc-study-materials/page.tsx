import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SignupCTA } from '@/components/seo/SignupCTA'

const CURRENT_YEAR = new Date().getFullYear()

export const metadata: Metadata = {
  title: `Best NBRC Study Materials & Prep Courses ${CURRENT_YEAR}`,
  description: `Compare the best NBRC exam prep courses, study guides, and practice tests for ${CURRENT_YEAR}. Side-by-side pricing, features, and honest reviews of every major TMC and RRT study tool.`,
  keywords: [
    'best NBRC study materials',
    'NBRC exam prep courses',
    'best TMC exam prep',
    'respiratory therapy study materials',
    'NBRC practice tests',
    'TMC study guide',
    'RRT exam prep courses',
    'best respiratory therapy exam prep',
    'NBRC exam review courses',
    'TMC practice questions',
  ],
  alternates: { canonical: 'https://nbrcprep.app/best-nbrc-study-materials' },
  openGraph: {
    title: `Best NBRC Study Materials & Prep Courses ${CURRENT_YEAR}`,
    description: `Honest comparison of every major NBRC exam prep tool. Pricing, features, and what actually helps you pass the TMC.`,
    url: 'https://nbrcprep.app/best-nbrc-study-materials',
    type: 'article',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Best%20NBRC%20Study%20Materials&type=resource', width: 1200, height: 630 }],
    publishedTime: '2026-08-31T00:00:00Z',
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: `Best NBRC Study Materials & Prep Courses ${CURRENT_YEAR}`,
    description: `Honest comparison of every major NBRC exam prep tool. Pricing, features, and what actually helps you pass.`,
    images: ['/api/og?title=Best%20NBRC%20Study%20Materials&type=resource'],
  },
}

const FAQ_ITEMS = [
  {
    question: 'Is NBRCprep free?',
    answer:
      'Yes. NBRCprep offers a free tier that includes 20 flashcards per division and 1 sample TMC mini exam. No credit card required. Paid plans start at $29/month for full TMC access, or $149 one-time for lifetime TMC access.',
  },
  {
    question: 'What is the best way to study for the NBRC TMC exam?',
    answer:
      'The most effective approach combines active recall (flashcards and practice questions) with timed practice exams that simulate real test conditions. Start with content review, then shift to heavy practice testing 4-6 weeks before your exam date. Use a tool that tracks your weak areas so you can focus your study time where it matters most.',
  },
  {
    question: 'How many practice questions do I need to pass the TMC?',
    answer:
      'Most successful candidates complete 500-1,000+ practice questions before sitting for the TMC exam. Quality matters more than quantity - focus on questions that include detailed explanations so you understand why each answer is correct, not just which answer is correct.',
  },
  {
    question: 'Is Kettering worth it for the NBRC exam?',
    answer:
      'Kettering National Seminars has been a trusted name in RT exam prep for over 40 years. Their live seminars and home study courses are comprehensive but come at a higher price point ($300-$500+). They are worth considering if you prefer structured, lecture-based learning with a study guide and workbook included.',
  },
  {
    question: 'Can I pass the TMC exam with free study materials?',
    answer:
      'It is possible but challenging. Free resources like the NBRC practice exam, free flashcard tiers, and YouTube lectures can supplement your preparation. However, most students benefit from at least one paid resource that provides a large bank of practice questions with explanations and progress tracking.',
  },
  {
    question: 'What is the difference between CRT and RRT?',
    answer:
      'Both the CRT (Certified Respiratory Therapist) and RRT (Registered Respiratory Therapist) credentials come from passing the TMC exam. A higher score on the same TMC exam earns the RRT credential, while a passing score earns the CRT. The RRT is the preferred credential for most employers and opens more career opportunities.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `Best NBRC Study Materials & Prep Courses ${CURRENT_YEAR}`,
  description: `Compare the best NBRC exam prep courses, study guides, and practice tests for ${CURRENT_YEAR}.`,
  url: 'https://nbrcprep.app/best-nbrc-study-materials',
  datePublished: '2026-08-31T00:00:00Z',
  dateModified: new Date().toISOString(),
  publisher: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
  author: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
  image: 'https://nbrcprep.app/api/og?title=Best%20NBRC%20Study%20Materials&type=resource',
}

interface Tool {
  name: string
  url: string
  price: string
  description: string
  strengths: string[]
  weaknesses: string[]
  flashcards: string
  practiceExams: string
  freeTier: string
  mobileApp: string
  highlight?: boolean
}

const TOOLS: Tool[] = [
  {
    name: 'NBRCprep',
    url: '/pricing',
    price: 'Free / $29 mo / $149 one-time / $249 all divisions',
    description:
      'Purpose-built NBRC exam prep platform with flashcards, timed mini exams, and full-length exam simulations across all 6 NBRC divisions (TMC, NPS, ACCS, SDS, CPFT, RPFT). Includes a metrics dashboard that tracks your strengths and weak areas over time.',
    strengths: [
      'Covers all 6 NBRC divisions, not just TMC',
      'Free tier with no credit card required',
      'Lifetime access option ($149 TMC, $249 all divisions)',
      '600+ flashcards and 18 full-length practice exams',
      'Metrics dashboard tracks weak areas automatically',
      'Modern interface built for focused study sessions',
    ],
    weaknesses: [
      'Newer platform - smaller user community than established brands',
      'No video lectures or audio content',
      'No live seminar or instructor-led option',
    ],
    flashcards: '600+',
    practiceExams: '18 full-length + 30 mini',
    freeTier: 'Yes (20 cards/div + 1 mini exam)',
    mobileApp: 'Mobile web',
    highlight: true,
  },
  {
    name: 'Kettering National Seminars',
    url: 'https://www.ketteringseminars.com',
    price: '$300-$500+ (seminars & home study)',
    description:
      'The most established name in respiratory therapy exam prep. Kettering has been running live review seminars and home study courses for over 40 years. Their program includes a comprehensive study guide, workbook, practice exam, and audio lectures.',
    strengths: [
      '40+ year track record in RT exam prep',
      'Live seminar option with in-person instruction',
      'Comprehensive study guide and workbook included',
      'Audio lectures for on-the-go study',
      'Well-known and trusted by RT programs nationwide',
    ],
    weaknesses: [
      'Higher price point than most alternatives',
      'Live seminars require travel and time off',
      'Interface and materials feel dated compared to modern platforms',
      'No free tier or trial available',
    ],
    flashcards: 'Included in workbook',
    practiceExams: 'Included (quantity varies)',
    freeTier: 'No',
    mobileApp: 'TMC Lectures app ($80)',
  },
  {
    name: 'AARC Exam Prep Program',
    url: 'https://www.aarc.org/education/aarc-exam-prep-program/',
    price: '$299 members / $399 non-members',
    description:
      'The official exam prep program from the American Association for Respiratory Care. Includes video lectures recorded by practicing RTs, two TMC self-assessment exams, and two Clinical Simulation exams sourced directly from the NBRC. Access lasts 365 days.',
    strengths: [
      'Practice exams come directly from the NBRC',
      'Video content developed by practicing respiratory therapists',
      'Earn up to 31 CRCE credits while studying',
      'Backed by the authority of the AARC',
    ],
    weaknesses: [
      'Expensive, especially for non-AARC members ($399)',
      'Limited to TMC and CSE prep only',
      'No flashcard system for quick review',
      '365-day access window may pressure slow studiers',
    ],
    flashcards: 'No',
    practiceExams: '2 TMC + 2 CSE',
    freeTier: 'No',
    mobileApp: 'No',
  },
  {
    name: 'Lindsey Jones',
    url: 'https://www.lindsey-jones.com',
    price: '$300-$400+ (seminars & home study)',
    description:
      'A well-known RT exam review provider offering live three-day seminars, webinars, and home study packages. Their home study package includes a review manual, streaming audio lectures, flashcards, rapid reference card, and access to Lindsey Jones University with thousands of practice questions and clinical simulations.',
    strengths: [
      'Thousands of practice questions and clinical simulations',
      'Live three-day seminars with group pricing discounts',
      'Home study includes audio lectures and flashcards',
      'Strong focus on clinical simulation exam prep',
    ],
    weaknesses: [
      'Higher price point similar to Kettering',
      'Live seminars require travel',
      'Online platform can feel outdated',
      'No free trial or tier',
    ],
    flashcards: 'Included in home study',
    practiceExams: 'Yes (TMC + CSE)',
    freeTier: 'No',
    mobileApp: 'Companion app (with home study)',
  },
  {
    name: 'Respiratory Therapy Zone',
    url: 'https://www.respiratorytherapyzone.com',
    price: '$50-$200 (bundles vary)',
    description:
      'An online resource run by respiratory therapist and educator Johnny Lung (Gary Persing). Offers a TMC Test Bank with practice questions, TMC Exam Hacks course, and a CSE Boost Course. Known for affordable pricing and a large library of free blog content.',
    strengths: [
      'More affordable than seminar-based options',
      'Large free content library (blog posts, practice questions)',
      'TMC Test Bank with practice exams',
      'Created by a practicing RT educator',
    ],
    weaknesses: [
      'Focused primarily on TMC/CSE, limited specialty exam coverage',
      'No structured curriculum or progress tracking',
      'No flashcard system',
      'Products sold separately can add up',
    ],
    flashcards: 'No',
    practiceExams: 'Yes (TMC Test Bank)',
    freeTier: 'Free blog content + limited questions',
    mobileApp: 'No',
  },
  {
    name: 'Pocket Prep (NBRC RRT)',
    url: 'https://www.pocketprep.com/exams/nbrc-rrt/',
    price: '$10-$20/month',
    description:
      'A mobile-first quiz app covering hundreds of certification exams, including the NBRC RRT. Offers daily practice questions, progress tracking, and gamified learning. Designed for quick study sessions on your phone.',
    strengths: [
      'Excellent mobile app experience',
      'Affordable monthly subscription',
      'Gamified learning with progress tracking',
      'Pass guarantee with extended access',
      '30 free questions to try before buying',
    ],
    weaknesses: [
      'Generic platform - not built specifically for NBRC',
      'Smaller question bank compared to dedicated RT prep tools',
      'No flashcards, full-length exams, or clinical simulations',
      'Subscription model means ongoing cost',
    ],
    flashcards: 'No',
    practiceExams: 'Quiz mode only',
    freeTier: '30 free questions',
    mobileApp: 'Yes (iOS + Android)',
  },
  {
    name: 'Mometrix (RRT Exam Secrets)',
    url: 'https://www.mometrix.com/studyguides/rrt/',
    price: '$50-$90 (guide or flashcards)',
    description:
      'A test prep publisher offering an RRT Exam Secrets Study Guide and a physical flashcard set. The study guide covers all TMC content domains with practice questions and detailed answer explanations. Includes a money-back guarantee.',
    strengths: [
      'Affordable one-time purchase',
      'Physical flashcard option for tactile learners',
      'Detailed answer explanations',
      '1-year money-back guarantee',
      'Free online practice test available',
    ],
    weaknesses: [
      'Static content - no adaptive learning or progress tracking',
      'Physical format only (no interactive platform)',
      'Generic test prep company, not RT specialists',
      'No timed exam simulation',
    ],
    flashcards: 'Yes (physical cards, ~$90)',
    practiceExams: 'Practice questions in guide',
    freeTier: 'Free practice test online',
    mobileApp: 'No',
  },
]

export default function BestNBRCStudyMaterialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="flex-1 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-brand-gray-400 mb-8">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-gray-600">Best NBRC Study Materials</span>
          </nav>

          {/* Hero */}
          <h1 className="text-3xl sm:text-4xl font-black text-black leading-tight">
            Best NBRC Study Materials & Prep Courses {CURRENT_YEAR}
          </h1>
          <p className="mt-4 text-lg text-brand-gray-500 leading-relaxed">
            Choosing the right study materials can make the difference between passing the{' '}
            <Link href="/divisions/tmc" className="text-teal-600 hover:text-teal-700 font-medium">TMC exam</Link>{' '}
            on your first attempt and having to retake it. This page compares every major NBRC exam prep
            tool available right now, including pricing, features, strengths, and honest weaknesses.
          </p>
          <p className="mt-3 text-sm text-brand-gray-400 italic border-l-2 border-brand-gray-200 pl-4">
            Transparency note: We built{' '}
            <Link href="/" className="text-teal-600 hover:text-teal-700">NBRCprep</Link>, so we are
            biased. But here is an honest comparison of every major option. We list our product first,
            include our weaknesses, and let you decide.
          </p>

          {/* Quick nav */}
          <div className="mt-8 p-4 bg-white rounded-xl border border-brand-gray-200">
            <p className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-3">Jump to</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <a
                  key={tool.name}
                  href={`#${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-sm text-teal-600 hover:text-teal-700 bg-teal-500/10 px-3 py-1.5 rounded-lg font-medium"
                >
                  {tool.name}
                </a>
              ))}
              <a href="#comparison-table" className="text-sm text-teal-600 hover:text-teal-700 bg-teal-500/10 px-3 py-1.5 rounded-lg font-medium">
                Comparison Table
              </a>
              <a href="#faq" className="text-sm text-teal-600 hover:text-teal-700 bg-teal-500/10 px-3 py-1.5 rounded-lg font-medium">
                FAQ
              </a>
            </div>
          </div>

          {/* Tool Reviews */}
          <div className="mt-12 space-y-10">
            {TOOLS.map((tool, index) => (
              <section
                key={tool.name}
                id={tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className={`bg-white rounded-xl border-2 p-6 sm:p-8 ${
                  tool.highlight ? 'border-teal-400 shadow-md' : 'border-brand-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-brand-gray-400">#{index + 1}</span>
                      <h2 className="text-xl font-black text-black">{tool.name}</h2>
                      {tool.highlight && (
                        <span className="bg-teal-500/20 text-teal-700 text-xs font-bold px-2.5 py-1 rounded">
                          Our Pick
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-teal-600">{tool.price}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-brand-gray-600 leading-relaxed">{tool.description}</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-bold text-green-700 mb-2">Strengths</h3>
                    <ul className="space-y-1.5">
                      {tool.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-brand-gray-600">
                          <svg className="w-4 h-4 flex-shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-red-700 mb-2">Weaknesses</h3>
                    <ul className="space-y-1.5">
                      {tool.weaknesses.map((w) => (
                        <li key={w} className="flex items-start gap-2 text-sm text-brand-gray-600">
                          <svg className="w-4 h-4 flex-shrink-0 text-red-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {tool.highlight && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/signup"
                      className="bg-teal-500 text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-400 transition-colors"
                    >
                      Try NBRCprep Free
                    </Link>
                    <Link
                      href="/pricing"
                      className="bg-black text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-brand-gray-800 transition-colors"
                    >
                      View Pricing
                    </Link>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Comparison Table */}
          <section id="comparison-table" className="mt-16">
            <h2 className="text-2xl font-black text-black mb-6">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto bg-white rounded-xl border border-brand-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-gray-200 bg-brand-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-brand-gray-600 sticky left-0 bg-brand-gray-50 min-w-[140px]">Tool</th>
                    <th className="py-3 px-4 font-semibold text-brand-gray-600 min-w-[160px]">Price</th>
                    <th className="py-3 px-4 font-semibold text-brand-gray-600">Flashcards</th>
                    <th className="py-3 px-4 font-semibold text-brand-gray-600 min-w-[140px]">Practice Exams</th>
                    <th className="py-3 px-4 font-semibold text-brand-gray-600">Free Tier</th>
                    <th className="py-3 px-4 font-semibold text-brand-gray-600">Mobile App</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-gray-100">
                  {TOOLS.map((tool) => (
                    <tr key={tool.name} className={tool.highlight ? 'bg-teal-500/5' : ''}>
                      <td className={`py-3 px-4 font-medium sticky left-0 ${tool.highlight ? 'text-teal-700 bg-teal-500/5' : 'text-black bg-white'}`}>
                        {tool.name}
                        {tool.highlight && <span className="block text-xs text-teal-500 font-normal">Our product</span>}
                      </td>
                      <td className="py-3 px-4 text-brand-gray-600">{tool.price}</td>
                      <td className="py-3 px-4 text-center text-brand-gray-600">{tool.flashcards}</td>
                      <td className="py-3 px-4 text-center text-brand-gray-600">{tool.practiceExams}</td>
                      <td className="py-3 px-4 text-center text-brand-gray-600">{tool.freeTier}</td>
                      <td className="py-3 px-4 text-center text-brand-gray-600">{tool.mobileApp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to choose */}
          <section className="mt-16">
            <h2 className="text-2xl font-black text-black mb-4">How to Choose the Right Study Materials</h2>
            <div className="prose prose-sm max-w-none text-brand-gray-600">
              <p>
                There is no single &quot;best&quot; option for everyone. The right choice depends on your learning
                style, budget, and how much time you have before your exam. Here are some guidelines:
              </p>
              <ul className="space-y-2 mt-4">
                <li>
                  <strong className="text-black">If you learn best from lectures and structured courses:</strong>{' '}
                  Kettering National Seminars or Lindsey Jones offer comprehensive seminar-based programs with
                  study guides and audio content. Budget $300-$500.
                </li>
                <li>
                  <strong className="text-black">If you want official NBRC practice exams:</strong>{' '}
                  The AARC Exam Prep Program includes self-assessment exams sourced directly from the NBRC.
                  This is the closest you can get to the real test format.
                </li>
                <li>
                  <strong className="text-black">If you want affordable, question-bank-focused prep:</strong>{' '}
                  <Link href="/signup" className="text-teal-600 hover:text-teal-700 no-underline font-medium">NBRCprep</Link>{' '}
                  and Respiratory Therapy Zone offer large question banks at lower price points. NBRCprep
                  includes flashcards and a{' '}
                  <Link href="/pricing" className="text-teal-600 hover:text-teal-700 no-underline font-medium">free tier</Link>{' '}
                  with no credit card required.
                </li>
                <li>
                  <strong className="text-black">If you need all 6 NBRC divisions:</strong>{' '}
                  Most tools focus only on TMC/CSE.{' '}
                  <Link href="/pricing" className="text-teal-600 hover:text-teal-700 no-underline font-medium">NBRCprep&apos;s Full Bundle</Link>{' '}
                  ($249) covers TMC,{' '}
                  <Link href="/divisions/nps" className="text-teal-600 hover:text-teal-700 no-underline font-medium">NPS</Link>,{' '}
                  <Link href="/divisions/accs" className="text-teal-600 hover:text-teal-700 no-underline font-medium">ACCS</Link>,{' '}
                  <Link href="/divisions/sds" className="text-teal-600 hover:text-teal-700 no-underline font-medium">SDS</Link>,{' '}
                  <Link href="/divisions/cpft" className="text-teal-600 hover:text-teal-700 no-underline font-medium">CPFT</Link>, and{' '}
                  <Link href="/divisions/rpft" className="text-teal-600 hover:text-teal-700 no-underline font-medium">RPFT</Link>.
                </li>
                <li>
                  <strong className="text-black">If you prefer mobile-first study:</strong>{' '}
                  Pocket Prep offers the best native mobile app experience for quick daily practice sessions.
                </li>
              </ul>
              <p className="mt-4">
                Many students combine two or more tools. A common approach is pairing a question bank
                (like NBRCprep or Respiratory Therapy Zone) with a review course (like Kettering or AARC)
                for the most comprehensive preparation.
              </p>
            </div>
          </section>

          {/* Mid-page CTA */}
          <div className="mt-12">
            <SignupCTA
              variant="banner"
              heading="Start with 20 free flashcards and a sample exam"
              description="No credit card. No commitment. See if NBRCprep is the right fit before you spend anything."
              buttonText="Try NBRCprep Free"
            />
          </div>

          {/* FAQ */}
          <section id="faq" className="mt-16">
            <h2 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="bg-white rounded-xl border border-brand-gray-200 p-6">
                  <h3 className="font-bold text-black text-base">{item.question}</h3>
                  <p className="mt-2 text-sm text-brand-gray-500 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-12">
            <SignupCTA
              variant="banner"
              heading="Ready to start studying?"
              description="NBRCprep has 600+ flashcards, 30 mini exams, and 18 full-length simulations across all 6 NBRC divisions. Start free today."
            />
          </div>

          {/* Related resources */}
          <section className="mt-12">
            <h2 className="text-lg font-bold text-black mb-4">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/guides/nbrc-tmc-exam-guide', label: 'TMC Exam Guide: Everything You Need to Know' },
                { href: '/tips/tmc-exam-tips', label: 'TMC Exam Tips and Strategies' },
                { href: '/blog/nbrc-exam-study-schedule-12-week-plan', label: 'NBRC Exam Study Schedule: The 12-Week Plan' },
                { href: '/blog/how-to-register-nbrc-exam', label: 'How to Register for the NBRC Exam' },
                { href: '/tools/abg-interpreter', label: 'Free ABG Interpreter Tool' },
                { href: '/blog/nbrc-exam-retake-policy-what-happens-if-you-fail', label: 'NBRC Exam Retake Policy' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-teal-600 hover:text-teal-700 bg-white border border-brand-gray-200 rounded-lg px-4 py-3 hover:border-teal-400 transition-colors"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
