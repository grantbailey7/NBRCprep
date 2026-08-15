export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'Respiratory Therapy Cheat Sheets',
  description: 'Quick-reference cheat sheets for NBRC exams - ABG interpretation, ventilator modes, pharmacology, PFT values, and more.',
  alternates: { canonical: 'https://nbrcprep.app/cheat-sheets' },
}

export default async function CheatSheetsPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'CHEAT_SHEET' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="Respiratory Therapy Cheat Sheets"
      subtitle="Quick-reference guides for the most tested NBRC topics"
      basePath="/cheat-sheets"
      pages={pages}
    />
  )
}
