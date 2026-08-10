import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NBRCprep — Pass the NBRC with Confidence',
    template: '%s | NBRCprep',
  },
  description:
    'The most comprehensive study platform for NBRC Respiratory Therapy credentialing exams. 2,400 original flashcards, 180 mini exams, and 18 full-length simulations across all 6 NBRC divisions.',
  keywords: [
    'NBRC exam prep',
    'respiratory therapy exam',
    'TMC exam study',
    'CRT exam prep',
    'RRT exam prep',
    'NBRC flashcards',
    'respiratory therapist exam',
    'TMC practice exam',
    'NBRC practice test',
    'respiratory therapy board exam',
    'NPS exam prep',
    'ACCS exam prep',
    'SDS exam prep',
    'CPFT exam prep',
    'RPFT exam prep',
  ],
  metadataBase: new URL('https://nbrcprep.app'),
  alternates: { canonical: 'https://nbrcprep.app' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'NBRCprep — Pass the NBRC with Confidence',
    description: '2,400 original flashcards and 180 practice exams for all 6 NBRC divisions. Start free, no card required.',
    type: 'website',
    url: 'https://nbrcprep.app',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'NBRCprep — NBRC Study Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBRCprep — Pass the NBRC with Confidence',
    description: '2,400 original flashcards and 180 practice exams for all 6 NBRC divisions.',
    images: ['/api/og'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NBRCprep',
  url: 'https://nbrcprep.app',
  logo: 'https://nbrcprep.app/icon.png',
  description: 'The most comprehensive study platform for NBRC Respiratory Therapy credentialing exams.',
  contactPoint: { '@type': 'ContactPoint', email: 'certinhq@outlook.com', contactType: 'customer support' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NBRCprep',
  url: 'https://nbrcprep.app',
  description: 'NBRC exam prep — flashcards, mini exams, and full-length simulations for all 6 divisions.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://nbrcprep.app/divisions/{division}' },
    'query-input': 'required name=division',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
