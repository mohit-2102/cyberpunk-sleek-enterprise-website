import express from 'express';
import { addComment, getComments, deleteComment } from '../controllers/commentController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js'


const router = express.Router();

// 🔒 Only users can post
router.post('/', addComment);

// 👁️ Anyone can read comments
router.get('/:slug', getComments);

router.delete('/:commentId', verifyToken, verifyAdmin, deleteComment);

export default router;
