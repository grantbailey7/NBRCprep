import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const divisions = [
    {
      slug: 'TMC' as const,
      name: 'Therapist Multiple-Choice',
      shortName: 'TMC',
      description: 'The TMC exam tests entry-level respiratory therapy knowledge across patient assessment, treatment, and equipment management.',
      color: '#0D9488',
      examMinutes: 180,
    },
    {
      slug: 'NPS' as const,
      name: 'Neonatal/Pediatric Specialist',
      shortName: 'NPS',
      description: 'The NPS exam covers advanced neonatal and pediatric respiratory care including ventilation strategies and pathophysiology.',
      color: '#0D9488',
      examMinutes: 180,
    },
    {
      slug: 'ACCS' as const,
      name: 'Adult Critical Care Specialist',
      shortName: 'ACCS',
      description: 'The ACCS exam tests advanced adult critical care respiratory therapy including hemodynamics and complex ventilation.',
      color: '#0D9488',
      examMinutes: 180,
    },
    {
      slug: 'SDS' as const,
      name: 'Sleep Disorders Specialist',
      shortName: 'SDS',
      description: 'The SDS exam covers polysomnography, sleep disorders diagnosis, and PAP therapy management.',
      color: '#0D9488',
      examMinutes: 180,
    },
    {
      slug: 'CPFT' as const,
      name: 'Certified Pulmonary Function Technologist',
      shortName: 'CPFT',
      description: 'The CPFT exam tests pulmonary function testing procedures, equipment calibration, and result interpretation.',
      color: '#0D9488',
      examMinutes: 180,
    },
    {
      slug: 'RPFT' as const,
      name: 'Registered Pulmonary Function Technologist',
      shortName: 'RPFT',
      description: 'The RPFT exam covers advanced pulmonary diagnostics including exercise testing, bronchial challenge, and complex interpretation.',
      color: '#0D9488',
      examMinutes: 180,
    },
  ]

  for (const div of divisions) {
    await prisma.division.upsert({
      where: { slug: div.slug },
      update: div,
      create: div,
    })
    console.log(`Upserted division: ${div.shortName}`)
  }

  // Also create default SiteSettings if not exists
  const settings = await prisma.siteSettings.findUnique({ where: { id: 'default' } })
  if (!settings) {
    await prisma.siteSettings.create({
      data: {
        id: 'default',
        seoMode: 'STEALTH',
        robotsAllowAll: false,
        sitemapEnabled: false,
        metaNoIndex: true,
      },
    })
    console.log('Created default SiteSettings (STEALTH mode)')
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
