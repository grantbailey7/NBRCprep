import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { submitToIndexNow } from '@/lib/indexnow'

export async function POST() {
  const session = await getAuthSession()
  if (session?.user?.email !== 'grantbailey2019@gmail.com') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const baseUrl = 'https://nbrcprep.app'

  const blogPosts = await prisma.blogPost.findMany({
    where: { status: 'PUBLISHED' },
    select: { slug: true },
  })

  const seoPages = await prisma.seoPage.findMany({
    select: { slug: true, type: true },
  })

  const typeToPath: Record<string, string> = {
    GUIDE: 'guides',
    TOPIC: 'topics',
    CHEAT_SHEET: 'cheat-sheets',
    MISTAKES: 'mistakes',
    TIPS: 'tips',
    EXAM_DAY: 'exam-day',
    GLOSSARY: 'glossary',
  }

  const urls = [
    baseUrl,
    `${baseUrl}/pricing`,
    `${baseUrl}/blog`,
    `${baseUrl}/resources`,
    `${baseUrl}/tools`,
    `${baseUrl}/tools/abg-interpreter`,
    `${baseUrl}/best-nbrc-study-materials`,
    `${baseUrl}/signup`,
    ...['tmc', 'nps', 'accs', 'sds', 'cpft', 'rpft'].map(d => `${baseUrl}/divisions/${d}`),
    ...Object.values(typeToPath).map(p => `${baseUrl}/${p}`),
    ...blogPosts.map(p => `${baseUrl}/blog/${p.slug}`),
    ...seoPages.map(p => `${baseUrl}/${typeToPath[p.type]}/${p.slug}`),
  ]

  const result = await submitToIndexNow(urls)

  return NextResponse.json({ submitted: urls.length, ...result })
}
