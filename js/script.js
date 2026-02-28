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
        title:"Mahisasura Mardini Stotram",
        artist:"Dr Kumar Vishwas",
        src:"assets/songs/Aigiri Nandini  Dr Kumar Vishwas  महषसर मरदन सततर  Navratri Special.mp3",
        cover:"assets/images/ayigiri.jpg"
    },
    {
        title:"Gajanana Gajanana Gajanana Ganaraya",
        artist:"Sukhwinder Singh",
        src:"assets/songs/Gajanana - Bajirao Mastani 128 Kbps.mp3",
        cover:"assets/images/ganeshji.jfif"
    },
    {
        title:"Siya Ram",
        artist:"Raaj Ashoo, Jubin Nautiyal, Jaya Kishori",
        src:"assets/songs/Siya Ram (PenduJatt.Com.Se).mp3",
        cover:"assets/images/ramji.jpg"
    },
    {
        title: "Sabse Sundar Sapne Ram",
        artist: "Dr Kumar Vishwas",
        src: "assets/songs/सबस सदर सपन रम  Sabse Sundar Sapne Ram  Dr Kumar Vishwas  Full HD Video.mp3",
        cover: "assets/images/Sundarram.jpg"
    },
    {
        title:"Ram Raja Bhi Hain aur Tapasvi Bhi Hain",
        artist:"Dr Kumar Vishwas",
        src:"assets/songs/Ram Raja Bhi Hain Aur Tapasvi Bhi Hain  Dr Kumar Vishwas  Full HD Video.mp3",
        cover:"assets/images/rajaram.jpg"
    },
    {
        title:"Zara Halke Gaadi Haako",
        artist:"Dr Kumar Vishwas",
        src:"assets/songs/ज़र हलक गड़ हक  Zara Halke Gaadi Haako  Dr Kumar Vishwas.mp3",
        cover:"assets/images/Halkegaadi.jpg"
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
        title: "Radha Gori Gori",
        artist: "Indresh Upadhyay, B Praak",
        src: "assets/songs/Rgg.mp3",
        cover: "assets/images/Rgg.jpg"
    },
{
        title: "Oonchi Oonchi Wadi Me Baste Hai Bhole Shankar",
        artist: "Hansraj Raghuwanshi",
        src: "assets/songs/Oo.mp3",
        cover: "assets/images/Oo.jpg"
    },
 
   {
        title: "Jay Shree Mahakal",
        artist: "Kailash Kher",
        src: "assets/songs/Jsm.mp3",
        cover: "assets/images/Jsm.jpg"
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
        title: "Jai Shree Mahakaal",
        artist: "Shankar Mahadevan, Kailash Kher, Sonu Nigam, Shaan, Arijit Singh",
        src: "assets/songs/Mahakal.mp3",
        cover: "assets/images/Mahakal.jpg"
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
        src: "assets/songs/High Rated Gabru - Guru Randhawa.mp3",
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
        title:"Saami Saami",
        artist:"Sunidhi Chauhan",
        src:"assets/songs/Saami Saami(PagalWorld.com.se).mp3",
        cover:"assets/images/saami.jfif"
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
        title: "Ladki Kyon Ladko Si Nahi Hoti",
        artist: "Jatin-Lalit, Shaan, Alka Yagnik",
        src: "assets/songs/Ldk.mp3",
        cover: "assets/images/Ldk.jpg"
    },
 {
        title: "Mahiye Jinna Sona",
        artist: "Darshan Raval",
        src: "assets/songs/Sona.mp3",
        cover: "assets/images/Sona.jpg"
    },
{
        title: "Tenu Le ke Mai Jawanga",
        artist: "Sonu Nigam, Mahalaxmi Iyer",
        src: "assets/songs/Sng.mp3",
        cover: "assets/images/Sng.jpg"
    },
{
        title: "Aao Milo Chale",
        artist: "Pritam, Shaan,Sultan Khan",
        src: "assets/songs/Amc.mp3",
        cover: "assets/images/Amc.jpg"
    },
{
        title: "Savera",
        artist: "Javed Ali, Madhubanti Bagchi",
        src: "assets/songs/Svr.mp3",
        cover: "assets/images/Sav.jpg"
    },
{
        title: "Lak 28 Kudi Da",
        artist: "Yo Yo Honey Singh, Diljit Dosanjh",
        src: "assets/songs/Lak.mp3",
        cover: "assets/images/Lak.jpg"
    },
{
        title: "Kal Ho Na Ho",
        artist: "Shankar-Ehsaan-Loy, Sonu Nigam",
        src: "assets/songs/Khn.mp3",
        cover: "assets/images/Khn.webp"
    },
{
        title: "Param Sundari",
        artist: "A.R.Rahma,Shreya Ghoshal",
        src: "assets/songs/Ps.mp3",
        cover: "assets/images/Ps.jpg"
    },
{
        title: "Ruaan",
        artist: "Pritam, Arijit Singh",
        src: "assets/songs/R.mp3",
        cover: "assets/images/R.jpg"
    },
{
        title: "Kamariya",
        artist: "Aastha Gill, Sachin Sanghvi,   Jigar Saraiya, Divya Kumar",
        src: "assets/songs/K.mp3",
        cover: "assets/images/K.jpg"
    },

