import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt with email:", email);

    // Case-insensitive email match
    const admin = await Admin.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });

    if (!admin) {
      console.log("No admin found with email:", email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      console.log("Password mismatch for:", email);
      return res.status(401).json({ message: 'Invalid credential' });
    }

    // const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const token = jwt.sign({ id: admin._id, email: admin.email, isAdmin: true },  process.env.JWT_SECRET, { expiresIn: '1d' });


    console.log("Admin authenticated:", admin.email);
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};
