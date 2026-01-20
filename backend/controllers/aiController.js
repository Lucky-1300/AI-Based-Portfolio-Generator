import { aiEngine } from '../services/aiEngine.js';
import { promptOptimizer } from '../services/promptOptimizer.js';
import { successResponse, errorResponse } from '../utils/responseHandler.js';

export const enhanceContent = async (req, res) => {
  try {
    const { type, content, context } = req.body;
    
    if (!type || !content) {
      return errorResponse(res, 'Type and content are required', 400);
    }

    const enhanced = await aiEngine.enhanceContent(type, content, context);
    successResponse(res, { enhanced, original: content }, 'Content enhanced successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const generateSuggestions = async (req, res) => {
  try {
    const portfolioData = req.body;
    
    if (!portfolioData) {
      return errorResponse(res, 'Portfolio data is required', 400);
    }

    const suggestions = await aiEngine.generateSuggestions(portfolioData);
    successResponse(res, { suggestions, count: suggestions.length }, 'Suggestions generated successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const optimizePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return errorResponse(res, 'Prompt is required', 400);
    }

    const optimized = await promptOptimizer.optimize(prompt);
    successResponse(res, { optimized }, 'Prompt optimized successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const enhanceBatch = async (req, res) => {
  try {
    const { items, type } = req.body;
    
    if (!items || !Array.isArray(items) || !type) {
      return errorResponse(res, 'Items array and type are required', 400);
    }

    const enhanced = await aiEngine.enhanceBatch(items, type);
    successResponse(res, { enhanced, count: enhanced.length }, 'Batch enhancement completed');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const validatePortfolio = async (req, res) => {
  try {
    const portfolioData = req.body;
    
    const validation = {
      isValid: true,
      errors: [],
      warnings: [],
      completeness: 0,
    };

    // Check required fields
    if (!portfolioData.personalInfo?.fullName) {
      validation.errors.push('Full name is required');
      validation.isValid = false;
    }

    if (!portfolioData.personalInfo?.email) {
      validation.errors.push('Email is required');
      validation.isValid = false;
    }

    // Check optional but recommended fields
    if (!portfolioData.personalInfo?.bio) {
      validation.warnings.push('Professional bio is recommended');
    }

    if (!portfolioData.skills || portfolioData.skills.length === 0) {
      validation.warnings.push('Add skills to strengthen your portfolio');
    }

    // Calculate completeness
    let totalFields = 8;
    let filledFields = 0;

    if (portfolioData.personalInfo?.fullName) filledFields++;
    if (portfolioData.personalInfo?.email) filledFields++;
    if (portfolioData.personalInfo?.bio) filledFields++;
    if (portfolioData.skills?.length > 0) filledFields++;
    if (portfolioData.experiences?.length > 0) filledFields++;
    if (portfolioData.projects?.length > 0) filledFields++;
    if (portfolioData.education?.length > 0) filledFields++;
    if (portfolioData.personalInfo?.linkedin || portfolioData.personalInfo?.github) filledFields++;

    validation.completeness = Math.round((filledFields / totalFields) * 100);

    successResponse(res, validation, 'Portfolio validated');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};
