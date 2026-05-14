<div align="center">

<!-- Animated SVG Banner -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=900&size=42&duration=3000&pause=1000&color=00FFFF&center=true&vCenter=true&width=700&height=80&lines=%F0%9F%8E%A7+G+E+E+R+V+I+B+E+S;%E2%9A%A1+The+Melody+in+Every+Moment;%F0%9F%8C%90+Cyberpunk+Audio+Sanctuary" alt="GeerVibes Animated Title" />

<br/>

<!-- Animated Subtitle -->
<img src="https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=16&duration=2000&pause=800&color=FF00FF&center=true&vCenter=true&width=600&height=40&lines=320%2B+Tracks+%7C+Zero+Latency+%7C+Pure+Vanilla+JS;No+Backend.+No+Framework.+Just+Vibes.;Built+with+HTML5+%2B+CSS3+%2B+JavaScript+ES2020" alt="GeerVibes Subtitle" />

<br/><br/>

<!-- Logo with neon glow effect via SVG wrapper -->
<img src="https://github.com/geershatisaxena/GeerVibes/blob/main/logo.svg" width="90" alt="GeerVibes Logo" />

<br/><br/>

<!-- Badges -->
<img src="https://img.shields.io/badge/License-MIT-00ffff?style=for-the-badge&logo=opensourceinitiative&logoColor=black&labelColor=0d0d1a">
<img src="https://img.shields.io/badge/JavaScript-ES2020-f7df1e?style=for-the-badge&logo=javascript&logoColor=black&labelColor=0d0d1a">
<img src="https://img.shields.io/badge/CSS3-Cyberpunk-ff69b4?style=for-the-badge&logo=css3&logoColor=white&labelColor=0d0d1a">
<img src="https://img.shields.io/badge/Frameworks-NONE-blueviolet?style=for-the-badge&logo=webpack&labelColor=0d0d1a">
<img src="https://img.shields.io/badge/Status-Ready_To_Play-00ff88?style=for-the-badge&logo=html5&logoColor=black&labelColor=0d0d1a">

<br/><br/>

<!-- Animated wave divider -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=80&section=header&animation=fadeIn" width="100%"/>

</div>

---

## ⚡ What Is GeerVibes?

> **GeerVibes** is not just a music player — it's a **cyberpunk audio sanctuary** built from the ground up with raw HTML5, CSS3, and Vanilla JavaScript. Every pixel pulses, every transition breathes, and the sound engine hits harder than it has any right to.
>
> No backend. No databases. No frameworks. Just **you, your library, and the purest client-side JavaScript** your browser can run.

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=14&duration=1800&pause=600&color=00FF88&center=true&vCenter=true&width=500&height=35&lines=%E2%96%B6+Play+%7C+%E2%9D%A4+Favorite+%7C+%F0%9F%94%80+Shuffle+%7C+%F0%9F%94%81+Loop+%7C+%F0%9F%94%8D+Search" alt="Feature ticker" />
</div>

---

## 🎛️ Command Center

<div align="center">

| Module | Power |
|:------:|:------|
| 🎵 **Audio Engine** | Web Audio API — play, pause, seek, skip, loop, shuffle with real‑time metadata |
| 📊 **Wave Visualizer** | 20‑bar neon spectrum analyser pulsing to *actual* audio frequency data |
| 🔁 **Smart Queue** | Fisher‑Yates shuffle + 3 repeat modes (Off · Single · All) |
| 🔍 **Live Search** | Instant filtering by track title or artist — zero debounce lag |
| ❤️ **Favorites** | One‑click save → persistent `localStorage` → filter to loved tracks only |
| 🔊 **Volume Control** | Logarithmic slider + mute toggle + full keyboard support |
| 📱 **Mobile Mini‑Player** | Sticky bottom bar — essential controls, one‑thumb operation |
| 🌙 **Dual Themes** | Cyberpunk Neon ↔ Holographic Day — persistent across sessions |
| ⏳ **Lazy Duration Load** | Shimmer placeholders → async fetch → zero UI blocking |
| 💾 **Zero External Calls** | No Google Fonts · No CDN · No tracking · 100% offline-capable |
| 🎨 **Cyberpunk DNA** | Neon glows · Glassmorphism · Scanlines · Clip-path geometry |
| ⌨️ **Keyboard God Mode** | Full shortcut suite (see below) |

