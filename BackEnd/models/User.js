import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  location: { type: String, required: true },
  priceIdeal: { type: Number, required: true },
  gigWorkType: { type: String, default: 'Personal Security' },
  description: { type: String }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);