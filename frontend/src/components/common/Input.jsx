export default function Input({
  label,
  error,
  helperText,
  className = '',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-secondary-900 mb-2">
          {label}
        </label>
      )}
      <input
        className={`input-field ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-secondary-500 mt-1">{helperText}</p>
      )}
    </div>
  )
}
