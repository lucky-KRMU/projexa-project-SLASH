import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  description: { type: String },
  firstName: { type: String, required: true },
  middleName: { type: String },
  email: { type: String },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  location: { type: String, required: true },
  priceIdeal: { type: Number, required: true },
  gigWorkType: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);