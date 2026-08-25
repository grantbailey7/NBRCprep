import { prisma } from '@/lib/prisma'
import { sendWelcomeEmail } from '@/lib/email'
import { verifyTurnstileToken } from '@/lib/turnstile'
import { isDisposableEmail } from '@/lib/disposable-emails'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { name, email, username, password, turnstileToken } = await request.json()

    if (!name || !email || !username || !password) {
      return NextResponse.json(
        { error: 'Name, email, username, and password are required' },
        { status: 400 }
      )
    }

    if (turnstileToken) {
      const valid = await verifyTurnstileToken(turnstileToken)
      if (!valid) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed. Please try again.' },
          { status: 400 }
        )
      }
    }

    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: 'Please use a permanent email address.' },
        { status: 400 }
      )
    }

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    })

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 409 }
      )
    }

    const existingUsername = await prisma.user.findUnique({
      where: { username },
    })

    if (existingUsername) {
      return NextResponse.json(
        { error: 'Username already taken' },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        passwordHash,
      },
    })

    sendWelcomeEmail(email, name).catch(() => {})

    return NextResponse.json({ id: user.id }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
