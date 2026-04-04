import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import guardRoutes from './routes/guardRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/guards', guardRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(8000, () => console.log('🛡️ Schützen Backend Secure: Port 8000')))
  .catch(err => console.error('Database Connection Failed:', err));