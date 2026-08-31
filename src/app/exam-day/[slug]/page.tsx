export const revalidate = 3600

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { SeoPageContent } from '@/components/seo/SeoPageContent'
import { RelatedResources } from '@/components/seo/RelatedResources'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await prisma.seoPage.findUnique({
    where: { slug: params.slug },
    select: { title: true, description: true, slug: true, updatedAt: true },
  })
  if (!page) return { title: 'Not Found' }
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://nbrcprep.app/exam-day/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://nbrcprep.app/exam-day/${page.slug}`,
      type: 'article',
      siteName: 'NBRCprep',
      images: [`https://nbrcprep.app/api/og?title=${encodeURIComponent(page.title)}&type=exam`],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [`https://nbrcprep.app/api/og?title=${encodeURIComponent(page.title)}&type=exam`],
    },
  }
}

export default async function ExamDayDetailPage({ params }: Props) {
  const page = await prisma.seoPage.findUnique({
    where: { slug: params.slug },
  })
  if (!page || page.type !== 'EXAM_DAY') notFound()

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    url: `https://nbrcprep.app/exam-day/${page.slug}`,
    author: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
    publisher: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
    dateModified: page.updatedAt.toISOString(),
    image: `https://nbrcprep.app/api/og?title=${encodeURIComponent(page.title)}&type=exam-day`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <SeoPageContent
        title={page.title}
        description={page.description}
        content={page.content}
        readTime={page.readTime}
        division={page.division}
        backLink={{ href: '/exam-day', label: 'All Exam Day Guides' }}
        categoryLabel="Exam Day"
        breadcrumbs={[{ label: 'Exam Day', href: '/exam-day' }, { label: page.title }]}
        relatedContent={<RelatedResources currentSlug={page.slug} division={page.division} currentType="EXAM_DAY" />}
      />
    </>
  )
}
