// // src/components/NavigationControls.jsx
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useGallery } from "../context/GalleryContext";

// export default function NavigationControls() {
//   const { filteredArtworks, selectedArtwork, selectArtwork } = useGallery();

//   if (!selectedArtwork) return null;

//   const currentIndex = filteredArtworks.findIndex(
//     (a) => a._id === selectedArtwork._id
//   );

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % filteredArtworks.length;
//     selectArtwork(filteredArtworks[nextIndex]);
//   };

//   const handlePrev = () => {
//     const prevIndex =
//       (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
//     selectArtwork(filteredArtworks[prevIndex]);
//   };

//   return (
//     <div className="flex items-center gap-4">
//       <button
//         onClick={handlePrev}
//         className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
//       >
//         <ChevronLeft />
//       </button>
//       <button className="p-2 bg-gray-200 dark:bg-gray-700 text-white rounded-full hover:scale-110 transition">{selectedArtwork.likes} ❤️</button>
//       <button className="p-2 bg-gray-200 dark:bg-gray-700 text-white rounded-full hover:scale-110 transition">{selectedArtwork.likes} ❤️</button>

//       <button
//         onClick={handleNext}
//         className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
//       >
//         <ChevronRight />
//       </button>
//     </div>
//   );
// }



// src/components/NavigationControls.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGallery } from "../context/GalleryContext";
import { useState } from "react";

export default function NavigationControls() {
  const { filteredArtworks, selectedArtwork, selectArtwork } = useGallery();
  const [updating, setUpdating] = useState(false); // prevent double-click spamming

  if (!selectedArtwork) return null;

  const currentIndex = filteredArtworks.findIndex(
    (a) => a._id === selectedArtwork._id
  );

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredArtworks.length;
    selectArtwork(filteredArtworks[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    selectArtwork(filteredArtworks[prevIndex]);
  };

  // ✅ Helper function to update likes on the backend
  const updateLikes = async (change) => {
    try {
      setUpdating(true);
      const newLikes = Math.max(0, selectedArtwork.likes + change); // prevent negative likes

      const res = await fetch(`http://localhost:5000/api/artworks/${selectedArtwork._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: newLikes }),
      });

      if (!res.ok) throw new Error("Failed to update likes");

      // Update UI instantly
      selectArtwork({ ...selectedArtwork, likes: newLikes });
    } catch (err) {
      console.error(err.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* ⬅️ Previous Artwork */}
      <button
        onClick={handlePrev}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      {/* ❤️ Like Button (Increment) */}
      <button
        disabled={updating}
        onClick={() => updateLikes(1)}
        className="p-2 bg-gray-200 dark:bg-gray-700 text-red-500 rounded-full hover:scale-110 transition"
        title="Like this artwork"
      >
        ❤️ {selectedArtwork.likes}
      </button>

      {/* 💔 Dislike Button (Decrement) */}
      <button
        disabled={updating}
        onClick={() => updateLikes(-1)}
        className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-400 rounded-full hover:scale-110 transition"
        title="Remove a like"
      >
        💔
      </button>

      {/* ➡️ Next Artwork */}
      <button
        onClick={handleNext}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
