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

router.post('/', async (req, res) => {
  const guard = new Guard({
    userName: req.body.userName,
    selfDescription: req.body.selfDescription,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    priceIdeal: req.body.priceIdeal,
    gigWork: req.body.gigWork,
    rating: req.body.rating
  });
  try {
    const newGuard = await guard.save();
    res.status(201).json(newGuard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;