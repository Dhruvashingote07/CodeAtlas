import { motion, AnimatePresence } from 'framer-motion'

export default function FilterPanel({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
  isOpen,
  onToggle,
}) {
  return (
    <div className="relative">
      {/* Filter Toggle Button (Mobile) */}
      <button
        onClick={onToggle}
        className="lg:hidden mb-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:relative lg:opacity-100 lg:h-auto mb-6 lg:mb-0"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 space-y-6">
              {/* Clear All Button */}
              {Object.values(activeFilters).some(v => v) && (
                <button
                  onClick={onClearAll}
                  className="w-full text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline text-center"
                >
                  Clear all filters
                </button>
              )}

              {/* Filter Groups */}
              {filters.map((filterGroup, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {filterGroup.label}
                  </h3>

                  <div className="space-y-2">
                    {filterGroup.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={activeFilters[filterGroup.key]?.includes(option.value) || false}
                          onChange={(e) =>
                            onFilterChange(filterGroup.key, option.value, e.target.checked)
                          }
                          className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {option.label}
                        </span>
                        {option.count && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                            {option.count}
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
