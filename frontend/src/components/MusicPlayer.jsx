// src/components/MusicPlayer.jsx
import { useEffect, useRef } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { useGallery } from "../context/GalleryContext";

export default function MusicPlayer() {
  const { musicEnabled, setMusicEnabled } = useGallery();
  const audioRef = useRef(null);

  useEffect(() => {
    if (musicEnabled) audioRef.current.play();
    else audioRef.current.pause();
  }, [musicEnabled]);

  return (
    <div className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg flex items-center gap-2">
      <Music2 size={20} />
      <button onClick={() => setMusicEnabled(!musicEnabled)}>
        {musicEnabled ? <Pause /> : <Play />}
      </button>
      <audio ref={audioRef} loop>
        <source src="/gallery-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
