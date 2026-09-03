import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Log in to NBRCprep to access your NBRC exam prep flashcards, practice tests, and full-length simulations.',
  alternates: { canonical: 'https://nbrcprep.app/login' },
  openGraph: {
    title: 'Log In to NBRCprep',
    description: 'Access your NBRC exam prep flashcards, practice tests, and full-length simulations.',
    url: 'https://nbrcprep.app/login',
    siteName: 'NBRCprep',
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
