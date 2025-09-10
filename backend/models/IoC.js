import mongoose from 'mongoose';

const iocSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  content: String,
  images: [String],
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('IoC', iocSchema);
