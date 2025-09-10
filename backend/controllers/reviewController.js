import Review from '../models/Reviews.js';

/**
 * Create a new review for a research post (public route)
 */
export const createReview = async (req, res) => {
  const { slug } = req.params;
  const { firstName = '', lastName = '', email, review } = req.body;

  if (!email?.trim() || !review?.trim()) {
    return res.status(400).json({ message: 'Email and review are required.' });
  }

  try {
    const newReview = new Review({
      researchSlug: slug,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      review: review.trim(),
    });

    await newReview.save();
    return res.status(201).json({ message: 'Review submitted successfully.' });
  } catch (err) {
    console.error('❌ Error saving review:', err);
    return res.status(500).json({ message: 'Failed to submit review.' });
  }
};

/**
 * Get all reviews for a research slug (protected route for admin)
 */
export const getReviewsBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const reviews = await Review.find({ researchSlug: slug }).sort({ createdAt: -1 });
    return res.json(reviews);
  } catch (err) {
    console.error('❌ Error fetching reviews:', err);
    return res.status(500).json({ message: 'Failed to load reviews.' });
  }
};
