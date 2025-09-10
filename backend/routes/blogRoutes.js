import express from 'express';
import multer from 'multer';
import {
  createBlog,
  getBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';
import Blog from '../models/Blog.js'; // Needed for like/view/unlike routes

// Multer setup for blog images
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Admin routes (token required)
router.post('/', verifyToken, verifyAdmin, upload.array('images'), createBlog);
router.put('/:slug', verifyToken, verifyAdmin, upload.array('images'), updateBlog);
router.delete('/:slug', verifyToken, verifyAdmin, deleteBlog);

// Public routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// ❤️ Like a blog (client tracks state)
router.post('/:id/like', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    res.status(200).json({ message: 'Liked', likes: blog.likes });
  } catch (err) {
    console.error('Error liking blog:', err);
    res.status(500).json({ message: 'Failed to like blog' });
  }
});

// 💔 Unlike a blog (client tracks state)
router.post('/:id/unlike', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.likes = Math.max(0, (blog.likes || 0) - 1);
    await blog.save();

    res.status(200).json({ message: 'Unliked', likes: blog.likes });
  } catch (err) {
    console.error('Error unliking blog:', err);
    res.status(500).json({ message: 'Failed to unlike blog' });
  }
});

// 👁️ Count view
router.post('/:id/view', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.views = (blog.views || 0) + 1;
    await blog.save();

    res.status(200).json({ message: 'View counted', views: blog.views });
  } catch (err) {
    console.error('Error counting view:', err);
    res.status(500).json({ message: 'Failed to count view' });
  }
});

export default router;
