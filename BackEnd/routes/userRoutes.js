import express from 'express';
import { User } from '../models/User.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "Agent not found." });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Auth server error" });
  }
});

export default router;