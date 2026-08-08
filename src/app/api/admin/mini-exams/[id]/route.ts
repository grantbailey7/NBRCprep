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

  const miniExam = await prisma.miniExam.findUnique({
    where: { id },
    include: {
      questions: { orderBy: { questionIndex: 'asc' } },
      division: true,
    },
  })

  if (!miniExam) {
    return NextResponse.json({ error: 'Mini exam not found' }, { status: 404 })
  }

  return NextResponse.json(miniExam)
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
  const { title, examIndex, isFree, questions } = body

  const miniExam = await prisma.miniExam.update({
    where: { id },
    data: {
      title,
      examIndex,
      isFree,
    },
  })

  if (questions) {
    await prisma.miniExamQuestion.deleteMany({ where: { miniExamId: id } })
    await prisma.miniExamQuestion.createMany({
      data: questions.map((q: any) => ({
        miniExamId: id,
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

  const updated = await prisma.miniExam.findUnique({
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

  await prisma.miniExam.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
