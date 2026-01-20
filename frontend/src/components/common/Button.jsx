export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center transform hover:scale-105 shadow-md hover:shadow-xl'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-300 to-primary-400 text-white hover:from-primary-400 hover:to-primary-500 active:from-primary-500 active:to-primary-600 shadow-lg hover:shadow-2xl hover:-translate-y-0.5',
    secondary: 'bg-gradient-to-r from-secondary-100 to-secondary-50 text-secondary-900 hover:from-secondary-200 hover:to-secondary-100 border-2 border-secondary-300 hover:border-secondary-400 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-400 text-primary-600 hover:bg-primary-50 active:bg-primary-100 hover:border-primary-500 hover:shadow-lg',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 shadow-lg hover:shadow-2xl hover:-translate-y-0.5',
    success: 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 shadow-lg hover:shadow-2xl hover:-translate-y-0.5',
    ghost: 'text-primary-600 hover:bg-primary-100 active:bg-primary-200 hover:shadow-none',
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
