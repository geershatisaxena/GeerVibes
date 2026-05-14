<div align="center">

<!-- ╔══════════════════════════════════════════╗
     ║   SELF-CONTAINED ANIMATED SVG BANNER    ║
     ╚══════════════════════════════════════════╝ -->

<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" width="800" height="200">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#060612"/>
      <stop offset="100%" style="stop-color:#0d0020"/>
    </linearGradient>
    <!-- Title gradient -->
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#00ffff">
        <animate attributeName="stop-color" values="#00ffff;#ff00ff;#00ff88;#00ffff" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#ff00ff">
        <animate attributeName="stop-color" values="#ff00ff;#00ff88;#00ffff;#ff00ff" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <!-- Glow filter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softglow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="200" fill="url(#bg)" rx="10"/>

  <!-- Scanlines -->
  <rect width="800" height="200" rx="10"
    fill="none"
    style="background: repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,255,0.03) 2px,rgba(0,255,255,0.03) 4px)"/>

  <!-- Grid lines -->
  <line x1="0" y1="50"  x2="800" y2="50"  stroke="rgba(0,255,255,0.06)" stroke-width="1"/>
  <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(0,255,255,0.06)" stroke-width="1"/>
  <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(0,255,255,0.06)" stroke-width="1"/>
  <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(0,255,255,0.04)" stroke-width="1"/>
  <line x1="400" y1="0" x2="400" y2="200" stroke="rgba(0,255,255,0.04)" stroke-width="1"/>
  <line x1="600" y1="0" x2="600" y2="200" stroke="rgba(0,255,255,0.04)" stroke-width="1"/>

  <!-- Glow title shadow -->
  <text x="400" y="90" text-anchor="middle"
    font-family="monospace" font-size="52" font-weight="900" letter-spacing="18"
    fill="#00ffff" opacity="0.25" filter="url(#glow)">
    GEERVIBES
  </text>

  <!-- Main title with animated gradient -->
  <text x="400" y="90" text-anchor="middle"
    font-family="monospace" font-size="52" font-weight="900" letter-spacing="18"
    fill="url(#titleGrad)" filter="url(#softglow)">
    <animate attributeName="opacity" values="0;1;0.8;1" dur="1.2s" fill="freeze"/>
    GEERVIBES
  </text>

  <!-- Animated subtitle — cycles 5 phrases -->
  <text x="400" y="128" text-anchor="middle"
    font-family="monospace" font-size="14" letter-spacing="3"
    fill="#ff00ff" filter="url(#softglow)">
    <animate attributeName="opacity"
      values="0;1;1;1;1;0; 0;1;1;1;1;0; 0;1;1;1;1;0; 0;1;1;1;1;0; 0;1;1;1;1;0"
      dur="15s" repeatCount="indefinite"/>
    <animate attributeName="fill"
      values="#ff00ff;#ff00ff;#00ffff;#00ff88;#ff00ff;#ff00ff"
      dur="15s" repeatCount="indefinite"/>
    <!-- Text cycles via tspan visibility -->
  </text>

  <!-- Phrase 1 -->
  <text x="400" y="128" text-anchor="middle" font-family="monospace" font-size="14" letter-spacing="2" fill="#ff00ff">
    <animate attributeName="opacity" values="0;0;1;1;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="15s" repeatCount="indefinite"/>
    ⚡  THE MELODY IN EVERY MOMENT
  </text>

  <!-- Phrase 2 -->
  <text x="400" y="128" text-anchor="middle" font-family="monospace" font-size="14" letter-spacing="2" fill="#00ffff">
    <animate attributeName="opacity" values="0;0;0;0;0;0;1;1;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="15s" repeatCount="indefinite"/>
    🌐  CYBERPUNK AUDIO SANCTUARY
  </text>

  <!-- Phrase 3 -->
  <text x="400" y="128" text-anchor="middle" font-family="monospace" font-size="14" letter-spacing="2" fill="#00ff88">
    <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;1;1;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="15s" repeatCount="indefinite"/>
    🎧  320+ TRACKS · ZERO LATENCY
  </text>

  <!-- Phrase 4 -->
  <text x="400" y="128" text-anchor="middle" font-family="monospace" font-size="14" letter-spacing="2" fill="#ff00ff">
    <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;0;0;0;0;0;0;0;0;0;0;0;0;0" dur="15s" repeatCount="indefinite"/>
    💾  NO BACKEND · NO FRAMEWORKS
  </text>

  <!-- Phrase 5 -->
  <text x="400" y="128" text-anchor="middle" font-family="monospace" font-size="14" letter-spacing="2" fill="#00ffff">
    <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;0;0;0;0;0;0;0;0;0" dur="15s" repeatCount="indefinite"/>
    🔥  PURE VANILLA JAVASCRIPT
  </text>

  <!-- Bottom cursor blink -->
  <rect x="378" y="138" width="10" height="2" fill="#00ffff">
    <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite"/>
  </rect>

  <!-- Bottom tagline -->
  <text x="400" y="175" text-anchor="middle"
    font-family="monospace" font-size="11" letter-spacing="4"
    fill="rgba(0,255,255,0.4)">
    A PREMIUM CLIENT-SIDE MUSIC STREAMING EXPERIENCE
  </text>

  <!-- Corner accents -->
  <polyline points="10,30 10,10 30,10" stroke="#00ffff" stroke-width="2" fill="none" opacity="0.6"/>
  <polyline points="770,10 790,10 790,30" stroke="#00ffff" stroke-width="2" fill="none" opacity="0.6"/>
  <polyline points="10,170 10,190 30,190" stroke="#ff00ff" stroke-width="2" fill="none" opacity="0.6"/>
  <polyline points="770,190 790,190 790,170" stroke="#ff00ff" stroke-width="2" fill="none" opacity="0.6"/>

  <!-- Side decorative dots -->
  <circle cx="22" cy="100" r="3" fill="#00ffff" opacity="0.5">
    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="778" cy="100" r="3" fill="#ff00ff" opacity="0.5">
    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
  </circle>
