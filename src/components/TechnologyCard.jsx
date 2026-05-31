import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function TechnologyCard({ item, basePath, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/${basePath}/${item.id}`}
        className="card block p-5 group"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{item.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {item.name}
            </h3>
            {item.difficulty && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {item.difficulty}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {item.description}
        </p>
        {item.topics && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.topics.slice(0, 4).map(topic => (
              <span key={topic} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        )}
        {item.roadmapUrl && (
          <div className="mt-3">
            <a
              href={item.roadmapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Roadmap
            </a>
          </div>
        )}
      </Link>
    </motion.div>
  )
}
