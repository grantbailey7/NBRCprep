import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const [totalUsers, planBreakdown, totalFlashcards, totalMiniExams, totalFullExams] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.groupBy({
        by: ['planType'],
        _count: true,
      }),
      prisma.flashcard.count(),
      prisma.miniExam.count(),
      prisma.fullExam.count(),
    ])

  return NextResponse.json({
    totalUsers,
    planBreakdown,
    totalFlashcards,
    totalMiniExams,
    totalFullExams,
  })
}
