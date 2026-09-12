import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import { DivisionSlug } from '@prisma/client'

const VALID_DIVISIONS = new Set<string>(['TMC', 'NPS', 'ACCS', 'SDS', 'CPFT', 'RPFT'])

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { division, questionsTotal, questionsCorrect, xpEarned, completed, sessionId } = body

    const divUpper = (division as string)?.toUpperCase()
    if (!VALID_DIVISIONS.has(divUpper)) {
      return NextResponse.json({ error: 'Invalid division' }, { status: 400 })
    }
    if (typeof questionsTotal !== 'number' || typeof questionsCorrect !== 'number') {
      return NextResponse.json({ error: 'Invalid question counts' }, { status: 400 })
    }
    if (!sessionId || typeof sessionId !== 'string') {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 })
    }

    const session = await getAuthSession().catch(() => null)
    const userId = session?.user?.id ?? null

    await prisma.playEvent.create({
      data: {
        division: divUpper as DivisionSlug,
        questionsTotal,
        questionsCorrect,
        xpEarned: xpEarned ?? 0,
        completed: completed ?? false,
        userId,
        sessionId: sessionId.slice(0, 64),
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[play-event]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
