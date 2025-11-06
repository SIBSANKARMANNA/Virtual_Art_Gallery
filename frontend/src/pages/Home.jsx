// src/pages/Home.jsx
import { useGallery } from "../context/GalleryContext";
import FilterBar from "../components/FilterBar";
import GalleryGrid from "../components/GalleryGrid";
import ArtworkModal from "../components/ArtworkModal";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  const { selectedArtwork } = useGallery();

  return (
    <section className="relative">
      {/* Filters */}
      <FilterBar />

      {/* Artworks */}
      <GalleryGrid />

      {/* Artwork Modal (opens on click) */}
      {selectedArtwork && <ArtworkModal />}

      {/* Background Music */}
      <MusicPlayer />
    </section>
  );
}
