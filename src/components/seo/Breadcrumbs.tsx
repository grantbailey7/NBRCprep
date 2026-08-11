import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nbrcprep.app' },
    ...items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: item.label,
      ...(item.href ? { item: `https://nbrcprep.app${item.href}` } : {}),
    })),
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-brand-gray-400">
          <li>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span aria-hidden="true">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-black transition-colors">{item.label}</Link>
              ) : (
                <span className="text-brand-gray-600">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
