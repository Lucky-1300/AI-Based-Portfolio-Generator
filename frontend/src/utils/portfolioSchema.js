/**
 * Portfolio Data Schema
 * Defines the complete structure for portfolio data
 */

export const portfolioSchema = {
  personal: {
    fullName: '',
    professionalTitle: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    profileImage: '',
    social: {
      github: '',
      linkedin: '',
      twitter: '',
      portfolio: '',
    },
  },
  about: {
    summary: '',
    highlights: [],
  },
  skills: {
    technical: [],
    tools: [],
    soft: [],
  },
  experience: [
    {
      id: '',
      jobTitle: '',
      company: '',
      duration: {
        start: '',
        end: '',
        current: false,
      },
      responsibilities: [],
      achievements: [],
    },
  ],
  projects: [
    {
      id: '',
      name: '',
      description: '',
      techStack: [],
      liveUrl: '',
      githubUrl: '',
      imageUrl: '',
    },
  ],
  education: [
    {
      id: '',
      degree: '',
      institution: '',
      year: '',
      description: '',
    },
  ],
  certifications: [
    {
      id: '',
      title: '',
      issuer: '',
      date: '',
      credentialUrl: '',
    },
  ],
  theme: {
    style: 'modern', // minimal, modern, professional, creative
    colorScheme: 'light', // light, dark, custom
    fontStyle: 'sans', // sans, serif, mono
    customColors: {
      primary: '#1890ff',
      secondary: '#36cfc9',
      accent: '#faad14',
      background: '#ffffff',
      text: '#000000',
    },
  },
  export: {
    type: 'html', // html, react, pdf
    includeGoogleAnalytics: false,
    gaTrackingId: '',
  },
};

/**
 * Create empty portfolio object
 */
export const createEmptyPortfolio = () => ({
  ...portfolioSchema,
  experience: [],
  projects: [],
  education: [],
  certifications: [],
  skills: {
    technical: [],
    tools: [],
    soft: [],
  },
});

/**
 * Validate portfolio data
 */
export const validatePortfolio = (portfolio) => {
  const errors = [];

  if (!portfolio.personal?.fullName?.trim()) {
    errors.push('Full name is required');
  }
  if (!portfolio.personal?.email?.trim()) {
    errors.push('Email is required');
  }
  if (!portfolio.about?.summary?.trim()) {
    errors.push('About summary is required');
  }
  if (portfolio.skills.technical.length === 0) {
    errors.push('At least one technical skill is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Export types
 */
export const EXPORT_TYPES = {
  HTML: 'html',
  REACT: 'react',
  PDF: 'pdf',
};

/**
 * Theme styles
 */
export const THEME_STYLES = {
  MINIMAL: 'minimal',
  MODERN: 'modern',
  PROFESSIONAL: 'professional',
  CREATIVE: 'creative',
};

/**
 * Color schemes
 */
export const COLOR_SCHEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  CUSTOM: 'custom',
};

/**
 * Font styles
 */
export const FONT_STYLES = {
  SANS: 'sans',
  SERIF: 'serif',
  MONO: 'mono',
};

/**
 * Theme configurations
 */
export const THEME_CONFIGURATIONS = {
  minimal: {
    name: 'Minimal',
    description: 'Clean and simple design with focus on content',
    colors: {
      light: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#999999',
        background: '#ffffff',
        text: '#333333',
      },
      dark: {
        primary: '#ffffff',
        secondary: '#cccccc',
        accent: '#999999',
        background: '#0f0f0f',
        text: '#e0e0e0',
      },
    },
  },
  modern: {
    name: 'Modern',
    description: 'Contemporary design with gradients and glassmorphism',
    colors: {
      light: {
        primary: '#1890ff',
        secondary: '#36cfc9',
        accent: '#faad14',
        background: '#f5f7fa',
        text: '#262626',
      },
      dark: {
        primary: '#1890ff',
        secondary: '#36cfc9',
        accent: '#faad14',
        background: '#0f0f0f',
        text: '#e0e0e0',
      },
    },
  },
  professional: {
    name: 'Professional',
    description: 'Corporate design with neutral tones',
    colors: {
      light: {
        primary: '#003d82',
        secondary: '#005a9c',
        accent: '#0073b6',
        background: '#ffffff',
        text: '#1a1a1a',
      },
      dark: {
        primary: '#0099ff',
        secondary: '#33b3ff',
        accent: '#66ccff',
        background: '#1a1a1a',
        text: '#e0e0e0',
      },
    },
  },
  creative: {
    name: 'Creative',
    description: 'Vibrant design with unique layouts',
    colors: {
      light: {
        primary: '#ff6b6b',
        secondary: '#ee5a6f',
        accent: '#ffd93d',
        background: '#fff8f3',
        text: '#2c3e50',
      },
      dark: {
        primary: '#ff6b6b',
        secondary: '#ff8787',
        accent: '#ffd93d',
        background: '#1a1a2e',
        text: '#e0e0e0',
      },
    },
  },
};
