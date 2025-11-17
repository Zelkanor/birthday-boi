import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

interface MusicPlayerProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

function MusicPlayer({ isPlaying, toggleMusic }: MusicPlayerProps) {
  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <FaVolumeUp className="text-white text-2xl" />
        ) : (
          <FaVolumeMute className="text-white text-2xl" />
        )}
      </button>
    </>
  );
}

export default MusicPlayer;
