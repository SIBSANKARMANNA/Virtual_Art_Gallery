// src/context/GalleryContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [filter, setFilter] = useState({ category: "All", artist: "All" });
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [theme, setTheme] = useState("Modern Art"); // 🎨 gallery theme
  const [darkMode, setDarkMode] = useState(false); // 🌙 global dark mode

  // Apply/remove Tailwind dark mode class globally
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Fetch artworks from backend
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/artworks");
        const res = await axios.get("https://virtual-art-gallery-7o5w.onrender.com/api/artworks");
        // console.log("Fetched artworks:", res.data);
        setArtworks(res.data);
      } catch (err) {
        console.error("Error fetching artworks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  const selectArtwork = (artwork) => {
    setSelectedArtwork(artwork);
    setZoom(1);
  };

  const handleZoom = (type) => {
    setZoom((prev) => {
      if (type === "in") return Math.min(prev + 0.2, 3);
      if (type === "out") return Math.max(prev - 0.2, 1);
      return 1;
    });
  };

  const filteredArtworks = artworks.filter((art) => {
    const byArtist = filter.artist === "All" || art.artist === filter.artist;
    const byCategory =
      filter.category === "All" || art.category === filter.category;
    const byTheme = art.theme === theme;
    return byArtist && byCategory && byTheme;
  });

  // 🌗 Define global colors (optional, can be used in UI styling)
  const themeColors = {
    background: darkMode ? "#1f2937" : "#ffffff", // gray-800 or white
    text: darkMode ? "#f3f4f6" : "#1f2937", // gray-100 or gray-800
  };

  return (
    <GalleryContext.Provider
      value={{
        artworks,
        filteredArtworks,
        loading,
        selectedArtwork,
        selectArtwork,
        setSelectedArtwork,
        zoom,
        handleZoom,
        filter,
        setFilter,
        musicEnabled,
        setMusicEnabled,
        theme,
        setTheme,
        darkMode,
        setDarkMode,
        themeColors, // 🌈 expose global colors
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
