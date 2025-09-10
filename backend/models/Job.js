import mongoose from 'mongoose';

// models/Job.js
const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    jobType: {
      type: String,
      enum: ['Internship', 'Full-Time', 'Part-Time', 'Contract'],
      default: 'Full-Time',
    },
    workspace: {
      type: String,
      enum: ['Onsite', 'Remote', 'Hybrid'],
      default: 'Onsite',
    },
    location: { type: String, required: true },
    openings: { type: Number, default: 1 },
    description: { type: String, required: true },
    responsibilities: { type: [String], default: [] },
    qualifications: { type: [String], default: [] },

    fullDescription: {
      type: String,
      required: false,
    },


    // ✅ Add these:
    requirements: { type: [String], default: [] },
    perks: { type: [String], default: [] },
    duration: { type: String },
    stipend: { type: String },

    experience: { type: String },
    postedBy: { type: String, default: 'CyberPunk Team' },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
