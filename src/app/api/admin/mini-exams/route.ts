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

  let where: any = {}

  if (divisionSlug) {
    const division = await prisma.division.findUnique({
      where: { slug: divisionSlug as any },
    })
    if (division) {
      where.divisionId = division.id
    }
  }

  const miniExams = await prisma.miniExam.findMany({
    where,
    include: {
      division: true,
      _count: { select: { questions: true } },
    },
    orderBy: { examIndex: 'asc' },
  })

  return NextResponse.json(miniExams)
}

export async function POST(request: NextRequest) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { divisionId, title, examIndex, isFree, questions } = body

  const miniExam = await prisma.miniExam.create({
    data: {
      divisionId,
      title,
      examIndex,
      isFree: isFree ?? false,
      questions: {
        create: questions.map((q: any) => ({
          questionIndex: q.questionIndex,
          questionText: q.questionText,
          choices: q.choices,
          correctChoice: q.correctChoice,
          explanationCorrect: q.explanationCorrect,
          explanationWrong: q.explanationWrong,
          topic: q.topic,
        })),
      },
    },
    include: {
      questions: true,
      division: true,
    },
  })

  return NextResponse.json(miniExam, { status: 201 })
}
