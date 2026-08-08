import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { flashcardId, status } = await req.json()
  if (!flashcardId || !status) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const progress = await prisma.userFlashcardProgress.upsert({
    where: {
      userId_flashcardId: {
        userId: session.user.id,
        flashcardId,
      },
    },
    update: { status, lastSeenAt: new Date() },
    create: {
      userId: session.user.id,
      flashcardId,
      status,
    },
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  await prisma.studyStreak.upsert({
    where: {
      userId_studyDate: {
        userId: session.user.id,
        studyDate: today,
      },
    },
    update: {},
    create: {
      userId: session.user.id,
      studyDate: today,
    },
  })

  return NextResponse.json(progress)
}
