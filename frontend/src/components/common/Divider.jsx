export default function Divider({
  variant = 'light',
  spacing = 'md',
  className = '',
}) {
  const variantClasses = {
    light: 'border-secondary-200',
    medium: 'border-secondary-300',
    dark: 'border-secondary-400',
  }

  const spacingClasses = {
    sm: 'my-3',
    md: 'my-6',
    lg: 'my-8',
    xl: 'my-12',
  }

  return (
    <div
      className={`border-t ${variantClasses[variant]} ${spacingClasses[spacing]} ${className}`}
    />
  )
}
