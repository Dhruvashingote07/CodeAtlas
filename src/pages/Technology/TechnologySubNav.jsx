import { Link, useLocation } from 'react-router-dom'

const SUB_PAGES = [
  { id: 'overview', label: 'Overview', icon: '📋' },
  { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
  { id: 'books', label: 'Books', icon: '📚' },
  { id: 'interview-questions', label: 'Interview Q&A', icon: '❓' },
  { id: 'cheatsheet', label: 'Cheat Sheet', icon: '📋' },
  { id: 'documentation', label: 'Docs', icon: '📘' },
  { id: 'faq', label: 'FAQ', icon: '❔' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'practice', label: 'Practice', icon: '🧪' },
  { id: 'certifications', label: 'Certs', icon: '🏆' },
]

export default function TechnologySubNav({ category, slug, activeContentType }) {
  const basePath = `/${category}/${slug}`

  return (
    <nav aria-label="Technology content navigation" className="mb-8">
      <div className="flex flex-wrap gap-2">
        {SUB_PAGES.map(page => (
          <Link
            key={page.id}
            to={page.id === 'overview' ? basePath : `${basePath}/${page.id}`}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              activeContentType === page.id
                ? 'bg-primary-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-base">{page.icon}</span>
            <span>{page.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
