import express from 'express';
import { Guard } from '../models/Guard.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const guards = await Guard.find();
    res.json(guards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
