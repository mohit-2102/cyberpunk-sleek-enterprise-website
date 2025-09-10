import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  text: { type: String, required: true },
  userEmail: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);
