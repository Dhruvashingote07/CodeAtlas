import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 7,
}) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const halfVisible = Math.floor(maxVisible / 2)

    let start = Math.max(1, currentPage - halfVisible)
    let end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    if (start > 1) {
      pages.push(1)
      if (start > 2) pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPageNumbers()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-2 mt-12 flex-wrap"
    >
      {/* Previous Button */}
      <Button
        variant="ghost"
        size="md"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="gap-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, idx) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${idx}`} className="px-3 py-2 text-gray-500 dark:text-gray-400">
                ...
              </span>
            )
          }

          return (
            <motion.button
              key={page}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange(page)}
              className={`
                px-3 py-2 rounded-lg font-semibold transition-colors
                ${
                  page === currentPage
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }
              `}
            >
              {page}
            </motion.button>
          )
        })}
      </div>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="md"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="gap-1"
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      {/* Page Info */}
      <div className="text-sm text-gray-600 dark:text-gray-400 w-full text-center mt-2">
        Page {currentPage} of {totalPages}
      </div>
    </motion.div>
  )
}
