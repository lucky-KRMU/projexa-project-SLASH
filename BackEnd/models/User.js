import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  description: { type: String },
  
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);