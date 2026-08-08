import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUnsubToken } from '@/lib/email'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const token = searchParams.get('token')

  if (!email || !token) {
    return NextResponse.json(
      { error: 'Missing email or token' },
      { status: 400 }
    )
  }

  const isValid = verifyUnsubToken(email, token)
  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 400 }
    )
  }

  await prisma.user.update({
    where: { email },
    data: { emailOptOut: true },
  })

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Unsubscribed - NBRCprep</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f9fafb;
            color: #111827;
          }
          .container {
            text-align: center;
            padding: 2rem;
          }
          p {
            font-size: 1.125rem;
            line-height: 1.75;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <p>You've been unsubscribed from NBRCprep emails.</p>
        </div>
      </body>
    </html>
  `

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  })
}
