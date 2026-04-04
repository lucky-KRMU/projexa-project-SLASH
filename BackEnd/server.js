import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import Routes
import userRoutes from './routes/userRoutes.js';
import guardRoutes from './routes/guardRoutes.js';

dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🛡️ Schützen Database: Secured and Connected'))
  .catch((err) => console.error('❌ Database Connection Error:', err));

app.use('/api/users', userRoutes);
app.use('/api/guards', guardRoutes);

app.get('/', (req, res) => res.send('Schützen API is operational.'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));