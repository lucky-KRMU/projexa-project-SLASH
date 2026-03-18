import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  description: { type: String },
  firstName: { type: String, required: true },
  middleName: { type: String },
  email: { type: String },
  
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);