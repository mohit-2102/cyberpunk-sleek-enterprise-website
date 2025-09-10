import slugify from 'slugify';
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  images: [{ type: String }],
  likes: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
  views: { type: Number, default: 0 }
}, { timestamps: true });

// Optional: Auto-slug from title
blogSchema.pre('validate', function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
