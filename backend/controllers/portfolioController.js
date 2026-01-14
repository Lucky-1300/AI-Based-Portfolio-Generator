import Portfolio from '../models/Portfolio.js';
import { successResponse, errorResponse } from '../utils/responseHandler.js';

export const createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    successResponse(res, portfolio, 'Portfolio created successfully', 201);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return errorResponse(res, 'Portfolio not found', 404);
    }
    successResponse(res, portfolio);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ updatedAt: -1 });
    successResponse(res, portfolios);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!portfolio) {
      return errorResponse(res, 'Portfolio not found', 404);
    }
    successResponse(res, portfolio, 'Portfolio updated successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return errorResponse(res, 'Portfolio not found', 404);
    }
    successResponse(res, null, 'Portfolio deleted successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};
