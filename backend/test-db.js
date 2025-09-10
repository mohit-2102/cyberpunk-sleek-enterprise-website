import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const run = async () => {
  try {
    await mongoose.connect(uri, { dbName: 'CyberPunk' });
    console.log('✅ Manual DB test: connected');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📦 Collections:', collections.map(c => c.name));
    process.exit(0);
  } catch (err) {
    console.error('❌ Manual DB test failed:', err);
    process.exit(1);
  }
};

run();
