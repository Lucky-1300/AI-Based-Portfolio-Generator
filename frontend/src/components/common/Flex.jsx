export default function Flex({
  children,
  direction = 'row',
  justify = 'start',
  items = 'start',
  gap = 4,
  wrap = false,
  className = '',
  ...props
}) {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    rowReverse: 'flex-row-reverse',
    colReverse: 'flex-col-reverse',
  }

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }

  const itemsClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }

  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  }

  return (
    <div
      className={`flex ${directionClasses[direction]} ${justifyClasses[justify]} ${
        itemsClasses[items]
      } ${gapClasses[gap]} ${wrap ? 'flex-wrap' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
