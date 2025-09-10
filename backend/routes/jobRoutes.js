import express from 'express';
import {
  createJob,
  getJobs,
  getJobBySlug,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

// Public Routes
router.get('/', getJobs);
router.get('/:slug', getJobBySlug);      

// Protected Admin Routes
router.post('/', verifyToken, verifyAdmin, createJob);         
router.put('/:slug', verifyToken, verifyAdmin, updateJob);     
router.delete('/:slug', verifyToken, verifyAdmin, deleteJob);  

export default router;
