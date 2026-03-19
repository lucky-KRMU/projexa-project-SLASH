import mongoose from 'mongoose';

const guardSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  
}, { timestamps: true });

// export const Guard = mongoose.model('Guard', guardSchema);