import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs, BreadcrumbItem } from '@/components/seo/Breadcrumbs'
import { SignupCTA } from '@/components/seo/SignupCTA'

interface SeoPageContentProps {
  title: string
  description: string
  content: string
  readTime: string
  division?: string | null
  publishedAt?: Date | null
  backLink: { href: string; label: string }
  categoryLabel: string
  ctaText?: string
  breadcrumbs: BreadcrumbItem[]
  relatedContent?: React.ReactNode
}

export function SeoPageContent({
  title,
  description,
  content,
  readTime,
  division,
  publishedAt,
  backLink,
  categoryLabel,
  ctaText = 'Start Studying Free',
  breadcrumbs,
  relatedContent,
}: SeoPageContentProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-brand-gray-50">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-teal-500/20 text-teal-700 text-xs font-bold px-2.5 py-1 rounded">
                {categoryLabel}
              </span>
              {division && (
                <span className="bg-brand-gray-100 text-brand-gray-700 text-xs font-semibold px-2 py-0.5 rounded">
                  {division.toUpperCase()}
                </span>
              )}
              <span className="text-xs text-brand-gray-400">{readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black leading-tight">
              {title}
            </h1>
            <p className="mt-3 text-lg text-brand-gray-500">{description}</p>
          </header>

          <div
            className="prose prose-lg max-w-none
              prose-headings:text-black prose-headings:font-bold
              prose-p:text-brand-gray-600 prose-p:leading-relaxed
              prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-black
              prose-ul:text-brand-gray-600 prose-ol:text-brand-gray-600
              prose-li:text-brand-gray-600
              prose-blockquote:border-teal-400 prose-blockquote:text-brand-gray-500
              prose-code:text-teal-700 prose-code:bg-teal-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-hr:border-brand-gray-200
              prose-table:text-brand-gray-600
              prose-th:text-black prose-th:font-bold
              prose-td:text-brand-gray-600"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {relatedContent}

          <div className="mt-12 pt-8 border-t border-brand-gray-200">
            <SignupCTA
              variant="banner"
              heading="Ready to pass your NBRC exam?"
              description="600+ flashcards, 30 mini exams, and 18 full-length practice tests across all 6 NBRC divisions. Start free, no card required."
              buttonText={ctaText}
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
