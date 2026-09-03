export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'NBRC Exam Tips & Strategies',
  description: 'Expert tips and strategies for passing NBRC respiratory therapy exams - TMC, NPS, ACCS, SDS, CPFT, and RPFT.',
  alternates: { canonical: 'https://nbrcprep.app/tips' },
  openGraph: {
    title: 'NBRC Exam Tips & Strategies',
    description: 'Expert tips and strategies for passing NBRC respiratory therapy exams.',
    url: 'https://nbrcprep.app/tips',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=NBRC%20Exam%20Tips&type=resource', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBRC Exam Tips & Strategies',
    description: 'Expert tips and strategies for passing NBRC respiratory therapy exams.',
    images: ['/api/og?title=NBRC%20Exam%20Tips&type=resource'],
  },
}

export default async function TipsPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'TIPS' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NBRC Exam Tips & Strategies',
    description: 'Expert tips and strategies for passing NBRC respiratory therapy exams.',
    url: 'https://nbrcprep.app/tips',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://nbrcprep.app/tips/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoIndexPage
        title="NBRC Exam Tips & Strategies"
        subtitle="Proven strategies to maximize your score on every NBRC exam"
        basePath="/tips"
        pages={pages}
      />
    </>
  )
}
