import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { RelatedResources } from '@/components/seo/RelatedResources'
import { prisma } from '@/lib/prisma'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
    select: { title: true, description: true, slug: true, publishedAt: true },
  })
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | NBRCprep Blog`,
    description: post.description,
    alternates: { canonical: `https://nbrcprep.app/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://nbrcprep.app/blog/${post.slug}`,
      type: 'article',
      siteName: 'NBRCprep',
      ...(post.publishedAt && { publishedTime: post.publishedAt.toISOString() }),
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  })

  if (!post || post.status !== 'PUBLISHED') notFound()
  if (post.publishedAt && post.publishedAt > new Date()) notFound()

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://nbrcprep.app/blog/${post.slug}`,
    ...(post.publishedAt && { datePublished: post.publishedAt.toISOString() }),
    author: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
    publisher: { '@type': 'Organization', name: 'NBRCprep', url: 'https://nbrcprep.app' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nbrcprep.app/blog/${post.slug}` },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }} />
      <Navbar />

      <main className="flex-1 bg-brand-gray-50">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-teal-500/20 text-teal-700 text-xs font-bold px-2.5 py-1 rounded">
                {post.category}
              </span>
              <span className="text-xs text-brand-gray-400">{post.readTime}</span>
              {post.publishedAt && (
                <time className="text-xs text-brand-gray-400" dateTime={post.publishedAt.toISOString()}>
                  {post.publishedAt.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black leading-tight">
              {post.title}
            </h1>
            <p className="mt-3 text-lg text-brand-gray-500">{post.description}</p>
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
              prose-hr:border-brand-gray-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <RelatedResources currentSlug={post.slug} />

          <div className="mt-12 pt-8 border-t border-brand-gray-200">
            <div className="card p-6 bg-teal-500/10 border-teal-400/30 text-center">
              <h3 className="text-lg font-bold text-black mb-2">Ready to pass your NBRC exam?</h3>
              <p className="text-sm text-brand-gray-500 mb-4">
                NBRCprep offers 2,400+ flashcards, 180 mini exams, and 18 full-length practice tests across all 6 NBRC divisions.
              </p>
              <Link href="/pricing" className="btn-primary px-6 py-2.5 text-sm inline-block">
                Start Studying Free
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
