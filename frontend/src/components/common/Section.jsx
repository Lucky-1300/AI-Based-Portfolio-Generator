export default function Section({
  children,
  title,
  subtitle,
  className = '',
  spacing = 'md',
}) {
  const spacingClasses = {
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  }

  return (
    <section className={`${spacingClasses[spacing]} ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-3xl font-bold text-secondary-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-secondary-600">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
