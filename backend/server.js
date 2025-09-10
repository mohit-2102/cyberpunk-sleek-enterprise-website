// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// import blogRoutes from './routes/blogRoutes.js';
// import commentRoutes from './routes/commentRoutes.js';
// import subscriberRoutes from './routes/subscriberRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import researchRoutes from './routes/researchRoutes.js';
// import iocRoutes from './routes/iocRoutes.js';

// dotenv.config();

// const app = express();



// // Middleware
// app.use(cors()); // allow cross-origin requests from frontend
// app.use(express.json()); // parse JSON request bodies
// app.use(express.urlencoded({ extended: true })); // parse form-data (optional)

// // Routes
// app.use('/api/blogs', blogRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/subscribers', subscriberRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/research', researchRoutes);
// app.use('/api/iocs', iocRoutes);

// // Health check
// app.get('/', (req, res) => {
//   res.send('CyberPunk backend is running.');
// });

// // Start Server
// const PORT = process.env.PORT || 5500;

// connectDB().then(() => {
//     app.listen(PORT, () => {
//       console.log(`✅ Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err);
//   });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5500;

// Middleware first
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check route
app.get('/', (req, res) => {
  res.send('CyberPunk backend is running.');
});

// Start server only after DB connects
connectDB()
  .then(async () => {
    console.log('✅ DB connected. Registering routes...');

    // 🔁 Dynamically import routes AFTER DB is connected
    const blogRoutes = (await import('./routes/blogRoutes.js')).default;
    const commentRoutes = (await import('./routes/commentRoutes.js')).default;
    const subscriberRoutes = (await import('./routes/subscriberRoutes.js')).default;
    const authRoutes = (await import('./routes/authRoutes.js')).default;
    const researchRoutes = (await import('./routes/researchRoutes.js')).default;
    const iocRoutes = (await import('./routes/iocRoutes.js')).default;
    const userRoutes = (await import('./routes/userRoutes.js')).default;
    const jobRoutes = (await import('./routes/jobRoutes.js')).default;
    const uploadRoutes = (await import('./routes/uploadRoutes.js')).default;
    const reviewRoutes = (await import('./routes/reviewRoutes.js')).default;


    // Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

    app.use('/api/blogs', blogRoutes);
    app.use('/api/comments', commentRoutes);
    app.use('/api/subscribers', subscriberRoutes);
    app.use('/api/auth', authRoutes);
    app.use('/api/research', researchRoutes);
    app.use('/api/iocs', iocRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/jobs', jobRoutes);
    app.use('/api/upload', uploadRoutes);
    app.use('/api/reviews', reviewRoutes);

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
