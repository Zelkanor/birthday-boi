import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

function BirthdayPage() {
  const [isLit, setIsLit] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSprite, setShowSprite] = useState(false);
  const [spritePhase, setSpritePhase] = useState<'entering' | 'eating' | 'leaving'>('entering');
  const [cakeImage, setCakeImage] = useState('/images/lit.png');
  const blowTimerRef = useRef<number | null>(null);
  const [isHoldingButton, setIsHoldingButton] = useState(false);

  // Handle the wish complete (candles blown out)
  const handleWishComplete = () => {
    setIsLit(false);
    setCakeImage('/images/blown.png');
    setShowConfetti(true);

    // After 3 seconds, show the sprite
    setTimeout(() => {
      setShowSprite(true);
    }, 3000);
  };

  // Handle sprite animations
  useEffect(() => {
    if (showSprite && spritePhase === 'entering') {
      // After sprite enters, show eating phase
      setTimeout(() => {
        setSpritePhase('eating');
        setCakeImage('/images/ate.png');
      }, 1500);
    } else if (spritePhase === 'eating') {
      // After eating, exit
      setTimeout(() => {
        setSpritePhase('leaving');
      }, 3000);
    }
  }, [showSprite, spritePhase]);

  // Button hold logic
  const handleMouseDown = () => {
    setIsHoldingButton(true);
    blowTimerRef.current = setTimeout(() => {
      handleWishComplete();
      setIsHoldingButton(false);
    }, 2000); // 2 seconds hold
  };

  const handleMouseUp = () => {
    setIsHoldingButton(false);
    if (blowTimerRef.current) {
      clearTimeout(blowTimerRef.current);
      blowTimerRef.current = null;
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Left Curtain with Pleats */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full z-40 overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="relative w-full h-full flex">
          {/* Create pleated folds */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full"
              style={{
                background: i % 2 === 0 
                  ? 'linear-gradient(90deg, #7f1d1d 0%, #991b1b 50%, #7f1d1d 100%)'
                  : 'linear-gradient(90deg, #991b1b 0%, #b91c1c 50%, #991b1b 100%)',
                boxShadow: i % 2 === 0 
                  ? 'inset 2px 0 8px rgba(0,0,0,0.3), inset -2px 0 8px rgba(0,0,0,0.3)'
                  : 'inset 2px 0 4px rgba(255,255,255,0.1), inset -2px 0 4px rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>
        {/* Gold curtain rod top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-600 shadow-lg z-10" />
        {/* Tassels */}
        <div className="absolute top-8 left-1/4 w-3 h-16 bg-linear-to-b from-yellow-600 to-yellow-700 rounded-b-full" />
        <div className="absolute top-8 left-3/4 w-3 h-16 bg-linear-to-b from-yellow-600 to-yellow-700 rounded-b-full" />
      </motion.div>

      {/* Right Curtain with Pleats */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-40 overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="relative w-full h-full flex">
          {/* Create pleated folds */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full"
              style={{
                background: i % 2 === 0 
                  ? 'linear-gradient(90deg, #7f1d1d 0%, #991b1b 50%, #7f1d1d 100%)'
                  : 'linear-gradient(90deg, #991b1b 0%, #b91c1c 50%, #991b1b 100%)',
                boxShadow: i % 2 === 0 
                  ? 'inset 2px 0 8px rgba(0,0,0,0.3), inset -2px 0 8px rgba(0,0,0,0.3)'
                  : 'inset 2px 0 4px rgba(255,255,255,0.1), inset -2px 0 4px rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>
        {/* Gold curtain rod top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-600 shadow-lg z-10" />
        {/* Tassels */}
        <div className="absolute top-8 left-1/4 w-3 h-16 bg-linear-to-b from-yellow-600 to-yellow-700 rounded-b-full" />
        <div className="absolute top-8 left-3/4 w-3 h-16 bg-linear-to-b from-yellow-600 to-yellow-700 rounded-b-full" />
      </motion.div>

      {/* Birthday Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-8 drop-shadow-2xl animate-pulse" style={{ fontFamily: 'var(--font-playful)' }}>
          HAPPY BIRTHDAY! 🎉
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 text-center mb-12" style={{ fontFamily: 'var(--font-script)' }}>
          Hope this year brings you all the joy you deserve!
        </p>

        {/* Cake */}
        <div className="mb-12">
          <img
            src={cakeImage}
            alt="Birthday Cake"
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Blow Button */}
        {isLit && (
          <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className={`px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 ${
              isHoldingButton ? 'scale-95 animate-pulse' : 'animate-bounce'
            }`}
          >
            {isHoldingButton ? '🌬️ Keep holding...' : '🎂 Make a wish and blow out the candles!'}
          </button>
        )}

        {!isLit && !showSprite && (
          <p className="text-3xl text-white font-bold animate-bounce">
            🎊 Yay! Make it an amazing year! 🎊
          </p>
        )}
      </motion.div>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
          gravity={0.3}
        />
      )}

      {/* Sprite Epilogue */}
      {showSprite && (
        <>
          {spritePhase === 'entering' && (
            <motion.div
              className="fixed bottom-20 left-0 z-50"
              initial={{ x: '-100vw' }}
              animate={{ x: '50vw' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src="/sprites/chamber.png"
                alt="Sprite"
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </motion.div>
          )}

          {spritePhase === 'eating' && (
            <motion.div
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-white rounded-3xl p-4 shadow-2xl mb-4 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-15 border-t-white" />
                <p className="text-gray-800 text-lg font-bold">
                  Yum! Happy Birthday! Bye! 👋
                </p>
              </div>
              <img
                src="/sprites/chamber.png"
                alt="Sprite eating"
                className="w-32 h-32 md:w-48 md:h-48 animate-bounce"
              />
            </motion.div>
          )}

          {spritePhase === 'leaving' && (
            <motion.div
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
              initial={{ x: 0 }}
              animate={{ x: '100vw' }}
              transition={{ duration: 1.5, ease: 'easeIn' }}
            >
              <img
                src="/sprites/chamber.png"
                alt="Sprite leaving"
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

export default BirthdayPage;
