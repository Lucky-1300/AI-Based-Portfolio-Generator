export default function Select({
  label,
  options = [],
  error,
  helperText,
  className = '',
  ...props
}) {
  const selectId = props.id;
  const helpId = selectId ? `${selectId}-help` : undefined;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-semibold text-secondary-900 mb-2">
          {label}
        </label>
      )}
      <select
        aria-invalid={!!error}
        aria-describedby={!error && helperText ? helpId : undefined}
        className={`input-field ${error ? 'input-error' : ''} ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
      {helperText && !error && (
        <p id={helpId} className="text-sm text-secondary-500 mt-1">{helperText}</p>
      )}
    </div>
  )
}
