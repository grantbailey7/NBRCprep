import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export async function GET() {
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const userId = session.user.id

  const [divisions, studyStreakCount, user] = await Promise.all([
    prisma.division.findMany(),
    prisma.studyStreak.count({ where: { userId } }),
    prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true, planType: true },
    }),
  ])

  const divisionStats = await Promise.all(
    divisions.map(async (division) => {
      const [flashcardCount, knownCount, miniExamResults, fullExamResults] =
        await Promise.all([
          prisma.flashcard.count({
            where: { divisionId: division.id },
          }),
          prisma.userFlashcardProgress.count({
            where: {
              userId,
              status: 'KNOWN',
              flashcard: { divisionId: division.id },
            },
          }),
          prisma.userMiniExamResult.findMany({
            where: {
              userId,
              miniExam: { divisionId: division.id },
            },
            select: {
              scorePercentage: true,
              passed: true,
              takenAt: true,
            },
          }),
          prisma.userFullExamResult.findMany({
            where: {
              userId,
              fullExam: { divisionId: division.id },
            },
            select: {
              scorePercentage: true,
              passed: true,
              takenAt: true,
            },
          }),
        ])

      return {
        id: division.id,
        slug: division.slug,
        name: division.name,
        shortName: division.shortName,
        flashcardCount,
        knownCount,
        miniExamResults,
        fullExamResults,
      }
    })
  )

  return NextResponse.json({
    divisions: divisionStats,
    studyStreakCount,
    user,
  })
}
