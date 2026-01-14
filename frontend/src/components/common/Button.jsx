export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center'

  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-white text-secondary-900 hover:bg-secondary-50 border-2 border-secondary-300',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
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
