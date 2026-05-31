import { motion } from 'framer-motion'
import { formatNumber } from '../utils/helpers'

export default function StatCard({ icon, label, value, trend, color = 'primary' }) {
  const colorClasses = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
        {/* Icon */}
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
          <div className="mt-1 flex items-end gap-2">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(value)}
            </p>
            {trend && (
              <span
                className={`text-sm font-semibold flex items-center gap-1 ${
                  trend > 0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {trend > 0 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L5.586 19.586" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8L5.586 4.414" />
                  </svg>
                )}
                {Math.abs(trend)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
