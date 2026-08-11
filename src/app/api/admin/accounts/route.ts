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

  const [accounts, total] = await Promise.all([
    prisma.account.findMany({
      select: {
        id: true,
        provider: true,
        providerAccountId: true,
        userId: true,
        type: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.account.count(),
  ])

  return NextResponse.json({ accounts, total })
}
