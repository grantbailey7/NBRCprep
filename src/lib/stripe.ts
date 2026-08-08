import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY?.trim() ?? ''

if (!secretKey || (!secretKey.startsWith('sk_test_') && !secretKey.startsWith('sk_live_'))) {
  console.error('[stripe] STRIPE_SECRET_KEY is missing or invalid:', secretKey ? `starts with "${secretKey.slice(0, 8)}..."` : 'empty')
}

export const stripe = new Stripe(secretKey, {
  apiVersion: '2026-07-29.dahlia',
})

export const STRIPE_PRICES = {
  MONTHLY: process.env.STRIPE_PRICE_MONTHLY!,
  FULL_ACCESS: process.env.STRIPE_PRICE_FULL_ACCESS!,
  FULL_BUNDLE: process.env.STRIPE_PRICE_FULL_BUNDLE!,
}

export const PLAN_NAMES: Record<string, string> = {
  FREE: 'Free',
  MONTHLY: 'Monthly (TMC)',
  FULL_ACCESS: 'Full Access (TMC)',
  FULL_BUNDLE: 'Full Bundle (All Divisions)',
}

export const PLAN_PRICES: Record<string, string> = {
  FREE: '$0',
  MONTHLY: '$29/mo',
  FULL_ACCESS: '$149 one-time',
  FULL_BUNDLE: '$249 one-time',
}
