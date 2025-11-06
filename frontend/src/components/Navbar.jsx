// src/components/Navbar.jsx
import { Sun, Moon } from "lucide-react";
import { useGallery } from "../context/GalleryContext";

export default function Navbar() {
  const { darkMode, setDarkMode, theme, setTheme } = useGallery();
  // console.log('theme in navigation:', theme);

  const themes = [
    "Modern Art",
    "Classical Paintings",
    "Photography",
    "Digital Illustrations",
    "Abstract",
    "Surrealism",
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          🎨 Virtual Art Gallery
        </h1>

        <div className="flex items-center gap-4">
          {/* Gallery Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md focus:outline-none"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-transform"
            title="Toggle dark/light theme"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
