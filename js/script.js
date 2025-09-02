// Check authentication first
checkAuth();

// Set up Media Session API for lock screen controls
if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', function() {
        playBtn.click();
    });
    navigator.mediaSession.setActionHandler('pause', function() {
        playBtn.click();
    });
    navigator.mediaSession.setActionHandler('previoustrack', function() {
        prevBtn.click();
    });
    navigator.mediaSession.setActionHandler('nexttrack', function() {
        nextBtn.click();
    });
}

// Update Media Session metadata when song changes
function updateMediaSession(songTitle, artistName, coverUrl) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: songTitle,
            artist: artistName,
            artwork: [
                { src: coverUrl, sizes: '96x96', type: 'image/jpeg' },
                { src: coverUrl, sizes: '128x128', type: 'image/jpeg' },
                { src: coverUrl, sizes: '192x192', type: 'image/jpeg' },
                { src: coverUrl, sizes: '256x256', type: 'image/jpeg' },
                { src: coverUrl, sizes: '384x384', type: 'image/jpeg' },
                { src: coverUrl, sizes: '512x512', type: 'image/jpeg' }
            ]
        });
    }
}

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolling down 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Advanced Audio Context Setup
let audioContext;
let analyser;
let source;
const visualizer = document.getElementById('visualizer');
const visualizerCtx = visualizer.getContext('2d');
const visualizerToggle = document.getElementById('visualizer-toggle');

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Songs data
const songs = [   
    {
        title:"Vande Maatrabhoomi",
        artist:"Geershati Saxena",
        src:"assets/songs/Vande Maaatrabhoomi.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png"
    },
    {
        title:"Hum Katha Sunate Ram Sakal Gun Dham Ki",
        artist:"Kavita Krishnamoorti, Hemlata, Ravindra Jain",
        src:"assets/songs/Hum Katha Sunate Ram Sakal Gun Dham Ki- [PagalWorld.NL].mp3",
        cover:"assets/images/download (1).jfif"
    },
    {
        title:"Gajanana Gajanana Gajanana Ganaraya",
        artist:"Sukhwinder Singh",
        src:"assets/songs/Gajanana - Bajirao Mastani 128 Kbps.mp3",
        cover:"assets/images/ganeshji.jfif"
    },
    {
        title:"Tune jo Na Kaha",
        artist:"Mohit Chauhan",
        src:"assets/songs/Tune Jo Na Kaha(KoshalWorld.Com).mp3",
        cover:"assets/images/nnm.jfif"
    },
   {
        title:"Vande Maatrabhoomi 2",
        artist:"Geershati Saxena",
        src:"assets/songs/Vande Maatrabhoomi 2.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png"
    },  
        {
        title: "Mere Kanha",
        artist: "Jaya Kishori, Jubin Nautiyal",
        src: "assets/songs/Mere Kanha.mp3",
        cover: "assets/images/Mere Kanha.jfif"
    },
     {
        title: "Bolo Har Har Har ",
        artist: "Mithoon, Mohit Chauhan, Sukhwinder Singh ft. Badshah, Megha Sriram Dalton, Anugrah",
        src: "assets/songs/Bolo Har.mp3",
        cover: "assets/images/shiva.jfif"
    },
    {
        title: "Aadiyogi",
        artist: "Kailash Kher, Sadhguru",
        src: "assets/songs/adiyogi.mp3",
        cover: "assets/images/adiyogi.jfif"
    },
 
   
    {
        title: "Jee Karda Mar Jane ka",
        artist: "Sachin-Jigar, Divya Kumar, Priya Saraiya",
        src: "assets/songs/Jee karda.mp3",
        cover: "assets/images/Jee.jpg"
    },
    {
        title:"Hare Krishna Hare Ram",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Hare Krishna Hare Rama-(Mr-Jat.in).mp3",
        cover:"assets/images/krishn.jfif"
    },
     {
        title:"Shri Krishna Govind Hare Murari",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Shri Krishna Govind Hare Murari Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/krishn.jfif"
    },
    {
        title:"Aaj Ki Raat",
        artist:"Sachin-Jigar, Madhubanti Bagchi, Divya Kumar",
        src:"assets/songs/Aaj Ki Raat Stree 2 128 Kbps.mp3",
        cover:"assets/images/aajraat.jfif"
    },
    {
        title:"Sapphire",
        artist:"Ed Sheeran, Arijit Singh",
        src:"assets/songs/Ed_Sheeran_Ft_Arijit_Singh_-_Sapphire_Offblogmedia.com.mp3",
        cover:"assets/images/saphire.jfif"
    },
    {
        title:"Aayi Nahi",
        artist:"Sachin-Jigar, Pawan Singh, Divya Kumar, Simran Choudhary",
        src:"assets/songs/Aayi Nai Stree 2 128 Kbps.mp3",
        cover:"assets/images/ayi nhi.jfif"
    },
    {
        title:"Zinda Banda",
        artist:"Anirudh Ravichander",
        src:"assets/songs/Zinda Banda (Jawan)-(Mr-Jat.in).mp3",
        cover:"assets/images/zb.jfif"
    },
    {
        title:"Tumhare Bina",
        artist:"Kumar Vishwas, Geershati Saxena",
        src:"assets/songs/ज़िन्दगी से लड़ा हूँ तुम्हारे बिना, हाशि.mp3",
        cover:"assets/images/kv.jfif"
    }, 
    {
        title: "Barsaat Ho Jaaye",
        artist: "Jubin Nautiyal",
        src: "assets/songs/128-Barsaat Ho Jaaye - Jubin Nautiyal 128 Kbps.mp3",
        cover: "assets/images/download.jfif"
    },
     {
        title:"Deva Shree Ganesha",
        artist:"Ajay - Atul, Ajay Gogavale",
        src:"assets/songs/Deva Shree Ganesha Agneepath 128 Kbps.mp3",
        cover:"assets/images/ganeshji.jfif"
    },
    {
        title:"Teri Ore",
        artist:"Shreya Ghoshal, Rahat Fateh Ali Khan",
        src:"assets/songs/Teri Ore.mp3",
        cover:"assets/images/teri ore.jfif"
    },
   {
        title:"Chaand Sifarish",
        artist:"Jatin - Lalit,Shaan, Kailash Kher",
        src:"assets/songs/Cf.mp3",
        cover:"assets/images/chand sifarish.jfif"
    },
    {
        title:"Mast Nazro Se Allah Bachaye",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Mast Nazro Se Allah Bachaye.mp3",
        cover:"assets/images/mast nazro se.jfif"
    },
    {
        title:"Tujhe Bhoolna",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Tujhe bhoolna.mp3",
        cover:"assets/images/tujhe bhoolna.jfif"
    },
    {
       title:"Aaya Re Toofaan",
       artist:"A.R. Rahman, Vaishali Samant",
       src:"assets/songs/Aaya Re Toofan Chhaava 128 Kbps.mp3",
      cover:"assets/images/toofaan.jfif"
    },
    {
        title:"Kesariya",
        artist:"Arijit Singh",
        src:"assets/songs/Kesariya.mp3",
        cover:"assets/images/kesariya.jfif"
    },
    {
        title:"My Dil Goes Mmmm",
        artist:"Shaan, Gayatri Iyer",
        src:"assets/songs/My Dil Goes Mmmm - Shaan and Gayatri Iyer.mp3",
        cover:"assets/images/dil goes hmmm.jfif"
    },
    {
        title: "High Rated Gabru",
        artist: "Guru Randhawa",
        src: "assets/songs/High_Rated_Gabru_1.mp3",
        cover: "assets/images/High rated gabru.jfif"
    },
    {
        title: "Aye Khuda",
        artist: "Mithoon, Kshitij Tarey",
        src: "assets/songs/Aye Khuda - Murder 2 128 Kbps.mp3",
        cover: "assets/images/mithoon.jfif"
    },
    {
        title: "Toh Aagye Hum",
        artist: "Mithoon, Jubin Nautiyal",
        src: "assets/songs/Toh aagye hm.mp3",
        cover: "assets/images/to aagye.jfif"
    },
     {
        title: "Bas Itna Sa Khwab Hai",
        artist: "Abhijeet Bhattacharya",
        src: "assets/songs/Chaand Taare Yes Boss 128 Kbps.mp3",
        cover: "assets/images/ct.jfif"
    },
    {
        title: "Tumse Milke Dil Ka Hai Jo Haal",
        artist: "Annu Mallik, Sonu Nigam, Altaf Sabri, Sabri Brothers",
        src: "assets/songs/Tumse Milke Dilka Jo Haal(KoshalWorld.Com).mp3",
        cover: "assets/images/mhn.jfif"
    },
    {
        title: "Aasman Rootha Panchayat Season 3",
        artist: "Swanand Kirkire",
        src: "assets/songs/Aasman Rootha Panchayat Season 3 128 Kbps.mp3",
        cover: "assets/images/aasma rootha.jfif"
    },
   {
     title:"Mere Ghar Ram Aaye Hain",
        artist:"Jubin Nautiyal, Payal Dev",
        src:"assets/songs/Mere Ghar Ram Aaye Hain Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/mere ghar ram aye hain.jfif"
   },
    {
        title:"Dhun",
        artist:"Mithoon, Arijit Singh",
        src:"assets/songs/Dhun Saiyaara 128 Kbps.mp3",
        cover:"assets/images/Dhun.jfif"
    },
    {
        title:"O Ri Chiraiya",
        artist:"Swanand Kirkire",
        src:"assets/songs/O_Ri_Chiraiya-(DownloadNe.in).mp3",
        cover:"assets/images/kirkire.jfif"
    },
    {
        title:"Phir Mohabbat",
        artist:"Mithoon, Mohammad Irfan, Arijit Singh, Saim Bhatt",
        src:"assets/songs/Phir Mohabbat Murder 2-(Mr-Jat.in).mp3",
        cover:"assets/images/phir mohhabat.jfif"
    },
    {
        title:"Raatan Lambiya",
        artist:"Jubin Nautiyal, Asees Kaur",
        src:"assets/songs/Raatan Lmbiya.mp3",
        cover:"assets/images/raata lambiya.jfif"
    },
    {
        title:"Kaagaz ke 2 pankh leke",
        artist:"Amit Trivedi, Swanand Kirkire",
        src:"assets/songs/Monta Re - Lootera 320 Kbps.mp3",
        cover:"assets/images/montare.jfif"
    },
    {
        title:"Tum Hi Aana",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Tum Hi Aana - Marjaavaan.mp3",
        cover:"assets/images/tum hi ana.jfif"
    },
    {
        title:"Daastaan-E-Om Shanti Om ",
        artist:"Shaan",
        src:"assets/songs/Dastaan E Om Shanti Om Shaan 128 Kbps.mp3",
        cover:"assets/images/deom.jfif"
    },
    {
        title:"Shape of You",
        artist:"Ed Sheeran",
        src:"assets/songs/Ed_Sheeran_-_Shape_of_You_Offblogmedia.com.mp3",
        cover:"assets/images/ed sheeran.jfif"
    },
    {
        title:"Jenne Laga Hoon",
        artist:"Sachin-Jigar, Shreya Ghoshal, Atif Aslam",
        src:"assets/songs/Jeene Laga hoo.mp3",
        cover:"assets/images/jeene laga.jfif"
    },
    {
        title:"Meri Zindagi Hai Tu",
        artist:"Jubin Nautiyal, Neeti Mohan",
        src:"assets/songs/Meri Zindagi.mp3",
        cover:"assets/images/meri zindagi.jfif"
    },
    {
        title:"G.O.A.T",
        artist:"Diljit Dosanjh",
        src:"assets/songs/G.O.A.T - Diljit Dosanjh.mp3",
        cover:"assets/images/dd.jfif"
    },
    {
        title:"Perfect",
        artist:"Ed Sheeran",
        src:"assets/songs/Perfect-(Mr-Jat.in).mp3",
        cover:"assets/images/ed sheeran.jfif"
    },
   
    {
        title:"Teri Aankhon",
        artist:"Geershati Saxena",
        src:"assets/songs/Teri Aankho.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png"
    },
    {
        title:"Deewangi Deewangi",
        artist:"Rahul Saxena, Shaan, Shreya Ghoshal, Sunidhi Chauhan, Udit Narayan",
        src:"assets/songs/Deewangi Deewangi Om Shanti Om 128 Kbps.mp3",
        cover:"assets/images/osho.jfif"
    },
    {
        title:"Kaisa Ye Ishq Hai, Ajab Sa Risk Hai",
        artist:"Rahat Fateh Ali Khan",
        src:"assets/songs/Isq Risk-(Mr-Jat.in).mp3",
        cover:"assets/images/ishq risk.jfif"
    },
     {
        title:"Born to Shine",
        artist:"Diljit Dosanjh",
        src:"assets/songs/Born To Shine - Diljit Dosanjh.mp3",
        cover:"assets/images/dd.jfif"
    },
    {
        title:"Tumhare Bina 2",
        artist:"Kumar Vishwas, Geershati Saxena",
        src:"assets/songs/Tumhare Bina.mp3",
        cover:"assets/images/kv.jfif"
    },
    {
        title:"Tumahre Bina 3",
        artist:"Kumar Vishwas, Geershati Saxena",
        src:"assets/songs/Tumahre Bina 2.mp3",
        cover:"assets/images/kv.jfif"
    },
    {
        title:"Saami Saami",
        artist:"Sunidhi Chauhan",
        src:"assets/songs/Saami Saami(PagalWorld.com.se).mp3",
        cover:"assets/images/saami.jfif"
    },
    {
        title:"Teri Ankho 2",
        artist:"Geershati Saxena",
        src:"assets/songs/Teri Ankho 2.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png"
    },
    {
        title:"Darkhaast",
        artist:"Mithoon, Arijit Singh, Sunidhi Chauhan",
        src:"assets/songs/Darkhaast Shivaay 128 Kbps.mp3",
        cover:"assets/images/darkhast.jfif"
    },
     {
        title:"Tere Vaste",
        artist:"Sachin-Jigar, Varun Jain, Shadab Faridi",
        src:"assets/songs/Tere Vaaste Zara Hatke Zara Bachke 128 Kbps.mp3",
        cover:"assets/images/tere vaste.jfif"
    },
    {
        title:"Tumse Kiran Dhoop Ki",
        artist:"Sachin-Jigar, Varun Jain, Shadab Faridi",
        src:"assets/songs/Tumse Kiran Dhoop Ki [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/tmse.jfif"
    },
    {
        title:"Do Dhaari Talwar",
        artist:"Sohail Sen, Shweta Pandit, Shahid Mallya",
        src:"assets/songs/Do Dhaari Talwaar Mere Brother Ki Dulhan 128 Kbps.mp3",
        cover:"assets/images/talwar.jfif"
    },
    {
        title:"Bulleya",
        artist:"Papon",
        src:"assets/songs/Bulleya Sultan 128 Kbps.mp3",
        cover:"assets/images/bulleya.jfif"
    },
    {
        title:"Manzoor Hai",
        artist:"Salim-Sulaiman, Armaan Malik",
        src:"assets/songs/Manzoor Hai - Armaan Malik [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/manzoor.jfif"
    },
    {
        title:"Jaan Le Gayi",
        artist:"Salim-Sulaiman, Vishal Dadlani, Sonu Nigam",
        src:"assets/songs/Jaan Le Gayi(KoshalWorld.Com).mp3",
        cover:"assets/images/jaan.jfif"
    },
    {
        title:"Murli Ki Taano Si",
        artist:"Shaan",
        src:"assets/songs/Murli Ki Taanon Si Prem Ratan Dhan Payo 128 Kbps.mp3",
        cover:"assets/images/shaan.jfif"
    },
    {
        title: "Hind Ke Sitara",
        artist: "Manoj Tiwari",
        src: "assets/songs/Hind Ke Sitara Panchayat Season 3 128 Kbps.mp3",
        cover: "assets/images/aasma rootha.jfif"
    },
     {
        title: "Chaar Kadam",
        artist: "Shreya Ghoshal, Shaan",
        src: "assets/songs/Chaar Kadam Pk 128 Kbps.mp3",
        cover: "assets/images/chaar.jfif"
    },
    {
        title: "Dil Diyan Gallan",
        artist: "Atif Aslam",
        src: "assets/songs/Dil Diyan Gallan Tiger Zinda Hai 128 Kbps.mp3",
        cover: "assets/images/dil.jfif"
    },
    {
        title: "Mere Dholna 3.o",
        artist: "Amaal Mallik,Sonu Nigam",
        src: "assets/songs/Mere Dholna 3.0 Sonu Version Bhool Bhulaiyaa 3 128 Kbps.mp3",
        cover: "assets/images/bb3.jfif"
    },
    {
        title: "Mere Brother Ki Dulhan",
        artist: "Sohail Sen, KK",
        src: "assets/songs/Mere Brother ki dulhan.mp3",
        cover: "assets/images/mbkd.jfif"
    },
     {
        title: "Srivalli",
        artist: "Javed Ali",
        src: "assets/songs/srivalli.mp3",
        cover: "assets/images/srivalli.jfif"
    },
    {
        title: "Blue Eyes",
        artist: "Yo Yo Honey Singh",
        src: "assets/songs/blueeyes.mp3",
        cover: "assets/images/blueeyes.jfif"
    }, 
    {
        title: "Dil Chori",
        artist: "Yo Yo Honey Singh, Simar Kaur, Ishers",
        src: "assets/songs/dilchori.mp3",
        cover: "assets/images/dilchori.jfif"
    },
      {
        title: "Bewafa Tera Yun Muskurana",
        artist: "Jubin Nautiyal",
        src: "assets/songs/Bewafa Tera Yun Muskurana.mp3",
        cover: "assets/images/bewafa.jfif"
    },
     {
        title: "Bijlee Bijlee",
        artist: "Hardy Sandhu, Palak Tiwari",
        src: "assets/songs/Bijlee.mp3",
        cover: "assets/images/bijli.jfif"
    },
   {
        title: "Suit Suit",
        artist: "Guru Randhawa, Arjun",
        src: "assets/songs/suit.mp3",
        cover: "assets/images/suit.jfif"
    },
    {
        title: "Naach Punjaban",
        artist: "Gippy Grewal, Zahrah S Khan, Tanishk Bagchi, Romy",
        src: "assets/songs/punjaban.mp3",
        cover: "assets/images/punjaban.jfif"
    },
    {
        title: "Titliyan (Pata nahi ji konsa nasha karta hai)",
        artist: "Afsana Khan",
        src: "assets/songs/nasha.mp3",
        cover: "assets/images/nasha.jfif"
    },
     {
        title: "Chennai Express Title Track",
        artist: "Vishal-Shekhar, S. P. Balasubrahmanyam, Jonita Gandhi",
        src: "assets/songs/chen.mp3",
        cover: "assets/images/ce.jfif"
    },
     {
        title: "Tera Rasta ",
        artist: "Vishal-Shekhar,Amitabh Bhattacharya, Anusha Mani",
        src: "assets/songs/rasta.mp3",
        cover: "assets/images/rasta.jfif"
    },
     {
        title: "Teri Meethi Meethi",
        artist: "Jubin Nautiyal, Payal Dev",
        src: "assets/songs/mithi.mp3",
        cover: "assets/images/mithi.jfif"
    },
{
        title: "Akelo Chal Padiyo",
        artist: "Sandesh Shandilya, Shradha Mishra",
        src: "assets/songs/Al.mp3",
        cover: "assets/images/Al.jpg"
    },
 {
        title: "Mahiye Jinna Sona",
        artist: "Darshan Raval",
        src: "assets/songs/Sona.mp3",
        cover: "assets/images/Sona.jpg"
    }

];

// DOM Elements
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const currentTimeLarge = document.querySelector('.current-time-large');
const durationLarge = document.querySelector('.duration-large');
const currentSongTitle = document.querySelector('.current-song-title');
const currentSongArtist = document.querySelector('.current-song-artist');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const songGrid = document.getElementById('song-grid');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

// Playback state
let currentSongIndex = 0;
let isShuffleOn = false;
let isRepeatOn = false;
let previousVolume = 1;

// Initialize shuffle array
let shuffleOrder = [...Array(songs.length).keys()];

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize
function loadSong(song) {
    title.textContent = `${song.title} - ${song.artist}`;
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
    
    // Reset times
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';
    currentTimeLarge.textContent = '0:00';
    durationLarge.textContent = '0:00';
}

function playSong() {
    const musicContainer = document.querySelector('.music-container');
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    const musicContainer = document.querySelector('.music-container');
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function prevSong() {
    if (isShuffleOn) {
        const currentIndex = shuffleOrder.indexOf(currentSongIndex);
        const prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            currentSongIndex = shuffleOrder[shuffleOrder.length - 1];
        } else {
            currentSongIndex = shuffleOrder[prevIndex];
        }
    } else {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1;
        }
    }
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylistUI();
}

function nextSong() {
    if (isRepeatOn) {
        loadSong(songs[currentSongIndex]);
        playSong();
        return;
    }

    if (isShuffleOn) {
        const currentIndex = shuffleOrder.indexOf(currentSongIndex);
        const nextIndex = currentIndex + 1;
        if (nextIndex >= shuffleOrder.length) {
            shuffleOrder = shuffleArray([...Array(songs.length).keys()]);
            currentSongIndex = shuffleOrder[0];
        } else {
            currentSongIndex = shuffleOrder[nextIndex];
        }
    } else {
        currentSongIndex++;
        if (currentSongIndex > songs.length - 1) {
            currentSongIndex = 0;
        }
    }
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylistUI();
}

