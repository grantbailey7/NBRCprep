export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'Respiratory Therapy Glossary',
  description: 'Comprehensive glossaries of respiratory therapy terms for NBRC exams - ventilator, ABG, PFT, pharmacology, sleep study, and neonatal terminology.',
  alternates: { canonical: 'https://nbrcprep.app/glossary' },
}

export default async function GlossaryPage() {
  const pages = await prisma.seoPage.findMany({
    where: { type: 'GLOSSARY' },
    orderBy: { title: 'asc' },
    select: { slug: true, title: true, description: true, division: true, readTime: true },
  })

  return (
    <SeoIndexPage
      title="Respiratory Therapy Glossary"
      subtitle="Master the terminology for every NBRC exam division"
      basePath="/glossary"
      pages={pages}
    />
  )
}
