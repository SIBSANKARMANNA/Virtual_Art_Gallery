// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import artworkRoutes from "./routes/artworkRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Routes
app.use("/api/artworks", artworkRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🎨 Virtual Art Gallery API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
