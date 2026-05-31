import { motion } from 'framer-motion'

export default function Input({
  label,
  error,
  icon: Icon,
  className = '',
  type = 'text',
  ...props
}) {
  return (
    <motion.div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}

        <input
          type={type}
          className={`
            w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white
            focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20
            transition-colors duration-200
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}
