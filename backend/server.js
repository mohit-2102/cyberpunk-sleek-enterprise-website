import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5500;

// ✅ Allowed origins (local + Netlify frontend)
const allowedOrigins = [
  "http://localhost:3000",
  "https://cyberconsultants.netlify.app"
];

// Middleware first
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Health check route
app.get("/", (req, res) => {
  res.send("CyberPunk backend is running.");
});

// Start server only after DB connects
connectDB()
  .then(async () => {
    console.log("✅ DB connected. Registering routes...");

    // 🔁 Dynamically import routes AFTER DB is connected
    const blogRoutes = (await import("./routes/blogRoutes.js")).default;
    const commentRoutes = (await import("./routes/commentRoutes.js")).default;
    const subscriberRoutes = (await import("./routes/subscriberRoutes.js")).default;
    const authRoutes = (await import("./routes/authRoutes.js")).default;
    const researchRoutes = (await import("./routes/researchRoutes.js")).default;
    const iocRoutes = (await import("./routes/iocRoutes.js")).default;
    const userRoutes = (await import("./routes/userRoutes.js")).default;
    const jobRoutes = (await import("./routes/jobRoutes.js")).default;
    const uploadRoutes = (await import("./routes/uploadRoutes.js")).default;
    const reviewRoutes = (await import("./routes/reviewRoutes.js")).default;

    // Serve uploaded images statically
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    app.use("/api/blogs", blogRoutes);
    app.use("/api/comments", commentRoutes);
    app.use("/api/subscribers", subscriberRoutes);
    app.use("/api/auth", authRoutes);
    app.use("/api/research", researchRoutes);
    app.use("/api/iocs", iocRoutes);
    app.use("/api/users", userRoutes);
    app.use("/api/jobs", jobRoutes);
    app.use("/api/upload", uploadRoutes);
    app.use("/api/reviews", reviewRoutes);

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import path from 'path';

// dotenv.config();

// const app = express();
// const __dirname = path.resolve();
// const PORT = process.env.PORT || 5500;

// // Middleware first
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Health check route
// app.get('/', (req, res) => {
//   res.send('CyberPunk backend is running.');
// });

// // Start server only after DB connects
// connectDB()
//   .then(async () => {
//     console.log('✅ DB connected. Registering routes...');

//     // 🔁 Dynamically import routes AFTER DB is connected
//     const blogRoutes = (await import('./routes/blogRoutes.js')).default;
//     const commentRoutes = (await import('./routes/commentRoutes.js')).default;
//     const subscriberRoutes = (await import('./routes/subscriberRoutes.js')).default;
//     const authRoutes = (await import('./routes/authRoutes.js')).default;
//     const researchRoutes = (await import('./routes/researchRoutes.js')).default;
//     const iocRoutes = (await import('./routes/iocRoutes.js')).default;
//     const userRoutes = (await import('./routes/userRoutes.js')).default;
//     const jobRoutes = (await import('./routes/jobRoutes.js')).default;
//     const uploadRoutes = (await import('./routes/uploadRoutes.js')).default;
//     const reviewRoutes = (await import('./routes/reviewRoutes.js')).default;


//     // Serve uploaded images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//     app.use('/api/blogs', blogRoutes);
//     app.use('/api/comments', commentRoutes);
//     app.use('/api/subscribers', subscriberRoutes);
//     app.use('/api/auth', authRoutes);
//     app.use('/api/research', researchRoutes);
//     app.use('/api/iocs', iocRoutes);
//     app.use('/api/users', userRoutes);
//     app.use('/api/jobs', jobRoutes);
//     app.use('/api/upload', uploadRoutes);
//     app.use('/api/reviews', reviewRoutes);

//     // Start server
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err);
//   });
