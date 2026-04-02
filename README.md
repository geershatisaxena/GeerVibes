# 🎵 GeerVibes — *The Melody in Every Moment*

A premium, fully client-side music streaming web app built with vanilla HTML, CSS, and JavaScript. No frameworks. No build tools. Just clean, fast, and beautiful.

---

## 📁 Project Structure

```
GeerVibes/
├── index.html          # Main app shell and markup
├── styles.css          # All styling (theme variables, layout, components)
├── script.js           # App logic (player, audio engine, UI, search)
├── logo.svg            # Brand logo (used in navbar & favicon)
└── assets/
    ├── songs/          # MP3 audio files
    └── images/         # Album art (one per song)
```

---

## ✨ Features

### 🎧 Playback
- Play, Pause, Previous, Next controls
- Shuffle mode (randomised queue)
- Repeat mode (loops current song or full queue)
- Seek via clickable/draggable progress bar
- Volume slider with mute toggle
- Auto-advance to next track on song end

### 🎨 UI & Design
- Dark and Light theme with one-click toggle (preference saved to `localStorage`)
- Animated waveform visualiser (Web Audio API)
- Rotating album art ring animation while playing
- Shimmer loading placeholders for song durations
- Glassmorphism navbar and sidebar with blur effects
- Smooth CSS transitions throughout

### 📱 Responsive
- Full desktop layout with left sidebar + player card + queue panel
- Mobile bottom mini-player with prev/play/next controls
- Hamburger sidebar with backdrop overlay on mobile
- Adapts gracefully across all screen sizes

### 🔍 Search & Filter
- Real-time search filtering by song title or artist
- "All" and "Favourites" queue filter tabs
- Heart/favourite toggle on each track

### ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Play / Pause |
| `←` | Previous track |
| `→` | Next track |
| `↑` | Volume up |
| `↓` | Volume down |
| `M` | Mute / Unmute |
| `S` | Toggle Shuffle |
| `R` | Toggle Repeat |

---

## 🚀 Getting Started

No installation or build step needed.

1. Clone or download the project folder.
2. Place your MP3 files in `assets/songs/` and album images in `assets/images/`.
3. Open `index.html` in any modern browser.

> **Note:** Due to browser autoplay policies, playback requires a user gesture (clicking play) to start.

---

## 🎵 Adding Songs

Songs are defined in the `SONGS` array at the top of `script.js`. Each entry follows this format:

```js
{
  id: 1,
  title: "Song Title",
  artist: "Artist Name",
  src: "assets/songs/filename.mp3",
  cover: "assets/images/cover.jpg",
  coverThumb: "assets/images/cover.jpg",
  faved: false
}
```

Add as many entries as you like — the sidebar queue count and main playlist update automatically.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, Grid, Flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+, strict mode) |
| Audio | HTML5 `<audio>` + Web Audio API |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts — Poppins & Inter |

---

## 🧩 Script Architecture

The `script.js` is organised into clearly separated modules:

| Module | Purpose |
|---|---|
| `SONGS` | Song data array |
| `DOM` | Cached DOM element references |
| `state` | Global app state (current index, volume, shuffle, etc.) |
| `ThemeManager` | Dark/light theme switching + persistence |
| `AudioEngine` | Load, play, pause, seek, volume, mute |
| `Player` | prev, next, shuffle logic, repeat, onEnded |
| `UI` | Render playlists, update song info, progress, play state |
| `Visualizer` | Web Audio API waveform animation |
| `Search` | Real-time filtering of the queue |
| `initProgressBar` | Drag + click seek on the progress bar |
| `initKeyboard` | Global keyboard shortcut handler |
| `initSidebar` | Mobile hamburger + overlay toggle |
| `loadDurations` | Async preload of all song durations |

---

## 🌐 Browser Support

Works in all modern browsers: Chrome, Firefox, Edge, Safari (desktop and mobile).

---

