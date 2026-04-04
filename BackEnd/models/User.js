const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'guard'], default: 'user' }, // CRITICAL FIELD
  firstName: String,
  lastName: String,
  location: String,
  priceIdeal: Number,
  rating: { type: Number, default: 5.0 },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });