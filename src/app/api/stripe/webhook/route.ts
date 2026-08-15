export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { stripe } from '@/lib/stripe'
import { sendUpgradeThankYouEmail } from '@/lib/email'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      const planType = session.metadata?.planType

      if (userId && planType) {
        const updateData: Record<string, unknown> = { planType }

        if (session.mode === 'subscription' && session.subscription) {
          const subscriptionId =
            typeof session.subscription === 'string'
              ? session.subscription
              : session.subscription.id
          const subscription =
            await stripe.subscriptions.retrieve(subscriptionId)
          updateData.stripeSubscriptionId = subscriptionId
          updateData.stripePriceId = subscription.items.data[0]?.price.id
        }

        const user = await prisma.user.update({
          where: { id: userId },
          data: updateData,
        })

        if (user.email) {
          const label = planType === 'FULL_BUNDLE' ? 'Lifetime Access' : 'Full Access'
          sendUpgradeThankYouEmail(user.email, label, user.name).catch(console.error)
        }
      }
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice & { subscription?: string | { id: string } }
      const customerId =
        typeof invoice.customer === 'string'
          ? invoice.customer
          : invoice.customer?.id

      if (customerId && invoice.subscription) {
        const subscriptionId =
          typeof invoice.subscription === 'string'
            ? invoice.subscription
            : invoice.subscription.id
        const subscription =
          await stripe.subscriptions.retrieve(subscriptionId) as unknown as { current_period_end: number }

        await prisma.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: {
            stripeCurrentPeriodEnd: new Date(
              subscription.current_period_end * 1000
            ),
          },
        })
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      console.warn(
        `Invoice payment failed for customer ${invoice.customer}`,
        { invoiceId: invoice.id }
      )
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      await prisma.user.updateMany({
        where: { stripeSubscriptionId: subscription.id },
        data: {
          planType: 'FREE',
          stripeSubscriptionId: null,
          stripePriceId: null,
        },
      })
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const newPriceId = subscription.items.data[0]?.price.id

      if (newPriceId) {
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: { stripePriceId: newPriceId },
        })
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
