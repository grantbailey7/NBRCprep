export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'Respiratory Therapy Cheat Sheets',
  description: 'Quick-reference cheat sheets for NBRC exams - ABG interpretation, ventilator modes, pharmacology, PFT values, and more.',
  alternates: { canonical: 'https://nbrcprep.app/cheat-sheets' },
  openGraph: {
    title: 'Respiratory Therapy Cheat Sheets',
    description: 'Quick-reference cheat sheets for NBRC exams - ABG, ventilator modes, pharmacology, PFT values.',
    url: 'https://nbrcprep.app/cheat-sheets',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=RT%20Cheat%20Sheets&type=cheat-sheet', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Respiratory Therapy Cheat Sheets',
    description: 'Quick-reference cheat sheets for NBRC exams - ABG, ventilator modes, pharmacology, PFT values.',
    images: ['/api/og?title=RT%20Cheat%20Sheets&type=cheat-sheet'],
  },
}

export default async function CheatSheetsPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'CHEAT_SHEET' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Respiratory Therapy Cheat Sheets',
    description: 'Quick-reference cheat sheets for NBRC exams.',
    url: 'https://nbrcprep.app/cheat-sheets',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: pages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://nbrcprep.app/cheat-sheets/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoIndexPage
        title="Respiratory Therapy Cheat Sheets"
        subtitle="Quick-reference guides for the most tested NBRC topics"
        basePath="/cheat-sheets"
        pages={pages}
      />
    </>
  )
}
