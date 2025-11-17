import { useState, useRef, useEffect } from 'react';
import './index.css';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import SpriteScene from './components/SpriteScene';
import BirthdayPage from './components/BirthdayPage';
import MusicPlayer from './components/MusicPlayer';

type Scene = 'landing' | 'quiz' | 'sprite' | 'birthday';

function App() {
  const [scene, setScene] = useState<Scene>('landing');
  const [isPlaying, setIsPlaying] = useState(true);
  const landingAudioRef = useRef<HTMLAudioElement | null>(null);
  const quizAudioRef = useRef<HTMLAudioElement | null>(null);
  const spriteAudioRef = useRef<HTMLAudioElement | null>(null);
  const birthdayAudioRef = useRef<HTMLAudioElement | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio files
    landingAudioRef.current = new Audio('./audio/landing.mp3');
    landingAudioRef.current.loop = true;
    quizAudioRef.current = new Audio('./audio/quiz.mp3');
    quizAudioRef.current.loop = true;
    spriteAudioRef.current = new Audio('./audio/sprite.mp3');
    spriteAudioRef.current.loop = true;
    birthdayAudioRef.current = new Audio('./audio/birthday.mp3');
    birthdayAudioRef.current.loop = true;

    // Start landing music
    currentAudioRef.current = landingAudioRef.current;
    landingAudioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => console.log('Autoplay prevented'));

    return () => {
      if (landingAudioRef.current) landingAudioRef.current.pause();
      if (quizAudioRef.current) quizAudioRef.current.pause();
      if (spriteAudioRef.current) spriteAudioRef.current.pause();
      if (birthdayAudioRef.current) birthdayAudioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    // Switch music based on scene
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }

    if (scene === 'landing' && landingAudioRef.current) {
      currentAudioRef.current = landingAudioRef.current;
      if (isPlaying) landingAudioRef.current.play();
    } else if (scene === 'quiz' && quizAudioRef.current) {
      currentAudioRef.current = quizAudioRef.current;
      if (isPlaying) quizAudioRef.current.play();
    } else if (scene === 'sprite' && spriteAudioRef.current) {
      currentAudioRef.current = spriteAudioRef.current;
      if (isPlaying) spriteAudioRef.current.play();
    } else if (scene === 'birthday' && birthdayAudioRef.current) {
      currentAudioRef.current = birthdayAudioRef.current;
      if (isPlaying) birthdayAudioRef.current.play();
    }
  }, [scene, isPlaying]);

  const toggleMusic = () => {
    if (currentAudioRef.current) {
      if (isPlaying) {
        currentAudioRef.current.pause();
      } else {
        currentAudioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" style={{
        backgroundSize: '200% 200%',
        animation: 'gradient-x 15s ease infinite'
      }} />
      
      {/* Scenes */}
      {scene === 'landing' && <LandingPage onYesClick={() => setScene('quiz')} />}
      {scene === 'quiz' && <QuizPage onQuizComplete={() => setScene('sprite')} />}
      {scene === 'sprite' && <SpriteScene onSpriteClick={() => setScene('birthday')} />}
      {scene === 'birthday' && <BirthdayPage />}

      {/* Global Music Player */}
      <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />
    </div>
  );
}

export default App;
