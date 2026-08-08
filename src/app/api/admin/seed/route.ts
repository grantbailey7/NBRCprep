import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const DIVISIONS = [
  {
    slug: 'TMC' as const,
    name: 'Therapist Multiple-Choice',
    shortName: 'TMC',
    description:
      'The foundational NBRC credentialing exam covering all areas of respiratory therapy.',
    color: '#0D9488',
    examMinutes: 180,
  },
  {
    slug: 'NPS' as const,
    name: 'Neonatal/Pediatric Specialist',
    shortName: 'NPS',
    description: 'Specialty exam for neonatal and pediatric respiratory care.',
    color: '#FF6B35',
    examMinutes: 180,
  },
  {
    slug: 'ACCS' as const,
    name: 'Adult Critical Care Specialist',
    shortName: 'ACCS',
    description: 'Specialty exam for adult critical care respiratory therapy.',
    color: '#E63946',
    examMinutes: 180,
  },
  {
    slug: 'SDS' as const,
    name: 'Sleep Disorders Specialist',
    shortName: 'SDS',
    description: 'Specialty exam for sleep disorders and polysomnography.',
    color: '#457B9D',
    examMinutes: 180,
  },
  {
    slug: 'CPFT' as const,
    name: 'Certified Pulmonary Function Technologist',
    shortName: 'CPFT',
    description: 'Certification exam for pulmonary function testing.',
    color: '#2A9D8F',
    examMinutes: 180,
  },
  {
    slug: 'RPFT' as const,
    name: 'Registered Pulmonary Function Technologist',
    shortName: 'RPFT',
    description: 'Advanced certification for pulmonary function technology.',
    color: '#6A4C93',
    examMinutes: 180,
  },
]

export async function POST() {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  for (const div of DIVISIONS) {
    await prisma.division.upsert({
      where: { slug: div.slug },
      update: {
        name: div.name,
        shortName: div.shortName,
        description: div.description,
        color: div.color,
        examMinutes: div.examMinutes,
      },
      create: {
        slug: div.slug,
        name: div.name,
        shortName: div.shortName,
        description: div.description,
        color: div.color,
        examMinutes: div.examMinutes,
      },
    })
  }

  const count = await prisma.division.count()

  return NextResponse.json({ success: true, divisions: count })
}
