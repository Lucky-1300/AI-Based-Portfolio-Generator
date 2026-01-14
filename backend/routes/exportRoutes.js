import express from 'express';
import {
  exportToPDF,
  exportToHTML,
  exportToReact,
} from '../controllers/exportController.js';

const router = express.Router();

router.post('/pdf', exportToPDF);
router.post('/html', exportToHTML);
router.post('/react', exportToReact);

export default router;
