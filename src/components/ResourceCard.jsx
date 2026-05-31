import { motion } from 'framer-motion'

export default function ResourceCard({ resource, onClick, isBookmarked, onBookmarkClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative h-full flex flex-col p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-300">
        {/* Resource Type Badge */}
        {resource.type && (
          <div className="inline-flex w-fit mb-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
              {resource.type}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
          {resource.description}
        </p>

        {/* Tags/Skills */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {resource.tags.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                +{resource.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          {resource.url && (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
            >
              View
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          {isBookmarked !== undefined && (
            <button
              onClick={onBookmarkClick}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-label="Bookmark resource"
            >
              <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