</svg>

<br/>

<!-- Logo -->
<img src="https://github.com/geershatisaxena/GeerVibes/blob/main/logo.svg" width="72" alt="GeerVibes Logo" />

<br/><br/>

<!-- Badges -->
![License](https://img.shields.io/badge/License-MIT-00ffff?style=for-the-badge&logo=opensourceinitiative&logoColor=black&labelColor=0d0d1a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-f7df1e?style=for-the-badge&logo=javascript&logoColor=black&labelColor=0d0d1a)
![CSS3](https://img.shields.io/badge/CSS3-Cyberpunk-ff69b4?style=for-the-badge&logo=css3&logoColor=white&labelColor=0d0d1a)
![Frameworks](https://img.shields.io/badge/Frameworks-NONE-blueviolet?style=for-the-badge&labelColor=0d0d1a)
![Status](https://img.shields.io/badge/Status-Ready_To_Play-00ff88?style=for-the-badge&logo=html5&logoColor=black&labelColor=0d0d1a)

</div>

---

## ⚡ What Is GeerVibes?

> **GeerVibes** is not just a music player — it's a **cyberpunk audio sanctuary** built from scratch with raw HTML5, CSS3, and Vanilla JavaScript. Every pixel pulses, every transition breathes, and the sound engine hits harder than it has any right to.
>
> No backend. No databases. No frameworks. Just **you, your library, and the purest client-side JavaScript** your browser can run.

---

## 🎛️ Command Center

<div align="center">

| Module | Capability |
|:------:|:-----------|
| 🎵 **Audio Engine** | Web Audio API — play, pause, seek, skip, loop, shuffle with real‑time metadata |
| 📊 **Wave Visualizer** | 20‑bar neon spectrum analyser pulsing to *actual* audio frequency data |
| 🔁 **Smart Queue** | Fisher‑Yates shuffle + 3 repeat modes — Off · Single · All |
| 🔍 **Live Search** | Instant filtering by track title or artist — zero debounce lag |
| ❤️ **Favorites** | One‑click save → persistent `localStorage` → filter to loved tracks only |
| 🔊 **Volume Control** | Logarithmic slider + mute toggle + full keyboard support |
| 📱 **Mobile Mini‑Player** | Sticky bottom bar — essential controls, one‑thumb operation |
| 🌙 **Dual Themes** | Cyberpunk Neon ↔ Holographic Day — persistent across sessions |
| ⏳ **Lazy Duration Load** | Shimmer placeholders → async fetch → zero UI blocking |
| 💾 **Zero External Calls** | No Google Fonts · No CDN · No tracking · 100% offline-capable |
| 🎨 **Cyberpunk DNA** | Neon glows · Glassmorphism · Scanlines · Clip-path geometry |
| ⌨️ **Keyboard God Mode** | Full shortcut suite — every action a keystroke away |

</div>

---

## ⌨️ Keyboard Shortcuts

<div align="center">

| Key | Action |
|:---:|:-------|
| `Space` | ▶ Play / ⏸ Pause |
| `←` `→` | Seek ±10 seconds |
| `↑` `↓` | Volume Up / Down |
| `+` `-` | Fine volume tune |
| `M` | 🔇 Mute Toggle |
| `S` | 🔀 Shuffle |
| `L` | 🔁 Loop Mode |
| `F` | ❤️ Favourite current track |

</div>

---

## 🚀 Getting Started

### 1 · Clone

```bash
git clone https://github.com/geershatisaxena/GeerVibes.git
cd GeerVibes
```

### 2 · Add Your Music

Drop `.mp3` / `.ogg` / `.wav` files into `/tracks`, then update the manifest:

```js
// tracks.js
const tracks = [
  { title: "Track Name", artist: "Artist", src: "tracks/song.mp3" },
  // ...
];
```

### 3 · Launch

```bash
# Option A — open directly
open index.html

# Option B — local server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

> **No build step. No `npm install`. No config.** It just works. ⚡

---

## 🗂️ Project Structure

```
GeerVibes/
├── index.html          ← Entry point
├── style.css           ← Cyberpunk design system + themes
├── app.js              ← Core audio engine + UI logic
├── tracks.js           ← Music library manifest
├── visualizer.js       ← Web Audio API spectrum analyser
├── logo.svg            ← The glowing sigil
└── README.md           ← You are here
```

---

## 🎨 Theme System

<div align="center">

| | ⚡ Cyberpunk Neon *(default)* | 🌐 Holographic Day |
|---|---|---|
| **Background** | `#060612` deep space | `#f0f4ff` soft light |
| **Primary** | `#00ffff` cyan | `#6600ff` violet |
| **Secondary** | `#ff00ff` magenta | `#00aaff` sky blue |
| **Vibe** | Dark · Electric · Relentless | Clean · Iridescent · Airy |

</div>

---

## 🌐 Browser Support

<div align="center">

| Browser | Min Version | Status |
|:-------:|:-----------:|:------:|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 15+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

</div>

---

## 🤝 Contributing

```bash
git checkout -b feat/your-idea
git commit -m "feat: your amazing addition"
git push origin feat/your-idea
# → Open a Pull Request 🎉
```

> Keep the **zero-dependency** philosophy intact. No frameworks, no build tools.

---

## 📜 Changelog

<div align="center">

| Version | Highlights |
|:-------:|:-----------|
| `v2.0` | Dual themes · Mobile mini-player · Keyboard God Mode |
| `v1.5` | Wave visualizer · Lazy duration loading · Shuffle upgrade |
| `v1.0` | Initial release — audio engine + favorites + live search |

</div>

---

## 📄 License

```
MIT License — © 2024 Geershati Saxena
Use, copy, modify, distribute — zero strings attached.
```

---

<div align="center">

<!-- Animated footer SVG -->
<svg viewBox="0 0 600 60" xmlns="http://www.w3.org/2000/svg" width="600" height="60">
  <rect width="600" height="60" fill="#060612" rx="6"/>
  <text x="300" y="22" text-anchor="middle" font-family="monospace" font-size="12" letter-spacing="3" fill="#ff00ff">
    <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite"/>
    MADE WITH ❤️ AND 🎧 BY GEERSHATI SAXENA
  </text>
  <text x="300" y="44" text-anchor="middle" font-family="monospace" font-size="11" letter-spacing="4" fill="rgba(0,255,255,0.5)">
    ⚡  STAY TUNED · STAY WIRED · STAY VIBING
  </text>
  <!-- animated underline -->
  <line x1="100" y1="52" x2="500" y2="52" stroke="url(#lg)" stroke-width="1" opacity="0.6"/>
  <defs>
    <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#060612"/>
      <stop offset="30%"  stop-color="#00ffff"/>
      <stop offset="70%"  stop-color="#ff00ff"/>
      <stop offset="100%" stop-color="#060612"/>
    </linearGradient>
  </defs>
</svg>

</div>
