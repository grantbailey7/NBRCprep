import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { canAccessFlashcards } from '@/lib/access-control'
import { PlanType, DivisionSlug } from '@prisma/client'

export async function GET(req: Request) {
  const session = await getAuthSession()
  const { searchParams } = new URL(req.url)
  const divisionSlug = searchParams.get('divisionSlug')?.toUpperCase() as DivisionSlug

  if (!divisionSlug) {
    return NextResponse.json({ error: 'divisionSlug required' }, { status: 400 })
  }

  const division = await prisma.division.findUnique({ where: { slug: divisionSlug } })
  if (!division) {
    return NextResponse.json({ error: 'Division not found' }, { status: 404 })
  }

  const plan = (session?.user?.planType as PlanType) || PlanType.FREE
  const hasAccess = canAccessFlashcards(plan, divisionSlug)

  const flashcards = await prisma.flashcard.findMany({
    where: {
      divisionId: division.id,
      orderIndex: { lte: 100 },
      ...(hasAccess ? {} : { isFree: true }),
    },
    orderBy: { orderIndex: 'asc' },
    ...(hasAccess ? {} : { take: 20 }),
  })

  let progress: any[] = []
  if (session?.user?.id) {
    progress = await prisma.userFlashcardProgress.findMany({
      where: {
        userId: session.user.id,
        flashcardId: { in: flashcards.map((f) => f.id) },
      },
    })
  }

  return NextResponse.json({
    flashcards,
    progress,
    hasAccess,
    divisionName: division.name,
  })
}