{
        title: "Baaki Sab Theek",
        artist: "Sachin Sanghvi, Jigar Saraiya, Amitabh Bhattacharya",
        src: "assets/songs/Bst.mp3",
        cover: "assets/images/Bst.jpg"
    },
{
        title:"Meri Bheegi Bheegi Si",
        artist:"R.D.Burman, Kishore Kumar",
        src:"assets/songs/Mbb.mp3",
        cover:"assets/images/Mbb.jpg"
    },
{
        title: "Prem Ratan Dhan Payo",
        artist: "Himesh Reshammiya, Palak Muchhal",
        src: "assets/songs/Prdp.mp3",
        cover: "assets/images/Prdp.jpg"
    },
{
        title: "Jalte Diye",
        artist: "Himesh Reshammiya, Anwesshaa, Vineet Singh, Harshdeep Kaur, Shabab Sabri, Chorus",
        src: "assets/songs/Jalte.mp3",
        cover: "assets/images/Jalte.jpg"
    },
{
        title:"Ladki Pahadi",
        artist:"Amit Trivedi, Abhijeet Srivastava",
        src:"assets/songs/Lpi.mp3",
        cover:"data:image/jpeg;base64,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"
    },
{
        title: "Maula Mere Maula",
        artist: "Mithoon, Roop Kumar Rathod",
        src: "assets/songs/Roop_Kumar_Rathod_-_Maula_Mere_Maula_Aankhen_Teri_(mp3.pm).mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFglCcgrk2O-gezrSJOtvy86GVb2DFllzkMg&s"
    },
{
        title: "Javeda Zindagi(Tose Naina Laage)",
        artist: "Mithoon, Shilpa Rao, Kshitij Tarey",
        src: "assets/songs/Tose.mp3",
        cover: "assets/images/Tose.jpg"
    },
{
        title: "Zamana Lage",
        artist: "Pritam, Arijit Singh, Shashwat Singh",
        src: "assets/songs/Zamana.mp3",
        cover: "assets/images/Zamana.jpg"
    },
{
        title: "Pyar Hota Kayi Baar Hai",
        artist: "Pritam, Arijit Singh, Charan",
        src: "assets/songs/Baar.mp3",
        cover: "assets/images/Baar.jpg"
    },
{
        title: "Show Me The Thumka",
        artist: "Pritam, Shashwat Singh, Sunidhi Chauhan",
        src: "assets/songs/Thu.mp3",
        cover: "assets/images/Thu.jpg"
    },
{
        title: "O Bedardeya",
        artist: "Pritam, Arijit Singh",
        src: "assets/songs/Bedard.mp3",
        cover: "assets/images/Bedard.jpg"
    },
{
        title:"Apna Bana Le Piya",
        artist:"Sachin-Jigar, Arijit Singh",
        src:"assets/songs/Apna.mp3",
        cover:"assets/images/Apna.jpg"
    },
{
        title:"Ye Ganga Ka Kinara Hai",
        artist:"Dr Kumar Vishwas ",
        src:"assets/songs/Ganga.mp3",
        cover:"assets/images/Ganga.jpg"
    },
{
        title:"Raam Mile Hain",
        artist:"Dr Kumar Vishwas ",
        src:"assets/songs/Mile.mp3",
        cover:"assets/images/Mile.jpg"
    },
{
        title:"Ghar More Pardesiya",
        artist:"Pritam, Shreya Ghoshal, Vaishali Mhade",
        src:"assets/songs/Pardesiya.mp3",
        cover:"assets/images/gharmore.jpg"
    },
{
        title:"Apna Bana Le Piya",
        artist:"Sachin-Jigar, Arijit Singh",
        src:"assets/songs/Apna.mp3",
        cover:"assets/images/Apna.jpg"
    },
{
        title:"Meera Ke Krishna",
        artist:"Mamata Sharma, Dr Kumar Vishwas ",
        src:"assets/songs/रध क करज चक गई मर  Dr Kumar Vishwas  Meera.mp3",
        cover:"assets/images/Meera.png"
    },
{
        title:"Saavadhani Hati Durghatna Ghati",
        artist:"Anurag Saikiya, Romy",
        src:"assets/songs/Durghatna.mp3",
        cover:"assets/images/Durghatna.jpg"
    },
{
        title:"Dhokhebaazi",
        artist:"Sachin-Jigar,Shradha Mishra, Priya Saraiya",
        src:"assets/songs/Dhokebaazi.mp3",
        cover:"assets/images/Dhokebaazi.jpg"
    },

{
        title:"Thumkeshwari",
        artist:"Sachin-Jigar, Divya Kumar, Ash King, Rashmeet Kaur",
        src:"assets/songs/Thumkeshwari.mp3",
        cover:"assets/images/Thumkeshwari.jpg"
    },
{
        title:"Mai Aa Likhu",
        artist:"Faheem Abdullah, Rauhan Malik, Amir Ameer",
        src:"assets/songs/Aalikhu.mp3",
        cover:"assets/images/Aalikhu.jpg"
    },
{
        title: "Aaj Mere Piya Ghar Ayenge",
        artist: "Kailash Kher",
        src: "assets/songs/Ave.mp3",
        cover: "assets/images/Ave.jpg"
    },
{
        title: "Khoobsoorati Par Teri",
        artist: "Sachin-Jigar, Vishal Mishra",
        src: "assets/songs/Khoobsurat.mp3",
        cover: "assets/images/Khoobsurat.jpg"
    },
{
        title: "Saiyara Mai Saiyara",
        artist: "Sohail Sen, Mohit Chauhan, Tarannum Mallik Jain",
        src: "assets/songs/Say.mp3",
        cover: "assets/images/Say.jpg"
    },
{
        title: "Teri Deewani",
        artist: "Kailash Kher",
        src: "assets/songs/Deew.mp3",
        cover: "assets/images/Deew.jpg"
    },
{
        title: "Tumhare Hi Rahenge",
        artist: "Sachin-Jigar, Shilpa Rao, Varun Jain",
        src: "assets/songs/Thrh.mp3",
        cover: "assets/images/Thrh.jpg"
    },
    {  title:"Kuchh Toh Hua Hai",
        artist:"Shaan, Alka Yagnik",
        src:"assets/songs/Kuch To Hua Hai Kal Ho Naa Ho 128 Kbps.mp3",
        cover:"assets/images/800x800cc.jpg"
    },

