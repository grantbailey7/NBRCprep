export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'Common NBRC Exam Mistakes',
  description: 'Avoid the most common mistakes students make on NBRC respiratory therapy exams - TMC, NPS, ACCS, SDS, CPFT, and RPFT.',
  alternates: { canonical: 'https://nbrcprep.app/mistakes' },
}

export default async function MistakesPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'MISTAKES' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="Common NBRC Exam Mistakes"
      subtitle="Learn from the most frequent errors students make - and how to avoid them"
      basePath="/mistakes"
      pages={pages}
    />
  )
}
