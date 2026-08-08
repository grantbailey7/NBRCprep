import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {
  sendDripEmail2,
  sendDripEmail4,
  sendDripEmail6,
} from '@/lib/email'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const expectedToken = `Bearer ${process.env.CRON_SECRET}`

  if (!authHeader || authHeader !== expectedToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const users = await prisma.user.findMany({
    where: {
      planType: 'FREE',
      emailOptOut: false,
      email: { not: null },
    },
    select: {
      id: true,
      email: true,
      emailStep: true,
    },
  })

  let processed = 0

  for (const user of users) {
    try {
      if (user.emailStep === 0) {
        await sendDripEmail2(user.email!)
        await prisma.user.update({
          where: { id: user.id },
          data: { emailStep: 1 },
        })
        processed++
      } else if (user.emailStep === 1) {
        await sendDripEmail4(user.email!)
        await prisma.user.update({
          where: { id: user.id },
          data: { emailStep: 2 },
        })
        processed++
      } else if (user.emailStep === 2) {
        await sendDripEmail6(user.email!)
        await prisma.user.update({
          where: { id: user.id },
          data: { emailStep: 3 },
        })
        processed++
      }
    } catch (error) {
      console.error(`Failed to process email for user ${user.id}:`, error)
    }
  }

  return NextResponse.json({ processed })
}
