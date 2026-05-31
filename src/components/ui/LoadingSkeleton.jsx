import { motion } from 'framer-motion'

export default function LoadingSkeleton({ count = 6, type = 'card' }) {
  const skeletonVariants = {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
    transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' },
  }

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64"
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>
    )
  }

  if (type === 'line') {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-gray-200 dark:bg-gray-700 rounded h-4"
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
            style={{ width: `${Math.random() * 30 + 70}%` }}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96"
      variants={skeletonVariants}
      initial="initial"
      animate="animate"
    />
  )
}
