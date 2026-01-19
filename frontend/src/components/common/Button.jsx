export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center transform hover:scale-105'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 active:from-primary-800 active:to-primary-900 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-secondary-900 hover:bg-secondary-50 border-2 border-secondary-300 hover:border-secondary-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 hover:border-primary-700',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 active:from-red-800 active:to-red-900 shadow-md hover:shadow-lg',
    success: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 active:from-green-800 active:to-green-900 shadow-md hover:shadow-lg',
    ghost: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  }

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    large: 'px-8 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
