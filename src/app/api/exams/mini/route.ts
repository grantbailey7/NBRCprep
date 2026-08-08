import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { canUserAccessMiniExam } from '@/lib/access-control'
import { PlanType, DivisionSlug } from '@prisma/client'

export async function GET(req: Request) {
  const session = await getAuthSession()
  const { searchParams } = new URL(req.url)
  const divisionSlug = searchParams.get('divisionSlug')?.toUpperCase() as DivisionSlug

  if (!divisionSlug) {
    return NextResponse.json({ error: 'divisionSlug required' }, { status: 400 })
  }

  const division = await prisma.division.findUnique({ where: { slug: divisionSlug } })
  if (!division) {
    return NextResponse.json({ error: 'Division not found' }, { status: 404 })
  }

  const plan = (session?.user?.planType as PlanType) || PlanType.FREE

  const exams = await prisma.miniExam.findMany({
    where: { divisionId: division.id },
    orderBy: { examIndex: 'asc' },
    include: { _count: { select: { questions: true } } },
  })

  const examsWithAccess = exams.map((exam) => ({
    id: exam.id,
    title: exam.title,
    examIndex: exam.examIndex,
    isFree: exam.isFree,
    questionCount: exam._count.questions,
    hasAccess: canUserAccessMiniExam(plan, divisionSlug, exam.examIndex),
  }))

  return NextResponse.json({ exams: examsWithAccess, divisionName: division.name })
}
