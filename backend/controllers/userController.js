import User from '../models/User.js';
import crypto from 'crypto';
import { sendResetPasswordEmail } from '../utils/mailer.js';

// Forgot Password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = crypto.randomBytes(32).toString('hex');
    const expiry = Date.now() + 60 * 60 * 1000; // 1 hour

    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();

    // const resetUrl = `http://localhost:3000/reset?token=${encodeURIComponent(token)}`;
    // await sendResetPasswordEmail(user.email, resetUrl); 
    await sendResetPasswordEmail(user.email, token);

    res.status(200).json({ message: 'Reset email sent' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: 'Error sending reset email', error: err.message });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password)
      return res.status(400).json({ message: 'Token and password are required' });


    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      console.warn('No user found for token or token expired');
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ message: 'Error resetting password', error: err.message });
  }
};

// Get all non-admin users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: 'admin' } }).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};


