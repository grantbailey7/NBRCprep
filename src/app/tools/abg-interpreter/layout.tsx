import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free ABG Interpreter - Arterial Blood Gas Calculator',
  description: 'Free ABG interpretation tool for respiratory therapy students. Enter pH, PaCO2, HCO3, and PaO2 to get instant acid-base analysis with compensation status and clinical context. Built for NBRC exam prep.',
  keywords: [
    'ABG interpreter',
    'arterial blood gas calculator',
    'ABG analysis tool',
    'acid base interpretation',
    'respiratory therapy ABG',
    'NBRC ABG questions',
    'ABG practice',
    'blood gas interpreter',
    'pH PaCO2 HCO3 calculator',
    'respiratory acidosis alkalosis',
  ],
  alternates: { canonical: 'https://nbrcprep.app/tools/abg-interpreter' },
  openGraph: {
    title: 'Free ABG Interpreter - Arterial Blood Gas Calculator',
    description: 'Enter ABG values for instant acid-base interpretation with compensation status and clinical notes. Free tool for RT students.',
    url: 'https://nbrcprep.app/tools/abg-interpreter',
    siteName: 'NBRCprep',
    images: [{ url: '/api/og?title=Free%20ABG%20Interpreter&type=tool', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ABG Interpreter - Arterial Blood Gas Calculator',
    description: 'Enter ABG values for instant acid-base interpretation with compensation status and clinical notes.',
    images: ['/api/og?title=Free%20ABG%20Interpreter&type=tool'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ABG Interpreter',
  url: 'https://nbrcprep.app/tools/abg-interpreter',
  description: 'Free arterial blood gas interpretation tool for respiratory therapy students. Instant acid-base analysis with compensation status.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  provider: { '@type': 'EducationalOrganization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
}

export default function ABGInterpreterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
