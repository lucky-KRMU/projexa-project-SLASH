import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'guard'], default: 'user' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: { type: String, required: true },
  priceIdeal: { type: Number, default: 0 },
  gigWorkType: { type: String, default: 'Personal Security' },
  description: { type: String, default: '' },
  rating: { type: Number, default: 5.0 },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);