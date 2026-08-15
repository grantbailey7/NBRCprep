export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'NBRC Exam Day Walkthroughs',
  description: 'Step-by-step walkthroughs for exam day - what to expect, timing, question types, pacing, and strategies for every NBRC exam.',
  alternates: { canonical: 'https://nbrcprep.app/exam-day' },
}

export default async function ExamDayPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'EXAM_DAY' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="NBRC Exam Day Walkthroughs"
      subtitle="Know exactly what to expect on test day for each NBRC exam"
      basePath="/exam-day"
      pages={pages}
    />
  )
}
