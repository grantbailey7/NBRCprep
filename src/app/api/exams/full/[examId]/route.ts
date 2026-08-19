import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { canAccessFullExams } from '@/lib/access-control'
import { PlanType, DivisionSlug } from '@prisma/client'

export async function GET(req: Request, { params }: { params: { examId: string } }) {
  const session = await getAuthSession()
  const plan = (session?.user?.planType as PlanType) || PlanType.FREE

  const exam = await prisma.fullExam.findUnique({
    where: { id: params.examId },
    include: {
      division: true,
      questions: { orderBy: { questionIndex: 'asc' } },
    },
  })

  if (!exam) {
    return NextResponse.json({ error: 'Exam not found' }, { status: 404 })
  }

  if (!canAccessFullExams(plan, exam.division.slug as DivisionSlug)) {
    return NextResponse.json({ error: 'Upgrade required' }, { status: 403 })
  }

  const questions = exam.questions.map((q) => ({
    id: q.id,
    questionIndex: q.questionIndex,
    questionText: q.questionText,
    choices: typeof q.choices === 'string' ? JSON.parse(q.choices) : q.choices,
  }))

  return NextResponse.json({
    id: exam.id,
    title: exam.title,
    examIndex: exam.examIndex,
    durationMinutes: exam.durationMinutes,
    questionCount: exam.questionCount,
    divisionName: exam.division.name,
    questions,
  })
}
