import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const settings = await prisma.siteSettings.upsert({
    where: { id: 'singleton' },
    update: {
      seoMode: 'NORMAL',
      robotsAllowAll: true,
      sitemapEnabled: true,
      metaNoIndex: false,
    },
    create: {
      id: 'singleton',
      seoMode: 'NORMAL',
      robotsAllowAll: true,
      sitemapEnabled: true,
      metaNoIndex: false,
    },
  })
  console.log('SEO settings updated:', settings)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