</div>

---

## ⌨️ Keyboard Shortcuts

<div align="center">

| Key | Action |
|:---:|:-------|
| `Space` | ▶ Play / ⏸ Pause |
| `←` / `→` | Seek ±10 seconds |
| `↑` / `↓` | Volume Up / Down |
| `+` / `-` | Volume Fine Tune |
| `M` | 🔇 Mute Toggle |
| `S` | 🔀 Shuffle |
| `L` | 🔁 Loop Mode |
| `F` | ❤️ Favourite Current Track |

</div>

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/geershatisaxena/GeerVibes.git
cd GeerVibes
```

### 2. Add Your Music

Drop your `.mp3` / `.ogg` / `.wav` files into the `/tracks` folder and update the track manifest:

```js
// tracks.js
const tracks = [
  { title: "Track Name", artist: "Artist", src: "tracks/song.mp3" },
  // ...
];
```

### 3. Launch

```bash
# Option A — just open it
open index.html

# Option B — serve locally (recommended)
npx serve .
# or
python3 -m http.server 8080
```

> **No build step. No npm install. No config.** It just works. ⚡

---

## 🗂️ Project Structure

```
GeerVibes/
├── index.html          # Entry point — everything starts here
├── style.css           # Cyberpunk design system + themes
├── app.js              # Core audio engine + UI logic
├── tracks.js           # Your music library manifest
├── visualizer.js       # Web Audio API spectrum analyser
├── logo.svg            # The glowing sigil
└── README.md           # You are here
```

---

## 🎨 Theme System

GeerVibes ships with **two hand-crafted themes**, toggled with a single click and persisted via `localStorage`:

| | Cyberpunk Neon *(default)* | Holographic Day |
|---|---|---|
| **BG** | `#0d0d1a` — deep space | `#f0f4ff` — soft light |
| **Accent** | `#00ffff` cyan · `#ff00ff` magenta | `#6600ff` violet · `#00aaff` sky |
| **Vibe** | Dark, glowing, electric | Clean, iridescent, airy |

---

## 🌐 Browser Support

| Browser | Support |
|:-------:|:-------:|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 15+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |

> Web Audio API + CSS Custom Properties required. All modern browsers qualify.

---

## 🤝 Contributing

All contributions welcome — whether it's a bug fix, a new theme, or a wild feature idea.

```bash
# Fork → Clone → Branch
git checkout -b feat/your-idea

# Make your changes, then
git commit -m "feat: your amazing addition"
git push origin feat/your-idea

# Open a Pull Request 🎉
```

Please keep the **zero-dependency** philosophy intact. No frameworks, no build tools.

---

## 📜 Changelog

| Version | Highlights |
|:-------:|:-----------|
| `v2.0` | Dual themes · Mobile mini-player · Keyboard God Mode |
| `v1.5` | Wave visualizer · Lazy duration loading · Shuffle upgrade |
| `v1.0` | Initial release — core audio engine + favorites + live search |

---

## 📄 License

```
MIT License — © 2025 Geershati Saxena

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software.
```

---

<div align="center">

<!-- Animated closing -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=18&duration=2500&pause=1000&color=FF00FF&center=true&vCenter=true&width=500&height=50&lines=Made+with+%E2%9D%A4%EF%B8%8F+%26+%F0%9F%8E%A7+by+Geershati+Saxena;Stay+Tuned.+Stay+Wired.+Stay+Vibing." alt="Footer" />

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=80&section=footer&animation=fadeIn" width="100%"/>

<sub>⚡ GeerVibes — The Melody in Every Moment</sub>

</div>
