import { useState, useEffect, useRef } from 'react';

interface Dialogue {
  text: string;
}

interface SpriteSceneProps {
  onSpriteClick: () => void;
}

// Customize this dialogue to be personal and funny!
const dialogues: Dialogue[] = [
  { text: "Psst... over here! 👋" },
  { text: "Welcome to your 20's you old man, the day of backpain begins now" },
  { text: "4 years and going strong...Carried your ass for so long" },
  { text: "Thank you buddy for all you have done...I have made a brother for life" },
  { text: "Love you man...always be a good boi" },
  { text: "Ready for the big surprise? Click the button below! 🎁" }
];

function SpriteScene({ onSpriteClick }: SpriteSceneProps) {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const confettiSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Play confetti sound when component mounts (curtain opens)
    confettiSoundRef.current = new Audio('/audio/confetti.mp3');
    confettiSoundRef.current.play().catch(err => console.log('Confetti sound play failed:', err));

    return () => {
      if (confettiSoundRef.current) {
        confettiSoundRef.current.pause();
        confettiSoundRef.current = null;
      }
    };
  }, []);

  // Check if we're at the last dialogue
  const showClickPrompt = dialogueIndex === dialogues.length - 1;

  const handlePageClick = () => {
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen px-4 cursor-pointer"
      onClick={handlePageClick}
    >
      <div className="relative flex flex-col items-center">
        {/* Chat Bubble */}
        <div className="mb-8 bg-white rounded-3xl p-6 shadow-2xl max-w-md relative animate-bounce-slow">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-white" />
          <p className="text-gray-800 text-lg md:text-xl text-center font-medium">
            {dialogues[dialogueIndex].text}
          </p>
        </div>

        {/* Sprite Character */}
        <div className="relative">
          <img
            src="/sprites/chamber.png"
            alt="Character sprite"
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
          />
          {showClickPrompt && (
            <button
              onClick={onSpriteClick}
              className="absolute top-full mt-6 left-1/2 -translate-x-1/2 px-12 py-4 bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 animate-pulse whitespace-nowrap"
              style={{ fontFamily: 'var(--font-playful)' }}
            >
              Let's Go! 🎁✨
            </button>
          )}
        </div>
      </div>

      {!showClickPrompt && (
        <p className="mt-8 text-white/70 text-sm animate-pulse">
          Click anywhere to continue...
        </p>
      )}
    </div>
  );
}

export default SpriteScene;
