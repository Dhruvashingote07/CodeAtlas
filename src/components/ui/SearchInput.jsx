import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchInput({ placeholder = 'Search...', onSearch, loading = false, className = '' }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div className={`relative ${className}`} animate={{ scale: isFocused ? 1.02 : 1 }}>
      <div
        className={`
          relative flex items-center px-4 py-2.5 rounded-lg border-2 transition-colors
          ${
            isFocused
              ? 'border-primary-500 bg-white dark:bg-gray-800'
              : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900'
          }
        `}
      >
        <svg
          className={`w-5 h-5 mr-3 transition-colors ${isFocused ? 'text-primary-500' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onSearch?.(e.target.value)}
          disabled={loading}
          className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />

        <AnimatePresence>
          {loading && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="ml-2 animate-spin"
            >
              ⚙️
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
