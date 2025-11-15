// src/components/ArtworkModal.jsx
import { useGallery } from "../context/GalleryContext";
import { X } from "lucide-react";
import NavigationControls from "./NavigationControls";
import ZoomControls from "./ZoomControls";
import { motion, AnimatePresence } from "framer-motion";

export default function ArtworkModal() {
  const { selectedArtwork, setSelectedArtwork, zoom, themeColors } = useGallery();
  console.log(motion);
  if (!selectedArtwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{
            backgroundColor: themeColors.background,
            color: themeColors.text,
          }}
          className="relative rounded-2xl shadow-xl p-4 max-w-3xl w-full mx-4 transition-colors duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 opacity-70 hover:opacity-100 hover:text-red-500"
            onClick={() => setSelectedArtwork(null)}
          >
            <X size={24} />
          </button>

          {/* Artwork Image */}
          <div className="flex flex-col items-center">
            <div
              className="overflow-hidden flex items-center justify-center"
              style={{ maxHeight: "70vh" }}
            >
              <motion.img
                // src={`http://localhost:5000${selectedArtwork.imageUrl}`}
                src={`https://virtual-art-gallery-7o5w.onrender.com${selectedArtwork.imageUrl}`}
                alt={selectedArtwork.title}
                className="object-contain rounded-lg transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            {/* Artwork Info */}
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold">{selectedArtwork.title}</h2>
              <p className="italic opacity-80">{selectedArtwork.artist}</p>
              {selectedArtwork.description && (
                <p className="mt-2 text-sm opacity-75">
                  {selectedArtwork.description}
                </p>
              )}
              {/* <button>{selectedArtwork.likes} ❤️</button> */}
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center gap-6">
              <ZoomControls />
              <NavigationControls />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

