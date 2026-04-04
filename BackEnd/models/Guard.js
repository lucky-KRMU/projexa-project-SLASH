import mongoose from 'mongoose';

const guardSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: { type: String, required: true },
  priceIdeal: { type: Number, required: true },
  rating: { type: Number, default: 5.0 },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

export const Guard = mongoose.model('Guard', guardSchema);