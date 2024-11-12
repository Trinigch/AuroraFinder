import express from 'express';
import {
  createHistory,
  deleteHistoryById,
  getUserHistory,
} from '../../controllers/history-controller.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = express.Router();

// Middleware to authenticate the token before processing the routes
router.use(authenticateToken);

// Rutas de la API de `history`
router.post('/', createHistory); // Create a new history entry
router.delete('/:id', deleteHistoryById);    // Delete a specific history entry by its id
router.get('/user/:userId', getUserHistory);// Get all history entries for a specific user

export { router as historyRouter };