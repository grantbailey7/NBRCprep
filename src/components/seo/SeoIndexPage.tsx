import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

interface SeoIndexPageProps {
  title: string
  subtitle: string
  basePath: string
  pages: {
    slug: string
    title: string
    description: string
    division?: string | null
    readTime: string
  }[]
}

export function SeoIndexPage({ title, subtitle, basePath, pages }: SeoIndexPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="section-title">{title}</h1>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {pages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`${basePath}/${page.slug}`}
                className="card p-6 hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  {page.division && (
                    <span className="bg-teal-500/20 text-teal-700 text-xs font-bold px-2.5 py-1 rounded">
                      {page.division.toUpperCase()}
                    </span>
                  )}
                  <span className="text-xs text-brand-gray-400">{page.readTime}</span>
                </div>
                <h3 className="font-bold text-black group-hover:text-teal-600 transition-colors">
                  {page.title}
                </h3>
                <p className="mt-1 text-sm text-brand-gray-500 line-clamp-2">{page.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-brand-gray-400 text-lg">Coming soon!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
