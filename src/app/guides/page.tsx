export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'NBRC Exam Guides',
  description: 'Comprehensive guides for all 6 NBRC respiratory therapy credentialing exams - TMC, NPS, ACCS, SDS, CPFT, and RPFT.',
  alternates: { canonical: 'https://nbrcprep.app/guides' },
  openGraph: {
    title: 'NBRC Exam Guides',
    description: 'Comprehensive guides for all 6 NBRC respiratory therapy credentialing exams.',
    url: 'https://nbrcprep.app/guides',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=NBRC%20Exam%20Guides&type=guide', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBRC Exam Guides',
    description: 'Comprehensive guides for all 6 NBRC respiratory therapy credentialing exams.',
    images: ['/api/og?title=NBRC%20Exam%20Guides&type=guide'],
  },
}

export default async function GuidesPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'GUIDE' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="NBRC Exam Guides"
      subtitle="Everything you need to know about each NBRC credentialing exam"
      basePath="/guides"
      pages={pages}
    />
  )
}
