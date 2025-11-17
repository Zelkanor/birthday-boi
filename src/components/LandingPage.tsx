import { useState, useRef, useEffect } from 'react';

interface LandingPageProps {
  onYesClick: () => void;
}

function LandingPage({ onYesClick }: LandingPageProps) {
  const [noPosition, setNoPosition] = useState({ top: 50, left: 62 });
  const [hasMoved, setHasMoved] = useState(false);
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize sound effects
    correctSoundRef.current = new Audio(`${import.meta.env.BASE_URL}audio/correct.mp3`);
    wrongSoundRef.current = new Audio(`${import.meta.env.BASE_URL}audio/wrong.mp3`);
  }, []);

  const handleYesClick = () => {
    if (correctSoundRef.current) {
      correctSoundRef.current.currentTime = 0;
      correctSoundRef.current.play();
    }
    onYesClick();
  };

  const moveNoButton = () => {
    setHasMoved(true);
    setNoPosition({
      top: 15 + Math.random() * 70,
      left: 15 + Math.random() * 70,
    });
    if (wrongSoundRef.current) {
      wrongSoundRef.current.currentTime = 0;
      wrongSoundRef.current.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-white text-center mb-12 drop-shadow-2xl" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em' }}>
        Are you ready for what lies ahead?
      </h1>
      
      <div className="relative w-full max-w-2xl h-64">
        {/* Yes Button - Static */}
        <button
          onClick={handleYesClick}
          className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 px-12 py-6 bg-green-500 hover:bg-green-600 text-white text-2xl font-bold rounded-xl shadow-2xl transition-colors duration-300 hover:scale-105 transform"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          YES! 🎉
        </button>

        {/* No Button - Tricky, moves on hover */}
        <button
          onMouseEnter={moveNoButton}
          style={{
            fontFamily: 'Poppins, sans-serif',
            position: 'absolute',
            top: hasMoved ? `${noPosition.top}%` : '50%',
            left: hasMoved ? `${noPosition.left}%` : '65%',
            transform: 'translate(-50%, -50%)',
            transition: hasMoved ? 'all 0.15s ease-out' : 'transform 0.3s ease',
          }}
          className="px-10 py-5 bg-red-500 hover:bg-red-600 text-white text-xl font-bold rounded-xl shadow-2xl transition-all duration-300"
        >
          No...
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
