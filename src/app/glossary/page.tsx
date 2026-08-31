export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { SeoIndexPage } from '@/components/seo/SeoIndexPage'

export const metadata: Metadata = {
  title: 'Respiratory Therapy Glossary',
  description: 'Comprehensive glossaries of respiratory therapy terms for NBRC exams - ventilator, ABG, PFT, pharmacology, sleep study, and neonatal terminology.',
  alternates: { canonical: 'https://nbrcprep.app/glossary' },
  openGraph: {
    title: 'Respiratory Therapy Glossary',
    description: 'Comprehensive glossaries of respiratory therapy terms for NBRC exams.',
    url: 'https://nbrcprep.app/glossary',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=RT%20Glossary&type=resource', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Respiratory Therapy Glossary',
    description: 'Comprehensive glossaries of respiratory therapy terms for NBRC exams.',
    images: ['/api/og?title=RT%20Glossary&type=resource'],
  },
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
