import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up Free',
  description: 'Create a free NBRCprep account. Access flashcards, practice tests, and study tools for the NBRC respiratory therapy exams. No credit card required.',
  alternates: { canonical: 'https://nbrcprep.app/signup' },
  openGraph: {
    title: 'Sign Up Free for NBRCprep',
    description: 'Create a free account. Access flashcards, practice tests, and study tools for all 6 NBRC exams. No credit card required.',
    url: 'https://nbrcprep.app/signup',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Start%20Free%20Today&type=resource', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up Free for NBRCprep',
    description: 'Create a free account. Access flashcards, practice tests, and study tools for all 6 NBRC exams.',
    images: ['/api/og?title=Start%20Free%20Today&type=resource'],
  },
}

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children
}
