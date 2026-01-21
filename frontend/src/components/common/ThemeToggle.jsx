import Button from './Button';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { colorMode, toggleColorMode } = useTheme();
  const isDark = colorMode === 'dark';
  return (
    <Button
      variant="outline"
      size="md"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleColorMode}
      className={`gap-2 ${className}`}
    >
      {isDark ? (
        <span className="inline-flex items-center">
          <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45-1.79l-1.8 1.79 1.42 1.42 1.79-1.8-1.41-1.41zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8-8h3v-1h-3v1zM1 12H4v-1H1v1zm2.34 6.66l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zm16.31 0l-1.79-1.8-1.42 1.42 1.8 1.79 1.41-1.41zM12 7a5 5 0 100 10 5 5 0 000-10z" />
          </svg>
          Light
        </span>
      ) : (
        <span className="inline-flex items-center">
          <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.742 13.045A8 8 0 1110.955 3.258a9 9 0 109.787 9.787z" />
          </svg>
          Dark
        </span>
      )}
    </Button>
  );
}
