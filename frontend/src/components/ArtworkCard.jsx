// src/components/ArtworkCard.jsx
import { motion } from "framer-motion";
import { useGallery } from "../context/GalleryContext";

export default function ArtworkCard({ artwork }) {
  const { selectArtwork, themeColors } = useGallery();
  // console.log(motion);
  // console.log('artwork',artwork);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => selectArtwork(artwork)}
      style={{
        backgroundColor: "violet",
        color: "black",
      }}


      className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <img
        // src={`http://localhost:5000${artwork.imageUrl}`}
        src={`https://virtual-art-gallery-7o5w.onrender.com${artwork.imageUrl}`}
        alt={artwork.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-3 text-center">
        <h3 className="font-semibold">{artwork.title}</h3>
        <p className="text-sm opacity-80">{artwork.artist}</p>
        <button>{artwork.likes} ❤️</button>
      </div>
    </motion.div>
  );
}
