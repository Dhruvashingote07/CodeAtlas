import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  actions,
  size = 'md',
  type = 'default',
}) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }

  const typeStyles = {
    default: 'bg-white dark:bg-gray-800',
    danger: 'bg-white dark:bg-gray-800 border-2 border-red-500/20',
    success: 'bg-white dark:bg-gray-800 border-2 border-green-500/20',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full ${sizeClasses[size]} ${typeStyles[type]} rounded-lg shadow-2xl overflow-hidden`}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
                  {description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-4">
              {children}
            </div>

            {/* Actions */}
            {actions && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex items-center justify-end gap-3">
                {actions.map((action, idx) => (
                  <Button
                    key={idx}
                    variant={action.variant || 'ghost'}
                    size="md"
                    onClick={action.onClick}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