// Format time in minutes and seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Update all time displays
    const formattedCurrentTime = formatTime(currentTime);
    const formattedDuration = formatTime(duration);
    
    currentTimeEl.textContent = formattedCurrentTime;
    currentTimeLarge.textContent = formattedCurrentTime;
    
    if (duration) {
        durationEl.textContent = formattedDuration;
        durationLarge.textContent = formattedDuration;
    }

    // Update progress handle position
    const progressHandle = document.querySelector('.progress-handle');
    if (progressHandle) {
        progressHandle.style.left = `${progressPercent}%`;
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function updatePlaylistUI() {
    const tiles = songGrid.querySelectorAll('.song-tile');
    tiles.forEach((tile, index) => {
        if (index === currentSongIndex) {
            tile.classList.add('playing');
        } else {
            tile.classList.remove('playing');
        }
    });
}

// Populate playlist with tiles
function populatePlaylist() {
    songs.forEach((song, index) => {
        const tile = document.createElement('div');
        tile.className = 'song-tile';
        tile.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        `;
        tile.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playSong();
            updatePlaylistUI();
        });
        songGrid.appendChild(tile);
    });
}

// Search functionality
const searchInput = document.getElementById('search-input');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

function filterSongs(query) {
    const normalizedQuery = query.toLowerCase().trim();
    const tiles = document.querySelectorAll('.song-tile');
    
    tiles.forEach(tile => {
        const title = tile.querySelector('.song-title').textContent.toLowerCase();
        const artist = tile.querySelector('.song-artist').textContent.toLowerCase();
        
        if (title.includes(normalizedQuery) || artist.includes(normalizedQuery)) {
            tile.style.display = 'flex';
            tile.animate([
                { opacity: 0, transform: 'scale(0.95)' },
                { opacity: 1, transform: 'scale(1)' }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        } else {
            tile.style.display = 'none';
        }
    });
}

// Toast notification
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// View toggle
function toggleView(view) {
    const songGrid = document.getElementById('song-grid');
    const tiles = document.querySelectorAll('.song-tile');
    
    if (view === 'list') {
        songGrid.style.gridTemplateColumns = '1fr';
        tiles.forEach(tile => {
            tile.style.flexDirection = 'row';
            tile.style.alignItems = 'center';
            tile.style.gap = '2rem';
        });
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    } else {
        songGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
        tiles.forEach(tile => {
            tile.style.flexDirection = 'column';
            tile.style.alignItems = 'stretch';
            tile.style.gap = '0.8rem';
        });
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    }
}

// Audio visualizer
function setupVisualizer() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
    }
    
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    visualizer.width = visualizer.offsetWidth;
    visualizer.height = visualizer.offsetHeight;
    
    // Get amplitude bars
    const amplitudeBars = document.querySelectorAll('.amplitude-bars .bar');
    const characterHead = document.querySelector('.character .head');
    
    // Set different animation delays for amplitude bars
    amplitudeBars.forEach((bar, index) => {
        bar.style.setProperty('--bar-delay', `${index * 0.1}s`);
        bar.style.setProperty('--bar-duration', `${0.5 + index * 0.1}s`);
    });
    
    function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);
        
        analyser.getByteFrequencyData(dataArray);
        
        visualizerCtx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        visualizerCtx.fillRect(0, 0, visualizer.width, visualizer.height);
        
        const barWidth = (visualizer.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;
        
        // Calculate average amplitude for character animations
        let totalAmplitude = 0;
        
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;
            totalAmplitude += dataArray[i];
            
            const gradient = visualizerCtx.createLinearGradient(0, 0, 0, visualizer.height);
            gradient.addColorStop(0, '#b6e303ff');
            gradient.addColorStop(1, '#b5cd00ff');
            
            visualizerCtx.fillStyle = gradient;
            visualizerCtx.fillRect(x, visualizer.height - barHeight, barWidth, barHeight);
            
            x += barWidth + 1;
        }
        
        // Adjust character animations based on amplitude
        const averageAmplitude = totalAmplitude / bufferLength;
        const normalizedAmplitude = averageAmplitude / 255;
        const characters = document.querySelectorAll('.dancing-character');
        
        characters.forEach((character, index) => {
            const scale = 1 + normalizedAmplitude * 0.1;
            const delay = index * 0.1;
            
            if (normalizedAmplitude > 0.3) {
                switch(index) {
                    case 0: // Hip Hop dancer
                        character.style.transform = `scale(${scale}) translateY(${-normalizedAmplitude * 20}px)`;
                        break;
                    case 1: // Ballet dancer
                        character.style.transform = `scale(${scale}) rotate(${normalizedAmplitude * 10}deg)`;
                        break;
                    case 2: // Breakdance dancer
                        character.style.transform = `scale(${scale}) rotate(${normalizedAmplitude * 360}deg)`;
                        break;
                    case 3: // Pop dancer
                        character.style.transform = `scale(${scale * 1.1}) translateX(${Math.sin(Date.now() * 0.01) * 20}px)`;
                        break;
                }
            } else {
                character.style.transform = 'scale(1)';
            }
            
            // Add glow effect based on music intensity
            character.style.filter = `drop-shadow(0 0 ${5 + normalizedAmplitude * 15}px currentColor)`;
        });
    }
    
    drawVisualizer();
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = document.querySelector('.music-container').classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
        setupVisualizer();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);

progressContainer.addEventListener('click', setProgress);

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value / 100;
    audio.volume = value;
    previousVolume = value;
    
    // Update volume icon
    if (value === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (value < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
});

volumeIcon.addEventListener('click', () => {
    if (audio.volume > 0) {
        previousVolume = audio.volume;
        audio.volume = 0;
        volumeSlider.value = 0;
        volumeIcon.className = 'fas fa-volume-mute';
    } else {
        audio.volume = previousVolume;
        volumeSlider.value = previousVolume * 100;
        volumeIcon.className = previousVolume < 0.5 ? 'fas fa-volume-down' : 'fas fa-volume-up';
    }
});

// Shuffle control
shuffleBtn.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;
    shuffleBtn.classList.toggle('active');
    if (isShuffleOn) {
        shuffleOrder = shuffleArray([...Array(songs.length).keys()]);
        showToast('Shuffle mode: On');
    } else {
        shuffleOrder = [...Array(songs.length).keys()];
        showToast('Shuffle mode: Off');
    }
});

// Repeat control
repeatBtn.addEventListener('click', () => {
    isRepeatOn = !isRepeatOn;
    repeatBtn.classList.toggle('active');
    showToast(`Repeat mode: ${isRepeatOn ? 'On' : 'Off'}`);
});

// Update time on audio load
audio.addEventListener('loadedmetadata', () => {
    const formattedDuration = formatTime(audio.duration);
    durationEl.textContent = formattedDuration;
    durationLarge.textContent = formattedDuration;
});

// Additional event listeners
searchInput.addEventListener('input', (e) => {
    filterSongs(e.target.value);
});

gridViewBtn.addEventListener('click', () => toggleView('grid'));
listViewBtn.addEventListener('click', () => toggleView('list'));

visualizerToggle.addEventListener('click', () => {
    const visualizer = document.querySelector('.music-visualizer');
    visualizer.style.display = visualizer.style.display === 'none' ? 'block' : 'none';
    showToast(`Visualizer ${visualizer.style.display === 'none' ? 'hidden' : 'shown'}`);
});

// Window resize handler for visualizer
window.addEventListener('resize', () => {
    if (visualizer) {
        visualizer.width = visualizer.offsetWidth;
        visualizer.height = visualizer.offsetHeight;
    }
});

// Handle audio ended
audio.addEventListener('ended', () => {
    showToast('Playing next song...');
    nextSong();
});

// Initialize
loadSong(songs[currentSongIndex]);
populatePlaylist();
showToast('Welcome to GeerVibes 🎵');

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        const isPlaying = document.querySelector('.music-container').classList.contains('play');
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    } else if (e.code === 'ArrowLeft') {
        prevSong();
    } else if (e.code === 'ArrowRight') {
        nextSong();
    }
});