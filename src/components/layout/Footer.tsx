import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black tracking-tight">
              NBRC<span className="text-teal-400">prep</span>
            </span>
            <a href="https://certinhq.com" className="text-xs font-medium text-brand-gray-500 tracking-wide mt-0.5 block hover:text-brand-gray-300 transition-colors">By Certin</a>
            <p className="mt-3 text-brand-gray-400 text-sm leading-relaxed max-w-sm">
              The most comprehensive study platform for NBRC Respiratory Therapy credentialing exams.
              Built by respiratory professionals, for respiratory professionals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Divisions</h3>
            <ul className="space-y-2">
              {[
                { slug: 'tmc', label: 'Therapist Multiple-Choice' },
                { slug: 'nps', label: 'Neonatal/Pediatric Specialist' },
                { slug: 'accs', label: 'Adult Critical Care Specialist' },
                { slug: 'sds', label: 'Sleep Disorders Specialist' },
                { slug: 'cpft', label: 'Certified Pulmonary Function Tech' },
                { slug: 'rpft', label: 'Registered Pulmonary Function Tech' },
              ].map((d) => (
                <li key={d.slug}>
                  <Link href={`/divisions/${d.slug}`} className="text-sm text-brand-gray-400 hover:text-white transition-colors">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/pricing" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/signup" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
              <li><Link href="/login" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Sign In</Link></li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-sm text-brand-gray-400 hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray-500">
            © {new Date().getFullYear()} NBRCprep.app — All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="mailto:certinhq@outlook.com" className="text-xs text-brand-gray-400 hover:text-white transition-colors">
              certinhq@outlook.com
            </a>
            <p className="text-xs text-brand-gray-600">
              Not affiliated with NBRC or AARC. Questions are original and independently developed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
