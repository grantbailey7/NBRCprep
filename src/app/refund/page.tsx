import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Refund Policy',
}

export default function RefundPolicyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-brand-gray-900 sm:text-4xl">
            Refund Policy
          </h1>
          <p className="mt-2 text-sm text-brand-gray-500">
            Last updated: January 1, {currentYear}
          </p>

          <div className="mt-10 space-y-10 text-brand-gray-700 leading-relaxed">
            <p>
              At NBRCprep By Certin, operated by Certin LLC, we want you to be satisfied with your
              purchase. This Refund Policy outlines the terms under which refunds may be issued for
              our subscription plans and one-time purchases.
            </p>

            {/* 1. Monthly Subscriptions */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                1. Monthly Subscriptions
              </h2>
              <p className="mt-3">
                Monthly subscription plans ($29/month) can be cancelled at any time from your
                account&apos;s Billing page. Upon cancellation:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Your subscription will remain active until the end of your current billing period.
                </li>
                <li>
                  You will continue to have full access to your subscribed content for the remainder
                  of the paid period.
                </li>
                <li>
                  No refunds are issued for partial months or unused portions of a billing period.
                </li>
                <li>
                  No further charges will be made after cancellation takes effect.
                </li>
              </ul>
            </section>

            {/* 2. One-Time Purchases */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                2. One-Time Purchases (FULL_ACCESS &amp; FULL_BUNDLE)
              </h2>
              <p className="mt-3">
                One-time purchases, including FULL_ACCESS ($149) and FULL_BUNDLE ($249), are
                eligible for a full refund under the following conditions:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  The refund request is made within <strong>7 days</strong> of the original purchase
                  date.
                </li>
                <li>
                  No exams (mini exams or full-length exams) have been taken or submitted on the
                  account since the purchase.
                </li>
              </ul>
              <p className="mt-3">
                If exams have been taken or the 7-day window has passed, the purchase is considered
                final and no refund will be issued. This policy exists to prevent misuse of the
                refund process while ensuring that genuine purchasers have a reasonable evaluation
                period.
              </p>
            </section>

            {/* 3. How to Request a Refund */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">
                3. How to Request a Refund
              </h2>
              <p className="mt-3">
                To request a refund, please contact us at{' '}
                <a href="mailto:certinhq@outlook.com" className="text-blue-600 underline">
                  certinhq@outlook.com
                </a>{' '}
                with the following information:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Your full name and the email address associated with your account.</li>
                <li>The date of purchase.</li>
                <li>The plan or product purchased (MONTHLY, FULL_ACCESS, or FULL_BUNDLE).</li>
                <li>The reason for your refund request.</li>
              </ul>
            </section>

            {/* 4. Processing Time */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">4. Processing Time</h2>
              <p className="mt-3">
                Once your refund request is received and approved, the refund will be processed
                within 5&ndash;10 business days. The refund will be credited to the original payment
                method used at the time of purchase. Please note that your bank or payment provider
                may take additional time to reflect the refund in your account.
              </p>
            </section>

            {/* 5. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-brand-gray-900">5. Contact</h2>
              <p className="mt-3">
                If you have any questions about this Refund Policy, please contact us at:
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
