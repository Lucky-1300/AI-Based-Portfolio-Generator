/**
 * Theme Manager Service
 * Handles theme configuration and generation
 */

import { THEME_CONFIGURATIONS } from '../utils/portfolioSchema';

/**
 * Get theme configuration
 */
export const getThemeConfig = (themeName, colorScheme = 'light') => {
  const theme = THEME_CONFIGURATIONS[themeName] || THEME_CONFIGURATIONS.modern;
  const colors = theme.colors[colorScheme] || theme.colors.light;

  return {
    name: theme.name,
    description: theme.description,
    colors,
    themeName,
    colorScheme,
  };
};

/**
 * Get CSS variables from theme
 */
export const getThemeCSSVariables = (theme) => {
  const cssVars = {};
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value;
  });

  return cssVars;
};

/**
 * Apply theme to document
 */
export const applyTheme = (theme) => {
  const root = document.documentElement;
  const cssVars = getThemeCSSVariables(theme.colors);

  Object.entries(cssVars).forEach(([varName, value]) => {
    root.style.setProperty(varName, value);
  });

  // Store theme preference
  localStorage.setItem('portfolioTheme', JSON.stringify({
    style: theme.themeName,
    colorScheme: theme.colorScheme,
  }));
};

/**
 * Get saved theme preference
 */
export const getSavedThemePreference = () => {
  try {
    const saved = localStorage.getItem('portfolioTheme');
    return saved ? JSON.parse(saved) : { style: 'modern', colorScheme: 'light' };
  } catch (error) {
    return { style: 'modern', colorScheme: 'light' };
  }
};

/**
 * Get theme-specific classes
 */
export const getThemeClasses = (themeName, section = 'default') => {
  const baseClasses = {
    default: 'font-sans antialiased',
    hero: 'text-center py-20',
    section: 'py-16 px-4',
    card: 'rounded-lg shadow-md hover:shadow-lg transition-shadow',
  };

  const themeClasses = {
    minimal: {
      default: 'font-sans antialiased bg-white text-gray-900',
      hero: 'text-center py-20 border-b border-gray-200',
      section: 'py-16 px-4 bg-white',
      card: 'rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200',
    },
    modern: {
      default: 'font-sans antialiased',
      hero: 'text-center py-20 bg-gradient-to-br from-blue-50 to-cyan-50',
      section: 'py-16 px-4',
      card: 'rounded-2xl shadow-lg hover:shadow-2xl transition-all backdrop-blur bg-white/80',
    },
    professional: {
      default: 'font-serif antialiased',
      hero: 'text-center py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white',
      section: 'py-16 px-4 bg-white',
      card: 'rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600',
    },
    creative: {
      default: 'font-sans antialiased',
      hero: 'text-center py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50',
      section: 'py-16 px-4',
      card: 'rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1',
    },
  };

  return (themeClasses[themeName] || themeClasses.modern)[section];
};

/**
 * Get font family based on style
 */
export const getFontFamily = (fontStyle = 'sans') => {
  const fonts = {
    sans: "'Inter', 'Segoe UI', sans-serif",
    serif: "'Merriweather', 'Georgia', serif",
    mono: "'Fira Code', 'Monaco', monospace",
  };

  return fonts[fontStyle] || fonts.sans;
};

/**
 * Generate theme CSS
 */
export const generateThemeCSS = (theme, fontStyle = 'sans') => {
  const colors = theme.colors;
  const fontFamily = getFontFamily(fontStyle);

  return `
    :root {
      --color-primary: ${colors.primary};
      --color-secondary: ${colors.secondary};
      --color-accent: ${colors.accent};
      --color-background: ${colors.background};
      --color-text: ${colors.text};
      --font-family: ${fontFamily};
    }

    * {
      color: var(--color-text);
    }

    body {
      background-color: var(--color-background);
      font-family: var(--font-family);
      color: var(--color-text);
    }

    .btn-primary {
      background-color: var(--color-primary);
      color: white;
    }

    .btn-primary:hover {
      opacity: 0.9;
    }

    .text-primary {
      color: var(--color-primary);
    }

    .text-secondary {
      color: var(--color-secondary);
    }

    .accent {
      color: var(--color-accent);
    }

    .bg-primary {
      background-color: var(--color-primary);
    }

    .border-primary {
      border-color: var(--color-primary);
    }
  `;
};

/**
 * Get theme preview data
 */
export const getThemePreviewData = () => {
  return {
    name: 'Jane Doe',
    title: 'Full Stack Developer',
    bio: 'Creating beautiful and functional web experiences',
    skills: ['React', 'Node.js', 'Python', 'MongoDB'],
    experience: [
      {
        title: 'Senior Developer',
        company: 'Tech Company',
        duration: '2022 - Present',
      },
    ],
  };
};
