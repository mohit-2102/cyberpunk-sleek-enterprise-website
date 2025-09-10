import IOC from '../models/IoC.js';
import slugify from 'slugify';
import { sendNewPostEmail } from '../utils/mailer.js';
import Subscriber from '../models/Subscriber.js';
import User from '../models/User.js';

export const createIOC = async (req, res) => {
  try {
    const { title, description, content, images } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    const newIOC = new IOC({ title, slug, description, content, images });
    await newIOC.save();

    // Notify subscribers
    try {
      const subscribers = await Subscriber.find();
      const emails = subscribers.map(sub => sub.email);
      await sendNewPostEmail(emails, 'iocs', newIOC.title, newIOC.slug);
    } catch (emailError) {
      console.error('Error emailing subscribers:', emailError);
    }

    // Notify users
    try {
      const users = await User.find();
      const emails = users.map(user => user.email);
      await sendNewPostEmail(emails, 'iocs', newIOC.title, newIOC.slug);
    } catch (emailError) {
      console.error('Error emailing users:', emailError);
    }

    res.status(201).json(newIOC);
  } catch (error) {
    console.error('Error creating IOC:', error);
    res.status(500).json({ message: 'Error creating IOC' });
  }
};

export const getIOCs = async (req, res) => {
  try {
    const iocs = await IOC.find().sort({ createdAt: -1 });
    res.json(iocs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IOCs' });
  }
};

export const getIOCBySlug = async (req, res) => {
  try {
    const ioc = await IOC.findOne({ slug: req.params.slug });
    if (!ioc) return res.status(404).json({ message: 'IOC not found' });
    res.json(ioc);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IOC' });
  }
};

export const updateIOC = async (req, res) => {
  try {
    const { title, description, content, images } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    const updated = await IOC.findOneAndUpdate(
      { slug: req.params.slug },
      { title, slug, description, content, images },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'IOC not found' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating IOC' });
  }
};

export const deleteIOC = async (req, res) => {
  try {
    const deleted = await IOC.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: 'IOC not found' });
    res.json({ message: 'IOC deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting IOC' });
  }
};

// 🔥 Increment view count using ID
export const incrementViewCount = async (req, res) => {
  try {
    const ioc = await IOC.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!ioc) return res.status(404).json({ message: 'IOC not found' });

    res.status(200).json({ message: 'View counted', views: ioc.views });
  } catch (err) {
    console.error('Error incrementing view count:', err);
    res.status(500).json({ message: 'Failed to count view' });
  }
};

// 🔥 Like by slug
export const likeIOC = async (req, res) => {
  try {
    const ioc = await IOC.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!ioc) return res.status(404).json({ message: 'IOC not found' });

    res.json({ likes: ioc.likes });
  } catch (err) {
    console.error('Error liking IOC:', err);
    res.status(500).json({ message: 'Failed to like IOC' });
  }
};

// 🔥 Unlike by slug (optional)
export const unlikeIOC = async (req, res) => {
  try {
    const ioc = await IOC.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { likes: -1 } },
      { new: true }
    );

    if (!ioc) return res.status(404).json({ message: 'IOC not found' });

    res.json({ likes: ioc.likes });
  } catch (err) {
    console.error('Error unliking IOC:', err);
    res.status(500).json({ message: 'Failed to unlike IOC' });
  }
};