{
        title: "Kaise Hua",
        artist: "Vishal Mishra",
        src: "assets/songs/Kaise.mp3",
        cover: "assets/images/Kaise.jpg"
    },
 {
        title: "Raanjhan",
        artist: "Sachet-Parampara",
        src: "assets/songs/Raanjhan.mp3",
        cover: "assets/images/Raanjhan.jpg"
    },
 {
        title: "Sun Sathiya",
        artist: "Sachin-Jigar, Divya Kumar, Priya Saraiya",
        src: "assets/songs/Sunsathiya.mp3",
        cover: "assets/images/Sunsathiya.jpg"
    },
 {
        title: "Naina x Shape of You",
        artist: "Diljit Dosanjh, Ed Sheeran",
        src: "assets/songs/Naina.mp3",
        cover: "assets/images/Naina.jpg"
    },
 {
        title: "Shaam Gulabi",
        artist: "Sachin-Jigar, Priya Saraiya , Jigar Saraiya",
        src: "assets/songs/Gulabi.mp3",
        cover: "assets/images/Gulabi.jpg"
    },
{
        title: "Sainyaara Title Track",
        artist: "Tanishk Bagchi , Faheem Abdullah",
        src: "assets/songs/Aneet.mp3",
        cover: "assets/images/Aneet.jpg"
    },
{
        title: "Shukran Allah Walhamdulillah",
        artist: "Salim-Sulaiman,Sonu Nigam, Shreya Ghoshal,Salim Merchant",
        src: "assets/songs/Shukrallah.mp3",
        cover: "assets/images/Shukrallah.jpg"
    },
{
        title: "Ainvayi Ainvayi",
        artist: "Salim-Sulaiman,Salim Merchant, Sunidhi Chauhan",
        src: "assets/songs/Ainvayi.mp3",
        cover: "assets/images/Ainvayi.jpg"
    },
{
        title: "Shukranallah Walhamdulillahh live on Stage",
        artist: "Salim-Sulaiman,Sonu Nigam",
        src: "assets/songs/Shukranallah.mp3",
        cover: "assets/images/Shukranallah.jpg"
    },
{
        title: "Ainvayi Ainvayi live on Stage",
        artist: "Salim-Sulaiman, Sunidhi Chauhan ",
        src: "assets/songs/Sslive.mp3",
        cover: "assets/images/Sslive.jpg"
    },
{
        title:"Maula Mere Maula Live",
        artist:"Mithoon",
        src:"assets/songs/Eyes.mp3",
        cover:"assets/images/Eyes.jpg"
    },
{
        title:"Zindagi Ne Zindagi Bhar Gham Diye",
        artist:"Mithoon",
        src:"assets/songs/Mausam.mp3",
        cover:"assets/images/Mausam.jpg"
    },
{
        title: "Tumhare Bina",
        artist: "Dr Kumar Vishwas",
        src: "assets/songs/Tb.mp3",
        cover: "assets/images/Tb.jpg"
    },
{
        title: "Tees Maar Khan",
        artist: "Vishal-Shekhar,  Sonu Nigam",
        src: "assets/songs/Tmk.mp3",
        cover: "assets/images/Tmk.jpg"
    },
{
        title: "Sheila Ki Jawani",
        artist: "Vishal-Shekhar, Sunidhi Chauhan, Vishal Dadlani",
        src: "assets/songs/Katrina.mp3",
        cover: "assets/images/Katrina.jpg"
    },
{
        title: "Wallah Re Wallah",
        artist: "Vishal-Shekhar,  Shekhar Ravjiani, Kamal Khan, Raja Hasan, Shreya Ghoshal",
        src: "assets/songs/Wallah.mp3",
        cover: "assets/images/Wallah.jpg"
    },
{
        title: "Happy Ending",
        artist: "Vishal-Shekhar, Prajakta Shukre, Harshit Saxena, Abhijeet Sawant, Debojit Saha",
        src: "assets/songs/Ending.mp3",
        cover: "assets/images/Ending.jpg"
    },
{
        title: "Swarn Swar Bharat",
        artist: "Kailash Kher, Suresh Wadkar, Ravi Kishan, Dr Kumar Vishwas",
        src: "assets/songs/Ssb.mp3",
        cover: "assets/images/Ssb.jpg"
    },

