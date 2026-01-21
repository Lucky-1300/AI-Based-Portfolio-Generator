export default function Input({
  label,
  error,
  helperText,
  className = '',
  ...props
}) {
  const inputId = props.id;
  const helpId = inputId ? `${inputId}-help` : undefined;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-semibold text-secondary-900 mb-2">
          {label}
        </label>
      )}
      <input
        aria-invalid={!!error}
        aria-describedby={!error && helperText ? helpId : undefined}
        className={`input-field ${error ? 'input-error' : ''} ${className}`}
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
