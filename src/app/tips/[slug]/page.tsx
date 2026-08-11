export const dynamic = 'force-dynamic'

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
    select: { title: true, description: true, slug: true },
  })
  if (!page) return { title: 'Not Found' }
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://nbrcprep.app/tips/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://nbrcprep.app/tips/${page.slug}`,
      type: 'article',
      siteName: 'NBRCprep',
    },
  }
}

export default async function TipsDetailPage({ params }: Props) {
  const page = await prisma.seoPage.findUnique({
    where: { slug: params.slug },
  })
  if (!page || page.type !== 'TIPS') notFound()

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    url: `https://nbrcprep.app/tips/${page.slug}`,
    author: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
    publisher: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
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
        backLink={{ href: '/tips', label: 'All Exam Tips' }}
        categoryLabel="Exam Tips"
        breadcrumbs={[{ label: 'Exam Tips', href: '/tips' }, { label: page.title }]}
        relatedContent={<RelatedResources currentSlug={page.slug} division={page.division} currentType="TIPS" />}
      />
    </>
  )
}
