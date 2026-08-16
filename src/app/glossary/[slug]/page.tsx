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
    alternates: { canonical: `https://nbrcprep.app/glossary/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://nbrcprep.app/glossary/${page.slug}`,
      type: 'article',
      siteName: 'NBRCprep',
      images: [`https://nbrcprep.app/api/og?title=${encodeURIComponent(page.title)}&type=resource`],
    },
  }
}

export default async function GlossaryDetailPage({ params }: Props) {
  const page = await prisma.seoPage.findUnique({
    where: { slug: params.slug },
  })
  if (!page || page.type !== 'GLOSSARY') notFound()

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: page.title,
    description: page.description,
    url: `https://nbrcprep.app/glossary/${page.slug}`,
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
        backLink={{ href: '/glossary', label: 'All Glossaries' }}
        categoryLabel="Glossary"
        breadcrumbs={[{ label: 'Glossary', href: '/glossary' }, { label: page.title }]}
        relatedContent={<RelatedResources currentSlug={page.slug} division={page.division} currentType="GLOSSARY" />}
      />
    </>
  )
}
