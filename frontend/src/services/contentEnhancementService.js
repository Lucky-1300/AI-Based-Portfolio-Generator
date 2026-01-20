/**
 * AI Content Enhancement Service
 * Improves portfolio content quality using AI
 */

import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

/**
 * Enhance professional summary
 */
export const enhanceSummary = async (summary) => {
  try {
    const response = await axios.post(`${API_BASE}/api/ai/enhance-summary`, {
      content: summary,
    });
    return response.data.enhanced;
  } catch (error) {
    console.error('Error enhancing summary:', error);
    return summary; // Return original if enhancement fails
  }
};

/**
 * Enhance job responsibilities/achievements
 */
export const enhanceExperience = async (jobTitle, company, responsibilities) => {
  try {
    const response = await axios.post(`${API_BASE}/api/ai/enhance-experience`, {
      jobTitle,
      company,
      responsibilities,
    });
    return response.data.enhanced;
  } catch (error) {
    console.error('Error enhancing experience:', error);
    return responsibilities;
  }
};

/**
 * Generate project description
 */
export const generateProjectDescription = async (projectName, techStack) => {
  try {
    const response = await axios.post(`${API_BASE}/api/ai/generate-project-description`, {
      projectName,
      techStack,
    });
    return response.data.description;
  } catch (error) {
    console.error('Error generating project description:', error);
    return '';
  }
};

/**
 * Optimize all content in portfolio
 */
export const optimizePortfolioContent = async (portfolio) => {
  try {
    const response = await axios.post(`${API_BASE}/api/ai/optimize-portfolio`, {
      portfolio,
    });
    return response.data.optimized;
  } catch (error) {
    console.error('Error optimizing portfolio:', error);
    return portfolio;
  }
};

/**
 * Local content enhancement (client-side fallback)
 */
export const localEnhanceContent = (content, type = 'general') => {
  if (!content || typeof content !== 'string') return content;

  let enhanced = content.trim();

  // Improve first person perspective
  enhanced = enhanced.replace(/I am /g, '');
  enhanced = enhanced.replace(/I have /g, '');

  // Add action verbs for experience
  if (type === 'experience') {
    const actionVerbs = [
      'Developed', 'Implemented', 'Created', 'Built', 'Designed',
      'Managed', 'Led', 'Coordinated', 'Optimized', 'Improved'
    ];
    if (!actionVerbs.some(verb => enhanced.startsWith(verb))) {
      enhanced = `Developed ${enhanced.charAt(0).toLowerCase() + enhanced.slice(1)}`;
    }
  }

  // Ensure proper capitalization
  enhanced = enhanced.charAt(0).toUpperCase() + enhanced.slice(1);

  // Remove extra whitespace
  enhanced = enhanced.replace(/\s+/g, ' ');

  return enhanced;
};

/**
 * Enhance skills with categories
 */
export const categorizeSkills = (skills) => {
  const skillCategories = {
    frontend: ['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript'],
    backend: ['node', 'python', 'java', 'golang', 'rust', 'php', 'express', 'django'],
    database: ['sql', 'mongodb', 'postgresql', 'mysql', 'firebase', 'redis'],
    tools: ['git', 'docker', 'kubernetes', 'webpack', 'vite', 'npm', 'yarn'],
    cloud: ['aws', 'azure', 'gcp', 'heroku', 'vercel', 'netlify'],
  };

  const categorized = {
    frontend: [],
    backend: [],
    database: [],
    tools: [],
    cloud: [],
    other: [],
  };

  skills.forEach(skill => {
    const lowerSkill = skill.toLowerCase();
    let found = false;

    for (const [category, keywords] of Object.entries(skillCategories)) {
      if (keywords.some(keyword => lowerSkill.includes(keyword))) {
        categorized[category].push(skill);
        found = true;
        break;
      }
    }

    if (!found) {
      categorized.other.push(skill);
    }
  });

  return categorized;
};

/**
 * Calculate reading time
 */
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

/**
 * Get AI suggestions for profile improvement
 */
export const getProfileSuggestions = (portfolio) => {
  const suggestions = [];

  if (!portfolio.personal?.profileImage) {
    suggestions.push('Add a professional profile image to increase credibility');
  }

  if (!portfolio.about?.summary || portfolio.about.summary.length < 100) {
    suggestions.push('Write a more detailed professional summary (100+ characters)');
  }

  if (portfolio.skills.technical.length < 5) {
    suggestions.push('Add more technical skills to showcase your expertise');
  }

  if (portfolio.experience.length === 0) {
    suggestions.push('Add your work experience and achievements');
  }

  if (portfolio.projects.length === 0) {
    suggestions.push('Add your projects to demonstrate practical experience');
  }

  if (portfolio.personal?.social?.github === '' && portfolio.personal?.social?.linkedin === '') {
    suggestions.push('Link your GitHub or LinkedIn profile for credibility');
  }

  if (portfolio.education.length === 0) {
    suggestions.push('Add your educational background');
  }

  return suggestions;
};
