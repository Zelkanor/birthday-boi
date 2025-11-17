import { useState, useRef, useEffect } from 'react';

interface Answer {
  text: string;
  isMovable?: boolean;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface QuizPageProps {
  onQuizComplete: () => void;
}

// Customize these questions to be personal and funny!
const questions: Question[] = [
  {
    id: 1,
    text: "Is luxxy the best?",
    answers: [
      { text: "Yes! 🎉" }
    ]
  },
  {
    id: 2,
    text: "Are you bad at Valorant?",
    answers: [
      { text: "Yes 😅" },
      { text: "No", isMovable: true }
    ]
  },
];

function QuizPage({ onQuizComplete }: QuizPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 50, left: 50 });
  const [hasMoved, setHasMoved] = useState(false);
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize sound effects
    correctSoundRef.current = new Audio('./audio/correct.mp3');
    wrongSoundRef.current = new Audio('./audio/wrong.mp3');
  }, []);

  const handleAnswerClick = (isMovable?: boolean) => {
    if (isMovable) {
      // Play wrong sound when trying to click No
      if (wrongSoundRef.current) {
        wrongSoundRef.current.currentTime = 0;
        wrongSoundRef.current.play();
      }
      return; // Don't proceed if it's the movable button
    }
    
    // Play correct sound for Yes answers
    if (correctSoundRef.current) {
      correctSoundRef.current.currentTime = 0;
      correctSoundRef.current.play();
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setHasMoved(false); // Reset for next question
    } else {
      onQuizComplete();
    }
  };

  const moveNoButton = () => {
    setHasMoved(true);
    setNoButtonPosition({
      top: 20 + Math.random() * 60,
      left: 20 + Math.random() * 60,
    });
    // Play wrong sound when hovering over No
    if (wrongSoundRef.current) {
      wrongSoundRef.current.currentTime = 0;
      wrongSoundRef.current.play();
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative">
      {/* Gradient overlay for vibey effect */}
      <div className="fixed inset-0 bg-linear-to-br from-purple-900/30 via-pink-900/20 to-orange-900/30 -z-10" />
      
      {/* Animated background circles */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Question Counter Dots */}
      <div className="flex gap-4 mb-16">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              idx === currentQuestionIndex
                ? 'bg-yellow-400 scale-150 shadow-lg shadow-yellow-400/50'
                : idx < currentQuestionIndex
                ? 'bg-green-400 shadow-md shadow-green-400/30'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <h1 
        className="text-5xl md:text-7xl font-bold text-white text-center mb-20 max-w-4xl px-4 drop-shadow-2xl"
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        {currentQuestion.text}
      </h1>

      {/* Answers */}
      <div className={currentQuestionIndex === 1 ? "relative w-full max-w-md h-80 flex items-center justify-center" : "flex gap-6 flex-wrap justify-center"}>
        {currentQuestion.answers.map((answer, idx) => {
          const isMovableButton = answer.isMovable && currentQuestionIndex === 1;
          
          return (
            <button
              key={idx}
              onClick={() => handleAnswerClick(answer.isMovable)}
              onMouseEnter={isMovableButton ? moveNoButton : undefined}
              className={`px-10 py-4 text-white text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 ${
                isMovableButton 
                  ? 'bg-linear-to-r from-red-500 to-pink-600 hover:shadow-red-500/50 hover:scale-105' 
                  : 'bg-linear-to-r from-green-400 to-emerald-500 hover:scale-110 hover:shadow-green-500/50 hover:shadow-2xl'
              }`}
              style={isMovableButton ? {
                position: hasMoved ? 'absolute' : 'relative',
                top: hasMoved ? `${noButtonPosition.top}%` : undefined,
                left: hasMoved ? `${noButtonPosition.left}%` : undefined,
                transform: hasMoved ? 'translate(-50%, -50%)' : undefined,
                transition: hasMoved ? 'all 0.12s ease-out' : 'all 0.3s ease',
                fontFamily: 'Pacifico, cursive'
              } : {
                fontFamily: 'Pacifico, cursive'
              }}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuizPage;
