import Blog from '../models/Blog.js';
import slugify from 'slugify';
import { sendNewPostEmail } from '../utils/mailer.js';
import Subscriber from '../models/Subscriber.js';
import User from '../models/User.js';
import Comment from '../models/Comment.js';

export const createBlog = async (req, res) => {
  try {
    const { title, description, content, images } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    const newBlog = new Blog({ title, slug, description, content, images });
    await newBlog.save();

    // Send email notification after blog is created
    try {
      const subscribers = await Subscriber.find();
      const emails = subscribers.map(sub => sub.email);
      await sendNewPostEmail(emails, 'blogs', newBlog.title, newBlog.slug);
    } catch (emailError) {
      console.error('Error sending notification emails:', emailError);
      // Continue even if email sending fails
    }
    try {
      const users = await User.find();
      const emails = users.map(sub => sub.email);
      await sendNewPostEmail(emails, 'blogs', newBlog.title, newBlog.slug);
    } catch (emailError) {
      console.error('Error sending notification emails:', emailError);
      // Continue even if email sending fails
    }

    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Error creating blog' });
  }
};


export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean(); // use lean for performance

    const blogsWithCounts = await Promise.all(
      blogs.map(async (blog) => {
        const commentCount = await Comment.countDocuments({ slug: blog.slug });

        return {
          ...blog,
          views: blog.views || 0,
          likes: blog.likes || 0,
          commentCount,
        };
      })
    );

    res.status(200).json(blogsWithCounts);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
};

export const incrementViewCount = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    res.status(200).json({ message: 'View counted', views: blog.views });
  } catch (err) {
    res.status(500).json({ message: 'Failed to count view' });
  }
};



export const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ likes: blog.likes });
  } catch (err) {
    res.status(500).json({ message: 'Failed to like blog' });
  }
};


export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, description, content, images } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    const updated = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { title, slug, description, content, images },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Blog not found' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog' });
  }
};
