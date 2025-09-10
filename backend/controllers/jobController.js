import Job from '../models/Job.js';
import slugify from 'slugify';

// POST /api/jobs - Admin: Create a new job
export const createJob = async (req, res) => {
  try {
    const {
      title,
      jobType,
      workspace,
      location,
      openings,
      description,          // short description
      fullDescription,      // full HTML from Tiptap
      responsibilities,
      qualifications,
      requirements,
      perks,
      duration,
      stipend,
      experience,
      postedBy,
    } = req.body;

    const slug = slugify(title, { lower: true, strict: true });

    const newJob = new Job({
      title,
      slug,
      jobType,
      workspace,
      location,
      openings,
      description,
      fullDescription,
      responsibilities,
      qualifications,
      requirements,
      perks,
      duration,
      stipend,
      experience,
      postedBy,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Failed to create job' });
  }
};

// GET /api/jobs - Public: Fetch all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

// GET /api/jobs/:slug - Public: Get a job by slug
export const getJobBySlug = async (req, res) => {
  try {
    const job = await Job.findOne({ slug: req.params.slug });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Failed to fetch job' });
  }
};

// PUT /api/jobs/:slug - Admin: Update a job
export const updateJob = async (req, res) => {
  try {
    const {
      title,
      jobType,
      workspace,
      location,
      openings,
      description,
      fullDescription,
      responsibilities,
      qualifications,
      requirements,
      perks,
      duration,
      stipend,
      experience,
      postedBy,
    } = req.body;

    const updatedData = {
      title,
      slug: slugify(title, { lower: true, strict: true }),
      jobType,
      workspace,
      location,
      openings,
      description,
      fullDescription,
      responsibilities,
      qualifications,
      requirements,
      perks,
      duration,
      stipend,
      experience,
      postedBy,
    };

    const updated = await Job.findOneAndUpdate(
      { slug: req.params.slug },
      updatedData,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Job not found' });

    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Failed to update job' });
  }
};

// DELETE /api/jobs/:slug - Admin: Delete a job
export const deleteJob = async (req, res) => {
  try {
    const deleted = await Job.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Failed to delete job' });
  }
};
