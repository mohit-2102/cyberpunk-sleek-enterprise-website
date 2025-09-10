import express from 'express';
import { createReview, getReviewsBySlug } from '../controllers/reviewController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

// Public – anyone can submit a review
router.post('/research/:slug', createReview);

// Protected – only admin can fetch reviews
router.get('/research/:slug', verifyToken, verifyAdmin, getReviewsBySlug);

export default router;
