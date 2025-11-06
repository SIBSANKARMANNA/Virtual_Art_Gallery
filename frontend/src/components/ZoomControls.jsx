// src/components/ZoomControls.jsx
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useGallery } from "../context/GalleryContext";

export default function ZoomControls() {
  const { handleZoom } = useGallery();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => handleZoom("out")}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
      >
        <ZoomOut />
      </button>
      <button
        onClick={() => handleZoom("in")}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
      >
        <ZoomIn />
      </button>
      <button
        onClick={() => handleZoom("reset")}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition"
      >
        <RotateCcw />
      </button>
    </div>
  );
}
