export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'NBRC Study Topics',
  description: 'Deep-dive study guides for high-yield NBRC exam topics - ABG interpretation, ventilator modes, airway management, and more.',
  alternates: { canonical: 'https://nbrcprep.app/topics' },
  openGraph: {
    title: 'NBRC Study Topics',
    description: 'Deep-dive study guides for high-yield NBRC exam topics.',
    url: 'https://nbrcprep.app/topics',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=NBRC%20Study%20Topics&type=topic', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBRC Study Topics',
    description: 'Deep-dive study guides for high-yield NBRC exam topics.',
    images: ['/api/og?title=NBRC%20Study%20Topics&type=topic'],
  },
}

export default async function TopicsPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'TOPIC' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="NBRC Study Topics"
      subtitle="Deep-dive guides on the most important respiratory therapy exam topics"
      basePath="/topics"
      pages={pages}
    />
  )
}
