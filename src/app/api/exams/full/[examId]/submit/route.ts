import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ examId: string }> }
) {
  try {
    const { examId } = await params

    const session = await getAuthSession()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id
    const body = await request.json()
    const { answers, timeTakenSeconds } = body

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'answers array is required' },
        { status: 400 }
      )
    }

    const exam = await prisma.fullExam.findUnique({
      where: { id: examId },
      include: {
        questions: {
          orderBy: { questionIndex: 'asc' },
        },
      },
    })

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 })
    }

    // Grade each answer
    const totalQuestions = exam.questions.length
    let correctCount = 0

    const results = exam.questions.map((question) => {
      const userAnswer = answers.find(
        (a: { questionId: string; chosenAnswer: number }) =>
          a.questionId === question.id
      )
      const chosenAnswer = userAnswer?.chosenAnswer ?? null
      const correct = chosenAnswer === question.correctChoice

      if (correct) correctCount++

      return {
        questionId: question.id,
        correct,
        chosenAnswer,
        correctAnswer: question.correctChoice,
        explanationCorrect: question.explanationCorrect,
        explanationWrong: question.explanationWrong,
      }
    })

    const scorePercentage = totalQuestions > 0
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0
    const passed = scorePercentage >= 70

    // Save the result
    await prisma.userFullExamResult.create({
      data: {
        userId,
        fullExamId: examId,
        scorePercentage,
        passed,
        takenAt: new Date(),
        timeTakenSeconds: timeTakenSeconds ?? null,
        answers: answers as any,
      },
    })

    // Upsert study streak for today
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    await prisma.studyStreak.upsert({
      where: {
        userId_studyDate: {
          userId,
          studyDate: today,
        },
      },
      update: {},
      create: {
        userId,
        studyDate: today,
      },
    })

    return NextResponse.json({
      score: scorePercentage,
      passed,
      totalQuestions,
      correctCount,
      results,
    })
  } catch (error) {
    console.error('Error submitting full exam:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
