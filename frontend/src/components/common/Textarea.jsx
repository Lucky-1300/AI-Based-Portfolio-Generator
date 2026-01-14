export default function Textarea({
  label,
  error,
  helperText,
  rows = 4,
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
      <textarea
        rows={rows}
        className={`input-field ${error ? 'input-error' : ''} resize-none ${className}`}
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
