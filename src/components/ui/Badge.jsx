export default function Badge({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    secondary: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    danger: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  }

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${variants[variant] || variants.primary}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
