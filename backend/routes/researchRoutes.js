import express from 'express';
import { createResearch, getResearches, getResearchBySlug, updateResearch, deleteResearch, unlikeResearch, likeResearch, incrementResearchView } from '../controllers/researchController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post('/', verifyToken, verifyAdmin, upload.array('images'), createResearch);
router.get('/', getResearches);
router.get('/:slug', getResearchBySlug); 
router.put('/:slug', verifyToken, verifyAdmin, upload.array('images'), updateResearch);
router.delete('/:slug', verifyToken, verifyAdmin, deleteResearch);
router.post('/:id/view', incrementResearchView);
router.post('/:id/like', likeResearch);
router.post('/:id/unlike', unlikeResearch);

export default router;
