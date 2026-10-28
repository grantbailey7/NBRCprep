import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { submitToIndexNow } from '@/lib/indexnow'

export async function POST(req: Request) {
  const session = await getAuthSession()
  if (!session?.user?.email || session.user.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const now = new Date()
  const scheduledPosts = await prisma.blogPost.findMany({
    where: {
      status: 'SCHEDULED',
      publishAt: { lte: now },
    },
  })

  const published = await Promise.all(
    scheduledPosts.map((post) =>
      prisma.blogPost.update({
        where: { id: post.id },
        data: { status: 'PUBLISHED', publishedAt: now },
      })
    )
  )

  if (published.length > 0) {
    const urls = published.map(p => `https://nbrcprep.app/blog/${p.slug}`)
    submitToIndexNow(urls).catch(() => {})
  }

  return NextResponse.json({ published: published.length })
}
