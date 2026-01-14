/**
 * Tailwind CSS Utility Classes
 * Central collection of reusable utility class combinations
 */

export const buttonClasses = {
  base: 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-4 focus:ring-primary-300',
  secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 active:bg-secondary-300 focus:ring-4 focus:ring-secondary-300',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-4 focus:ring-primary-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-4 focus:ring-red-300',
  ghost: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
}

export const cardClasses = {
  base: 'bg-white rounded-lg border border-secondary-200 shadow-sm',
  hover: 'hover:shadow-md transition-shadow duration-200',
  padding: {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  },
}

export const inputClasses = {
  base: 'w-full px-4 py-2 border border-secondary-300 rounded-lg font-base transition-all duration-200',
  focus: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
  error: 'border-red-500 focus:ring-red-500',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-100',
}

export const badgeClasses = {
  base: 'inline-flex items-center rounded-full font-medium transition-colors duration-200',
  size: {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  },
  variant: {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  },
}

export const containerClasses = {
  base: 'mx-auto px-4 sm:px-6 lg:px-8',
  size: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
}

export const sectionClasses = {
  base: 'relative',
  spacing: {
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  },
}

export const gridClasses = {
  base: 'grid',
  cols: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  gap: {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  },
}

export const flexClasses = {
  base: 'flex',
  direction: {
    row: 'flex-row',
    col: 'flex-col',
  },
  justify: {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
  },
  items: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  },
}

export const textClasses = {
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  },
  weight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  color: {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    muted: 'text-secondary-500',
    error: 'text-red-600',
    success: 'text-green-600',
  },
}

export const spacingClasses = {
  margin: {
    none: 'm-0',
    small: 'm-2',
    medium: 'm-4',
    large: 'm-6',
  },
  padding: {
    none: 'p-0',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6',
  },
}

export const shadowClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}

export const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}
