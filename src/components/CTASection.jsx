import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundPattern = true,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-primary-950/30 dark:via-gray-950 dark:to-gray-950" />

      {/* Decorative elements */}
      {backgroundPattern && (
        <>
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            variants={itemVariants}
            className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {primaryAction && (
            <Button size="lg" onClick={primaryAction.onClick}>
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button size="lg" variant="ghost" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}
