import { useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { id: 'modern', name: 'Modern', color: 'bg-gradient-to-r from-primary-600 to-accent-600' },
    { id: 'classic', name: 'Classic', color: 'bg-secondary-800' },
    { id: 'minimal', name: 'Minimal', color: 'bg-secondary-400' },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-secondary-700">Theme:</span>
      <div className="flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentTheme === theme.id
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            }`}
            title={theme.name}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
