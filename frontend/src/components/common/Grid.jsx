export default function Grid({
  children,
  cols = 1,
  gap = 6,
  className = '',
  responsive = true,
  ...props
}) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }

  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  }

  const responsiveClass = responsive
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    : colClasses[cols]

  return (
    <div
      className={`grid ${responsiveClass || colClasses[cols]} ${
        gapClasses[gap]
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
