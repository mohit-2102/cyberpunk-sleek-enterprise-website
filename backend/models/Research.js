import mongoose from 'mongoose';

const researchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  content: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  images: [String],
}, { timestamps: true });

export default mongoose.model('Research', researchSchema);
