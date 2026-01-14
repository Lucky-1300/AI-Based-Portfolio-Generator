import { aiEngine } from '../services/aiEngine.js';
import { promptOptimizer } from '../services/promptOptimizer.js';
import { successResponse, errorResponse } from '../utils/responseHandler.js';

export const enhanceContent = async (req, res) => {
  try {
    const { type, content } = req.body;
    
    if (!type || !content) {
      return errorResponse(res, 'Type and content are required', 400);
    }

    const enhanced = await aiEngine.enhanceContent(type, content);
    successResponse(res, { enhanced }, 'Content enhanced successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const generateSuggestions = async (req, res) => {
  try {
    const portfolioData = req.body;
    
    const suggestions = await aiEngine.generateSuggestions(portfolioData);
    successResponse(res, { suggestions }, 'Suggestions generated successfully');
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
