import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import { stripe, STRIPE_PRICES } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { planType } = await request.json()

  if (!['MONTHLY', 'FULL_ACCESS', 'FULL_BUNDLE'].includes(planType)) {
    return NextResponse.json({ error: 'Invalid plan type' }, { status: 400 })
  }

  let user = await prisma.user.findUnique({
    where: { id: session.user.id },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  let customerId = user.stripeCustomerId

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email ?? undefined,
      metadata: { userId: user.id },
    })
    customerId = customer.id
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customerId },
    })
  }

  const mode = planType === 'MONTHLY' ? 'subscription' : 'payment'

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [
      {
        price: STRIPE_PRICES[planType as keyof typeof STRIPE_PRICES],
        quantity: 1,
      },
    ],
    mode,
    success_url: 'https://nbrcprep.app/dashboard?upgraded=true',
    cancel_url: 'https://nbrcprep.app/pricing',
    metadata: { userId: user.id, planType },
    allow_promotion_codes: true,
  })

  return NextResponse.json({ sessionUrl: checkoutSession.url })
}
