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
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '25')
  const search = searchParams.get('search') || ''

  const where: any = {}
  if (search) {
    where.OR = [
      { email: { contains: search, mode: 'insensitive' } },
      { name: { contains: search, mode: 'insensitive' } },
      { username: { contains: search, mode: 'insensitive' } },
    ]
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        planType: true,
        createdAt: true,
        stripeCustomerId: true,
        _count: {
          select: {
            studyStreaks: true,
            flashcardProgress: true,
            miniExamResults: true,
            fullExamResults: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.user.count({ where }),
  ])

  const formattedUsers = users.map((u) => ({
    id: u.id,
    email: u.email,
    name: u.name,
    planType: u.planType,
    createdAt: u.createdAt,
    flashcardsDone: u._count.flashcardProgress,
    miniExamsTaken: u._count.miniExamResults,
    fullExamsTaken: u._count.fullExamResults,
    studyDays: u._count.studyStreaks,
  }))

  return NextResponse.json({ users: formattedUsers, total })
}

export async function PUT(request: NextRequest) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id, planType } = await request.json()

  const user = await prisma.user.update({
    where: { id },
    data: { planType },
    select: { id: true, email: true, planType: true },
  })

  return NextResponse.json(user)
}
