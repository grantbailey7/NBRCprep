import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for NBRCprep, the NBRC respiratory therapy exam prep platform by Certin LLC.',
  alternates: { canonical: 'https://nbrcprep.app/terms' },
  openGraph: {
    title: 'Terms of Service',
    description: 'Terms of Service for NBRCprep, the NBRC respiratory therapy exam prep platform by Certin LLC.',
    url: 'https://nbrcprep.app/terms',
    siteName: 'NBRCprep',
  },
}

export default function TermsOfServicePage() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-brand-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-brand-gray-500">
            Last updated: January 1, {currentYear}
          </p>

          <div className="mt-10 space-y-10 text-brand-gray-700 leading-relaxed">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using NBRCprep By Certin (the &ldquo;Service&rdquo;), available at{' '}
                <Link href="https://nbrcprep.app" className="text-blue-600 underline">
                  nbrcprep.app
                </Link>
                , you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do
                not agree to these Terms, you may not access or use the Service. These Terms
                constitute a legally binding agreement between you and Certin LLC
                (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
            </section>

            {/* 2. Description of Service */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                2. Description of Service
              </h2>
              <p className="mt-3">
                NBRCprep By Certin is an online exam preparation platform designed for respiratory
                therapy professionals studying for National Board for Respiratory Care (NBRC)
                credentialing examinations. The Service provides study materials across six
                divisions: TMC, NPS, ACCS, SDS, CPFT, and RPFT.
              </p>
              <p className="mt-3">
                The Service includes, but is not limited to, flashcards, mini exams, and full-length
                practice exams. Content availability depends on your selected subscription plan.
              </p>
            </section>

            {/* 3. User Accounts */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">3. User Accounts</h2>
              <p className="mt-3">
                To access certain features of the Service, you must register for an account. When
                creating an account, you agree to provide accurate, current, and complete
                information. You are responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your account.
              </p>
              <p className="mt-3">
                You must be at least 18 years of age to create an account and use the Service. By
                registering, you represent and warrant that you meet this age requirement.
              </p>
              <p className="mt-3">
                You agree to notify us immediately at{' '}
                <a href="mailto:certinhq@outlook.com" className="text-blue-600 underline">
                  certinhq@outlook.com
                </a>{' '}
                if you become aware of any unauthorized use of your account or any other breach of
                security.
              </p>
            </section>

            {/* 4. Subscription Plans & Payments */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                4. Subscription Plans &amp; Payments
              </h2>
              <p className="mt-3">The Service offers the following subscription plans:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>FREE</strong> &mdash; Limited access to flashcards and sample exams at no
                  cost. No credit card required.
                </li>
                <li>
                  <strong>MONTHLY ($29/month)</strong> &mdash; Recurring monthly subscription
                  providing expanded access to study materials. Billed automatically each month
                  until cancelled.
                </li>
                <li>
                  <strong>FULL_ACCESS ($149 one-time)</strong> &mdash; A one-time purchase granting
                  lifetime access to all TMC content, including flashcards, mini exams, and
                  full-length exams.
                </li>
                <li>
                  <strong>FULL_BUNDLE ($249 one-time)</strong> &mdash; A one-time purchase granting
                  lifetime access to all content across all six divisions (TMC, NPS, ACCS, SDS,
                  CPFT, RPFT).
                </li>
              </ul>
              <p className="mt-3">
                All payments are processed securely through Stripe. We do not store your credit card
                information on our servers. By purchasing a subscription or one-time plan, you
                authorize Stripe to charge your selected payment method in accordance with the
                pricing of your chosen plan.
              </p>
            </section>

            {/* 5. Refund Policy */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">5. Refund Policy</h2>
              <p className="mt-3">
                Our refund policy is detailed on our{' '}
                <Link href="/refund" className="text-blue-600 underline">
                  Refund Policy
                </Link>{' '}
                page. By using the Service and making a purchase, you acknowledge and agree to the
                terms outlined in that policy.
              </p>
            </section>

            {/* 6. Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                All content available through the Service, including but not limited to flashcard
                text, exam questions, explanations, graphics, and software, is the original work of
                Certin LLC and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-3">
                NBRCprep By Certin is not affiliated with, endorsed by, or sponsored by the National
                Board for Respiratory Care (NBRC) or the American Association for Respiratory Care
                (AARC). All trademarks, service marks, and trade names referenced in the Service are
                the property of their respective owners.
              </p>
            </section>

            {/* 7. Prohibited Use */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">7. Prohibited Use</h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Share your account credentials with others or allow multiple individuals to use a
                  single account.
                </li>
                <li>
                  Copy, reproduce, distribute, or publicly display any content from the Service
                  without prior written consent from Certin LLC.
                </li>
                <li>
                  Use automated tools, bots, scrapers, or similar technology to access or extract
                  content from the Service.
                </li>
                <li>
                  Attempt to reverse-engineer, decompile, or disassemble any part of the Service.
                </li>
                <li>
                  Use the Service in any manner that could be considered cheating on an actual NBRC
                  examination or that violates any testing organization&apos;s policies.
                </li>
                <li>
                  Use the Service for any unlawful purpose or in violation of any applicable laws or
                  regulations.
                </li>
              </ul>
            </section>

            {/* 8. Disclaimers */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">8. Disclaimers</h2>
              <p className="mt-3">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                warranties of any kind, either express or implied.
              </p>
              <p className="mt-3">
                NBRCprep By Certin is an educational study tool and is not a substitute for formal
                clinical training, accredited respiratory therapy education programs, or
                professional medical instruction. The content provided through the Service is
                intended solely for exam preparation purposes.
              </p>
              <p className="mt-3">
                We do not guarantee that use of the Service will result in passing any NBRC
                examination or obtaining any professional credential. Exam outcomes depend on many
                factors beyond the scope of this Service.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                9. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by applicable law, Certin LLC and its officers,
                directors, employees, and agents shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not limited to loss of
                profits, data, or other intangible losses, arising out of or in connection with your
                use of or inability to use the Service.
              </p>
              <p className="mt-3">
                In no event shall our total liability to you for all claims arising from or related
                to the Service exceed the amount you have paid to us in the twelve (12) months
                preceding the event giving rise to the claim.
              </p>
            </section>

            {/* 10. Termination */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">10. Termination</h2>
              <p className="mt-3">
                We reserve the right to suspend or terminate your account and access to the Service
                at our sole discretion, without prior notice, for conduct that we determine violates
                these Terms, is harmful to other users or the Service, or for any other reason we
                deem appropriate.
              </p>
              <p className="mt-3">
                You may terminate your account at any time by contacting us at{' '}
                <a href="mailto:certinhq@outlook.com" className="text-blue-600 underline">
                  certinhq@outlook.com
                </a>
                . Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            {/* 11. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">11. Governing Law</h2>
              <p className="mt-3">
                These Terms shall be governed by and construed in accordance with the laws of the
                United States. Any disputes arising under or in connection with these Terms shall be
                subject to the exclusive jurisdiction of the courts located within the United States.
              </p>
            </section>

            {/* 12. Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">12. Changes to Terms</h2>
              <p className="mt-3">
                We reserve the right to modify these Terms at any time. If we make material changes,
                we will notify you by updating the &ldquo;Last updated&rdquo; date at the top of
                this page and, where appropriate, providing additional notice via email or through
                the Service. Your continued use of the Service after any changes constitutes your
                acceptance of the updated Terms.
              </p>
            </section>

            {/* 13. Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                13. Contact Information
              </h2>
              <p className="mt-3">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Certin LLC</strong>
                <br />
                Email:{' '}
                <a href="mailto:certinhq@outlook.com" className="text-blue-600 underline">
                  certinhq@outlook.com
                </a>
                <br />
                Website:{' '}
                <Link href="https://nbrcprep.app" className="text-blue-600 underline">
                  nbrcprep.app
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
