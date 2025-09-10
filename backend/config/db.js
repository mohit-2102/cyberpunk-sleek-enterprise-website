// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('✅ MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw error;
//   }
// };

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    console.log('🌐 Connecting to MongoDB...');
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;




// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config(); // Make sure this is at the top

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`✅ MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error('❌ MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// connectDB(); // for test purposes


