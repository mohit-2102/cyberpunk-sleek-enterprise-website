import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

export const addComment = async (req, res) => {
  try {
    const { slug, content, email } = req.body;

    const newComment = new Comment({
      slug,
      text: content,
      userEmail: email,
      createdAt: new Date(),
    });

    await newComment.save();

    // ✅ Increment commentCount in the Blog document
    await Blog.findOneAndUpdate(
      { slug },
      { $inc: { commentCount: 1 } },
      { new: true }
    );

    res.status(201).json(newComment);
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).json({ message: 'Failed to add comment' });
  }
};

export const getComments = async (req, res) => {
  try {
    const { slug } = req.params;
    const comments = await Comment.find({ slug }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ message: 'Failed to fetch comments' });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    // ✅ Decrease commentCount in Blog
    await Blog.findOneAndUpdate(
      { slug: comment.slug },
      { $inc: { commentCount: -1 } }
    );

    res.status(200).json({ message: 'Comment deleted' });
  } catch (err) {
    console.error('Error deleting comment:', err);
    res.status(500).json({ message: 'Failed to delete comment' });
  }
};
