import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return this.provider === 'email';
      },
    },
    provider: {
      type: String,
      enum: ['email', 'google', 'facebook'],
      required: true,
    },
    resetToken: String,
    resetTokenExpiry: Date,

  isVerified: {
      type: Boolean,
      default: false,
    },
    verifyToken: String,
  },
  { timestamps: true }
);

// 🔐 Hash password before save (only for 'email' provider)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.provider !== 'email') return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Compare entered password with hashed one
userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false; // Safety for social logins
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.models.User || mongoose.model('User', userSchema);
