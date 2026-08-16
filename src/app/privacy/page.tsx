import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for NBRCprep. Learn how we collect, use, and protect your data on our NBRC exam prep platform.',
  alternates: { canonical: 'https://nbrcprep.app/privacy' },
}

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-brand-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-brand-gray-500">
            Last updated: January 1, {currentYear}
          </p>

          <div className="mt-10 space-y-10 text-brand-gray-700 leading-relaxed">
            <p>
              NBRCprep By Certin (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              operated by Certin LLC, is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our
              website at{' '}
              <Link href="https://nbrcprep.app" className="text-blue-600 underline">
                nbrcprep.app
              </Link>{' '}
              and related services (the &ldquo;Service&rdquo;).
            </p>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                1. Information We Collect
              </h2>
              <p className="mt-3">
                We collect information in the following categories:
              </p>
              <p className="mt-3">
                <strong>Account Information:</strong> When you register for an account, we collect
                your name, email address, and any other information you provide during the
                registration process.
              </p>
              <p className="mt-3">
                <strong>Usage Data:</strong> We automatically collect information about how you
                interact with the Service, including pages visited, features used, exam scores,
                study progress, device type, browser type, IP address, and access timestamps.
              </p>
              <p className="mt-3">
                <strong>Payment Information:</strong> When you purchase a subscription or one-time
                plan, payment information (such as credit card number and billing address) is
                collected and processed directly by Stripe, our third-party payment processor. We do
                not store your full payment card details on our servers.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                2. How We Use Your Information
              </h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain the Service.</li>
                <li>Process transactions and manage your subscriptions.</li>
                <li>
                  Improve and personalize your experience, including tracking study progress and
                  recommending content.
                </li>
                <li>
                  Communicate with you, including sending account-related notifications, updates,
                  and promotional materials (with your consent where required).
                </li>
                <li>Monitor and analyze usage patterns to improve the Service.</li>
                <li>Detect, prevent, and address technical issues or fraudulent activity.</li>
              </ul>
            </section>

            {/* 3. Cookies and Tracking */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                3. Cookies and Tracking
              </h2>
              <p className="mt-3">
                We use cookies and similar tracking technologies to enhance your experience on the
                Service.
              </p>
              <p className="mt-3">
                <strong>Session Cookies:</strong> These are essential for the operation of the
                Service. They enable you to stay logged in and navigate between pages without losing
                your session.
              </p>
              <p className="mt-3">
                <strong>Analytics:</strong> We may use analytics tools to collect information about
                how visitors use the Service. This data helps us understand usage patterns and
                improve the Service. Analytics data is collected in aggregate and does not personally
                identify individual users.
              </p>
              <p className="mt-3">
                You can control cookies through your browser settings. However, disabling certain
                cookies may affect the functionality of the Service.
              </p>
            </section>

            {/* 4. Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                4. Third-Party Services
              </h2>
              <p className="mt-3">
                We use the following third-party services to operate the Service:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Stripe</strong> &mdash; For secure payment processing. Stripe&apos;s
                  privacy policy governs how they handle your payment information. Learn more at{' '}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    stripe.com/privacy
                  </a>
                  .
                </li>
                <li>
                  <strong>Vercel</strong> &mdash; For website hosting and deployment. Vercel may
                  collect certain technical data as part of hosting the Service.
                </li>
                <li>
                  <strong>Resend</strong> &mdash; For transactional email delivery, including
                  account verification, password resets, and other service-related communications.
                </li>
              </ul>
              <p className="mt-3">
                These third-party services have their own privacy policies, and we encourage you to
                review them. We are not responsible for the privacy practices of third-party
                services.
              </p>
            </section>

            {/* 5. Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">5. Data Security</h2>
              <p className="mt-3">
                We implement reasonable technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or
                destruction. These measures include encryption of data in transit, secure server
                infrastructure, and access controls.
              </p>
              <p className="mt-3">
                However, no method of transmission over the Internet or method of electronic storage
                is 100% secure. While we strive to protect your personal information, we cannot
                guarantee its absolute security.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">6. Data Retention</h2>
              <p className="mt-3">
                We retain your personal information for as long as your account is active or as
                needed to provide you with the Service. We may also retain certain information as
                required by law, to resolve disputes, enforce our agreements, or for legitimate
                business purposes.
              </p>
              <p className="mt-3">
                If you request deletion of your account, we will delete or anonymize your personal
                information within a reasonable timeframe, except where retention is required by law.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">7. Your Rights</h2>
              <p className="mt-3">
                Depending on your location, you may have the following rights regarding your
                personal information:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> You may request a copy of the personal information we
                  hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You may request that we correct any inaccurate or
                  incomplete personal information.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request that we delete your personal
                  information, subject to certain legal exceptions.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You may opt out of receiving promotional communications
                  from us by following the unsubscribe instructions in those messages or by
                  contacting us directly.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:certinhq@outlook.com" className="text-blue-600 underline">
                  certinhq@outlook.com
                </a>
                . We will respond to your request within a reasonable timeframe.
              </p>
            </section>

            {/* 8. Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                8. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                The Service is not intended for individuals under the age of 18. We do not knowingly
                collect personal information from children under 18. If we become aware that we have
                collected personal information from a child under 18, we will take steps to delete
                that information promptly.
              </p>
              <p className="mt-3">
                If you believe that a child under 18 has provided us with personal information,
                please contact us at{' '}
                <a href="mailto:certinhq@outlook.com" className="text-blue-600 underline">
                  certinhq@outlook.com
                </a>
                .
              </p>
            </section>

            {/* 9. Changes to This Policy */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                9. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. If we make material changes, we
                will notify you by updating the &ldquo;Last updated&rdquo; date at the top of this
                page. We encourage you to review this Privacy Policy periodically to stay informed
                about how we are protecting your information.
              </p>
            </section>

            {/* 10. Contact Us */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">10. Contact Us</h2>
              <p className="mt-3">
                If you have any questions or concerns about this Privacy Policy, please contact us
                at:
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
