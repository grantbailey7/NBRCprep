export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let settings
  try {
    settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } })
  } catch {
    settings = null
  }

  if (!settings?.sitemapEnabled) {
    return []
  }

  const baseUrl = 'https://nbrcprep.app'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools/abg-interpreter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const divisions = ['tmc', 'nps', 'accs', 'sds', 'cpft', 'rpft']
  const divisionPages: MetadataRoute.Sitemap = divisions.map((slug) => ({
    url: `${baseUrl}/divisions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blogPosts = await prisma.blogPost.findMany({
    where: { status: 'PUBLISHED' },
    select: { slug: true, updatedAt: true },
  })

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const typeToPath: Record<string, string> = {
    GUIDE: 'guides',
    TOPIC: 'topics',
    CHEAT_SHEET: 'cheat-sheets',
    MISTAKES: 'mistakes',
    TIPS: 'tips',
    EXAM_DAY: 'exam-day',
    GLOSSARY: 'glossary',
  }

  const seoPages = await prisma.seoPage.findMany({
    select: { slug: true, type: true, updatedAt: true },
  })

  const seoIndexPages: MetadataRoute.Sitemap = Object.values(typeToPath).map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const seoDetailPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/${typeToPath[page.type]}/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: page.type === 'GUIDE' ? 0.8 : 0.6,
  }))

  return [...staticPages, ...divisionPages, ...blogPages, ...seoIndexPages, ...seoDetailPages]
}
