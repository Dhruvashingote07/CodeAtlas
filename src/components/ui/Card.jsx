export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700
        ${hover ? 'hover:shadow-lg dark:hover:shadow-gray-900/50 hover:border-primary-300 dark:hover:border-primary-700' : ''}
        shadow-sm transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
