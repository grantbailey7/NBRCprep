import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = request.nextUrl
  const divisionSlug = searchParams.get('divisionSlug')
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = 50

  let where: any = {}

  if (divisionSlug) {
    const division = await prisma.division.findUnique({
      where: { slug: divisionSlug as any },
    })
    if (division) {
      where.divisionId = division.id
    }
  }

  const [flashcards, total] = await Promise.all([
    prisma.flashcard.findMany({
      where,
      include: { division: true },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { orderIndex: 'asc' },
    }),
    prisma.flashcard.count({ where }),
  ])

  return NextResponse.json({
    flashcards,
    total,
    page,
    totalPages: Math.ceil(total / pageSize),
  })
}

export async function POST(request: NextRequest) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const {
    divisionId,
    question,
    answer,
    choices,
    correctChoice,
    difficulty,
    topic,
    isFree,
    orderIndex,
  } = body

  const flashcard = await prisma.flashcard.create({
    data: {
      divisionId,
      question,
      answer,
      choices,
      correctChoice,
      difficulty,
      topic,
      isFree: isFree ?? false,
      orderIndex: orderIndex ?? 0,
    },
  })

  return NextResponse.json(flashcard, { status: 201 })
}
