/**
 * Portfolio Export Integration Service
 * Orchestrates all export formats (HTML, React, PDF)
 */

import { generateHTMLPortfolio } from './htmlExportService';
import { generateReactPortfolio } from './reactExportService';
import { generatePDFContent, downloadPDFPortfolio } from './pdfExportService';

/**
 * Universal portfolio exporter
 */
export const exportPortfolio = async (portfolio, format = 'html', filename) => {
  try {
    switch (format.toLowerCase()) {
      case 'html':
        return exportAsHTML(portfolio, filename);
      case 'react':
        return exportAsReact(portfolio, filename);
      case 'pdf':
        return exportAsPDF(portfolio, filename);
      default:
        throw new Error(`Unsupported export format: ${format}`);
    }
  } catch (error) {
    console.error(`Error exporting portfolio as ${format}:`, error);
    throw error;
  }
};

/**
 * Export as standalone HTML
 */
export const exportAsHTML = async (portfolio, filename = 'portfolio.html') => {
  try {
    const htmlContent = generateHTMLPortfolio(portfolio);
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return {
      success: true,
      format: 'html',
      filename,
      message: 'Portfolio exported as HTML successfully',
    };
  } catch (error) {
    throw new Error(`Failed to export HTML: ${error.message}`);
  }
};

/**
 * Export as React project (zip file)
 */
export const exportAsReact = async (portfolio, filename = 'portfolio-react') => {
  try {
    const projectStructure = generateReactPortfolio(portfolio);
    
    // For now, return the structure
    // In production, you'd use a library like jszip to create actual zip
    console.log('React export structure:', projectStructure);

    return {
      success: true,
      format: 'react',
      filename,
      structure: projectStructure,
      message: 'React export structure generated. Use jszip to create downloadable file.',
    };
  } catch (error) {
    throw new Error(`Failed to export React: ${error.message}`);
  }
};

/**
 * Export as PDF
 */
export const exportAsPDF = async (portfolio, filename = 'portfolio.pdf') => {
  try {
    await downloadPDFPortfolio(portfolio, filename);
    
    return {
      success: true,
      format: 'pdf',
      filename,
      message: 'PDF export initiated',
    };
  } catch (error) {
    throw new Error(`Failed to export PDF: ${error.message}`);
  }
};

/**
 * Get export format info
 */
export const getExportFormatInfo = () => {
  return {
    html: {
      name: 'HTML',
      description: 'Standalone HTML file with embedded CSS',
      extension: '.html',
      advantages: ['Easy to share', 'Works offline', 'Responsive'],
      icon: '🌐',
    },
    react: {
      name: 'React Component',
      description: 'Full React project structure',
      extension: '.zip',
      advantages: ['Fully customizable', 'Production-ready', 'Modern stack'],
      icon: '⚛️',
    },
    pdf: {
      name: 'PDF Document',
      description: 'Print-friendly PDF resume',
      extension: '.pdf',
      advantages: ['Professional', 'Widely accepted', 'Preserves formatting'],
      icon: '📄',
    },
  };
};

/**
 * Validate portfolio before export
 */
export const validatePortfolioForExport = (portfolio) => {
  const errors = [];
  const warnings = [];

  // Required fields
  if (!portfolio.personal?.fullName?.trim()) {
    errors.push('Full name is required');
  }
  if (!portfolio.personal?.email?.trim()) {
    errors.push('Email is required');
  }

  // Warnings for incomplete data
  if (!portfolio.about?.summary?.trim()) {
    warnings.push('Add a professional summary for better impression');
  }
  if (!portfolio.skills || portfolio.skills.length === 0) {
    warnings.push('Consider adding your skills');
  }
  if (!portfolio.experience || portfolio.experience.length === 0) {
    warnings.push('Add your work experience');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    completionPercentage: calculateCompletionPercentage(portfolio),
  };
};

/**
 * Calculate portfolio completion percentage
 */
export const calculateCompletionPercentage = (portfolio) => {
  const sections = {
    personal: ['fullName', 'email', 'professionalTitle'],
    about: ['summary'],
    skills: ['length'],
    experience: ['length'],
    projects: ['length'],
    education: ['length'],
  };

  let totalFields = 0;
  let filledFields = 0;

  Object.entries(sections).forEach(([section, fields]) => {
    fields.forEach(field => {
      totalFields++;
      const value = portfolio[section]?.[field];
      
      if (field === 'length' && Array.isArray(value)) {
        if (value.length > 0) filledFields++;
      } else if (value?.toString().trim()) {
        filledFields++;
      }
    });
  });

  return Math.round((filledFields / totalFields) * 100);
};

/**
 * Prepare portfolio for specific format
 */
export const preparePortfolioForExport = (portfolio, format = 'html') => {
  const prepared = JSON.parse(JSON.stringify(portfolio));

  // Clean up data based on format
  switch (format.toLowerCase()) {
    case 'html':
      // Keep all data for HTML
      break;
    case 'react':
      // Ensure clean data structure for React
      prepared.theme = prepared.theme || {
        style: 'modern',
        colorScheme: 'default',
      };
      break;
    case 'pdf':
      // Limit to essential data for PDF
      delete prepared.exportSettings;
      break;
  }

  return prepared;
};

/**
 * Get download statistics
 */
export const getExportStatistics = () => {
  const stats = JSON.parse(localStorage.getItem('exportStats') || '{}');
  return {
    totalExports: Object.values(stats).reduce((a, b) => a + b, 0),
    byFormat: stats,
    lastExport: localStorage.getItem('lastExportTime'),
  };
};

/**
 * Track export event
 */
export const trackExport = (format) => {
  const stats = JSON.parse(localStorage.getItem('exportStats') || '{}');
  stats[format] = (stats[format] || 0) + 1;
  localStorage.setItem('exportStats', JSON.stringify(stats));
  localStorage.setItem('lastExportTime', new Date().toISOString());
};
