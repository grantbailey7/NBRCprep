import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAuthSession } from '@/lib/auth'
import { PlayGame } from './PlayGame'

export const metadata: Metadata = {
  title: 'Play & Learn | NBRCprep',
  robots: { index: false, follow: false },
}

export default async function PlayPage() {
  const session = await getAuthSession()
  if (!session) redirect('/login?callbackUrl=/play')

  const planType = (session.user as any).planType || 'FREE'
  const userId = session.user.id

  return <PlayGame planType={planType} userId={userId} />
}
