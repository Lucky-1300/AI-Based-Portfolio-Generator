import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';
import Modal from '../common/Modal';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(currentTheme || 'modern');

  const themes = [
    { id: 'modern', name: 'Modern', description: 'Contemporary design', color: 'from-primary-600 to-accent-600' },
    { id: 'classic', name: 'Classic', description: 'Timeless elegance', color: 'from-secondary-800 to-secondary-900' },
    { id: 'minimal', name: 'Minimal', description: 'Clean and simple', color: 'from-secondary-300 to-secondary-400' },
    { id: 'creative', name: 'Creative', description: 'Bold and expressive', color: 'from-purple-600 to-pink-600' },
  ];

  const handleApplyTheme = () => {
    setTheme(selectedTheme);
    setShowPreview(false);
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setShowPreview(true)}
        className="flex items-center gap-2"
      >
        🎨 Theme
      </Button>

      <Modal isOpen={showPreview} onClose={() => setShowPreview(false)}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Portfolio Themes</h3>
            <p className="text-secondary-600">
              Choose a theme that matches your style
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-4 rounded-lg border-2 text-left transition ${
                  selectedTheme === theme.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-secondary-200 hover:border-secondary-400'
                }`}
              >
                <div className={`w-full h-12 rounded mb-3 bg-gradient-to-r ${theme.color}`} />
                <div className="font-semibold text-sm">{theme.name}</div>
                <div className="text-xs text-secondary-600">{theme.description}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <Button variant="secondary" onClick={() => setShowPreview(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleApplyTheme}>
              Apply Theme
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
