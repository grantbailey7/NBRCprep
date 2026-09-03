export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'NBRC Exam Day Walkthroughs',
  description: 'Step-by-step walkthroughs for exam day - what to expect, timing, question types, pacing, and strategies for every NBRC exam.',
  alternates: { canonical: 'https://nbrcprep.app/exam-day' },
  openGraph: {
    title: 'NBRC Exam Day Walkthroughs',
    description: 'Step-by-step walkthroughs for exam day - what to expect, timing, and strategies.',
    url: 'https://nbrcprep.app/exam-day',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Exam%20Day%20Walkthroughs&type=exam', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBRC Exam Day Walkthroughs',
    description: 'Step-by-step walkthroughs for exam day - what to expect, timing, and strategies.',
    images: ['/api/og?title=Exam%20Day%20Walkthroughs&type=exam'],
  },
}

export default async function ExamDayPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'EXAM_DAY' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NBRC Exam Day Walkthroughs',
    description: 'Step-by-step walkthroughs for exam day for every NBRC exam.',
    url: 'https://nbrcprep.app/exam-day',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://nbrcprep.app/exam-day/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoIndexPage
        title="NBRC Exam Day Walkthroughs"
        subtitle="Know exactly what to expect on test day for each NBRC exam"
        basePath="/exam-day"
        pages={pages}
      />
    </>
  )
}
