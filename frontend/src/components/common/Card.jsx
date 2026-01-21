export default function Card({
  children,
  className = '',
  size = 'md',
  hoverable = true,
  ...props
}) {
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }

  return (
    <div
      className={`bg-white border border-secondary-200 rounded-xl shadow-sm focus-within:ring-1 focus-within:ring-primary-200 dark:bg-slate-900 dark:border-slate-800 ${
        hoverable ? 'hover:shadow-md hover:-translate-y-0.5 transition-all duration-200' : ''
      } ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
