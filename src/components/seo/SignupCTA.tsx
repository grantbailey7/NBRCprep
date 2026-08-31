import Link from 'next/link'

interface SignupCTAProps {
  heading?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: 'default' | 'compact' | 'banner'
}

export function SignupCTA({
  heading = 'Ready to pass your NBRC exam?',
  description = 'Join thousands of RT students using NBRCprep to study smarter. 600+ flashcards, 30 mini exams, and 18 full-length simulations. Start free, no card required.',
  buttonText = 'Start Free Today',
  buttonHref = '/signup',
  variant = 'default',
}: SignupCTAProps) {
  if (variant === 'compact') {
    return (
      <div className="rounded-xl border border-teal-400/30 bg-teal-500/10 p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="font-bold text-black text-sm">{heading}</p>
          <p className="text-xs text-brand-gray-500 mt-1">Free tier. No credit card required.</p>
        </div>
        <Link href={buttonHref} className="btn-primary text-sm px-5 py-2 whitespace-nowrap">
          {buttonText}
        </Link>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className="bg-teal-600 rounded-xl p-8 text-center">
        <h3 className="text-xl font-black text-white">{heading}</h3>
        <p className="mt-2 text-sm text-white/80 max-w-lg mx-auto">{description}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={buttonHref} className="bg-white text-teal-700 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-brand-gray-100 transition-colors">
            {buttonText}
          </Link>
          <Link href="/pricing" className="text-sm text-white/90 underline underline-offset-2 hover:text-white">
            Compare plans
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card p-6 bg-teal-500/10 border-teal-400/30 text-center">
      <h3 className="text-lg font-bold text-black mb-2">{heading}</h3>
      <p className="text-sm text-brand-gray-500 mb-4 max-w-md mx-auto">{description}</p>
      <Link href={buttonHref} className="btn-primary px-6 py-2.5 text-sm inline-block">
        {buttonText}
      </Link>
    </div>
  )
}
