import express from 'express';
import {
  enhanceContent,
  generateSuggestions,
  optimizePrompt,
} from '../controllers/aiController.js';

const router = express.Router();

router.post('/enhance', enhanceContent);
router.post('/suggest', generateSuggestions);
router.post('/optimize-prompt', optimizePrompt);

export default router;
