import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    researchSlug: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
