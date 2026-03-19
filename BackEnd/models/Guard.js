import mongoose from 'mongoose';

const guardSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  selfDescription: { type: String },
  firstName: { type: String, required: true },
  middleName: { type: String }, 
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  location: { type: String, required: true },
  priceIdeal: { type: Number, required: true },
  gigWork: { type: String, required: true },
  rating: { type: Number, default: 0 }
}, { timestamps: true });

// export const Guard = mongoose.model('Guard', guardSchema);