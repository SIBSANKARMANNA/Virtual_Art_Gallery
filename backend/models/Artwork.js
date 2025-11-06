// backend/models/Artwork.js
import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: String },
    imageUrl: { type: String, required: true },
    description: { type: String },
    theme: { type: String, required: true }, // 🎨 New: theme field
    category: { type: String },
    likes: { type: Number, default: 0 },
    audioGuideUrl: { type: String },
  },
  { timestamps: true }
);

const Artwork = mongoose.model("Artwork", artworkSchema);
export default Artwork;
