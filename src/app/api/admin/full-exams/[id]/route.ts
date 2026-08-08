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

  const fullExam = await prisma.fullExam.findUnique({
    where: { id },
    include: {
      questions: { orderBy: { questionIndex: 'asc' } },
      division: true,
    },
  })

  if (!fullExam) {
    return NextResponse.json({ error: 'Full exam not found' }, { status: 404 })
  }

  return NextResponse.json(fullExam)
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
  const { title, examIndex, durationMinutes, questionCount, questions } = body

  const fullExam = await prisma.fullExam.update({
    where: { id },
    data: {
      title,
      examIndex,
      durationMinutes,
      questionCount,
    },
  })

  if (questions) {
    await prisma.fullExamQuestion.deleteMany({ where: { fullExamId: id } })
    await prisma.fullExamQuestion.createMany({
      data: questions.map((q: any) => ({
        fullExamId: id,
        questionIndex: q.questionIndex,
        questionText: q.questionText,
        choices: q.choices,
        correctChoice: q.correctChoice,
        explanationCorrect: q.explanationCorrect,
        explanationWrong: q.explanationWrong,
        topic: q.topic,
      })),
    })
  }

  const updated = await prisma.fullExam.findUnique({
    where: { id },
    include: {
      questions: { orderBy: { questionIndex: 'asc' } },
      division: true,
    },
  })

  return NextResponse.json(updated)
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

  await prisma.fullExam.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
