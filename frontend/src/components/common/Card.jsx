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
      className={`bg-white border border-secondary-200 rounded-lg shadow-sm ${
        hoverable ? 'hover:shadow-md transition-shadow duration-200' : ''
      } ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
