# 🎉 Interactive Birthday Journey

An interactive, multi-scene birthday website built with React, Vite, and Tailwind CSS. This is not just a birthday card—it's a playful, narrative journey designed to surprise and celebrate!

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Asset Setup

To make this project fully functional, you need to add the following assets to the `public` folder:

### 🎵 Music & Audio Files

Create these directories and add your files:

```
public/
├── music/
│   └── birthday-tune.mp3    # Background music (plays from quiz onwards)
├── audio/
│   ├── line1.mp3             # "Psst... over here! 👋"
│   ├── line2.mp3             # "You won't believe what I know..."
│   ├── line3.mp3             # Personal joke/memory
│   ├── line4.mp3             # Bollywood reference
│   ├── line5.mp3             # "They're absolutely amazing..."
│   └── line6.mp3             # "Ready for the big surprise?"
├── sprites/
│   └── chamber.png           # Character sprite (animated persona)
└── images/
    ├── cake-lit.gif          # Animated birthday cake with lit candles
    └── cake-unlit.png        # Birthday cake with candles blown out
```

### 🎨 Asset Recommendations

**Background Music:**
- Use a cheerful, upbeat birthday tune
- Recommended: royalty-free music from YouTube Audio Library or Pixabay
- Format: MP3, duration: 1-3 minutes (it loops)

**Dialogue Audio (AI Voice):**
- Use free TTS services like:
  - [TTSMaker](https://ttsmaker.com/)
  - [Natural Readers](https://www.naturalreaders.com/)
  - [Google Cloud Text-to-Speech](https://cloud.google.com/text-to-speech) (free tier)
- Choose a fun, expressive voice
- Export as MP3

**Sprite Character:**
- Create a cute cartoon avatar/character
- Tools: [Picrew](https://picrew.me/), Canva, or commission an artist
- Size: 256x256px or larger (PNG with transparency)

**Cake Images:**
- `cake-lit.gif`: Animated GIF with candles burning
- `cake-unlit.png`: Static image of the same cake without flames
- Find free options on: Giphy, or create in Canva

## 🎨 Customization Guide

### 1. **Personalize the Quiz** (`src/components/QuizPage.tsx`)

Edit the questions to make them personal and funny:

```tsx
const questions = [
  {
    id: 1,
    text: "What's [Friend's Name]'s favorite catchphrase?",
    answers: [
      { text: "Let's gooo!" },
      { text: "That's wild!" },
      // ... add more
    ]
  },
  // Add 2-3 questions total
];
```

### 2. **Customize Sprite Dialogue** (`src/components/SpriteScene.tsx`)

Make the dialogue personal with inside jokes and memories:

```tsx
const dialogues = [
  { text: "Remember that time we...", audio: "/audio/line1.mp3" },
  // ... customize all 6 lines
];
```

### 3. **Add the Birthday Person's Name** (`src/components/BirthdayPage.tsx`)

Replace the placeholder:

```tsx
<h1 className="...">
  HAPPY BIRTHDAY [NAME]! 🎉
</h1>
```

### 4. **Change Colors/Theme**

The background gradient is in `src/App.tsx`:

```tsx
<div className="... from-indigo-500 via-purple-500 to-pink-500" />
```

Change to any Tailwind colors you like!

## 🎭 Scene Flow

1. **Landing Page**: Tricky "Yes/No" buttons (the "No" button runs away!)
2. **Quiz Page**: Fun, personal questions (music starts here)
3. **Sprite Scene**: A character delivers a funny monologue with AI voice
4. **Birthday Page**: 
   - Curtain reveal animation
   - Interactive "blow out the candles" (click & hold)
   - Confetti explosion 🎊
   - Sprite returns to "eat" the cake and say goodbye

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Effects**: React Confetti

## 📱 Features

✅ Fully responsive (mobile-friendly)  
✅ State-managed scene transitions (no router needed)  
✅ Custom animations and effects  
✅ Interactive elements (tricky button, hold-to-blow)  
✅ Audio integration (background music + dialogue)  
✅ Confetti celebration 🎉  

## 🎁 Tips for Success

1. **Test the audio**: Make sure all audio files are correctly named and placed
2. **Mobile testing**: Test on actual mobile devices (touch events work differently)
3. **Personalization is key**: The more inside jokes and personal touches, the better!
4. **Asset quality**: Use high-quality images (at least 512x512 for the sprite)

## 🐛 Troubleshooting

**Music won't play automatically:**
- Most browsers block autoplay. The music starts on user interaction (clicking "Yes")

**Audio files not loading:**
- Check file paths in `public/` folder
- Ensure file extensions match exactly (case-sensitive on some systems)

**Images not showing:**
- Verify files are in `public/` (not `src/`)
- Check browser console for 404 errors

## 📄 License

This is a personal birthday project. Feel free to customize and use for your own celebrations! 🎉

---

**Made with ❤️ for an amazing birthday!**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
