import { Link } from 'react-router-dom'
import JsonLd from './JsonLd'

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://codeatlas.dev${item.path}`,
    })),
  }

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors shrink-0">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
