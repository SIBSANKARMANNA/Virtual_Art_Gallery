// src/components/GalleryGrid.jsx
import { useGallery } from "../context/GalleryContext";
import ArtworkCard from "./ArtworkCard";
import Loader from "./Loader";

export default function GalleryGrid() {
  const { filteredArtworks, loading } = useGallery();

  if (loading) return <Loader />;
  if (filteredArtworks.length === 0)
    return <p className="text-center text-gray-500 dark:text-gray-400">No artworks found.</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredArtworks.map((art) => (
        <ArtworkCard key={art._id} artwork={art} />
      ))}
    </div>
  );
}
