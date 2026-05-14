<div align="center">

<!-- Animated Glowing Title -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=900&size=50&duration=3000&pause=1000&color=00FFFF&center=true&vCenter=true&repeat=true&width=750&height=90&lines=🎧+G+E+E+R+V+I+B+E+S" alt="GeerVibes" />

<!-- Animated Subtitle Cycler -->
<img src="https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=18&duration=2500&pause=800&color=FF00FF&center=true&vCenter=true&width=680&height=45&lines=⚡+The+Melody+in+Every+Moment;🌐+Cyberpunk+Audio+Sanctuary;🎧+320%2B+Tracks+·+Zero+Latency;💾+No+Backend.+No+Frameworks.+Just+Vibes.;🔥+Pure+Vanilla+JavaScript" alt="Subtitle Typer" />

<br/>

<!-- Logo -->
<img src="https://github.com/geershatisaxena/GeerVibes/blob/main/logo.svg" width="90" alt="GeerVibes Logo" />

<br/><br/>

<!-- Badges -->
![License](https://img.shields.io/badge/License-MIT-00ffff?style=for-the-badge&logo=opensourceinitiative&logoColor=black&labelColor=0d0d1a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-f7df1e?style=for-the-badge&logo=javascript&logoColor=black&labelColor=0d0d1a)
![CSS3](https://img.shields.io/badge/CSS3-Cyberpunk-ff69b4?style=for-the-badge&logo=css3&logoColor=white&labelColor=0d0d1a)
![Frameworks](https://img.shields.io/badge/Frameworks-NONE-blueviolet?style=for-the-badge&labelColor=0d0d1a)
![Status](https://img.shields.io/badge/Status-Ready_To_Play-00ff88?style=for-the-badge&logo=html5&logoColor=black&labelColor=0d0d1a)

<br/>

<!-- Animated feature ticker -->
<img src="https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=13&duration=1800&pause=500&color=00FF88&center=true&vCenter=true&width=600&height=30&lines=▶+Play+|+❤+Favorite+|+🔀+Shuffle+|+🔁+Loop+|+🔍+Search+|+🎨+Themes+|+📱+Mobile" alt="Feature Ticker" />

<!-- Waving banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00ffff,50:ff00ff,100:00ff88&height=80&section=header&animation=fadeIn" width="100%"/>

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

> Web Audio API + CSS Custom Properties required. All modern browsers qualify.

---

## 🤝 Contributing

All contributions welcome — bug fixes, new themes, wild feature ideas.

```bash
# Fork → Clone → Branch
git checkout -b feat/your-idea

# Make your changes, then
git commit -m "feat: your amazing addition"
git push origin feat/your-idea

# Open a Pull Request 🎉
```

> Please keep the **zero-dependency** philosophy intact. No frameworks, no build tools.

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

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software to use, copy, modify, merge, publish, and
distribute it — with absolutely zero strings attached.
```

---

<div align="center">

<!-- Animated closing line -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=16&duration=2800&pause=1200&color=FF00FF&center=true&vCenter=true&width=520&height=45&lines=Made+with+❤️+%26+🎧+by+Geershati+Saxena;Stay+Tuned.+Stay+Wired.+Stay+Vibing." alt="Footer" />

<br/>

<!-- Waving footer -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00ff88,50:ff00ff,100:00ffff&height=80&section=footer&animation=fadeIn" width="100%"/>

<sub>⚡ GeerVibes — The Melody in Every Moment</sub>

</div>
