export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'NBRC Exam Tips & Strategies',
  description: 'Expert tips and strategies for passing NBRC respiratory therapy exams - TMC, NPS, ACCS, SDS, CPFT, and RPFT.',
  alternates: { canonical: 'https://nbrcprep.app/tips' },
}

export default async function TipsPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'TIPS' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="NBRC Exam Tips & Strategies"
      subtitle="Proven strategies to maximize your score on every NBRC exam"
      basePath="/tips"
      pages={pages}
    />
  )
}
