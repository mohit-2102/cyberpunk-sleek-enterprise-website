import express from 'express';
import {
  forgotPassword,
  resetPassword,
  getAllUsers
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

// Only keep forgot/reset password routes
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
// GET /api/users — protected
router.get('/', verifyToken, verifyAdmin, getAllUsers);

export default router;
