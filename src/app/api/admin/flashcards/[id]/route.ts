import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const flashcard = await prisma.flashcard.findUnique({
    where: { id },
    include: { division: true },
  })

  if (!flashcard) {
    return NextResponse.json({ error: 'Flashcard not found' }, { status: 404 })
  }

  return NextResponse.json(flashcard)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
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

  const flashcard = await prisma.flashcard.update({
    where: { id },
    data: {
      divisionId,
      question,
      answer,
      choices,
      correctChoice,
      difficulty,
      topic,
      isFree,
      orderIndex,
    },
  })

  return NextResponse.json(flashcard)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  await prisma.flashcard.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
