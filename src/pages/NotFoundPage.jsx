import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HelmetMeta from '../components/seo/HelmetMeta'
import { getNotFoundMeta } from '../seo/metadata'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center px-4">
      <HelmetMeta {...getNotFoundMeta()} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="text-9xl font-extrabold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors w-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4" />
            </svg>
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors w-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
          <Link to="/languages" className="text-primary-600 dark:text-primary-400 hover:underline">
            Languages
          </Link>
          <Link to="/roadmaps" className="text-primary-600 dark:text-primary-400 hover:underline">
            Roadmaps
          </Link>
          <Link to="/tools" className="text-primary-600 dark:text-primary-400 hover:underline">
            Tools
          </Link>
          <Link to="/books" className="text-primary-600 dark:text-primary-400 hover:underline">
            Books
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
