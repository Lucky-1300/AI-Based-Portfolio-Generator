export default function Loader({
  size = 'md',
  variant = 'primary',
  className = '',
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  const variantClasses = {
    primary: 'border-primary-300 border-t-primary-600',
    secondary: 'border-secondary-300 border-t-secondary-600',
    accent: 'border-accent-300 border-t-accent-600',
    white: 'border-gray-200 border-t-white',
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${variantClasses[variant]} border-4 rounded-full animate-spin`}
      />
    </div>
  )
}
