import express from 'express';
import {
  enhanceContent,
  generateSuggestions,
  optimizePrompt,
  enhanceBatch,
  validatePortfolio,
} from '../controllers/aiController.js';

const router = express.Router();

// Content enhancement endpoints
router.post('/enhance', enhanceContent);
router.post('/enhance-batch', enhanceBatch);

// Portfolio analysis endpoints
router.post('/suggest', generateSuggestions);
router.post('/validate', validatePortfolio);

// Prompt optimization
router.post('/optimize-prompt', optimizePrompt);

export default router;
