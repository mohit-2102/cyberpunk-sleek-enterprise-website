export const verifyAdmin = (req, res, next) => {
  // Check if token was verified and admin info is available
  if (!req.admin || !req.admin.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }

  // Admin confirmed, proceed to next handler
  next();
};