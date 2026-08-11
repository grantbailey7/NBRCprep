import Link from 'next/link'
import { prisma } from '@/lib/prisma'

const TYPE_TO_PATH: Record<string, string> = {
  GUIDE: 'guides',
  TOPIC: 'topics',
  CHEAT_SHEET: 'cheat-sheets',
  MISTAKES: 'mistakes',
  TIPS: 'tips',
  EXAM_DAY: 'exam-day',
  GLOSSARY: 'glossary',
}

const TYPE_LABELS: Record<string, string> = {
  GUIDE: 'Exam Guide',
  TOPIC: 'Study Topic',
  CHEAT_SHEET: 'Cheat Sheet',
  MISTAKES: 'Common Mistakes',
  TIPS: 'Exam Tips',
  EXAM_DAY: 'Exam Day',
  GLOSSARY: 'Glossary',
}

interface RelatedResourcesProps {
  currentSlug: string
  division?: string | null
  currentType?: string
}

export async function RelatedResources({ currentSlug, division, currentType }: RelatedResourcesProps) {
  const related = await prisma.seoPage.findMany({
    where: {
      slug: { not: currentSlug },
      OR: division
        ? [{ division }, { division: null }]
        : [{ division: null }],
    },
    select: { slug: true, title: true, type: true, division: true },
    take: 50,
  })

  const divisionMatches = related.filter((p) => p.division === division)
  const generalMatches = related.filter((p) => !p.division)

  const byType: Record<string, typeof related> = {}
  for (const page of [...divisionMatches, ...generalMatches]) {
    if (page.type === currentType) continue
    if (!byType[page.type]) byType[page.type] = []
    if (byType[page.type].length < 3) byType[page.type].push(page)
  }

  const sameType = related.filter((p) => p.type === currentType && p.slug !== currentSlug).slice(0, 3)

  const sections = Object.entries(byType).filter(([, pages]) => pages.length > 0)
  if (sections.length === 0 && sameType.length === 0) return null

  return (
    <div className="mt-10 pt-8 border-t border-brand-gray-200">
      <h3 className="text-lg font-bold text-black mb-4">Related Resources</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map(([type, pages]) => (
          <div key={type}>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray-400 mb-2">
              {TYPE_LABELS[type] || type}
            </p>
            <ul className="space-y-1">
              {pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${TYPE_TO_PATH[page.type]}/${page.slug}`}
                    className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {sameType.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray-400 mb-2">
              More {TYPE_LABELS[currentType || ''] || 'Resources'}
            </p>
            <ul className="space-y-1">
              {sameType.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${TYPE_TO_PATH[page.type]}/${page.slug}`}
                    className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {division && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-gray-400 mb-2">
              Practice
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href={`/divisions/${division}/flashcards`}
                  className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
                >
                  {division.toUpperCase()} Flashcards
                </Link>
              </li>
              <li>
                <Link
                  href={`/divisions/${division}/mini-exams`}
                  className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
                >
                  {division.toUpperCase()} Mini Exams
                </Link>
              </li>
              <li>
                <Link
                  href={`/divisions/${division}/full-exams`}
                  className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
                >
                  {division.toUpperCase()} Full Exams
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
