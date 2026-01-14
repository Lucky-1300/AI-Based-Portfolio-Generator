export default function Select({
  label,
  options = [],
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
      <select
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
        <p className="text-sm text-secondary-500 mt-1">{helperText}</p>
      )}
    </div>
  )
}
