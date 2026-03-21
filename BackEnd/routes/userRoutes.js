import express from 'express';
import { User } from '../models/User.js';


const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const user = new User({
    userName: req.body.userName,
    description: req.body.description,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    email: req.body.email,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    priceIdeal: req.body.priceIdeal,
    gigWorkType: req.body.gigWorkType
  });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
});

export default router;