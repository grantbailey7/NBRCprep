export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'Common NBRC Exam Mistakes',
  description: 'Avoid the most common mistakes students make on NBRC respiratory therapy exams - TMC, NPS, ACCS, SDS, CPFT, and RPFT.',
  alternates: { canonical: 'https://nbrcprep.app/mistakes' },
  openGraph: {
    title: 'Common NBRC Exam Mistakes',
    description: 'Avoid the most common mistakes students make on NBRC respiratory therapy exams.',
    url: 'https://nbrcprep.app/mistakes',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Common%20NBRC%20Mistakes&type=resource', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Common NBRC Exam Mistakes',
    description: 'Avoid the most common mistakes students make on NBRC respiratory therapy exams.',
    images: ['/api/og?title=Common%20NBRC%20Mistakes&type=resource'],
  },
}

export default async function MistakesPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'MISTAKES' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Common NBRC Exam Mistakes',
    description: 'Avoid the most common mistakes students make on NBRC respiratory therapy exams.',
    url: 'https://nbrcprep.app/mistakes',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://nbrcprep.app/mistakes/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoIndexPage
        title="Common NBRC Exam Mistakes"
        subtitle="Learn from the most frequent errors students make - and how to avoid them"
        basePath="/mistakes"
        pages={pages}
      />
    </>
  )
}
