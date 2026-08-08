import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request, { params }: { params: { examId: string } }) {
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { answers } = await req.json()

  const exam = await prisma.miniExam.findUnique({
    where: { id: params.examId },
    include: { questions: { orderBy: { questionIndex: 'asc' } } },
  })

  if (!exam) {
    return NextResponse.json({ error: 'Exam not found' }, { status: 404 })
  }

  const gradedAnswers = exam.questions.map((q) => {
    const userAnswer = answers?.find((a: any) => a.questionId === q.id)
    const chosenAnswer = userAnswer?.chosenAnswer || null
    const isCorrect = chosenAnswer === q.correctChoice
    return {
      questionId: q.id,
      questionIndex: q.questionIndex,
      questionText: q.questionText,
      choices: q.choices,
      chosenAnswer,
      correctChoice: q.correctChoice,
      isCorrect,
      explanationCorrect: q.explanationCorrect,
      explanationWrong: q.explanationWrong,
    }
  })

  const correctCount = gradedAnswers.filter((a) => a.isCorrect).length
  const scorePercentage = Math.round((correctCount / exam.questions.length) * 100)
  const passed = scorePercentage >= 90

  await prisma.userMiniExamResult.create({
    data: {
      userId: session.user.id,
      miniExamId: exam.id,
      scorePercentage,
      passed,
      answers: gradedAnswers,
    },
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  await prisma.studyStreak.upsert({
    where: { userId_studyDate: { userId: session.user.id, studyDate: today } },
    update: {},
    create: { userId: session.user.id, studyDate: today },
  })

  return NextResponse.json({ scorePercentage, passed, answers: gradedAnswers })
}
