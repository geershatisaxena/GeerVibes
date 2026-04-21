<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>GeerVibes — README</title>
<style>
/* ── reset ── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:'Courier New',Courier,monospace;
  background:#020408;
  color:#c8dff0;
  min-height:100vh;
  overflow-x:hidden;
  position:relative;
}

/* ── cyberpunk grid bg ── */
body::before{
  content:'';position:fixed;inset:0;
  background-image:
    linear-gradient(rgba(0,245,255,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(0,245,255,.04) 1px,transparent 1px);
  background-size:44px 44px;
  pointer-events:none;z-index:0;
}
body::after{
  content:'';position:fixed;inset:0;
  background:repeating-linear-gradient(0deg,
    transparent,transparent 2px,
    rgba(0,245,255,.012) 2px,rgba(0,245,255,.012) 4px);
  pointer-events:none;z-index:0;
}

/* ── ambient glows ── */
.glow-orb{
  position:fixed;border-radius:50%;
  pointer-events:none;z-index:0;
  filter:blur(90px);opacity:.35;
  animation:orbFloat 8s ease-in-out infinite alternate;
}
.glow-orb:nth-child(1){width:500px;height:500px;background:radial-gradient(circle,#00f5ff 0%,transparent 70%);top:-150px;left:-100px;animation-delay:0s}
.glow-orb:nth-child(2){width:400px;height:400px;background:radial-gradient(circle,#bf00ff 0%,transparent 70%);top:40%;right:-100px;animation-delay:2s}
.glow-orb:nth-child(3){width:350px;height:350px;background:radial-gradient(circle,#ff0090 0%,transparent 70%);bottom:-80px;left:30%;animation-delay:4s}

@keyframes orbFloat{
  from{transform:translate(0,0) scale(1)}
  to{transform:translate(30px,20px) scale(1.1)}
}

/* ── container ── */
.container{
  position:relative;z-index:1;
  max-width:900px;margin:0 auto;
  padding:60px 24px 100px;
}

/* ── HERO ── */
.hero{
  text-align:center;
  margin-bottom:80px;
  animation:fadeDown .8s ease both;
}

/* animated title */
.hero-title{
  font-family:'Trebuchet MS','Arial Narrow',Arial,sans-serif;
  font-size:clamp(3rem,10vw,6.5rem);
  font-weight:900;
  letter-spacing:8px;
  text-transform:uppercase;
  line-height:1;
  position:relative;
  display:inline-block;
  animation:glitchTitle 6s infinite;
}
.hero-title span.cyan { color:#00f5ff; text-shadow:0 0 20px #00f5ff,0 0 60px rgba(0,245,255,.4); }
.hero-title span.purple{ color:#bf00ff; text-shadow:0 0 20px #bf00ff,0 0 60px rgba(191,0,255,.4); }

@keyframes glitchTitle{
  0%,88%,100%{clip-path:none;transform:none}
  90%{clip-path:inset(8% 0 85% 0);transform:translateX(-5px);filter:hue-rotate(90deg)}
  92%{clip-path:inset(55% 0 25% 0);transform:translateX(5px)}
  94%{clip-path:none;transform:none}
  96%{clip-path:inset(30% 0 50% 0);transform:translateX(-3px)}
  98%{clip-path:none;transform:none}
}

.hero-sub{
  font-size:.9rem;
  letter-spacing:4px;
  text-transform:uppercase;
  color:#bf00ff;
  margin-top:12px;
  text-shadow:0 0 10px rgba(191,0,255,.6);
  animation:pulse 2.5s ease-in-out infinite;
}
@keyframes pulse{
  0%,100%{opacity:.7;text-shadow:0 0 10px rgba(191,0,255,.6)}
  50%{opacity:1;text-shadow:0 0 20px rgba(191,0,255,1),0 0 40px rgba(191,0,255,.5)}
}

/* neon divider line */
.divider{
  width:100%;height:1px;
  background:linear-gradient(90deg,transparent,#00f5ff 30%,#bf00ff 70%,transparent);
  margin:32px 0;
  position:relative;
  overflow:visible;
}
.divider::after{
  content:'';
  position:absolute;left:50%;top:50%;
  transform:translate(-50%,-50%);
  width:10px;height:10px;
  background:#00f5ff;
  box-shadow:0 0 20px #00f5ff,0 0 40px #00f5ff;
  clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);
  animation:diamondSpin 3s linear infinite;
}
@keyframes diamondSpin{
  from{transform:translate(-50%,-50%) rotate(0deg)}
  to{transform:translate(-50%,-50%) rotate(360deg)}
}

/* ── badges row ── */
.badges{
  display:flex;flex-wrap:wrap;
  justify-content:center;gap:12px;
  margin:28px 0 40px;
  animation:fadeUp .8s .3s ease both;
}
.badge{
  display:inline-flex;align-items:center;gap:7px;
  padding:7px 16px;
  border-radius:2px;
  font-size:.72rem;
  letter-spacing:2px;
  text-transform:uppercase;
  font-weight:700;
  clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));
  transition:transform .2s,box-shadow .2s;
  cursor:default;
}
.badge:hover{transform:translateY(-3px) scale(1.04)}
.badge-cyan  {background:rgba(0,245,255,.1);border:1px solid rgba(0,245,255,.4);color:#00f5ff;box-shadow:0 0 12px rgba(0,245,255,.15)}
.badge-cyan:hover{box-shadow:0 0 20px rgba(0,245,255,.4)}
.badge-purple{background:rgba(191,0,255,.1);border:1px solid rgba(191,0,255,.4);color:#bf00ff;box-shadow:0 0 12px rgba(191,0,255,.15)}
.badge-purple:hover{box-shadow:0 0 20px rgba(191,0,255,.4)}
.badge-pink  {background:rgba(255,0,144,.1);border:1px solid rgba(255,0,144,.4);color:#ff0090;box-shadow:0 0 12px rgba(255,0,144,.15)}
.badge-pink:hover{box-shadow:0 0 20px rgba(255,0,144,.4)}
.badge-lime  {background:rgba(57,255,20,.1);border:1px solid rgba(57,255,20,.4);color:#39ff14;box-shadow:0 0 12px rgba(57,255,20,.15)}
.badge-lime:hover{box-shadow:0 0 20px rgba(57,255,20,.4)}
.badge-amber {background:rgba(255,170,0,.1);border:1px solid rgba(255,170,0,.4);color:#ffaa00;box-shadow:0 0 12px rgba(255,170,0,.15)}
.badge-amber:hover{box-shadow:0 0 20px rgba(255,170,0,.4)}

/* ── waveform animation ── */
.waveform{
  display:flex;align-items:flex-end;
  justify-content:center;gap:4px;
  height:60px;margin:0 0 24px;
}
.waveform-bar{
  width:6px;border-radius:3px 3px 0 0;
  animation:wave .8s ease-in-out infinite alternate;
}
.waveform-bar:nth-child(5n+1){background:#00f5ff;box-shadow:0 0 6px #00f5ff;animation-duration:.5s}
.waveform-bar:nth-child(5n+2){background:#bf00ff;box-shadow:0 0 6px #bf00ff;animation-duration:.7s}
.waveform-bar:nth-child(5n+3){background:#ff0090;box-shadow:0 0 6px #ff0090;animation-duration:.6s}
.waveform-bar:nth-child(5n+4){background:#39ff14;box-shadow:0 0 6px #39ff14;animation-duration:.9s}
.waveform-bar:nth-child(5n+0){background:#ffaa00;box-shadow:0 0 6px #ffaa00;animation-duration:.45s}

@keyframes wave{
  from{height:8px;opacity:.5}
  to{height:50px;opacity:1}
}

/* ── section card ── */
.section{
  margin-bottom:48px;
  background:rgba(10,22,40,.85);
  border:1px solid rgba(0,245,255,.1);
  border-radius:8px;
  padding:32px 32px;
  position:relative;
  overflow:hidden;
  animation:fadeUp .6s ease both;
  clip-path:polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px));
  transition:border-color .3s,box-shadow .3s;
}
.section:hover{
  border-color:rgba(0,245,255,.25);
  box-shadow:0 0 40px rgba(0,245,255,.06);
}
.section::before{
  content:'';position:absolute;
  top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--section-color,#00f5ff),transparent);
  opacity:.8;
}
.section:nth-child(even){--section-color:#bf00ff}
.section:nth-child(3n){--section-color:#ff0090}

/* section header */
.section-header{
  display:flex;align-items:center;gap:14px;
  margin-bottom:24px;
}
.section-icon{
  width:44px;height:44px;
  display:flex;align-items:center;justify-content:center;
  font-size:1.3rem;
  flex-shrink:0;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
}
.icon-cyan  {background:rgba(0,245,255,.15);color:#00f5ff;border:1px solid rgba(0,245,255,.4);box-shadow:0 0 12px rgba(0,245,255,.2)}
.icon-purple{background:rgba(191,0,255,.15);color:#bf00ff;border:1px solid rgba(191,0,255,.4);box-shadow:0 0 12px rgba(191,0,255,.2)}
.icon-pink  {background:rgba(255,0,144,.15);color:#ff0090;border:1px solid rgba(255,0,144,.4);box-shadow:0 0 12px rgba(255,0,144,.2)}
.icon-lime  {background:rgba(57,255,20,.15);color:#39ff14;border:1px solid rgba(57,255,20,.4);box-shadow:0 0 12px rgba(57,255,20,.2)}
.icon-amber {background:rgba(255,170,0,.15);color:#ffaa00;border:1px solid rgba(255,170,0,.4);box-shadow:0 0 12px rgba(255,170,0,.2)}

.section-title{
  font-family:'Trebuchet MS','Arial Narrow',Arial,sans-serif;
  font-size:1.2rem;
  font-weight:700;
  letter-spacing:3px;
  text-transform:uppercase;
  color:#e8f4ff;
  text-shadow:0 0 12px rgba(0,245,255,.15);
}

/* body text */
p,li{
  font-size:.92rem;
  line-height:1.8;
  color:#8aaecc;
  letter-spacing:.3px;
}
p{margin-bottom:10px}
p:last-child{margin-bottom:0}

/* feature grid */
.feature-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:16px;
  margin-top:8px;
}
.feature-card{
  padding:18px 16px;
  background:rgba(0,0,0,.35);
  border:1px solid rgba(0,245,255,.08);
  border-radius:4px;
  transition:all .25s ease;
  position:relative;
  clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));
}
.feature-card:hover{
  border-color:var(--fc-color,rgba(0,245,255,.35));
  background:rgba(0,245,255,.04);
  transform:translateY(-4px);
  box-shadow:0 8px 30px rgba(0,0,0,.4);
}
.fc-icon{
  font-size:1.5rem;
  margin-bottom:10px;
  display:block;
}
.fc-title{
  font-size:.82rem;
  font-weight:700;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:6px;
  color:#e8f4ff;
}
.fc-desc{
  font-size:.78rem;
  color:#5a7a99;
  line-height:1.6;
  letter-spacing:.2px;
}

/* file tree */
.file-tree{
  background:rgba(0,0,0,.5);
  border:1px solid rgba(0,245,255,.12);
  border-radius:4px;
  padding:20px 22px;
  font-size:.82rem;
  line-height:2;
  position:relative;
  overflow:hidden;
}
.file-tree::before{
  content:'> FILESYSTEM';
  position:absolute;top:10px;right:14px;
  font-size:.65rem;letter-spacing:2px;
  color:rgba(0,245,255,.3);
}
.ft-dir  {color:#00f5ff}
.ft-file {color:#8aaecc}
.ft-sub  {color:#bf00ff}
.ft-note {color:#3a5060;font-size:.72rem}

/* keyboard shortcuts table */
.shortcuts-grid{
  display:grid;
  grid-template-columns:auto 1fr;
  gap:6px 20px;
  align-items:center;
}
.kbd{
  display:inline-block;
  padding:4px 12px;
  border:1px solid rgba(0,245,255,.4);
  border-radius:3px;
  background:rgba(0,245,255,.08);
  color:#00f5ff;
  font-size:.78rem;
  letter-spacing:2px;
  box-shadow:0 0 8px rgba(0,245,255,.15);
  white-space:nowrap;
  text-align:center;
  min-width:80px;
  clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));
}
.kd-label{
  font-size:.8rem;
  color:#7a9fbf;
  letter-spacing:.5px;
}

/* tech stack pills */
.tech-stack{
  display:flex;flex-wrap:wrap;gap:10px;
  margin-top:8px;
}
.tech-pill{
  padding:6px 16px;
  border-radius:2px;
  font-size:.72rem;
  letter-spacing:2px;
  text-transform:uppercase;
  font-weight:700;
  clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px));
  transition:transform .2s,box-shadow .2s;
}
.tech-pill:hover{transform:translateY(-2px)}
.tp-html  {background:rgba(255,102,0,.12);border:1px solid rgba(255,102,0,.4);color:#ff6600}
.tp-css   {background:rgba(0,180,255,.12);border:1px solid rgba(0,180,255,.4);color:#00b4ff}
.tp-js    {background:rgba(255,220,0,.12);border:1px solid rgba(255,220,0,.4);color:#ffdc00}
.tp-webapi{background:rgba(57,255,20,.12);border:1px solid rgba(57,255,20,.4);color:#39ff14}
.tp-nofwk {background:rgba(255,0,144,.12);border:1px solid rgba(255,0,144,.4);color:#ff0090}

/* song count ticker */
.ticker-wrap{
  overflow:hidden;
  border:1px solid rgba(191,0,255,.25);
  border-radius:4px;
  padding:12px 0;
  background:rgba(0,0,0,.4);
  position:relative;
}
.ticker-wrap::before{
  content:'NOW PLAYING ›';
  position:absolute;left:16px;top:50%;transform:translateY(-50%);
  font-size:.65rem;letter-spacing:2px;color:#bf00ff;
  background:rgba(10,22,40,.9);
  padding:2px 8px;
  z-index:2;
}
.ticker-track{
  display:flex;gap:60px;
  width:max-content;
  animation:tickerScroll 30s linear infinite;
  padding-left:180px;
}
.ticker-item{
  font-size:.75rem;letter-spacing:1.5px;
  color:#7a9fbf;white-space:nowrap;
  padding:0 8px;
}
.ticker-item span{color:#00f5ff}
@keyframes tickerScroll{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
}

/* install code block */
.code-block{
  background:rgba(0,0,0,.6);
  border:1px solid rgba(0,245,255,.15);
  border-radius:4px;
  padding:16px 20px;
  position:relative;
  overflow:hidden;
}
.code-block::before{
  content:'TERMINAL';
  position:absolute;top:8px;right:12px;
  font-size:.6rem;letter-spacing:3px;
  color:rgba(0,245,255,.35);
}
.code-line{
  display:block;
  font-size:.82rem;
  line-height:1.9;
  color:#8aaecc;
}
.code-line .prompt{color:#39ff14}
.code-line .cmd{color:#e8f4ff}
.code-line .comment{color:#2a4060}

/* contributor card */
.contrib-card{
  display:flex;align-items:center;gap:18px;
  padding:20px 22px;
  background:rgba(0,0,0,.4);
  border:1px solid rgba(0,245,255,.1);
  border-radius:6px;
  clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));
  transition:border-color .3s,box-shadow .3s;
}
.contrib-card:hover{
  border-color:rgba(0,245,255,.35);
  box-shadow:0 0 30px rgba(0,245,255,.08);
}
.contrib-avatar{
  width:56px;height:56px;
  background:linear-gradient(135deg,#00f5ff,#bf00ff);
  border-radius:4px;
  display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;font-weight:900;color:#000;
  font-family:'Trebuchet MS',sans-serif;
  letter-spacing:1px;
  flex-shrink:0;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
  box-shadow:0 0 20px rgba(0,245,255,.3);
}
.contrib-name{font-size:.95rem;font-weight:700;letter-spacing:2px;color:#e8f4ff;text-transform:uppercase}
.contrib-role{font-size:.72rem;color:#bf00ff;letter-spacing:2px;margin-top:3px}

/* progress bar demo */
.progress-demo{
  width:100%;height:6px;
  background:rgba(0,245,255,.08);
  border-radius:3px;
  margin:20px 0 6px;
  overflow:hidden;
  border:1px solid rgba(0,245,255,.1);
}
.progress-fill{
  height:100%;
  background:linear-gradient(90deg,#00f5ff,#bf00ff,#ff0090);
  border-radius:3px;
  animation:progressAnim 4s ease-in-out infinite;
  box-shadow:0 0 10px rgba(0,245,255,.5);
}
@keyframes progressAnim{
  0%{width:0%;opacity:1}
  70%{width:85%;opacity:1}
  85%{width:100%;opacity:1}
  86%{width:100%;opacity:0}
  87%{width:0%;opacity:0}
  88%{width:0%;opacity:1}
}

/* footer */
.footer{
  text-align:center;
  margin-top:80px;
  padding-top:40px;
  border-top:1px solid rgba(0,245,255,.1);
  animation:fadeUp .8s 1s ease both;
}
.footer-logo{
  font-family:'Trebuchet MS','Arial Narrow',Arial,sans-serif;
  font-size:2.2rem;font-weight:900;
  letter-spacing:6px;text-transform:uppercase;
  color:#00f5ff;
  text-shadow:0 0 20px #00f5ff,0 0 60px rgba(0,245,255,.4);
  animation:neonPulse 3s ease-in-out infinite;
}
@keyframes neonPulse{
  0%,100%{text-shadow:0 0 10px #00f5ff,0 0 30px rgba(0,245,255,.3)}
  50%{text-shadow:0 0 25px #00f5ff,0 0 70px rgba(0,245,255,.6),0 0 110px rgba(0,245,255,.2)}
}
.footer-tagline{font-size:.75rem;letter-spacing:4px;color:#3a5060;margin-top:8px;text-transform:uppercase}
.footer-made{font-size:.72rem;color:#2a4060;margin-top:16px;letter-spacing:1px}

/* ── animations ── */
@keyframes fadeDown{
  from{opacity:0;transform:translateY(-30px)}
  to{opacity:1;transform:translateY(0)}
}
@keyframes fadeUp{
  from{opacity:0;transform:translateY(24px)}
  to{opacity:1;transform:translateY(0)}
}

/* stagger sections */
.section:nth-child(1){animation-delay:.1s}
.section:nth-child(2){animation-delay:.2s}
.section:nth-child(3){animation-delay:.3s}
.section:nth-child(4){animation-delay:.4s}
.section:nth-child(5){animation-delay:.5s}
.section:nth-child(6){animation-delay:.6s}
.section:nth-child(7){animation-delay:.7s}
.section:nth-child(8){animation-delay:.8s}

/* ── scrollbar ── */
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:#020408}
::-webkit-scrollbar-thumb{background:#0a2040;border-radius:2px}
::-webkit-scrollbar-thumb:hover{background:#00f5ff}

/* ── responsive ── */
@media(max-width:600px){
  .container{padding:36px 16px 60px}
  .hero-title{font-size:2.8rem;letter-spacing:4px}
  .section{padding:22px 18px}
  .feature-grid{grid-template-columns:1fr}
  .shortcuts-grid{grid-template-columns:1fr}
  .kbd{min-width:unset}
}
</style>
</head>
<body>

<!-- ambient glow orbs -->
<div class="glow-orb"></div>
<div class="glow-orb"></div>
<div class="glow-orb"></div>

<div class="container">

  <!-- ═══ HERO ═══ -->
  <div class="hero">
    <div class="waveform" id="waveform"></div>
    <h1 class="hero-title">
      <span class="cyan">Geer</span><span class="purple">Vibes</span>
    </h1>
    <p class="hero-sub">⚡ The Melody in Every Moment ⚡</p>
    <div class="divider"></div>

    <div class="badges">
      <span class="badge badge-cyan">🎵 225+ Songs</span>
      <span class="badge badge-purple">🔮 Pure Vanilla JS</span>
      <span class="badge badge-pink">💾 Zero Dependencies</span>
      <span class="badge badge-lime">📱 Fully Responsive</span>
      <span class="badge badge-amber">🌙 Dark / Light Mode</span>
      <span class="badge badge-cyan">🔊 Web Audio API</span>
      <span class="badge badge-purple">⌨️ Keyboard Shortcuts</span>
      <span class="badge badge-pink">🎛️ No Framework</span>
    </div>
  </div>

  <!-- ═══ ABOUT ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-cyan">📡</div>
      <h2 class="section-title">About GeerVibes</h2>
    </div>
    <p>GeerVibes is a premium, fully client-side music streaming web application built entirely with <strong style="color:#00f5ff">HTML5 · CSS3 · Vanilla JavaScript</strong>. No build tools. No frameworks. No external JS libraries. Just raw, optimised, hand-crafted code that loads fast and sounds great.</p>
    <p>Originally designed with a sleek dark UI, the app was later completely restyled into a <strong style="color:#bf00ff">Cyberpunk Neon Futuristic</strong> aesthetic — electric neon glows, holographic glassmorphism, scanline overlays, angular clip-paths, and buttery smooth CSS animations throughout.</p>
    <p>The song library features <strong style="color:#39ff14">225+ tracks</strong> spanning Bollywood, devotional, pop, EDM, and international genres — all wired to a modular JS engine with real-time Web Audio visualisation.</p>
    <div class="progress-demo"><div class="progress-fill"></div></div>
    <p style="font-size:.72rem;color:#2a4060;letter-spacing:2px">▲ ANIMATED PROGRESS BAR — LIVE DEMO</p>
  </div>

  <!-- ═══ FEATURES ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-purple">⚡</div>
      <h2 class="section-title">Core Features</h2>
    </div>
    <div class="feature-grid">
      <div class="feature-card" style="--fc-color:rgba(0,245,255,.35)">
        <span class="fc-icon">🎵</span>
        <div class="fc-title">Full Audio Engine</div>
        <div class="fc-desc">Play, pause, seek, skip, loop and shuffle via the Web Audio API with real-time metadata.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(191,0,255,.35)">
        <span class="fc-icon">📊</span>
        <div class="fc-title">Waveform Visualiser</div>
        <div class="fc-desc">20-bar animated neon visualiser synced to playback state. Bars dance with staggered timing offsets.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(255,0,144,.35)">
        <span class="fc-icon">🔁</span>
        <div class="fc-title">Shuffle & Repeat</div>
        <div class="fc-desc">Three repeat modes (off / one / all) plus full Fisher-Yates shuffle queue engine.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(57,255,20,.35)">
        <span class="fc-icon">🔍</span>
        <div class="fc-title">Live Search</div>
        <div class="fc-desc">Instant filter by title or artist as you type. Debounced input with clear-button UX.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(0,245,255,.35)">
        <span class="fc-icon">❤️</span>
        <div class="fc-title">Favourites</div>
        <div class="fc-desc">Favourite any track with a heart toggle. Filter the queue to show only your favourited songs.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(255,170,0,.35)">
        <span class="fc-icon">🔊</span>
        <div class="fc-title">Volume Control</div>
        <div class="fc-desc">Smooth volume slider with live percentage label, mute toggle, and keyboard +/− shortcut.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(191,0,255,.35)">
        <span class="fc-icon">📱</span>
        <div class="fc-title">Mobile Mini Player</div>
        <div class="fc-desc">Sticky bottom mini-player on mobile with art, title, prev/play/next controls and progress line.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(255,0,144,.35)">
        <span class="fc-icon">🌙</span>
        <div class="fc-title">Dark / Light Theme</div>
        <div class="fc-desc">Persistent theme toggle. Dark = full Cyberpunk Neon. Light = Holographic Day Mode.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(57,255,20,.35)">
        <span class="fc-icon">⚡</span>
        <div class="fc-title">Lazy Duration Load</div>
        <div class="fc-desc">Song durations are loaded asynchronously after boot — shimmer placeholders used until resolved.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(0,245,255,.35)">
        <span class="fc-icon">💾</span>
        <div class="fc-title">Zero Internet Fonts</div>
        <div class="fc-desc">All fonts are system-native (Trebuchet MS, system-ui, Courier New). No Google Fonts network call.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(255,170,0,.35)">
        <span class="fc-icon">🎨</span>
        <div class="fc-title">Cyberpunk Design</div>
        <div class="fc-desc">Neon glows, CSS grid scanlines, animated album rings, holographic cards, clip-path geometry.</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(191,0,255,.35)">
        <span class="fc-icon">⌨️</span>
        <div class="fc-title">Keyboard Control</div>
        <div class="fc-desc">Full keyboard shortcut set — play, skip, volume, mute, shuffle and repeat without touching the mouse.</div>
      </div>
    </div>
  </div>

  <!-- ═══ STRUCTURE ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-pink">📁</div>
      <h2 class="section-title">Project Structure</h2>
    </div>
    <div class="file-tree">
<span class="ft-dir">GeerVibes/</span>
<span class="ft-file">├── index.html          </span><span class="ft-note">← App shell &amp; HTML structure</span>
<span class="ft-file">├── styles.css          </span><span class="ft-note">← Full cyberpunk CSS design system</span>
<span class="ft-file">├── script.js           </span><span class="ft-note">← Audio engine, UI, player logic</span>
<span class="ft-file">├── README.html         </span><span class="ft-note">← This animated readme</span>
<span class="ft-file">├── logo.svg            </span><span class="ft-note">← App logo (inline SVG, no HTTP)</span>
<span class="ft-dir">└── assets/</span>
<span class="ft-sub">    ├── songs/          </span><span class="ft-note">← 225+ MP3 audio files</span>
<span class="ft-sub">    └── images/         </span><span class="ft-note">← Album art thumbnails (.jpg/.png/.webp)</span>
    </div>
  </div>

  <!-- ═══ TECH STACK ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-lime">🛠️</div>
      <h2 class="section-title">Tech Stack</h2>
    </div>
    <p>Built entirely with native web platform APIs. Zero npm. Zero bundler. Zero runtime dependencies.</p>
    <div class="tech-stack" style="margin-top:18px">
      <span class="tech-pill tp-html">HTML5</span>
      <span class="tech-pill tp-css">CSS3</span>
      <span class="tech-pill tp-js">JavaScript ES2020</span>
      <span class="tech-pill tp-webapi">Web Audio API</span>
      <span class="tech-pill tp-nofwk">No Framework</span>
      <span class="tech-pill tp-html">CSS Grid + Flexbox</span>
      <span class="tech-pill tp-css">CSS Custom Props</span>
      <span class="tech-pill tp-js">@keyframes Animations</span>
      <span class="tech-pill tp-webapi">backdrop-filter</span>
      <span class="tech-pill tp-nofwk">clip-path geometry</span>
    </div>
  </div>

  <!-- ═══ NOW PLAYING TICKER ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-amber">🎶</div>
      <h2 class="section-title">Song Library Preview</h2>
    </div>
    <p>The library spans <strong style="color:#ffaa00">225+ songs</strong> across Bollywood, Devotional, Pop, Qawwali, Sufi, EDM, Indie and International genres.</p>
    <br/>
    <div class="ticker-wrap">
      <div class="ticker-track" id="ticker">
        <span class="ticker-item"><span>Vande Maatrabhoomi</span> — Geershati Saxena</span>
        <span class="ticker-item"><span>Rasputin</span> — Boney M.</span>
        <span class="ticker-item"><span>Sapphire</span> — Ed Sheeran, Arijit Singh</span>
        <span class="ticker-item"><span>Kesariya</span> — Arijit Singh</span>
        <span class="ticker-item"><span>Zinda Banda</span> — Anirudh Ravichander</span>
        <span class="ticker-item"><span>Aaj Ki Raat</span> — Sachin-Jigar</span>
        <span class="ticker-item"><span>Deva Shree Ganesha</span> — Ajay-Atul</span>
        <span class="ticker-item"><span>Kal Ho Na Ho</span> — Sonu Nigam</span>
        <span class="ticker-item"><span>Ghoomar</span> — Shreya Ghoshal</span>
        <span class="ticker-item"><span>Jhoome Jo Pathaan</span> — Arijit Singh</span>
        <span class="ticker-item"><span>Born to Shine</span> — Diljit Dosanjh</span>
        <span class="ticker-item"><span>Adiyogi</span> — Kailash Kher, Sadhguru</span>
        <!-- duplicate for infinite loop -->
        <span class="ticker-item"><span>Vande Maatrabhoomi</span> — Geershati Saxena</span>
        <span class="ticker-item"><span>Rasputin</span> — Boney M.</span>
        <span class="ticker-item"><span>Sapphire</span> — Ed Sheeran, Arijit Singh</span>
        <span class="ticker-item"><span>Kesariya</span> — Arijit Singh</span>
        <span class="ticker-item"><span>Zinda Banda</span> — Anirudh Ravichander</span>
        <span class="ticker-item"><span>Aaj Ki Raat</span> — Sachin-Jigar</span>
        <span class="ticker-item"><span>Deva Shree Ganesha</span> — Ajay-Atul</span>
        <span class="ticker-item"><span>Kal Ho Na Ho</span> — Sonu Nigam</span>
        <span class="ticker-item"><span>Ghoomar</span> — Shreya Ghoshal</span>
        <span class="ticker-item"><span>Jhoome Jo Pathaan</span> — Arijit Singh</span>
        <span class="ticker-item"><span>Born to Shine</span> — Diljit Dosanjh</span>
        <span class="ticker-item"><span>Adiyogi</span> — Kailash Kher, Sadhguru</span>
      </div>
    </div>
  </div>

  <!-- ═══ KEYBOARD SHORTCUTS ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-cyan">⌨️</div>
      <h2 class="section-title">Keyboard Shortcuts</h2>
    </div>
    <div class="shortcuts-grid">
      <span class="kbd">Space</span>     <span class="kd-label">Play / Pause</span>
      <span class="kbd">← →</span>       <span class="kd-label">Previous / Next track</span>
      <span class="kbd">↑ ↓</span>       <span class="kd-label">Volume Up / Down (±5%)</span>
      <span class="kbd">M</span>         <span class="kd-label">Mute / Unmute</span>
      <span class="kbd">S</span>         <span class="kd-label">Toggle Shuffle</span>
      <span class="kbd">R</span>         <span class="kd-label">Cycle Repeat Mode</span>
    </div>
  </div>

  <!-- ═══ SETUP ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-pink">🚀</div>
      <h2 class="section-title">Setup & Run</h2>
    </div>
    <p>No build step. No package manager. No server required for basic use — just open the file.</p>
    <br/>
    <div class="code-block">
      <span class="code-line"><span class="prompt">$</span> <span class="cmd">git clone https://github.com/yourusername/geervibes.git</span></span>
      <span class="code-line"><span class="prompt">$</span> <span class="cmd">cd geervibes</span></span>
      <span class="code-line"><span class="comment"># Option A — open directly (no audio CORS issue if files are local)</span></span>
      <span class="code-line"><span class="prompt">$</span> <span class="cmd">open index.html</span></span>
      <span class="code-line">&nbsp;</span>
      <span class="code-line"><span class="comment"># Option B — serve locally (recommended for audio loading)</span></span>
      <span class="code-line"><span class="prompt">$</span> <span class="cmd">npx serve .</span>  <span class="comment">   # Node</span></span>
      <span class="code-line"><span class="prompt">$</span> <span class="cmd">python -m http.server 8080</span>  <span class="comment">  # Python</span></span>
    </div>
    <br/>
    <p>Place your MP3 files inside <code style="color:#00f5ff;background:rgba(0,245,255,.08);padding:2px 8px;border-radius:2px">assets/songs/</code> and album art inside <code style="color:#bf00ff;background:rgba(191,0,255,.08);padding:2px 8px;border-radius:2px">assets/images/</code>, then add entries to the <code style="color:#39ff14;background:rgba(57,255,20,.08);padding:2px 8px;border-radius:2px">SONGS</code> array in <code style="color:#ffaa00">script.js</code>.</p>
  </div>

  <!-- ═══ DESIGN SYSTEM ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-purple">🎨</div>
      <h2 class="section-title">Design System</h2>
    </div>
    <p>The UI is driven entirely by CSS custom properties. Swap the theme by changing <code style="color:#00f5ff">data-theme</code> on <code style="color:#bf00ff">&lt;html&gt;</code>.</p>
    <br/>
    <div class="feature-grid">
      <div class="feature-card" style="--fc-color:rgba(0,245,255,.4);text-align:center">
        <span class="fc-icon" style="font-size:2rem;color:#00f5ff;text-shadow:0 0 15px #00f5ff">■</span>
        <div class="fc-title" style="color:#00f5ff">Neon Cyan</div>
        <div class="fc-desc">#00F5FF — Primary accent, progress, rings, borders</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(191,0,255,.4);text-align:center">
        <span class="fc-icon" style="font-size:2rem;color:#bf00ff;text-shadow:0 0 15px #bf00ff">■</span>
        <div class="fc-title" style="color:#bf00ff">Electric Purple</div>
        <div class="fc-desc">#BF00FF — Secondary accent, outer ring, sidebar</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(255,0,144,.4);text-align:center">
        <span class="fc-icon" style="font-size:2rem;color:#ff0090;text-shadow:0 0 15px #ff0090">■</span>
        <div class="fc-title" style="color:#ff0090">Hot Pink</div>
        <div class="fc-desc">#FF0090 — Favourites, play, tertiary highlights</div>
      </div>
      <div class="feature-card" style="--fc-color:rgba(57,255,20,.4);text-align:center">
        <span class="fc-icon" style="font-size:2rem;color:#39ff14;text-shadow:0 0 15px #39ff14">■</span>
        <div class="fc-title" style="color:#39ff14">Neon Lime</div>
        <div class="fc-desc">#39FF14 — Shuffle active, success states</div>
      </div>
    </div>
    <br/>
    <p>Typography uses <strong style="color:#00f5ff">Trebuchet MS</strong> (display, zero download), <strong style="color:#bf00ff">system-ui</strong> (body, native OS font), and <strong style="color:#ff0090">Courier New</strong> (monospace data — timestamps, labels). <em style="color:#3a5060">No Google Fonts requests.</em></p>
  </div>

  <!-- ═══ AUTHOR ═══ -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon icon-amber">👤</div>
      <h2 class="section-title">Author</h2>
    </div>
    <div class="contrib-card">
      <div class="contrib-avatar">GV</div>
      <div>
        <div class="contrib-name">GeerVibes</div>
        <div class="contrib-role">Full-Stack · UI/UX · Audio Engineering</div>
        <p style="margin-top:8px;font-size:.78rem;color:#3a5060">Built with ❤️ — pure HTML · CSS · JavaScript. Cyberpunk neon redesign. System-font optimised. 225+ songs curated.</p>
      </div>
    </div>
  </div>

  <!-- ═══ FOOTER ═══ -->
  <div class="footer">
    <div class="footer-logo">GeerVibes</div>
    <p class="footer-tagline">The Melody in Every Moment</p>
    <div class="divider" style="margin:24px 0 16px"></div>
    <p class="footer-made">⚡ Built with pure HTML · CSS · JavaScript · No frameworks · No build tools ⚡</p>
    <p style="font-size:.65rem;color:#1a2a3a;margin-top:10px;letter-spacing:2px">MIT LICENSE · OPEN SOURCE · CYBERPUNK EDITION</p>
  </div>

</div><!-- /container -->

<script>
// generate waveform bars
const wf = document.getElementById('waveform');
for(let i=0;i<28;i++){
  const bar = document.createElement('div');
  bar.className = 'waveform-bar';
  bar.style.animationDelay = (Math.random() * 0.8).toFixed(2) + 's';
  bar.style.animationDuration = (0.4 + Math.random() * 0.7).toFixed(2) + 's';
  bar.style.height = (8 + Math.random() * 20) + 'px';
  wf.appendChild(bar);
}

// intersection observer — re-trigger section animations on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.style.animationPlayState = 'running';
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.section').forEach(s => {
  s.style.animationPlayState = 'paused';
  io.observe(s);
});
</script>
</body>
</html>
