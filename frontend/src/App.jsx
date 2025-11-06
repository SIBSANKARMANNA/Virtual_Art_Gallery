// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import { useGallery } from "./context/GalleryContext";

export default function App() {
  const { themeColors } = useGallery();

  return (
    <Router>
      <div
        style={{
          backgroundColor: themeColors.background,
          color: themeColors.text,
        }}
        className="min-h-screen flex flex-col transition-colors duration-500"
      >
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
