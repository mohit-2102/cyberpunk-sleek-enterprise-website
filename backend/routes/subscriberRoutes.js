import express from 'express';
import { getSubscribers, addSubscriber } from '../controllers/subscriberController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

router.get('/', verifyToken, verifyAdmin, getSubscribers);
router.post('/', addSubscriber);

export default router;
