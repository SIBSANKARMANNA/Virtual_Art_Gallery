// src/components/FilterBar.jsx
import { useGallery } from "../context/GalleryContext";

export default function FilterBar() {
  const { artworks, filter, setFilter, themeColors } = useGallery();
  // console.log("artworks in FilterBar:", artworks);
  const artists = ["All", ...new Set(artworks.map((a) => a.artist))];
  const categories = ["All", ...new Set(artworks.map((a) => a.category))];

  return (
    <div
      className="flex flex-wrap justify-between items-center gap-4 mb-6 transition-colors duration-300"
      style={{ color: themeColors.text }}
    >
      {/* Filter by Artist */}
      <div>
        <label className="mr-2 font-medium">Artist:</label>
        <select
          className="border rounded-md px-2 py-1"
          style={{
            backgroundColor: themeColors.background,
            color: themeColors.text,
            borderColor: themeColors.text,
          }}
          value={filter.artist}
          onChange={(e) => setFilter({ ...filter, artist: e.target.value })}
        >
          {artists.map((artist) => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by Category */}
      <div>
        <label className="mr-2 font-medium">Category:</label>
        <select
          className="border rounded-md px-2 py-1"
          style={{
            backgroundColor: themeColors.background,
            color: themeColors.text,
            borderColor: themeColors.text,
          }}
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
