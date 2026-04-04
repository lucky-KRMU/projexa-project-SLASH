import express from 'express';
import { Guard } from '../models/Guard.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const guards = await Guard.find({ isAvailable: true });
    res.status(200).json(guards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch guards' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newGuard = new Guard(req.body);
    await newGuard.save();
    res.status(201).json(newGuard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;