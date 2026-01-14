import express from 'express';
import {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  getAllPortfolios,
} from '../controllers/portfolioController.js';

const router = express.Router();

router.post('/', createPortfolio);
router.get('/', getAllPortfolios);
router.get('/:id', getPortfolio);
router.put('/:id', updatePortfolio);
router.delete('/:id', deletePortfolio);

export default router;
