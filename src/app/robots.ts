export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function robots(): Promise<MetadataRoute.Robots> {
  let settings
  try {
    settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } })
  } catch {
    settings = null
  }

  if (settings?.robotsAllowAll) {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/admin/', '/dashboard/', '/settings/', '/billing/'],
        },
      ],
      sitemap: settings.sitemapEnabled ? 'https://nbrcprep.app/sitemap.xml' : undefined,
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  }
}
