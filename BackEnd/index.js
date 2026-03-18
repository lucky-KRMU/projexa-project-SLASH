import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/userRoutes.js";
import guardRoutes from "./routes/guardRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(express.json());

console.log("------------------------------------------");
console.log("Current Directory:", __dirname);
console.log("MONGO_URI value:", process.env.MONGO_URI ? "FOUND ✅" : "NOT FOUND ❌");
console.log("------------------------------------------");

// const dbURI = process.env.MONGO_URI;

// if (!dbURI) {
//     console.error("⛔ STOP: Your .env file is not being read.");
//     console.error("1. Make sure the file is named exactly .env (no .txt at the end)");
//     console.error("2. Make sure it is inside the folder: " + __dirname);
//     process.exit(1);
// }

// mongoose.connect(dbURI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// app.use('/api/users', userRoutes);
// app.use('/api/guards', guardRoutes);

// app.get('/', (req, res) => res.send('API Running'));

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));