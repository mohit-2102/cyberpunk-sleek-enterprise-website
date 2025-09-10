import Research from '../models/Research.js';
import slugify from 'slugify';
import { sendNewPostEmail } from '../utils/mailer.js';
import Subscriber from '../models/Subscriber.js';
import User from '../models/User.js';

export const createResearch = async (req, res) => {
  try {
    const { title, description, content, images } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    const newResearch = new Research({ title, slug, description, content, images });
    await newResearch.save();

    // Send email notification
    try {
      const subscribers = await Subscriber.find();
      const emails = subscribers.map(sub => sub.email);
      await sendNewPostEmail(emails, 'research', newResearch.title, newResearch.slug);
    } catch (emailError) {
      console.error('Email error:', emailError);
    }
    try {
          const users = await User.find();
          const emails = users.map(sub => sub.email);
          await sendNewPostEmail(emails, 'blogs', newBlog.title, newBlog.slug);
        } catch (emailError) {
          console.error('Error sending notification emails:', emailError);
          // Continue even if email sending fails
        }

    res.status(201).json(newResearch);
  } catch (error) {
    console.error('Error creating research:', error);
    res.status(500).json({ message: 'Error creating research' });
  }
};

export const getResearches = async (req, res) => {
  try {
    const researches = await Research.find().sort({ createdAt: -1 });
    res.json(researches);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching research data' });
  }
};

export const getResearchBySlug = async (req, res) => {
  try {
    const research = await Research.findOne({ slug: req.params.slug }); // ⬅️ Removed $inc
    if (!research) return res.status(404).json({ message: 'Research not found' });
    res.json(research);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching research' });
  }
};



export const updateResearch = async (req, res) => {
  try {
    const { title, description, content, images } = req.body;
    const slug = slugify(title, { lower: true, strict: true });

    const updated = await Research.findOneAndUpdate(
      { slug: req.params.slug },
      { title, slug, description, content, images },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Research not found' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating research' });
  }
};

export const deleteResearch = async (req, res) => {
  try {
    const deleted = await Research.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: 'Research not found' });
    res.json({ message: 'Research deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting research' });
  }
};

// export const toggleResearchLike = async (req, res) => {
//   try {
//     const research = await Research.findOne({ slug: req.params.slug });
//     if (!research) return res.status(404).json({ message: 'Research not found' });

//     research.likes += 1;
//     await research.save();

//     res.json({ likes: research.likes });
//   } catch (error) {
//     res.status(500).json({ message: 'Error liking research' });
//   }
// };

// Increment views
export const incrementResearchView = async (req, res) => {
  try {
    const research = await Research.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!research) return res.status(404).json({ message: 'Research not found' });

    res.status(200).json({ message: 'View counted', views: research.views });
  } catch (err) {
    console.error('Error incrementing research view:', err);
    res.status(500).json({ message: 'Failed to count view' });
  }
};


// Like
export const likeResearch = async (req, res) => {
  try {
    const updated = await Research.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(200).json({ likes: updated.likes });
  } catch (err) {
    res.status(500).json({ message: 'Error liking research' });
  }
};

// Unlike
export const unlikeResearch = async (req, res) => {
  try {
    const updated = await Research.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: -1 } },
      { new: true }
    );
    res.status(200).json({ likes: updated.likes });
  } catch (err) {
    res.status(500).json({ message: 'Error unliking research' });
  }
};
