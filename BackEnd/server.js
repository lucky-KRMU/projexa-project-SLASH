import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { User } from './models/User.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increased limit for Base64 photos

// --- AUTH PROTOCOLS ---
app.post('/api/auth/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Identity Conflict: Credentials already on grid." });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(404).json({ error: "Access Denied: Invalid Password" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// --- GRID MARKETPLACE ---
app.get('/api/guards', async (req, res) => {
  try {
    const guards = await User.find({ role: 'guard', isAvailable: true }).sort({ createdAt: -1 });
    res.json(guards);
  } catch (err) {
    res.status(500).json({ error: "Uplink Failed" });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(8000, () => console.log('🛡️ SCHTUZEN CORE: SECURE')))
  .catch(err => console.log(err));