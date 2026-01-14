import { pdfGenerator } from '../services/pdfGenerator.js';
import { contentFormatter } from '../services/contentFormatter.js';
import { successResponse, errorResponse } from '../utils/responseHandler.js';

export const exportToPDF = async (req, res) => {
  try {
    const { portfolioData } = req.body;
    
    if (!portfolioData) {
      return errorResponse(res, 'Portfolio data is required', 400);
    }

    const pdfBuffer = await pdfGenerator.generate(portfolioData);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=portfolio.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const exportToHTML = async (req, res) => {
  try {
    const { portfolioData } = req.body;
    
    if (!portfolioData) {
      return errorResponse(res, 'Portfolio data is required', 400);
    }

    const html = await contentFormatter.formatAsHTML(portfolioData);
    successResponse(res, { html }, 'HTML generated successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const exportToReact = async (req, res) => {
  try {
    const { portfolioData } = req.body;
    
    if (!portfolioData) {
      return errorResponse(res, 'Portfolio data is required', 400);
    }

    const code = await contentFormatter.formatAsReact(portfolioData);
    successResponse(res, { code }, 'React component generated successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};
