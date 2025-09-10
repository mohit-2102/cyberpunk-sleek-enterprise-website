import express from 'express';
import multer from 'multer';
import {
  createIOC,
  getIOCs,
  getIOCBySlug,
  updateIOC,
  deleteIOC,
  incrementViewCount,
  likeIOC,
  unlikeIOC
} from '../controllers/iocController.js';

import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Admin-only routes
router.post('/', verifyToken, verifyAdmin, upload.array('images'), createIOC);
router.put('/:slug', verifyToken, verifyAdmin, upload.array('images'), updateIOC);
router.delete('/:slug', verifyToken, verifyAdmin, deleteIOC);

// Public routes
router.get('/', getIOCs);
router.get('/:slug', getIOCBySlug);
router.post('/:id/view', incrementViewCount);
router.post('/:slug/like', likeIOC);
router.post('/:slug/unlike', unlikeIOC); // optional

export default router;