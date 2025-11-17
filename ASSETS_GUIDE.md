# 🎨 Asset Creation Guide

This guide will help you create or find all the assets needed for the Interactive Birthday Journey.

## 📋 Quick Checklist

- [ ] Background music (birthday-tune.mp3)
- [ ] 6 dialogue audio files (line1.mp3 - line6.mp3)
- [ ] Character sprite image (chamber.png)
- [ ] Animated cake with candles (cake-lit.gif)
- [ ] Cake without candles (cake-unlit.png)

---

## 🎵 Audio Assets

### Background Music (birthday-tune.mp3)

**Where to find:**
1. **YouTube Audio Library** (Free, no attribution needed)
   - Visit: https://studio.youtube.com/channel/UC/music
   - Search for: "birthday", "celebration", "happy"
   - Download as MP3

2. **Pixabay Music** (Free)
   - Visit: https://pixabay.com/music/
   - Search for: "birthday", "cheerful", "upbeat"

3. **Incompetech** (Free with attribution)
   - Visit: https://incompetech.com/music/royalty-free/music.html
   - Try: "Carefree", "Cipher", "Sneaky Snitch"

**Specifications:**
- Format: MP3
- Duration: 1-3 minutes (it will loop)
- Mood: Cheerful, upbeat, celebratory

---

### Dialogue Audio Files (line1.mp3 through line6.mp3)

**Default Dialogue:**
1. "Psst... over here! 👋"
2. "You won't believe what I know about the birthday person..."
3. "They once stayed up all night binge-watching a series and had ZERO regrets!"
4. "It's like Andaz Apna Apna... Teja main hoon, mark idhar hai!"
5. "But seriously, they're absolutely amazing and deserve all the happiness!"
6. "Ready for the big surprise? Click me when you're ready!"

**How to create TTS (Text-to-Speech) files:**

### Option 1: TTSMaker (Recommended - Free & Easy)
1. Visit: https://ttsmaker.com/
2. Select language (English or Hindi for Bollywood reference)
3. Choose a fun voice (e.g., "Jenny" or "Guy")
4. Paste each line of dialogue
5. Adjust speed (try 1.0x or 1.1x)
6. Download as MP3
7. Rename files to line1.mp3, line2.mp3, etc.

### Option 2: Natural Readers
1. Visit: https://www.naturalreaders.com/online/
2. Paste text
3. Select voice
4. Download audio

### Option 3: Google Cloud TTS (Free tier available)
1. Visit: https://cloud.google.com/text-to-speech
2. Use the demo or sign up for free tier
3. Choose a WaveNet voice for best quality
4. Download each line

### Option 4: ElevenLabs (High Quality, Free tier)
1. Visit: https://elevenlabs.io/
2. Sign up for free account
3. Generate up to 10,000 characters/month
4. Very natural-sounding AI voices!

**Pro Tip:** Add emotional punctuation for better delivery:
- "Psst... over here!" → Whispering effect
- "ZERO regrets!" → Emphasis on ZERO

---

## 🎨 Visual Assets

### Character Sprite (chamber.png)

**What it is:** A cute cartoon representation of yourself or the birthday person.

**Where to create:**

1. **Picrew** (Free, Easy, Anime-style)
   - Visit: https://picrew.me/
   - Browse creators
   - Popular ones: Search "avatar maker" or "character creator"
   - Customize features, colors, expressions
   - Download as PNG

2. **Avatoon** (App - Free)
   - iOS/Android app
   - Create cartoon avatars
   - Export as PNG

3. **Canva** (Free with templates)
   - Visit: https://www.canva.com/
   - Search templates: "avatar", "character", "cartoon"
   - Customize and download

4. **Commission an Artist** (Fiverr, Etsy)
   - Search: "chibi character" or "cute avatar"
   - Prices start at $5-20

**Specifications:**
- Format: PNG (with transparent background)
- Size: At least 512x512 px
- Style: Cute, cartoonish, expressive
- Expression: Happy, friendly

---

### Cake Images

#### Animated Cake (cake-lit.gif)

**Where to find:**

1. **Giphy**
   - Visit: https://giphy.com/
   - Search: "birthday cake candles"
   - Download as GIF
   - Look for: Realistic cake with lit candles

2. **Tenor**
   - Visit: https://tenor.com/
   - Search: "birthday cake animated"

3. **Create Your Own (Advanced)**
   - Use After Effects or Photoshop
   - Animate candle flames flickering

**Specifications:**
- Format: GIF
- Size: At least 500x500 px
- Animation: Candles burning/flickering
- Style: Colorful, celebratory

#### Cake without Candles (cake-unlit.png)

**How to get:**
- Option 1: Find a matching static image of the same cake
- Option 2: Take a screenshot of the GIF's first frame and remove flames in:
  - Photoshop
  - GIMP (free)
  - Photopea (free, online: https://www.photopea.com/)

**Specifications:**
- Format: PNG
- Same size as cake-lit.gif
- Should look like the "after" state

---

## 📂 File Organization

After creating/downloading all assets, organize them like this:

```
public/
├── music/
│   └── birthday-tune.mp3
├── audio/
│   ├── line1.mp3
│   ├── line2.mp3
│   ├── line3.mp3
│   ├── line4.mp3
│   ├── line5.mp3
│   └── line6.mp3
├── sprites/
│   └── chamber.png
└── images/
    ├── cake-lit.gif
    └── cake-unlit.png
```

---

## ✅ Testing Checklist

After adding all assets:

1. **Music Test:**
   - Navigate to Quiz scene
   - Music should start playing
   - Volume icon should appear in bottom-left

2. **Dialogue Test:**
   - Enter Sprite scene
   - Click through each dialogue
   - Audio should play for each line

3. **Image Test:**
   - Landing page should show instantly
   - Sprite should appear in Sprite scene
   - Cake should appear in Birthday scene

4. **Interaction Test:**
   - Hold the "Blow" button for 2 seconds
   - Cake should change from lit to unlit
   - Confetti should trigger

---

## 🎯 Quick Links

- **Free Music:** https://pixabay.com/music/
- **TTS Generator:** https://ttsmaker.com/
- **Avatar Creator:** https://picrew.me/
- **Cake GIFs:** https://giphy.com/search/birthday-cake
- **Free Image Editor:** https://www.photopea.com/

---

**Need help?** Check the main README.md for troubleshooting tips!
