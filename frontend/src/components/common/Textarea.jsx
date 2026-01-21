export default function Textarea({
  label,
  error,
  helperText,
  rows = 4,
  className = '',
  ...props
}) {
  const textareaId = props.id;
  const helpId = textareaId ? `${textareaId}-help` : undefined;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-semibold text-secondary-900 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={!error && helperText ? helpId : undefined}
        className={`input-field ${error ? 'input-error' : ''} resize-none ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
      {helperText && !error && (
        <p id={helpId} className="text-sm text-secondary-500 mt-1">{helperText}</p>
      )}
    </div>
  )
}
