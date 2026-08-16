export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'


export const metadata: Metadata = {
  title: 'NBRC Exam Blog - Study Tips & Strategies',
  description: 'Free NBRC exam tips, TMC study strategies, and respiratory therapy board prep guides. Expert advice on passing the TMC, CRT, RRT, and specialty NBRC exams.',
  alternates: { canonical: 'https://nbrcprep.app/blog' },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'NBRCprep Blog',
  description: 'Study tips, exam strategies, and respiratory therapy guides for NBRC credentialing exams.',
  url: 'https://nbrcprep.app/blog',
  publisher: {
    '@type': 'Organization',
    name: 'NBRCprep',
    url: 'https://nbrcprep.app',
  },
}

const POSTS_PER_PAGE = 24

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string }
}) {
  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10) || 1)
  const selectedCategory = searchParams.category || null

  const where = {
    status: 'PUBLISHED' as const,
    publishedAt: { lte: new Date() },
    ...(selectedCategory && { category: selectedCategory }),
  }

  const [posts, totalCount, categories] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      skip: (currentPage - 1) * POSTS_PER_PAGE,
      take: POSTS_PER_PAGE,
      select: {
        slug: true,
        title: true,
        description: true,
        category: true,
        readTime: true,
        publishedAt: true,
      },
    }),
    prisma.blogPost.count({ where }),
    prisma.blogPost.findMany({
      where: { status: 'PUBLISHED', publishedAt: { lte: new Date() } },
      select: { category: true },
      distinct: ['category'],
      orderBy: { category: 'asc' },
    }),
  ])

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)
  const featured = currentPage === 1 && !selectedCategory ? posts[0] : null
  const gridPosts = featured ? posts.slice(1) : posts

  function pageUrl(page: number) {
    const params = new URLSearchParams()
    if (page > 1) params.set('page', String(page))
    if (selectedCategory) params.set('category', selectedCategory)
    const qs = params.toString()
    return `/blog${qs ? `?${qs}` : ''}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="section-title">NBRCprep Blog</h1>
          <p className="section-subtitle">Tips, strategies, and insights for respiratory therapy exam success</p>
          <p className="mt-4 text-sm text-brand-gray-500 max-w-2xl mx-auto leading-relaxed">
            Whether you are preparing for the TMC, studying for a specialty NBRC credential like the NPS or ACCS,
            or looking for general respiratory therapy exam strategies, our blog covers study techniques, content
            breakdowns, and test-day advice to help you pass on your first attempt.
          </p>
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Link
              href="/blog"
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                !selectedCategory
                  ? 'bg-teal-500 text-black'
                  : 'bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200'
              }`}
            >
              All
            </Link>
            {categories.map(({ category }) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-black'
                    : 'bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        )}

        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="card p-8 mb-12 block hover:border-teal-400 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-teal-500 text-black text-xs font-bold px-2.5 py-1 rounded">
                {featured.category}
              </span>
              <span className="text-xs text-brand-gray-400">{featured.readTime}</span>
              {featured.publishedAt && (
                <span className="text-xs text-brand-gray-400">
                  {new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-black group-hover:text-teal-600 transition-colors">
              {featured.title}
            </h2>
            <p className="mt-2 text-brand-gray-500">{featured.description}</p>
          </Link>
        )}

        {gridPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-gray-100 text-brand-gray-700 text-xs font-semibold px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-brand-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-black group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-brand-gray-500 line-clamp-2">{post.description}</p>
                {post.publishedAt && (
                  <p className="mt-3 text-xs text-brand-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-gray-400 text-lg">No blog posts found.</p>
            {selectedCategory && (
              <Link href="/blog" className="text-teal-600 hover:text-teal-700 text-sm mt-2 inline-block">
                View all posts
              </Link>
            )}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-12 flex justify-center items-center gap-2" aria-label="Blog pagination">
            {currentPage > 1 && (
              <Link
                href={pageUrl(currentPage - 1)}
                className="px-4 py-2 text-sm font-medium text-brand-gray-600 bg-brand-gray-100 rounded-lg hover:bg-brand-gray-200 transition-colors"
              >
                Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
              .reduce<(number | string)[]>((acc, p, i, arr) => {
                if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push('...')
                acc.push(p)
                return acc
              }, [])
              .map((p, i) =>
                typeof p === 'string' ? (
                  <span key={`ellipsis-${i}`} className="px-2 text-brand-gray-400">...</span>
                ) : (
                  <Link
                    key={p}
                    href={pageUrl(p)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      p === currentPage
                        ? 'bg-teal-500 text-black'
                        : 'text-brand-gray-600 bg-brand-gray-100 hover:bg-brand-gray-200'
                    }`}
                  >
                    {p}
                  </Link>
                )
              )}
            {currentPage < totalPages && (
              <Link
                href={pageUrl(currentPage + 1)}
                className="px-4 py-2 text-sm font-medium text-brand-gray-600 bg-brand-gray-100 rounded-lg hover:bg-brand-gray-200 transition-colors"
              >
                Next
              </Link>
            )}
          </nav>
        )}
      </div>

      <Footer />
    </div>
  )
}