{
        title: "Mast Aankhein",
        artist: "Tulsi Kumar, Jubin Nautiyal",
        src: "assets/songs/Tulsi.mp3",
        cover: "assets/images/Tulsi.jpg"
    },
{
        title: "Khaali Khaali Sa Hai",
        artist: "Anurag Saikiya, Romy",
        src: "assets/songs/Khali.mp3",
        cover: "assets/images/Khali.jpg"
    },
{
        title: "Luka Chuppi",
        artist: "A.R. Rahman,  Lata Mangeshkar",
        src: "assets/songs/Luka.mp3",
        cover: "assets/images/Luka.jpg"
    },
{
        title: "Chale Aana",
        artist: "Amaal Mallik, Armaan Mallik",
        src: "assets/songs/Chaleana.mp3",
        cover: "assets/images/Chaleana.jpg"
    },
{
        title: "Didi Tera Devar Deewana",
        artist: "Lata Mangeshkar, S. P. Balasubramaniam",
        src: "assets/songs/Devar.mp3",
        cover: "assets/images/Devar.jpg"
    },
{
        title: "Joote Do Paise Lo",
        artist: "Lata Mangeshkar, S. P. Balasubrahmanyam",
        src: "assets/songs/Joote.mp3",
        cover: "assets/images/Joote.jpg"
    },
{
        title: "Abrar's Entry",
        artist: "Harshvardhan",
        src: "assets/songs/Abrar.mp3",
        cover: "assets/images/Abrar.jpg"
    },
{
        title: "Ranvijay's Entry",
        artist: "A.R Rehman",
        src: "assets/songs/Ranvijay.mp3",
        cover: "assets/images/Ranvijay.jpg"
    },
{
        title: "Pehle Bhi Main",
        artist: "Vishal Mishra",
        src: "assets/songs/Pbm.mp3",
        cover: "assets/images/Pbm.jpg"
    },
{
        title: "Satranga",
        artist: "Shreyash Puranik , Arijit Singh",
        src: "assets/songs/Satranga.mp3",
        cover: "assets/images/Satranga.jpg"
    },
    {
        title: "Ghoomar",
        artist: "Sanjay Leela Bhansali ,Shreya Ghoshal, Swaroop Khan",
        src: "assets/songs/Ghoomar (PenduJatt.Com.Se).mp3",
        cover: "assets/images/ghoomar.jpeg"
    },
    {
        title: "Pardesiya",
        artist: "Sachin-Jigar, Sonu Nigam, Krishnakali Saha",
        src: "assets/songs/Pardesiya [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Pardesiya.jpg"
    },
    {
        title: "Aaiye Na Humra Bihar Mein",
        artist: "Advait Nemlekar, Keerthi Sagathia",
        src: "assets/songs/Ayee_Na_Humara_Bihar_Main.mp3",
        cover: "assets/images/BIHAR.jpg"
    },
    {
        title: "Poision Baby",
        artist: "Sachin-Jigar, Jasmine Sandlas, Divya Kumar",
        src: "assets/songs/Poison_Baby_Jasmine_Sandlas_Divya_Kumar.mp3",
        cover: "assets/images/POISION.jpg"
    },
      {
        title: "Qayde Se",
        artist: "Pritam, Papon, Amitabh Bhattacharya",
        src: "assets/songs/Qayde.mp3",
        cover: "assets/images/Qayde.jpg"
    },
   
    {
        title: "Haule Haule",
        artist: "Salim-Sulaiman, Sukhwinder Singh",
        src: "assets/songs/Haule Haule [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Haule.jpg"
    },
    {
        title: "Tum Jo Kaho Toh....",
        artist: "Salim-Sulaiman, Shaan, Shraddha Pandit",
        src: "assets/songs/Agar.mp3",
        cover: "assets/images/Agar.jpg"
    },
     {
        title: "Phir Milenge Chalte Chalte",
        artist: "Salim-Sulaiman, Sonu Nigam",
        src: "assets/songs/Phir Milenge Chalte Chlate [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Phir milenge.jpg"
    },
    {
        title: "Beh Ja",
        artist: "Shaan",
        src: "assets/songs/Beh_Ja_Shaan.mp3",
        cover: "assets/images/shaan.jfif"
    },
    {
        title: "Tujh Mein Rab Dikhta Hai",
        artist: "Salim-Sulaiman, Roop Kumar Rathod",
        src: "assets/songs/Tujh Mein Rab  Tu Hi To Jannat Meri [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Rab Dikhta.jpg"
    },
    {
        title: "Dance Pe Chance",
        artist: "Salim-Sulaiman, Sunidhi Chauhan, Labh Janjua",
        src: "assets/songs/Dance Pe Chance [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Dance.jpg"
    },
    {
        title: "Rahe Na Rahe Hum",
        artist: "Sachin-Jigar, Soumyadeep Sarkar, Amitabh Bhattacharya",
        src: "assets/songs/rahena.mp3",
        cover: "assets/images/rahena.jpg"
    },
    {
        title: "Imagine Dragons",
        artist: "Bones",
        src: "assets/songs/Bones-(Mr-Jat.in).mp3",
        cover: "assets/images/boys.jpg"
    },
    {
        title: "Tum Se Hi",
        artist: "Mohit Chauhan, Pritam Chakraborty, Irshad Kamil, DJ SUNIL",
        src: "assets/songs/Tum Se Hi Jab We Met 128 Kbps.mp3",
        cover: "assets/images/tumsehi.jpg"
    },
    {
        title: "Taras Nahi Aya Tujhko",
        artist: "Sachin-Jigar, Jasmine Sandlas",
        src: "assets/songs/Taras.mp3",
        cover: "assets/images/taras.jpg"
    },
   {
        title: "Aaoge Jab Tum",
        artist: "Rashid Khan, Irshad Kamil, Sandesh Sandilya",
        src: "assets/songs/Aaoge Jab Tum Jab We Met 128 Kbps.mp3",
        cover: "assets/images/aaogejab.jpg"
    },
    {
        title: "Ek Tu Hi Yaar Mera",
        artist: "Rochak Kohli, Arijit Singh, Neha Kakkar",
        src: "assets/songs/Tu Hi Yaar Mera (Pati Patni Aur Woh) [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/yaar mera.jpg"
    },
     {
        title: "Rab Ne Bana Di Jodi Musical",
        artist: "Salim-Sulaiman",
        src: "assets/songs/Dancing Jodi Rab Ne Bana Di Jodi 128 Kbps.mp3",
        cover: "assets/images/Rab-Ne-Bana-Di-Jodi-Hindi-2008-500x500.jpg"
    },
    {
        title: "Teri Meri Prem Kahani",
        artist: "Himesh Reshammiya, Rahat Fateh Ali Khan, Shreya Ghoshal",
        src: "assets/songs/Teri Meri Bodyguard 128 Kbps.mp3",
        cover: "assets/images/terimeri.jpg"
    },
    {
        title: "Chal Chaiya Chaiya",
        artist: " A.R Rahman, Sukhwinder Singh, Sapna Awasthi",
        src: "assets/songs/Chaiyya Chaiyya Dil Se 128 Kbps.mp3",
        cover: "assets/images/chaiya.jpg"
    },
    {
        title: "Ek Aur Rang Bhi Dekhiye Bengal Ka",
        artist: " Jeet Ganguli",
        src: "assets/songs/Khakee The Bengal Chapter Full Title Track (From 7 Episodes).mp3",
        cover: "assets/images/bengal.jpg"
    },
    {
        title: "Mera Inteqam Dekhegi",
        artist: "Anand Raaj Anand, Krishna Beuraa",
        src: "assets/songs/Mera Intkam Dekhegi - Lyrical  Shaadi Mein Zaroor Aana  Rajkummar R, Kriti K  Krishna Beuraa.mp3",
        cover: "assets/images/inteqam.jpg"
    },
   {
        title:"Jhalak Dikhla Jaa",
        artist:"Himesh Reshammiya",
        src:"assets/songs/Jhalak Dikhla Ja Aksar 128 Kbps.mp3",
        cover:"assets/images/jhalak.webp"
    },
      {
        title:"Ik Vaari Aa",
        artist:"Pritam, Arijit Singh",
        src:"assets/songs/Ik Vaari Aa Raabta 128 Kbps.mp3",
        cover:"assets/images/vaari.jpg"
    },
    {
        title:"Raabta",
        artist:"Pritam, Arijit Singh",
        src:"assets/songs/Raabta Agent Vinod 128 Kbps.mp3",
        cover:"assets/images/romantic-people-being-love.jpg"
    },
    {
        title:"Deewaniyat",
        artist:"Vishal Mishra",
        src:"assets/songs/Deewaniyat (PenduJatt.Com.Se).mp3",
        cover:"assets/images/deewaniyat.jpg"
    },
    {
        title:"Dard Dilo Ke Kam Ho Jate",
        artist:"Himesh Reshammiya, Mohhammed Irfan",
        src:"assets/songs/Dard Dilo Ke The Xpose 128 Kbps.mp3",
        cover:"assets/images/darddiloke.jpg"
    },
    {
        title:"Banjaare Ko Ghar",
        artist:"Mithoon, Mohhammed Irfan",
        src:"assets/songs/Banjaara Ek Villain 128 Kbps.mp3",
        cover:"assets/images/banjara.jpg"
    },
    {
        title:"Tum Ho Toh",
        artist:"Vishal Mishra",
        src:"assets/songs/Tum Ho Toh Saiyaara 128 Kbps.mp3",
        cover:"assets/images/tumhotoh.jpg"
    },
    {    
        title:"Mujhe Teri Zaroorat Hai",
        artist:"Mithoon, Mustafa Zahid",
        src:"assets/songs/Zaroorat Ek Villain 128 Kbps.mp3",
        cover:"assets/images/zaroorat.jpg"
    },
    {    
        title:"Kar Dega Barbaad Ishq Mujhe",
        artist:"The Rish, Jubin Nautiyal",
        src:"assets/songs/Barbaad Saiyaara 128 Kbps.mp3",
        cover:"assets/images/barbaadsong.jpg"
    },
    {    
        title:"Baarish",
        artist:"Mithoon, Mohhammed Irfan",
        src:"assets/songs/Baarish Yaariyan Mohammed Irfan 128 Kbps.mp3",
        cover:"assets/images/baarish.jpg"
    },
    {    
        title:"Chaudhary",
        artist:"Amit Trivedi, Mame Khan",
        src:"assets/songs/Chaudhary - Amit Trivedi feat Mame Khan, Coke Studio @ MTV Season 2.mp3",
        cover:"assets/images/chaudhary.jpg"
    },
    {    
        title:"Ishq Jalakar",
        artist:"Shashwat Sachdev, Shahzad Ali, Subhadeep Das Chowdhury, Armaan Khan",
        src:"assets/songs/Ishq Jalakar - Karvaan  Dhurandhar  Ranveer Singh, Shashwat Sachdev, Aditya Dhar.mp3",
        cover:"assets/images/jalakar.jpg"
    },
   
    {
        title:"Move - Ye Ishq Ishq Hai",
        artist:"Reble, Sonu Nigam, Shashwat Sachdev",
        src:"assets/songs/Move - Yeh Ishq Ishq (From Dhurandhar).mp3",
        cover:"assets/images/move.jpg"
    },
    {
        title:"Lutt Le Gaya",
        artist:"Simran Choudhary",
        src:"assets/songs/Lutt_Le_Gaya.mp3",
        cover:"assets/images/luttlegaya.jpg"
    },
    {
        title:"Dhurandhar Title Track",
        artist:"Hanumankind, Jasmine Sandlas, Sudhir Yaduvanshi, Shashwat Sachdev, Muhammad Sadiq, Ranjit Kaur",
        src:"assets/songs/Title Track Dhurandhar 128 Kbps.mp3",
        cover:"assets/images/dhurandhar.jpg"
    }, {
        title:"Gehra Hua",
        artist:"Arijit Singh, Armaan Khan",
        src:"assets/songs/Gehra Hua Dhurandhar 128 Kbps.mp3",
        cover:"assets/images/gehra].jpg"
    },
   {
        title:"Shararat",
        artist:"Madhubanti Bagchi, Jasmine Sandlas",
        src:"assets/songs/Shararat (PenduJatt.Com.Se).mp3",
        cover:"assets/images/shararat.jpg"
    },
    {
        title:"Allah Maaf Kare",
        artist:"Pritam, Sonu Nigam, Shilpa Rao",
        src:"assets/songs/Allah Maaf Kare Desi Boyz 128 Kbps.mp3",
        cover:"assets/images/allahmaafkare.jpg"
    },
    {
        title:"Bijuriya",
        artist:"Sonu Nigam, Asees Kaur",
        src:"assets/songs/Bijuria Sunny Sanskari Ki Tulsi Kumari 128 Kbps.mp3",
        cover:"assets/images/bijuriya.jpg"
    },
      {
        title:"Jaan Ban Gaye ",
        artist:"Mithoon, Vishal Mishra, Asees Kaur",
        src:"assets/songs/Jaan Ban Gaye (PenduJatt.Com.Se).mp3",
        cover:"assets/images/bangaye.jpg"
    },
    
     {
        title:"Chaudhary Remake",
        artist:"Amit Trivedi, Mame Khan, Jubin Nautiyal, Yohani",
        src:"assets/songs/Chaudhary.mp3",
        cover:"assets/images/chj.jpg"
    },
    {
        title:"Tere Sang Kaati Raatein",
        artist:"Jeet Ganguly, Mustafa Zahid",
        src:"assets/songs/Jo Tere Sang Blood Money 128 Kbps.mp3",
        cover:"assets/images/teresang.jpg"
    },
    {
        title:"Malhari",
        artist:"Sanjay Leela Bhansali, Vishal Dadlani",
        src:"assets/songs/Malhari Bajirao Mastani 128 Kbps.mp3",
        cover:"assets/images/malhari.jpg"
    },
    {
        title:"Tinku Jiya",
        artist:"Mamta Sharma, Javed Ali",
        src:"assets/songs/Tinku Jiya Yamla Pagla Deewana 128 Kbps.mp3",
        cover:"assets/images/tinkujiya.jpg"
    },
    {
        title:"Bhar Do Jholi Meri",
        artist:"Pritam, Adnan Sami",
        src:"assets/songs/Bhar Do Jholi Meri Bajrangi Bhaijaan 128 Kbps.mp3",
        cover:"assets/images/bhardo.jpg"
    },
    {
        title:"Afghan Jalebi",
        artist:"Pritam, Akhtar Chanal Zahri",
        src:"assets/songs/Afghan Jalebi Ya Baba Phantom 128 Kbps.mp3",
        cover:"assets/images/afganjalebi.jpg"
    },
    {
        title:"Hawa Hawa",
        artist:"Hassan Jahangir",
        src:"assets/songs/Hawa Hawa-(SambalpuriStar.In).mp3",
        cover:"assets/images/hawa.jpg"
    },
    {
        title:"Dost Banke Rehte Hain Na",
        artist:"Gurnazar, Rahat Fateh Ali Khan, Kartik Dev",
        src:"assets/songs/Dost Banke - Rahat Fateh Ali Khan.mp3",
        cover:"assets/images/dostbanke.jpg"
    },
    {
        title:"Dawat E Ishq",
        artist:"Sunidhi Chauhan, Javed Ali",
        src:"assets/songs/Daawat E Ishq Javed Ali 128 Kbps.mp3",
        cover:"assets/images/dawat.jpg"
    },
    {
        title:"Taiyab Ali",
        artist:"Javed Ali",
        src:"assets/songs/Tayyab Ali (PenduJatt.Com.Se).mp3",
        cover:"assets/images/taiyab.jpg"
    },
      {
        title:"Bol Na Halke Halke",
        artist:"Rahat Fateh Ali Khan, Mahalaxmi Iyer",
        src:"assets/songs/Bol Na Halke Halke Jhoom Barabar Jhoom 128 Kbps.mp3",
        cover:"assets/images/bolnahalke.jpg"
    },
    {
        title:"Titliaan Warga 2.o",
        artist:"Harrdy Sandhu",
        src:"assets/songs/Titliaan Warga - Harrdy Sandhu.mp3",
        cover:"assets/images/nashakarta.jpg"
    },
    {
        title:"Sandeshe Aate Hai",
        artist:"Annu Malik, Roop Kumar Rathod, Sonu Nigam",
        src:"assets/songs/Sandese Aate Hain Border 128 Kbps.mp3",
        cover:"assets/images/sandeshe.jpg"
    },
    {
        title:"Maula Mere Lele Meri Jaan",
        artist:"Krishna, Salim Merchant, Salim–Sulaiman",
        src:"assets/songs/Maula Mere Lele Meri Jaan Chak De India 128 Kbps.mp3",
        cover:"assets/images/lelejaan.jpg"
    },
    {
        title:"Ghar Kab Aaoge",
        artist:"Mithoon, Sonu Nigam, Arijit Singh, Vishal Mishra, Diljit Dosanjh, Roop Kumar Rathod",
        src:"assets/songs/Ghar Kab Aaoge Border 2 128 Kbps.mp3",
        cover:"assets/images/gharkab.jpg"
    },
    {
        title:"Tainu Khabar Nahi",
        artist:"Sachin-Jigar, Arijit Singh",
        src:"assets/songs/Tainu Khabar Nahi - pagalnew.mp3",
        cover:"assets/images/khabarnahi.jpg"
    },
     {
        title:"Akhiri Kadam Tak",
        artist:"Mithoon, Sonu Nigam",
        src:"assets/songs/Aakhri Kadam Tak - Khuda Haafiz 192 Kbps.mp3",
        cover:"assets/images/kadamtak.jpg"
    },
     {
        title:"Mera Intezaar Karna",
        artist:"Mithoon, Arman Malik",
        src:"assets/songs/Mera Intezaar Karna Khuda Haafiz 128 Kbps.mp3",
        cover:"assets/images/intezaar.jpg"
    },
      {
        title:"Jhoome Jo Pathaan",
        artist:"Vishal-Shekhar, Arijit Singh, Sukriti Kakar",
        src:"assets/songs/Jhoome Jo Pathaan Title Song 128 Kbps.mp3",
        cover:"assets/images/jhoome.jpg"
    },  
     {
        title:"Besharam Rang",
        artist:"Vishal-Shekhar, Shilpa Rao, Caralisa Monteiro",
        src:"assets/songs/Besharam Rang Pathaan 128 Kbps.mp3",
        cover:"assets/images/besharam.jpg"
    },  
    {
        title:"Lutt Putt Gaya",
        artist:"Pritam, Arijit Singh",
        src:"assets/songs/Lutt Putt Gaya Dunki 128 Kbps.mp3",
        cover:"assets/images/lutput.jpg"
    },
     {
        title:"Chaleya",
        artist:"Anirudh Ravichander, Arijit Singh, Shilpa Rao",
        src:"assets/songs/Chaleya Jawan 128 Kbps.mp3",
        cover:"assets/images/chaleya.jpg"
    },
      {
        title:"Nikle The Kabhi Hum Ghar Se",
        artist:"Pritam, Sonu Nigam",
        src:"assets/songs/Nikle The Kabhi Hum Ghar Se Dunki 128 Kbps.mp3",
        cover:"assets/images/niklethe.jpg"
    },
    {
        title:"Taajdaar E Haram",
        artist:"Atif Aslam",
        src:"assets/songs/Tajdar-E-Haram (PenduJatt.Com.Se).mp3",
        cover:"assets/images/tajdar.jpg"
    },
    {
        title:"Ye Toone Kya Kiya",
        artist:"Pritam, Javed Bashir",
        src:"assets/songs/Ye Tune Kya Kiya - Once Upon A Time In Mumbaai Dobara 128 Kbps.mp3",
        cover:"assets/images/kyakiya.jpg"
    },
    {
        title:"Mitti Ke Bete",
        artist:"Mithoon, Sonu Nigam",
        src:"assets/songs/Mitti Ke Bete Border 2 128 Kbps.mp3",
        cover:"assets/images/mitti.jpg"
    },
    {  title:"Hindustan Meri Jaan",
        artist:"Mithoon, Mohit Chauhan, B Praak",
        src:"assets/songs/Hindustan Meri Jaan Border 2 128 Kbps.mp3",
        cover:"assets/images/hindustan.jpg"
    },
    {  title:"Jaate Hue Lamho",
        artist:"Mithoon, Roop Kumar Rathod, Vishal Mishra",
        src:"assets/songs/Jaate Hue Lamhon Border 2 128 Kbps.mp3",
        cover:"assets/images/lamho.jpg"
    },
    {  title:"Dekhte Dekhte",
        artist:"Rochak Kohli, Atif Aslam",
        src:"assets/songs/Dekhte Dekhte Batti Gul Meter Chalu 128 Kbps.mp3",
        cover:"assets/images/dekhte.jpg"
    },
    {  title:"Awara Angara",
        artist:"Faheem Abdullah, A.R. Rahman",
        src:"assets/songs/Aawaara Angaara Tere Ishk Mein 128 Kbps.mp3",
        cover:"assets/images/awara.jpg"
    },
    {  title:"Dil Lagana Mana Tha",
        artist:"Krish Mondal, Kishore Mondal ",
        src:"assets/songs/stream.mp3",
        cover:"assets/images/dillagana.jpg"
    },
     {  title:"Hindustan Meri Jaan Live",
        artist:"Mithoon",
        src:"assets/songs/Hindustan Meri Jaan - Live at INS Vikrant  BORDER 2  Sunny Deol  Mithoon, Manoj Muntashir.mp3",
        cover:"assets/images/zindabad.jpg"
    },
    {  title:"Koi Kahe Kehta Rahe",
        artist:"Shankar-Ehsaan-Loy, Shankar Mahadevan, Shaan, KK",
        src:"assets/songs/Koi Kahe Kehta Rahe [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/koikahe.jpg"
    },
    {  title:"Suno Na Sangemarmar",
        artist:"Jeet Ganguly, Arijit Singh",
        src:"assets/songs/Suno Na Sangemarmar Youngistaan 128 Kbps.mp3",
        cover:"assets/images/suno-na-sangemarmar-guitar-tabs-jxykj5gj.jpeg"
    },
     {  title:"Ve Kamleya",
        artist:"Arijit Singh, Shreya Ghoshal",
        src:"assets/songs/Ve Kamleya Rocky Aur Rani Kii Prem Kahaani 128 Kbps.mp3",
        cover:"assets/images/vekamleya.jpg"
    },
    {  title:"Khairiyat",
        artist:"Pritam , Arijit Singh",
        src:"assets/songs/Khairiyat Chhichhore 128 Kbps.mp3",
        cover:"assets/images/khairiyat.jpg"
    },
    {  title:"Ve Kamleya Asees Kaur Version",
        artist:"Asees Kaur",
        src:"assets/songs/Ve Kamleya - Asees Version (PenduJatt.Com.Se).mp3",
        cover:"assets/images/asees.jpg"
    },
    {  title:"Soulmate",
        artist:"Arijit Singh, Baadshah",
        src:"assets/songs/Soulmate Ek Tha Raja 128 Kbps.mp3",
        cover:"assets/images/soulmate.jpg"
    },
    {  title:"The Breakup Song",
        artist:"Pritam, Arijit Singh, Baadshah",
        src:"assets/songs/The Breakup Song - Ae Dil Hai Mushkil (pagalall.com).mp3",
        cover:"assets/images/breakup.jpg"
    },
    {  title:"Ud Jaa Kaale Kawa",
        artist:"Mithoon, Udit Narayan, Alka Yagnik",
        src:"assets/songs/Udd Jaa Kaale Kaava  Gadar 2  Sunny Deol, Ameesha  Mithoon, Udit N, Alka Y  Uttam S  Lyrical.mp3",
        cover:"assets/images/udja.jpg"
    },
    {  title:"Dil Jhoom jhoom Vishal Mishra Version",
        artist:"Mithoon, Vishal Mishra",
        src:"assets/songs/Vishal_Mishra_-_Dil_Jhoom_OST_Gadar_2_(mp3.pm).mp3",
        cover:"assets/images/diljhoom.jpg"
    },
    {  title:"Dil Jhoom jhoom",
        artist:"Mithoon, Arijit Singh",
        src:"assets/songs/Dil Jhoom8 Gadar 2 128 Kbps.mp3",
        cover:"assets/images/jhoom.jpg"
    },
    {  title:"Chal Tere Ishq Mein",
        artist:"Mithoon, Neeti Mohan, Vishal Mishra",
        src:"assets/songs/Chal Tere Ishq Mein - pagalmusic.mp3",
        cover:"assets/images/tereishq.jpg"
    },
    {  title:"Ud Jaa Kaale Kawa Climax Version",
        artist:"Mithoon, Udit Narayan, Jubin Nautiyal",
        src:"assets/songs/Udd Jaa Kaale Kaava (Climax Version) - Full Audio  Gadar 2  Sunny D, Ameesha Mithoon, Udit, Jubin.mp3",
        cover:"assets/images/climax.jpg"
    },
    {  title:"Mere Haathon Mein",
        artist:"Sonu Nigam, Sunidhi Chauhan",
        src:"assets/songs/Mere Haath Mein Fanaa 128 Kbps.mp3",
        cover:"assets/images/mere hath me.jpg"
    },
    {  title:"Aya Tere Dar Par",
        artist:"Ahmed Hussain, Javed Hussain, Mohd. Hussain, Mohammed Vakil, Mohammad Hussein",
        src:"assets/songs/Aaya Tere Dar Par.mp3",
        cover:"assets/images/aya.jpg"
    },
    {  title:"Pyaar Ki Ek Kahani",
        artist:"Sonu Nigam, Shreya Ghoshal",
        src:"assets/songs/Pyaar Ki Ek Kahani Krrish 128 Kbps.mp3",
        cover:"assets/images/pyar.jpg"
    },
    {
         title:"Ramba Ho Remix",
        artist:"Usha Uthup, Madhubanti Bagchi",
        src:"assets/songs/Ramba Ho Dhurandhar 128 Kbps.mp3",
        cover:"assets/images/rambaho.jpg"
    
    },
    {
        title:"Lagdi Lahore ",
        artist:"Guru Randhawa",
        src:"assets/songs/Lahore Guru Randhawa 128 Kbps.mp3",
        cover:"assets/images/lahore.jpg"
    
    },
    {
        title:"Made In India",
        artist:"Guru Randhawa",
        src:"assets/songs/Made In India - Guru Randhawa.mp3",
        cover:"assets/images/madeinindia.jpg"
    
    },
    {
        title:"Tumhe Kitna Pyaar Karte ",
        artist:"Mithoon, Arijit Singh",
        src:"assets/songs/Tumhe Kitna Pyaar Karte Bawaal 128 Kbps.mp3",
        cover:"assets/images/pyarkarte.jpg"
    
    },
    {
        title:"Jaaneman Do You Know",
        artist:"Shaan, Shreya Ghoshal",
        src:"assets/songs/Do U Know (PenduJatt.Com.Se).mp3",
        cover:"assets/images/know.jpg"
    },
    {
        title:"Ye Dil Diwana",
        artist:"Sonu Nigam",
        src:"assets/songs/Yeh Dil Deewana (PenduJatt.Com.Se).mp3",
        cover:"assets/images/dildiwana.jpg"
    },
    {
        title:"Main Hoon Na",
        artist:"Sonu Nigam, Shreya Ghoshal",
        src:"assets/songs/Main Hoon Na Sonu Nigam 128 Kbps.mp3",
        cover:"assets/images/main.jpg"
    },
     {
        title:"Main Hoon Na Sad Version",
        artist:"Abhijeet",
        src:"assets/songs/Main Hoon Na Sad Abhijeet 128 Kbps.mp3",
        cover:"assets/images/sad.jpg"
    },
     {
        title:"Gori Gori ",
        artist:"Annu Malik, KK, Shreya Ghoshal, Sunidhi Chauhan,Abhijeet",
        src:"assets/songs/Gori Gori Gori Gori Main Hoon Na 128 Kbps.mp3",
        cover:"assets/images/gori.jpg"
    },
    {
        title:"Chunari Chunari",
        artist:"Abhijeet,Anuradha Sriram",
        src:"assets/songs/Chunari Chunari [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/chunari.jpg"
    },
    {
        title:"Hori Re Rasiya",
        artist:"Maithili Thakur, Seedhe Maut, Ravi Kishan, Mahan",
        src:"assets/songs/Holi Re Rasiya - Maithili Thakur 128 Kbps.mp3",
        cover:"assets/images/hori.jpg"
    },
    {
        title:"Ajab Si",
        artist:"Vishal-Shekhar, KK",
        src:"assets/songs/Ajab Si Om Shanti Om 128 Kbps.mp3",
        cover:"assets/images/ajab.jpg"
    },
    {
        title:"Dhoom Taana",
        artist:"Abhijeet, Shreya Ghoshal",
        src:"assets/songs/Dhoom Taana Om Shanti Om 128 Kbps.mp3",
        cover:"assets/images/dhoomtana.jpg"
    },
     {
        title:"Tumhe Jo Maine Dekha",
        artist:"Abhijeet, Shreya Ghoshal",
        src:"assets/songs/Tumhe Jo Maine Dekha Main Hoon Na 128 Kbps.mp3",
        cover:"assets/images/tumhe.jpg"
    },
     {
        title:"Aaj Unse Kehna Hai Hame",
        artist:"Aishwarya Majmudar, Palak Muchhal, Shaan",
        src:"assets/songs/Aaj Unse Kehna Hai Prem Ratan Dhan Payo 128 Kbps.mp3",
        cover:"assets/images/kehna.jpg"
    },
     {
        title:"Aaj Unse Milna Hai Hame",
        artist:"Shaan",
        src:"assets/songs/Aaj Unse Milna Hai Prem Ratan Dhan Payo 128 Kbps.mp3",
        cover:"assets/images/milna.jpg"
    },
     {
        title:"Bum Bum Bole",
        artist:"Shaan, Aamir Khan",
        src:"assets/songs/Bum Bum Bole [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/bum.jpg"
    },
    {
        title:"Apna Har Din Aise Jiyo",
        artist:"Shaan, Anoushka Manchanda",
        src:"assets/songs/Golmaal_3_-_Apna_Har_Din_Shaan_Anushka_Manchanda_(mp3.pm).mp3",
        cover:"assets/images/har.jpg"
    },
    {
        title:"Tere Naina Bade Kaatil",
        artist:"Shaan, Shreya Ghoshal",
        src:"assets/songs/Tere-Naina-Bade-Katil.mp3",
        cover:"assets/images/nayna.jpg"
    },
    {
        title:"Dil Leke Dard E Dil",
        artist:"Shaan, Shreya Ghoshal",
        src:"assets/songs/Dil Leke Dard E Dil De Gaye(KoshalWorld.Com).mp3",
        cover:"assets/images/dileke.jpg"
    },
    {
        title:"Pathaan BGM",
        artist:"Vishal - Shekhar",
        src:"assets/songs/Pathaans Theme Pathaan 128 Kbps.mp3",
        cover:"assets/images/jhoome.jpg"
    },
    {
        title:"Main Hoon Don",
        artist:"Shaan",
        src:"assets/songs/Main Hoon Don (Full Song) Film - Don- The Chase Begins Again.mp3",
        cover:"assets/images/don.jpg"
    },
     {
        title:"FA9LA",
        artist:"Daffy, Flipperachi",
        src:"assets/songs/baloch.mp3",
        cover:"assets/images/baloch.jpg"
    },
      {
        title:"Sun Raha Hai Na Tu",
        artist:"Ankit Tiwari",
        src:"assets/songs/Sunn Raha Hai Na Tu Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor.mp3",
        cover:"assets/images/sun.jpg"
    }, 
     {
        title:"Main Phir Bhi Tumko Chahunga",
        artist:"Arijit Singh, Shasha Tirupati",
        src:"assets/songs/Phir Bhi Tumko Chaahunga  Arijit Singh  Arjun Kapoor, Shraddha Kapoor  Mithoon, Manoj Muntashir.mp3",
        cover:"assets/images/chahunga.jpg"
    },
     {
        title:"Halka Halka Suroor Hai",
        artist:"Sunidhi Chauhan,Divya Kumar",
        src:"assets/songs/Halka Halka (PenduJatt.Com.Se).mp3",
        cover:"assets/images/Halka.jpg"
    },
      {
        title:"Hamari Adhuri Kanhani",
        artist:"Arjit Singh",
        src:"assets/songs/Hamari Adhuri Kahani-(Mr-Jat.in).mp3",
        cover:"assets/images/adhuri.jpg"
    },
    {
        title:"Ha Hasi Ban Gaye",
        artist:"Ami Mishra",
        src:"assets/songs/Hasi Ban Gaye-(SambalpuriStar.In).mp3",
        cover:"assets/images/adhuri.jpg"
    },
    {
        title:"Malang",
        artist:"Siddharth Mahadevan, Shilpa Rao",
        src:"assets/songs/Malang Dhoom 3 128 Kbps.mp3",
        cover:"assets/images/dhoom.jpg"
    },
    {
        title:"Tu Hi Junoon ",
        artist:"Mohit Chauhan",
        src:"assets/songs/Tu Hi Junoon Dhoom 3 128 Kbps.mp3",
        cover:"assets/images/dhoom.jpg"
    },
    {
        title:"Let's Rock Now Sohniye ",
        artist:"Shaan , Tulsi Kumar",
        src:"assets/songs/Lets Rock Soniye Bhool Bhulaiyaa 128 Kbps.mp3",
        cover:"assets/images/rock.jpg"
    },
    







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