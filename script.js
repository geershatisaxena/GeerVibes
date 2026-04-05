/* ============================================================
   GeerVibes — script.js
   Premium music streaming app — clean, modular, fully commented
   OPTIMIZED: Low data usage, lazy loading, performance
   ============================================================ */

'use strict';

/* ============================================================
   1. SONG DATA
   ============================================================ */
const SONGS = [
  
 {
        id:1,
        title:"Vande Maatrabhoomi",
        artist:"Geershati Saxena",
        src:"assets/songs/Vande Maaatrabhoomi.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png",
        coverThumb:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png",
        faved: false
    },
    {
        id:2,
        title:"Hum Katha Sunate Ram Sakal Gun Dham Ki",
        artist:"Kavita Krishnamoorti, Hemlata, Ravindra Jain",
        src:"assets/songs/Hum Katha Sunate Ram Sakal Gun Dham Ki- [PagalWorld.NL].mp3",
        cover:"assets/images/kathasunate.jpg",
        coverThumb:"assets/images/kathasunate.jpg",
        faved: false
    },
    {
        id:3,
        title:"Mahisasura Mardini Stotram",
        artist:"Dr Kumar Vishwas",
        src:"assets/songs/Aigiri Nandini  Dr Kumar Vishwas  महषसर मरदन सततर  Navratri Special.mp3",
        cover:"assets/images/ayigiri.jpg",
        coverThumb:"assets/images/ayigiri.jpg",
        faved: false
    },
    {
        id:4,
        title:"Gajanana Gajanana Gajanana Ganaraya",
        artist:"Sukhwinder Singh",
        src:"assets/songs/Gajanana - Bajirao Mastani 128 Kbps.mp3",
        cover:"assets/images/ganeshji.jpg",
        coverThumb:"assets/images/ganeshji.jpg",
        faved: false

    },
    {
        id:5,
        title:"Siya Ram",
        artist:"Raaj Ashoo, Jubin Nautiyal, Jaya Kishori",
        src:"assets/songs/Siya Ram (PenduJatt.Com.Se).mp3",
        cover:"assets/images/ramji.jpg",
        coverThumb:"assets/images/ramji.jpg",
        faved: false
    },
    {
        id:6,
        title:"Rasputin",
        artist:"Boney M.",
        src:"assets/songs/Boney M. - Rasputin (Sopot Festival 1979).mp3",
        cover:"assets/images/rasputin.jpg",
        coverThumb:"assets/images/rasputin.jpg",
        faved: false
    },
    {
        id:7,
        title: "Mere Mehboob Tera ",
        artist: "Shilpa Rao, Sachet Tandon , Sachin-Jigar ",
        src: "assets/songs/Mere Mehboob Vicky Vidya Ka Woh Wala Video 128 Kbps.mp3",
        cover: "assets/images/mehboob.jpg",
        coverThumb: "assets/images/mehboob.jpg",
        faved: false
    },
    {
        id:8,
        title:"Ram Raja Bhi Hain aur Tapasvi Bhi Hain",
        artist:"Dr Kumar Vishwas",
        src:"assets/songs/Ram Raja Bhi Hain Aur Tapasvi Bhi Hain  Dr Kumar Vishwas  Full HD Video.mp3",
        cover:"assets/images/rajaram.jpg",
        coverThumb:"assets/images/rajaram.jpg",
        faved: false
    },
    {
        id:9,
        title:"Zara Halke Gaadi Haako",
        artist:"Dr Kumar Vishwas",
        src:"assets/songs/ज़र हलक गड़ हक  Zara Halke Gaadi Haako  Dr Kumar Vishwas.mp3",
        cover:"assets/images/Halkegaadi.jpg",
        coverThumb:"assets/images/Halkegaadi.jpg",
        faved: false
    },
    {
        id:10,
        title:"Tune jo Na Kaha",
        artist:"Mohit Chauhan",
        src:"assets/songs/Tune Jo Na Kaha(KoshalWorld.Com).mp3",
        cover:"assets/images/nnm.jpg",
        coverThumb:"assets/images/nnm.jpg",
        faved: false
    },
   {
        id:11,
        title:"Vande Maatrabhoomi 2",
        artist:"Geershati Saxena",
        src:"assets/songs/Vande Maatrabhoomi 2.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png",
        coverThumb:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png",
        faved: false
    },  
        {id:12,
        title: "Mere Kanha",
        artist: "Jaya Kishori, Jubin Nautiyal",
        src: "assets/songs/Mere Kanha.mp3",
        cover: "assets/images/merekanha.jpg",
        coverThumb: "assets/images/merekanha.jpg",
        faved: false
    },
     {id:13,
        title: "Bolo Har Har Har ",
        artist: "Mithoon, Mohit Chauhan, Sukhwinder Singh ft. Badshah, Megha Sriram Dalton, Anugrah",
        src: "assets/songs/Bolo Har.mp3",
        cover: "assets/images/shiva.jpg",
        coverThumb: "assets/images/shiva.jpg",
        faved: false
    },
    {
        id:14,

        title: "Aadiyogi",
        artist: "Kailash Kher, Sadhguru",
        src: "assets/songs/adiyogi.mp3",
        cover: "assets/images/adiyogi.jpg",
        coverThumb: "assets/images/adiyogi.jpg",
        faved: false
    },
 {id:15,
        title: "Radha Gori Gori",
        artist: "Indresh Upadhyay, B Praak",
        src: "assets/songs/Rgg.mp3",
        cover: "assets/images/Rgg.jpg",
        coverThumb: "assets/images/Rgg.jpg",
        faved: false
    },
{id:16,
        title: "Oonchi Oonchi Wadi Me Baste Hai Bhole Shankar",
        artist: "Hansraj Raghuwanshi",
        src: "assets/songs/Oo.mp3",
        cover: "assets/images/Oo.jpg",
        coverThumb: "assets/images/Oo.jpg",
        faved: false
    },
 
   {id:17,
        title: "Jay Shree Mahakal",
        artist: "Kailash Kher",
        src: "assets/songs/Jsm.mp3",
        cover: "assets/images/Jsm.jpg",
        coverThumb: "assets/images/Jsm.jpg",
        faved: false
    },
    {id:18,
        title: "Jee Karda Mar Jane ka",
        artist: "Sachin-Jigar, Divya Kumar, Priya Saraiya",
        src: "assets/songs/Jee karda.mp3",
        cover: "assets/images/Jee.jpg",
        coverThumb: "assets/images/Jee.jpg",
        faved: false
    },
    {id:19,
        title:"Hare Krishna Hare Ram",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Hare Krishna Hare Rama-(Mr-Jat.in).mp3",
        cover:"assets/images/harekrishn.jpg",
        coverThumb:"assets/images/harekrishn.jpg",
        faved: false
    },
     {id:20,
        title:"Shri Krishna Govind Hare Murari",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Shri Krishna Govind Hare Murari Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/krishn.jpg",
        coverThumb:"assets/images/krishn.jpg",
        faved: false
    },
 {id:21,
        title: "Jai Shree Mahakaal",
        artist: "Shankar Mahadevan, Kailash Kher, Sonu Nigam, Shaan, Arijit Singh",
        src: "assets/songs/Mahakal.mp3",
        cover: "assets/images/Mahakal.jpg",
        coverThumb: "assets/images/Mahakal.jpg",
        faved: false
    },
    {id:22,
        title:"Aaj Ki Raat",
        artist:"Sachin-Jigar, Madhubanti Bagchi, Divya Kumar",
        src:"assets/songs/Aaj Ki Raat Stree 2 128 Kbps.mp3",
        cover:"assets/images/aajraat.jpg",
        coverThumb:"assets/images/aajraat.jpg",
        faved: false
    },
    {id:23,
        title:"Sapphire",
        artist:"Ed Sheeran, Arijit Singh",
        src:"assets/songs/Ed_Sheeran_Ft_Arijit_Singh_-_Sapphire_Offblogmedia.com.mp3",
        cover:"assets/images/saphire.jpg",
        coverThumb:"assets/images/saphire.jpg",
        faved: false
    },
    {id:24,
        title:"Aayi Nahi",
        artist:"Sachin-Jigar, Pawan Singh, Divya Kumar, Simran Choudhary",
        src:"assets/songs/Aayi Nai Stree 2 128 Kbps.mp3",
        cover:"assets/images/ayinhi.jpg",
        coverThumb:"assets/images/ayinhi.jpg",
        faved: false
    },
    {id:25,
        title:"Zinda Banda",
        artist:"Anirudh Ravichander",
        src:"assets/songs/Zinda Banda (Jawan)-(Mr-Jat.in).mp3",
        cover:"assets/images/zb.jpg",
        coverThumb:"assets/images/zb.jpg",
        faved: false
    },
    
    {id:26,
        title: "Barsaat Ho Jaaye",
        artist: "Jubin Nautiyal",
        src: "assets/songs/128-Barsaat Ho Jaaye - Jubin Nautiyal 128 Kbps.mp3",
        cover: "assets/images/barsat.jpg",
        coverThumb: "assets/images/barsat.jpg",
        faved: false
    },
     {id:27,
        title:"Deva Shree Ganesha",
        artist:"Ajay - Atul, Ajay Gogavale",
        src:"assets/songs/Deva Shree Ganesha Agneepath 128 Kbps.mp3",
        cover:"assets/images/bappa.jpg",
        coverThumb:"assets/images/bappa.jpg",
        faved: false
    },
    {id:28,
        title:"Teri Ore",
        artist:"Shreya Ghoshal, Rahat Fateh Ali Khan",
        src:"assets/songs/Teri Ore.mp3",
        cover:"assets/images/teri ore.jpg",
        coverThumb:"assets/images/teri ore.jpg",
        faved: false
    },
   {id:29,
        title:"Chaand Sifarish",
        artist:"Jatin - Lalit,Shaan, Kailash Kher",
        src:"assets/songs/Cf.mp3",
        cover:"assets/images/cs.jpg",
        coverThumb:"assets/images/cs.jpg",
        faved: false
    },
    {id:30,
        title:"Mast Nazro Se Allah Bachaye",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Mast Nazro Se Allah Bachaye.mp3",
        cover:"assets/images/mastnazrose.jpg",
        coverThumb:"assets/images/mastnazrose.jpg",
        faved: false
    },
    {id:31,
        title:"Tujhe Bhoolna",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Tujhe bhoolna.mp3",
        cover:"assets/images/tujhebhoolba.jpg",
        coverThumb:"assets/images/tujhebhoolba.jpg",
        faved: false
    },
    {id:32,
       title:"Aaya Re Toofaan",
       artist:"A.R. Rahman, Vaishali Samant",
       src:"assets/songs/Aaya Re Toofan Chhaava 128 Kbps.mp3",
      cover:"assets/images/toofaan.jpg",
      coverThumb:"assets/images/toofaan.jpg",
      faved: false
    },
    {id:33,
        title:"Kesariya",
        artist:"Arijit Singh",
        src:"assets/songs/Kesariya.mp3",
        cover:"assets/images/kesariya.jpg",
        coverThumb:"assets/images/kesariya.jpg",
        faved: false
    },
    {id:34,
        title:"My Dil Goes Mmmm",
        artist:"Shaan, Gayatri Iyer",
        src:"assets/songs/My Dil Goes Mmmm - Shaan and Gayatri Iyer.mp3",
        cover:"assets/images/mmmm.jpg",
        coverThumb:"assets/images/mmmm.jpg",
        faved: false
    },
    {id:35,
        title: "High Rated Gabru",
        artist: "Guru Randhawa",
        src: "assets/songs/High Rated Gabru - Guru Randhawa.mp3",
        cover: "assets/images/high.jpg",
        coverThumb: "assets/images/high.jpg",
        faved: false
    },
    {id:36,
        title: "Aye Khuda",
        artist: "Mithoon, Kshitij Tarey",
        src: "assets/songs/Aye Khuda - Murder 2 128 Kbps.mp3",
        cover: "assets/images/ayekhuda.jpg",
        coverThumb: "assets/images/ayekhuda.jpg",
        faved: false
    },
    {id:37,
        title: "Toh Aagye Hum",
        artist: "Mithoon, Jubin Nautiyal",
        src: "assets/songs/Toh aagye hm.mp3",
        cover: "assets/images/aagye.jpg",
        coverThumb: "assets/images/aagye.jpg",
        faved: false
    },
     {id:38,
        title: "Bas Itna Sa Khwab Hai",
        artist: "Abhijeet Bhattacharya",
        src: "assets/songs/Chaand Taare Yes Boss 128 Kbps.mp3",
        cover: "assets/images/ct.jpg",
        coverThumb: "assets/images/ct.jpg",
        faved: false
    },
    {id:39,
        title: "Tumse Milke Dil Ka Hai Jo Haal",
        artist: "Annu Mallik, Sonu Nigam, Altaf Sabri, Sabri Brothers",
        src: "assets/songs/Tumse Milke Dilka Jo Haal(KoshalWorld.Com).mp3",
        cover: "assets/images/mhn.jpg",
        coverThumb: "assets/images/mhn.jpg",
        faved: false
    },
    {id:40,
        title: "Aasman Rootha Panchayat Season 3",
        artist: "Swanand Kirkire",
        src: "assets/songs/Aasman Rootha Panchayat Season 3 128 Kbps.mp3",
        cover: "assets/images/asma.jpg",
        coverThumb: "assets/images/asma.jpg",
        faved: false
    },
   {id:41,
     title:"Mere Ghar Ram Aaye Hain",
        artist:"Jubin Nautiyal, Payal Dev",
        src:"assets/songs/Mere Ghar Ram Aaye Hain Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/raamji.jpg",
        coverThumb:"assets/images/raamji.jpg",
        faved: false
   },
    {id:42,
        title:"Dhun",
        artist:"Mithoon, Arijit Singh",
        src:"assets/songs/Dhun Saiyaara 128 Kbps.mp3",
        cover:"assets/images/dhun.jpg",
        coverThumb:"assets/images/dhun.jpg",
        faved: false
    },
    {id:43,
        title:"O Ri Chiraiya",
        artist:"Swanand Kirkire",
        src:"assets/songs/O_Ri_Chiraiya-(DownloadNe.in).mp3",
        cover:"assets/images/chiraiya.jpg",
        coverThumb:"assets/images/chiraiya.jpg",
        faved: false
    },
    {id:44,
        title:"Phir Mohabbat",
        artist:"Mithoon, Mohammad Irfan, Arijit Singh, Saim Bhatt",
        src:"assets/songs/Phir Mohabbat Murder 2-(Mr-Jat.in).mp3",
        cover:"assets/images/pm.jpg",
        coverThumb:"assets/images/pm.jpg",
        faved: false
    },
    {id:45,
        title:"Raatan Lambiya",
        artist:"Jubin Nautiyal, Asees Kaur",
        src:"assets/songs/Raatan Lmbiya.mp3",
        cover:"assets/images/rl.jpg",
        coverThumb:"assets/images/rl.jpg",
        faved: false
    },
    {id:46,
        title:"Kaagaz ke 2 pankh leke",
        artist:"Amit Trivedi, Swanand Kirkire",
        src:"assets/songs/Monta Re - Lootera 320 Kbps.mp3",
        cover:"assets/images/montare.jpg",
        coverThumb:"assets/images/montare.jpg",
        faved: false
    },
    {id:47,
        title:"Tum Hi Aana",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Tum Hi Aana - Marjaavaan.mp3",
        cover:"assets/images/tumhi.jpg",
        coverThumb:"assets/images/tumhi.jpg",
        faved: false
    },
    {id:48,
        title:"Daastaan-E-Om Shanti Om ",
        artist:"Shaan",
        src:"assets/songs/Dastaan E Om Shanti Om Shaan 128 Kbps.mp3",
        cover:"assets/images/deom.jpg",
        coverThumb:"assets/images/deom.jpg",
        faved: false
    },
    {id:4,
        title:"Shape of You",
        artist:"Ed Sheeran",
        src:"assets/songs/Ed_Sheeran_-_Shape_of_You_Offblogmedia.com.mp3",
        cover:"assets/images/ed sheeran.jpg",
        coverThumb:"assets/images/ed sheeran.jpg",
        faved: false
    },
    {id:50,
        title:"Jenne Laga Hoon",
        artist:"Sachin-Jigar, Shreya Ghoshal, Atif Aslam",
        src:"assets/songs/Jeene Laga hoo.mp3",
        cover:"assets/images/jeene laga hoon.jpg",
        coverThumb:"assets/images/jeene laga hoon.jpg",
        faved: false
    },
    {id:51,
        title:"Meri Zindagi Hai Tu",
        artist:"Jubin Nautiyal, Neeti Mohan",
        src:"assets/songs/Meri Zindagi.mp3",
        cover:"assets/images/zindagi.jpg",
        coverThumb:"assets/images/zindagi.jpg",
        faved: false
    },
    {id:52,
        title:"G.O.A.T",
        artist:"Diljit Dosanjh",
        src:"assets/songs/G.O.A.T - Diljit Dosanjh.mp3",
        cover:"assets/images/goat.jpg",
        coverThumb:"assets/images/goat.jpg",
        faved: false
    },
    {id:53,
        title:"Perfect",
        artist:"Ed Sheeran",
        src:"assets/songs/Perfect-(Mr-Jat.in).mp3",
        cover:"assets/images/ed sheeran.jpg",
        coverThumb:"assets/images/ed sheeran.jpg",
        faved: false
    },
   
    {id:54,
        title:"Teri Aankhon",
        artist:"Geershati Saxena",
        src:"assets/songs/Teri Aankho.mp3",
        cover:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png",
        coverThumb:"assets/images/ChatGPT Image Aug 13, 2025, 01_35_45 PM.png",
        faved: false
    },
    {id:55,
        title:"Deewangi Deewangi",
        artist:"Rahul Saxena, Shaan, Shreya Ghoshal, Sunidhi Chauhan, Udit Narayan",
        src:"assets/songs/Deewangi Deewangi Om Shanti Om 128 Kbps.mp3",
        cover:"assets/images/osho.jpg",
        coverThumb:"assets/images/osho.jpg",
        faved: false
    },
    {id:56,
        title:"Kaisa Ye Ishq Hai, Ajab Sa Risk Hai",
        artist:"Rahat Fateh Ali Khan",
        src:"assets/songs/Isq Risk-(Mr-Jat.in).mp3",
        cover:"assets/images/ishq risk.jpg",
        coverThumb:"assets/images/ishq risk.jpg",
        faved: false
    },
     {id:57,
        title:"Born to Shine",
        artist:"Diljit Dosanjh",
        src:"assets/songs/Born To Shine - Diljit Dosanjh.mp3",
        cover:"assets/images/dd.jpg",
        coverThumb:"assets/images/dd.jpg",
        faved: false
    },
    
   
    {id:58,
        title:"Saami Saami",
        artist:"Sunidhi Chauhan",
        src:"assets/songs/Saami Saami(PagalWorld.com.se).mp3",
        cover:"assets/images/saami.jpg",
        coverThumb:"assets/images/saami.jpg",
        faved: false
    },
    
    {id:59,
        title:"Darkhaast",
        artist:"Mithoon, Arijit Singh, Sunidhi Chauhan",
        src:"assets/songs/Darkhaast Shivaay 128 Kbps.mp3",
        cover:"assets/images/darkhast.jpg",
        coverThumb:"assets/images/darkhast.jpg",
        faved: false
    },
     {
        id:60,
        title:"Tere Vaste",
        artist:"Sachin-Jigar, Varun Jain, Shadab Faridi",
        src:"assets/songs/Tere Vaaste Zara Hatke Zara Bachke 128 Kbps.mp3",
        cover:"assets/images/tere vaste.jpg",
        coverThumb:"assets/images/tere vaste.jpg",
        faved: false
    },
    {
        id:61,
        title:"Tumse Kiran Dhoop Ki",
        artist:"Sachin-Jigar, Varun Jain, Shadab Faridi",
        src:"assets/songs/Tumse Kiran Dhoop Ki [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/tmse.jpg",
        coverThumb:"assets/images/tmse.jpg",
        faved: false
    },
    {id:62,
        title:"Do Dhaari Talwar",
        artist:"Sohail Sen, Shweta Pandit, Shahid Mallya",
        src:"assets/songs/Do Dhaari Talwaar Mere Brother Ki Dulhan 128 Kbps.mp3",
        cover:"assets/images/talwar.jpg",
        coverThumb:"assets/images/talwar.jpg",
        faved: false
    },
    {id:63,
        title:"Bulleya",
        artist:"Papon",
        src:"assets/songs/Bulleya Sultan 128 Kbps.mp3",
        cover:"assets/images/bulleya.jpg",
        coverThumb:"assets/images/bulleya.jpg",
        faved: false
    },
    {id:64,
        title:"Manzoor Hai",
        artist:"Salim-Sulaiman, Armaan Malik",
        src:"assets/songs/Manzoor Hai - Armaan Malik [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/manzoor.jpg",
        coverThumb:"assets/images/manzoor.jpg",
        faved: false
    },
    {
        id:65,
        title:"Jaan Le Gayi",
        artist:"Salim-Sulaiman, Vishal Dadlani, Sonu Nigam",
        src:"assets/songs/Jaan Le Gayi(KoshalWorld.Com).mp3",
        cover:"assets/images/jaan.jpg",
        coverThumb:"assets/images/jaan.jpg",
        faved: false
    },
    {
        id:66,
        title:"Murli Ki Taano Si",
        artist:"Shaan",
        src:"assets/songs/Murli Ki Taanon Si Prem Ratan Dhan Payo 128 Kbps.mp3",
        cover:"assets/images/murli.jpg",
        coverThumb:"assets/images/murli.jpg",
        faved: false
    },
    {
        id:67,
        title: "Hind Ke Sitara",
        artist: "Manoj Tiwari",
        src: "assets/songs/Hind Ke Sitara Panchayat Season 3 128 Kbps.mp3",
        cover: "assets/images/asma.jpg",
        coverThumb: "assets/images/asma.jpg",
        faved: false
    },
     {
        id:68,
        title: "Chaar Kadam",
        artist: "Shreya Ghoshal, Shaan",
        src: "assets/songs/Chaar Kadam Pk 128 Kbps.mp3",
        cover: "assets/images/chaar.jpg",
        coverThumb: "assets/images/chaar.jpg",
        faved: false
    },
    {
        id:69,
        title: "Dil Diyan Gallan",
        artist: "Atif Aslam",
        src: "assets/songs/Dil Diyan Gallan Tiger Zinda Hai 128 Kbps.mp3",
        cover: "assets/images/dil.jpg",
        coverThumb: "assets/images/dil.jpg",
        faved: false
    },
    {
        id:70,
        title: "Mere Dholna 3.o",
        artist: "Amaal Mallik,Sonu Nigam",
        src: "assets/songs/Mere Dholna 3.0 Sonu Version Bhool Bhulaiyaa 3 128 Kbps.mp3",
        cover: "assets/images/bb3.jpg",
        coverThumb: "assets/images/bb3.jpg",
        faved: false
    },
    {
        id:71,
        title: "Mere Brother Ki Dulhan",
        artist: "Sohail Sen, KK",
        src: "assets/songs/Mere Brother ki dulhan.mp3",
        cover: "assets/images/mbkd.jpg",
        coverThumb: "assets/images/mbkd.jpg",
        faved: false
    },
     {
        id:72,
        title: "Srivalli",
        artist: "Javed Ali",
        src: "assets/songs/srivalli.mp3",
        cover: "assets/images/srivalli.jpg",
        coverThumb: "assets/images/srivalli.jpg",
        faved: false
    },
    {
        id:73,
        title: "Blue Eyes",
        artist: "Yo Yo Honey Singh",
        src: "assets/songs/blueeyes.mp3",
        cover: "assets/images/blueeyes.jpg",
        coverThumb: "assets/images/blueeyes.jpg",
        faved: false
    }, 
    {
        id:74,
        title: "Dil Chori",
        artist: "Yo Yo Honey Singh, Simar Kaur, Ishers",
        src: "assets/songs/dilchori.mp3",
        cover: "assets/images/dilchori.jpg",
        coverThumb: "assets/images/dilchori.jpg",
        faved: false
    },
      {
        id:75,
        title: "Bewafa Tera Yun Muskurana",
        artist: "Jubin Nautiyal",
        src: "assets/songs/Bewafa Tera Yun Muskurana.mp3",
        cover: "assets/images/bewafa.jpg",
        coverThumb: "assets/images/bewafa.jpg",
        faved: false
    },
     {
        id:76,
        title: "Bijlee Bijlee",
        artist: "Hardy Sandhu, Palak Tiwari",
        src: "assets/songs/Bijlee.mp3",
        cover: "assets/images/bijli.jpg",
        coverThumb: "assets/images/bijli.jpg",
        faved: false
    },
   {
        id:77,
        title: "Suit Suit",
        artist: "Guru Randhawa, Arjun",
        src: "assets/songs/suit.mp3",
        cover: "assets/images/suit.jpg",
        coverThumb: "assets/images/suit.jpg",
        faved: false
    },
    {
        id:78,
        title: "Naach Punjaban",
        artist: "Gippy Grewal, Zahrah S Khan, Tanishk Bagchi, Romy",
        src: "assets/songs/punjaban.mp3",
        cover: "assets/images/punjaban.jpg",
        coverThumb: "assets/images/punjaban.jpg",
        faved: false

    },
    {id:79,
        title: "Titliyan (Pata nahi ji konsa nasha karta hai)",
        artist: "Afsana Khan",
        src: "assets/songs/nasha.mp3",
        cover: "assets/images/nasha.jpg",
        coverThumb: "assets/images/nasha.jpg",
        faved: false
    },
     { 
        id:80,
        title: "Chennai Express Title Track",
        artist: "Vishal-Shekhar, S. P. Balasubrahmanyam, Jonita Gandhi",
        src: "assets/songs/chen.mp3",
        cover: "assets/images/ce.jpg",
        coverThumb: "assets/images/ce.jpg",
        faved: false
    },
     {
        id:81,
        title: "Tera Rasta ",
        artist: "Vishal-Shekhar,Amitabh Bhattacharya, Anusha Mani",
        src: "assets/songs/rasta.mp3",
        cover: "assets/images/ce.jpg",
        coverThumb: "assets/images/ce.jpg",
        faved: false
    },
     {
        id:82,
        title: "Teri Meethi Meethi",
        artist: "Jubin Nautiyal, Payal Dev",
        src: "assets/songs/mithi.mp3",
        cover: "assets/images/mithi.jpg",
        coverThumb: "assets/images/mithi.jpg",
        faved: false
    },
    {
        id:83,
        title: "Akelo Chal Padiyo",
        artist: "Sandesh Shandilya, Shradha Mishra",
        src: "assets/songs/Al.mp3",
        cover: "assets/images/Akelo.jpg",
        coverThumb: "assets/images/Akelo.jpg",
        faved: false
    },
    {
        id:84,
        title: "Ladki Kyon Ladko Si Nahi Hoti",
        artist: "Jatin-Lalit, Shaan, Alka Yagnik",
        src: "assets/songs/Ldk.mp3",
        cover: "assets/images/Ldk.jpg",
        coverThumb: "assets/images/Ldk.jpg",
        faved: false
    },
    {
        id:85,
        title: "Mahiye Jinna Sona",
        artist: "Darshan Raval",
        src: "assets/songs/Sona.mp3",
        cover: "assets/images/sona.jpg",
        coverThumb:"assets/images/sona.jpg"
    },
{id:86,
        title: "Tenu Le ke Mai Jawanga",
        artist: "Sonu Nigam, Mahalaxmi Iyer",
        src: "assets/songs/Sng.mp3",
        cover: "assets/images/Sng.jpg",
        coverThumb: "assets/images/Sng.jpg",
        faved: false
    },
{
        id:87,

        title: "Aao Milo Chale",
        artist: "Pritam, Shaan,Sultan Khan",
        src: "assets/songs/Amc.mp3",
        cover: "assets/images/amc.jpg",
        coverThumb: "assets/images/amc.jpg",
        faved: false
    },
{id:88,
        title: "Savera",
        artist: "Javed Ali, Madhubanti Bagchi",
        src: "assets/songs/Svr.mp3",
        cover: "assets/images/Sav.jpg",
        coverThumb: "assets/images/Sav.jpg",
        faved: false
    },
{
        id:89,
        title: "Lak 28 Kudi Da",
        artist: "Yo Yo Honey Singh, Diljit Dosanjh",
        src: "assets/songs/Lak.mp3",
        cover: "assets/images/Lak.jpg",
        coverThumb: "assets/images/Lak.jpg",
        faved: false
    },
{
        id:90,

        title: "Kal Ho Na Ho",
        artist: "Shankar-Ehsaan-Loy, Sonu Nigam",
        src: "assets/songs/Khn.mp3",
        cover: "assets/images/Khn.webp",
        coverThumb: "assets/images/Khn.webp",
        faved: false
    },
{
        id:91,
        title: "Param Sundari",
        artist: "A.R.Rahma,Shreya Ghoshal",
        src: "assets/songs/Ps.mp3",
        cover: "assets/images/Ps.jpg",
        coverThumb: "assets/images/Ps.jpg",
        faved: false
    },
{
        id:92,
        title: "Ruaan",
        artist: "Pritam, Arijit Singh",
        src: "assets/songs/R.mp3",
        cover: "assets/images/R.jpg",
        coverThumb: "assets/images/R.jpg",
        faved: false
    },
{
        id:93,
        title: "Kamariya",
        artist: "Aastha Gill, Sachin Sanghvi,   Jigar Saraiya, Divya Kumar",
        src: "assets/songs/K.mp3",
        cover: "assets/images/K.jpg",
        coverThumb: "assets/images/K.jpg",
        faved: false
    },

{
        id:94,
        title: "Baaki Sab Theek",
        artist: "Sachin Sanghvi, Jigar Saraiya, Amitabh Bhattacharya",
        src: "assets/songs/Bst.mp3",
        cover: "assets/images/Bst.jpg",
        coverThumb: "assets/images/Bst.jpg",
        faved: false
    },
{
        id:95,

        title:"Meri Bheegi Bheegi Si",
        artist:"R.D.Burman, Kishore Kumar",
        src:"assets/songs/Mbb.mp3",
        cover:"assets/images/Mbb.jpg",
        coverThumb:"assets/images/Mbb.jpg",
        faved: false
    },
{
        id:96,

        title: "Prem Ratan Dhan Payo",
        artist: "Himesh Reshammiya, Palak Muchhal",
        src: "assets/songs/Prdp.mp3",
        cover: "assets/images/Prdp.jpg",
        coverThumb: "assets/images/Prdp.jpg",
        faved: false
    },
{
        id:97,

        title: "Jalte Diye",
        artist: "Himesh Reshammiya, Anwesshaa, Vineet Singh, Harshdeep Kaur, Shabab Sabri, Chorus",
        src: "assets/songs/Jalte.mp3",
        cover: "assets/images/Jalte.jpg",
        coverThumb: "assets/images/Jalte.jpg",
        faved: false
    },
{id:98,
        title:"Ladki Pahadi",
        artist:"Amit Trivedi, Abhijeet Srivastava",
        src:"assets/songs/Lpi.mp3",
        cover: "assets/images/ladkipahadi.jpg",
        coverThumb: "assets/images/ladkipahadi.jpg",
        faved: false
   },
{id:99,
        title: "Maula Mere Maula",
        artist: "Mithoon, Roop Kumar Rathod",
        src: "assets/songs/Roop_Kumar_Rathod_-_Maula_Mere_Maula_Aankhen_Teri_(mp3.pm).mp3",
        cover: "assets/images/maula.jpg",
        coverThumb: "assets/images/maula.jpg",
        faved: false
    },
{id:100,
        title: "Javeda Zindagi(Tose Naina Laage)",
        artist: "Mithoon, Shilpa Rao, Kshitij Tarey",
        src: "assets/songs/Tose.mp3",
        cover: "assets/images/Tose.jpg",
        coverThumb: "assets/images/Tose.jpg",
        faved: false
    },
{id:101,
        title: "Zamana Lage",
        artist: "Pritam, Arijit Singh, Shashwat Singh",
        src: "assets/songs/Zamana.mp3",
        cover: "assets/images/Zamana.jpg",
        coverThumb: "assets/images/Zamana.jpg",
        faved: false
    },
{id:102,
        title: "Pyar Hota Kayi Baar Hai",
        artist: "Pritam, Arijit Singh, Charan",
        src: "assets/songs/Baar.mp3",
        cover: "assets/images/Baar.jpg",
        coverThumb: "assets/images/Baar.jpg",
        faved: false
    },
{id:103,
        title: "Show Me The Thumka",
        artist: "Pritam, Shashwat Singh, Sunidhi Chauhan",
        src: "assets/songs/Thu.mp3",
        cover: "assets/images/Thu.jpg",
        coverThumb: "assets/images/Thu.jpg",
        faved: false
    },
{id:104,
        title: "O Bedardeya",
        artist: "Pritam, Arijit Singh",
        src: "assets/songs/Bedard.mp3",
        cover: "assets/images/Bedard.jpg",
        coverThumb: "assets/images/Bedard.jpg",
        faved: false
    },
{id:105,
        title:"Apna Bana Le Piya",
        artist:"Sachin-Jigar, Arijit Singh",
        src:"assets/songs/Apna.mp3",
        cover:"assets/images/Apna.jpg",
        coverThumb: "assets/images/Apna.jpg",
        faved: false
    },
{id:106,
        title:"Ye Ganga Ka Kinara Hai",
        artist:"Dr Kumar Vishwas ",
        src:"assets/songs/Ganga.mp3",
        cover:"assets/images/Ganga.jpg",
        coverThumb: "assets/images/Ganga.jpg",
        faved: false
    },
{id:107,
        title:"Raam Mile Hain",
        artist:"Dr Kumar Vishwas ",
        src:"assets/songs/Mile.mp3",
        cover:"assets/images/Mile.jpg",
        coverThumb: "assets/images/Mile.jpg",
        faved: false
    },
{id:108,
        title:"Ghar More Pardesiya",
        artist:"Pritam, Shreya Ghoshal, Vaishali Mhade",
        src:"assets/songs/Pardesiya.mp3",
        cover:"assets/images/gharmore.jpg",
        coverThumb: "assets/images/gharmore.jpg",
        faved: false
    },
{id:109,
        title:"Apna Bana Le Piya",
        artist:"Sachin-Jigar, Arijit Singh",
        src:"assets/songs/Apna.mp3",
        cover:"assets/images/Apna.jpg",
        coverThumb: "assets/images/Apna.jpg",
        faved: false
    },
{id:110,
        title:"Meera Ke Krishna",
        artist:"Mamata Sharma, Dr Kumar Vishwas ",
        src:"assets/songs/रध क करज चक गई मर  Dr Kumar Vishwas  Meera.mp3",
        cover:"assets/images/Meera.png",
        coverThumb: "assets/images/Meera.png",
        faved: false
    },
{id:111,
        title:"Saavadhani Hati Durghatna Ghati",
        artist:"Anurag Saikiya, Romy",
        src:"assets/songs/Durghatna.mp3",
        cover:"assets/images/Durghatna.jpg",
        coverThumb: "assets/images/Durghatna.jpg",
        faved: false
    },
{id:112,
        title:"Dhokhebaazi",
        artist:"Sachin-Jigar,Shradha Mishra, Priya Saraiya",
        src:"assets/songs/Dhokebaazi.mp3",
        cover:"assets/images/Dhokebaazi.jpg",
        coverThumb: "assets/images/Dhokebaazi.jpg",
        faved: false
    },

{id:113,
        title:"Thumkeshwari",
        artist:"Sachin-Jigar, Divya Kumar, Ash King, Rashmeet Kaur",
        src:"assets/songs/Thumkeshwari.mp3",
        cover:"assets/images/Thumkeshwari.jpg",
        coverThumb: "assets/images/Thumkeshwari.jpg",
        faved: false
    },
{id:114,
        title:"Mai Aa Likhu",
        artist:"Faheem Abdullah, Rauhan Malik, Amir Ameer",
        src:"assets/songs/Aalikhu.mp3",
        cover:"assets/images/Aalikhu.jpg",
        coverThumb: "assets/images/Aalikhu.jpg",
        faved: false
    },
{id:115,
        title: "Aaj Mere Piya Ghar Ayenge",
        artist: "Kailash Kher",
        src: "assets/songs/Ave.mp3",
        cover: "assets/images/Ave.jpg",
        coverThumb: "assets/images/Ave.jpg",
        faved: false
    },
{id:116,
        title: "Khoobsoorati Par Teri",
        artist: "Sachin-Jigar, Vishal Mishra",
        src: "assets/songs/Khoobsurat.mp3",
        cover: "assets/images/Khoobsurat.jpg",
        coverThumb: "assets/images/Khoobsurat.jpg",
        faved: false
    },
{id:117,
        title: "Saiyara Mai Saiyara",
        artist: "Sohail Sen, Mohit Chauhan, Tarannum Mallik Jain",
        src: "assets/songs/Say.mp3",
        cover: "assets/images/Say.jpg",
        coverThumb: "assets/images/Say.jpg",
        faved: false
    },
{id:118,
        title: "Teri Deewani",
        artist: "Kailash Kher",
        src: "assets/songs/Deew.mp3",
        cover: "assets/images/Deew.jpg",
        coverThumb: "assets/images/Deew.jpg",
        faved: false
    },
{id:119,
        title: "Tumhare Hi Rahenge",
        artist: "Sachin-Jigar, Shilpa Rao, Varun Jain",
        src: "assets/songs/Thrh.mp3",
        cover: "assets/images/Thrh.jpg",
        coverThumb: "assets/images/Thrh.jpg",
        faved: false
    },
    {id:120,
        title:"Kuchh Toh Hua Hai",
        artist:"Shaan, Alka Yagnik",
        src:"assets/songs/Kuch To Hua Hai Kal Ho Naa Ho 128 Kbps.mp3",
        cover:"assets/images/800x800cc.jpg",
        coverThumb: "assets/images/800x800cc.jpg",
        faved: false
    },

{id:121,
        title: "Kaise Hua",
        artist: "Vishal Mishra",
        src: "assets/songs/Kaise.mp3",
        cover: "assets/images/Kaise.jpg",
        coverThumb: "assets/images/Kaise.jpg",
        faved: false
    },
 {id:122,
        title: "Raanjhan",
        artist: "Sachet-Parampara",
        src: "assets/songs/Raanjhan.mp3",
        cover: "assets/images/Raanjhan.jpg",
        coverThumb: "assets/images/Raanjhan.jpg",
        faved: false
    },
 {id:123,
        title: "Sun Sathiya",
        artist: "Sachin-Jigar, Divya Kumar, Priya Saraiya",
        src: "assets/songs/Sunsathiya.mp3",
        cover: "assets/images/Sunsathiya.jpg",
        coverThumb: "assets/images/Sunsathiya.jpg",
        faved: false
    },
 {id:124,
        title: "Naina x Shape of You",
        artist: "Diljit Dosanjh, Ed Sheeran",
        src: "assets/songs/Naina.mp3",
        cover: "assets/images/Naina.jpg",
        coverThumb: "assets/images/Naina.jpg",
        faved: false
    },
 {id:125,
        title: "Shaam Gulabi",
        artist: "Sachin-Jigar, Priya Saraiya , Jigar Saraiya",
        src: "assets/songs/Gulabi.mp3",
        cover: "assets/images/Gulabi.jpg",
        coverThumb: "assets/images/Gulabi.jpg",
        faved: false
    },
{id:126,
        title: "Sainyaara Title Track",
        artist: "Tanishk Bagchi , Faheem Abdullah",
        src: "assets/songs/Aneet.mp3",
        cover: "assets/images/Aneet.jpg",
        coverThumb: "assets/images/Aneet.jpg",
        faved: false
    },
{id:127,
        title: "Shukran Allah Walhamdulillah",
        artist: "Salim-Sulaiman,Sonu Nigam, Shreya Ghoshal,Salim Merchant",
        src: "assets/songs/Shukrallah.mp3",
        cover: "assets/images/Shukrallah.jpg",
        coverThumb: "assets/images/Shukrallah.jpg",
        faved: false
    },
{id:128,
        title: "Ainvayi Ainvayi",
        artist: "Salim-Sulaiman,Salim Merchant, Sunidhi Chauhan",
        src: "assets/songs/Ainvayi.mp3",
        cover: "assets/images/Ainvayi.jpg",
        coverThumb: "assets/images/Ainvayi.jpg",
        faved: false
    },
{id:129,
        title: "Shukranallah Walhamdulillahh live on Stage",
        artist: "Salim-Sulaiman,Sonu Nigam",
        src: "assets/songs/Shukranallah.mp3",
        cover: "assets/images/Shukranallah.jpg",
        coverThumb: "assets/images/Shukranallah.jpg",
        faved: false
    },
{id:130,
        title: "Ainvayi Ainvayi live on Stage",
        artist: "Salim-Sulaiman, Sunidhi Chauhan ",
        src: "assets/songs/Sslive.mp3",
        cover: "assets/images/Sslive.jpg",
        coverThumb: "assets/images/Sslive.jpg",
        faved: false
    },
{id:131,
        title:"Maula Mere Maula Live",
        artist:"Mithoon",
        src:"assets/songs/Eyes.mp3",
        cover:"assets/images/Eyes.jpg",
        coverThumb:"assets/images/Eyes.jpg",
        faved: false
    },
{id:132,
        title:"Zindagi Ne Zindagi Bhar Gham Diye",
        artist:"Mithoon",
        src:"assets/songs/Mausam.mp3",
        cover:"assets/images/Mausam.jpg",
        coverThumb: "assets/images/Mausam.jpg",
        faved: false
    },
{id:133,
        title: "Tumhare Bina",
        artist: "Dr Kumar Vishwas",
        src: "assets/songs/Tb.mp3",
        cover: "assets/images/Tb.jpg",
        coverThumb: "assets/images/Tb.jpg",
        faved: false
    },
{id:134,
        title: "Tees Maar Khan",
        artist: "Vishal-Shekhar,  Sonu Nigam",
        src: "assets/songs/Tmk.mp3",
        cover: "assets/images/Tmk.jpg",
        coverThumb: "assets/images/Tmk.jpg",
        faved: false
    },
{id:135,
        title: "Sheila Ki Jawani",
        artist: "Vishal-Shekhar, Sunidhi Chauhan, Vishal Dadlani",
        src: "assets/songs/Katrina.mp3",
        cover: "assets/images/Katrina.jpg",
        coverThumb: "assets/images/Katrina.jpg",
        faved: false
    },
{id:136,
        title: "Wallah Re Wallah",
        artist: "Vishal-Shekhar,  Shekhar Ravjiani, Kamal Khan, Raja Hasan, Shreya Ghoshal",
        src: "assets/songs/Wallah.mp3",
        cover: "assets/images/Wallah.jpg",
        coverThumb: "assets/images/Wallah.jpg",
        faved: false
    },
{id:137,
        title: "Happy Ending",
        artist: "Vishal-Shekhar, Prajakta Shukre, Harshit Saxena, Abhijeet Sawant, Debojit Saha",
        src: "assets/songs/Ending.mp3",
        cover: "assets/images/Ending.jpg",
        coverThumb: "assets/images/Ending.jpg",
        faved: false
    },
{id:138,
        title: "Swarn Swar Bharat",
        artist: "Kailash Kher, Suresh Wadkar, Ravi Kishan, Dr Kumar Vishwas",
        src: "assets/songs/Ssb.mp3",
        cover: "assets/images/Ssb.jpg",
        coverThumb: "assets/images/Ssb.jpg",
        faved: false
    },

{id:139,
        title: "Mast Aankhein",
        artist: "Tulsi Kumar, Jubin Nautiyal",
        src: "assets/songs/Tulsi.mp3",
        cover: "assets/images/Tulsi.jpg",
        coverThumb: "assets/images/Tulsi.jpg",
        faved: false
    },
{id:140,
        title: "Khaali Khaali Sa Hai",
        artist: "Anurag Saikiya, Romy",
        src: "assets/songs/Khali.mp3",
        cover: "assets/images/Khali.jpg",
        coverThumb: "assets/images/Khali.jpg",
        faved: false
    },
{id:141,
        title: "Luka Chuppi",
        artist: "A.R. Rahman,  Lata Mangeshkar",
        src: "assets/songs/Luka.mp3",
        cover: "assets/images/Luka.jpg",
        coverThumb: "assets/images/Luka.jpg",
        faved: false
    },
{id:142,
        title: "Chale Aana",
        artist: "Amaal Mallik, Armaan Mallik",
        src: "assets/songs/Chaleana.mp3",
        cover: "assets/images/Chaleana.jpg",
        coverThumb: "assets/images/Chaleana.jpg",
        faved: false
    },
{id:143,
        title: "Didi Tera Devar Deewana",
        artist: "Lata Mangeshkar, S. P. Balasubramaniam",
        src: "assets/songs/Devar.mp3",
        cover: "assets/images/Devar.jpg",
        coverThumb: "assets/images/Devar.jpg",
        faved: false
    },
{id:144,
        title: "Joote Do Paise Lo",
        artist: "Lata Mangeshkar, S. P. Balasubrahmanyam",
        src: "assets/songs/Joote.mp3",
        cover: "assets/images/Joote.jpg",
        coverThumb: "assets/images/Joote.jpg",
        faved: false
    },
{id:145,
        title: "Abrar's Entry",
        artist: "Harshvardhan",
        src: "assets/songs/Abrar.mp3",
        cover: "assets/images/Abrar.jpg",
        coverThumb: "assets/images/Abrar.jpg",
        faved: false
    },
{id:146,
        title: "Ranvijay's Entry",
        artist: "A.R Rehman",
        src: "assets/songs/Ranvijay.mp3",
        cover: "assets/images/Ranvijay.jpg",
        coverThumb: "assets/images/Ranvijay.jpg",
        faved: false
    },
{id:147,
        title: "Pehle Bhi Main",
        artist: "Vishal Mishra",
        src: "assets/songs/Pbm.mp3",
        cover: "assets/images/Pbm.jpg",
        coverThumb: "assets/images/Pbm.jpg",
        faved: false
    },
{id:148,
        title: "Satranga",
        artist: "Shreyash Puranik , Arijit Singh",
        src: "assets/songs/Satranga.mp3",
        cover: "assets/images/Satranga.jpg",
        coverThumb: "assets/images/Satranga.jpg",
        faved: false
    },
    {id:149,
        title: "Ghoomar",
        artist: "Sanjay Leela Bhansali ,Shreya Ghoshal, Swaroop Khan",
        src: "assets/songs/Ghoomar (PenduJatt.Com.Se).mp3",
        cover: "assets/images/ghoomar.jpeg",
        coverThumb:"assets/images/ghoomar.jpeg",
        faved: false
    },
    {id:150,
        title: "Pardesiya",
        artist: "Sachin-Jigar, Sonu Nigam, Krishnakali Saha",
        src: "assets/songs/Pardesiya [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Pardesiya.jpg",
        coverThumb: "assets/images/Pardesiya.jpg",
        faved: false
    },
    {id:151,
        title: "Aaiye Na Humra Bihar Mein",
        artist: "Advait Nemlekar, Keerthi Sagathia",
        src: "assets/songs/Ayee_Na_Humara_Bihar_Main.mp3",
        cover: "assets/images/BIHAR.jpg",
        coverThumb: "assets/images/BIHAR.jpg",
        faved: false
    },
    {id:152,
        title: "Poision Baby",
        artist: "Sachin-Jigar, Jasmine Sandlas, Divya Kumar",
        src: "assets/songs/Poison_Baby_Jasmine_Sandlas_Divya_Kumar.mp3",
        cover: "assets/images/POISION.jpg",
        coverThumb: "assets/images/POISION.jpg",
        faved: false
    },
      {id:153,
        title: "Qayde Se",
        artist: "Pritam, Papon, Amitabh Bhattacharya",
        src: "assets/songs/Qayde.mp3",
        cover: "assets/images/Qayde.jpg",
        coverThumb: "assets/images/Qayde.jpg",
        faved: false
    },
   
    {id:154,
        title: "Haule Haule",
        artist: "Salim-Sulaiman, Sukhwinder Singh",
        src: "assets/songs/Haule Haule [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Haule.jpg",
        coverThumb: "assets/images/Haule.jpg",
        faved: false
    },
    {id:155,
        title: "Tum Jo Kaho Toh....",
        artist: "Salim-Sulaiman, Shaan, Shraddha Pandit",
        src: "assets/songs/Agar.mp3",
        cover: "assets/images/Agar.jpg",
        coverThumb: "assets/images/Agar.jpg",
        faved: false
    },
     {id:156,
        title: "Phir Milenge Chalte Chalte",
        artist: "Salim-Sulaiman, Sonu Nigam",
        src: "assets/songs/Phir Milenge Chalte Chlate [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Phir milenge.jpg",
        coverThumb: "assets/images/Phir milenge.jpg",
        faved: false
    },
    {id:157,
        title: "Beh Ja",
        artist: "Shaan",
        src: "assets/songs/Beh_Ja_Shaan.mp3",
        cover: "assets/images/shaan.jpg",
        coverThumb: "assets/images/shaan.jpg",
        faved: false
    },
    {id:158,
        title: "Tujh Mein Rab Dikhta Hai",
        artist: "Salim-Sulaiman, Roop Kumar Rathod",
        src: "assets/songs/Tujh Mein Rab  Tu Hi To Jannat Meri [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Rab Dikhta.jpg",
        coverThumb: "assets/images/Rab Dikhta.jpg",
        faved: false
    },
    {id:159,
        title: "Dance Pe Chance",
        artist: "Salim-Sulaiman, Sunidhi Chauhan, Labh Janjua",
        src: "assets/songs/Dance Pe Chance [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/Dance.jpg",
        coverThumb: "assets/images/Dance.jpg",
        faved: false
    },
    {id:160,
        title: "Rahe Na Rahe Hum",
        artist: "Sachin-Jigar, Soumyadeep Sarkar, Amitabh Bhattacharya",
        src: "assets/songs/rahena.mp3",
        cover: "assets/images/rahena.jpg",
        coverThumb: "assets/images/rahena.jpg",
        faved: false
    },
    {id:161,
        title: "Imagine Dragons",
        artist: "Bones",
        src: "assets/songs/Bones-(Mr-Jat.in).mp3",
        cover: "assets/images/boys.jpg",
        coverThumb: "assets/images/boys.jpg",
        faved: false
    },
    {id:162,
        title: "Tum Se Hi",
        artist: "Mohit Chauhan, Pritam Chakraborty, Irshad Kamil, DJ SUNIL",
        src: "assets/songs/Tum Se Hi Jab We Met 128 Kbps.mp3",
        cover: "assets/images/tumsehi.jpg",
        coverThumb: "assets/images/tumsehi.jpg",
        faved: false
    },
    {id:163,
        title: "Taras Nahi Aya Tujhko",
        artist: "Sachin-Jigar, Jasmine Sandlas",
        src: "assets/songs/Taras.mp3",
        cover: "assets/images/taras.jpg",
        coverThumb: "assets/images/taras.jpg",
        faved: false
    },
   {id:164,
        title: "Aaoge Jab Tum",
        artist: "Rashid Khan, Irshad Kamil, Sandesh Sandilya",
        src: "assets/songs/Aaoge Jab Tum Jab We Met 128 Kbps.mp3",
        cover: "assets/images/aaogejab.jpg",
        coverThumb: "assets/images/aaogejab.jpg",
        faved: false
    },
    {id:165,
        title: "Ek Tu Hi Yaar Mera",
        artist: "Rochak Kohli, Arijit Singh, Neha Kakkar",
        src: "assets/songs/Tu Hi Yaar Mera (Pati Patni Aur Woh) [128 Kbps]-(SongsPk.com.se).mp3",
        cover: "assets/images/yaar mera.jpg",
        coverThumb: "assets/images/yaar mera.jpg",
        faved: false
    },
     {id:166,
        title: "Rab Ne Bana Di Jodi Musical",
        artist: "Salim-Sulaiman",
        src: "assets/songs/Dancing Jodi Rab Ne Bana Di Jodi 128 Kbps.mp3",
        cover: "assets/images/Rab-Ne-Bana-Di-Jodi-Hindi-2008-500x500.jpg",
        coverThumb: "assets/images/Rab-Ne-Bana-Di-Jodi-Hindi-2008-500x500.jpg",
        faved: false
    },
    {id:167,
        title: "Teri Meri Prem Kahani",
        artist: "Himesh Reshammiya, Rahat Fateh Ali Khan, Shreya Ghoshal",
        src: "assets/songs/Teri Meri Bodyguard 128 Kbps.mp3",
        cover: "assets/images/terimeri.jpg",
        coverThumb: "assets/images/terimeri.jpg",
        faved: false
    },
    {id:168,
        title: "Chal Chaiya Chaiya",
        artist: " A.R Rahman, Sukhwinder Singh, Sapna Awasthi",
        src: "assets/songs/Chaiyya Chaiyya Dil Se 128 Kbps.mp3",
        cover: "assets/images/chaiya.jpg",
        coverThumb: "assets/images/chaiya.jpg",
        faved: false
    },
    {id:169,
        title: "Ek Aur Rang Bhi Dekhiye Bengal Ka",
        artist: " Jeet Ganguli",
        src: "assets/songs/Khakee The Bengal Chapter Full Title Track (From 7 Episodes).mp3",
        cover: "assets/images/bengal.jpg",
        coverThumb: "assets/images/bengal.jpg",
        faved: false
    },
    {id:170,
        title: "Mera Inteqam Dekhegi",
        artist: "Anand Raaj Anand, Krishna Beuraa",
        src: "assets/songs/Mera Intkam Dekhegi - Lyrical  Shaadi Mein Zaroor Aana  Rajkummar R, Kriti K  Krishna Beuraa.mp3",
        cover: "assets/images/inteqam.jpg",
        coverThumb: "assets/images/inteqam.jpg",
        faved: false
    },
   {id:171,
        title:"Jhalak Dikhla Jaa",
        artist:"Himesh Reshammiya",
        src:"assets/songs/Jhalak Dikhla Ja Aksar 128 Kbps.mp3",
        cover:"assets/images/jhalak.webp",
        coverThumb: "assets/images/jhalak.webp",
        faved: false
    },
      {id:172,  
        title:"Ik Vaari Aa",
        artist:"Pritam, Arijit Singh",
        src:"assets/songs/Ik Vaari Aa Raabta 128 Kbps.mp3",
        cover:"assets/images/vaari.jpg",
        coverThumb: "assets/images/vaari.jpg",
        faved: false
    },
    {id:173,
        title:"Raabta",
        artist:"Pritam, Arijit Singh",
        src:"assets/songs/Raabta Agent Vinod 128 Kbps.mp3",
        cover:"assets/images/romantic-people-being-love.jpg",
        coverThumb: "assets/images/romantic-people-being-love.jpg",
        faved: false
    },
    {id:175,
        title:"Deewaniyat",
        artist:"Vishal Mishra",
        src:"assets/songs/Deewaniyat (PenduJatt.Com.Se).mp3",
        cover:"assets/images/deewaniyat.jpg",
        coverThumb: "assets/images/deewaniyat.jpg",
        faved: false
    },
    {id:176,
        title:"Dard Dilo Ke Kam Ho Jate",
        artist:"Himesh Reshammiya, Mohhammed Irfan",
        src:"assets/songs/Dard Dilo Ke The Xpose 128 Kbps.mp3",
        cover:"assets/images/darddiloke.jpg",
        coverThumb: "assets/images/darddiloke.jpg",
        faved: false
    },
    {id:177,
        title:"Banjaare Ko Ghar",
        artist:"Mithoon, Mohhammed Irfan",
        src:"assets/songs/Banjaara Ek Villain 128 Kbps.mp3",
        cover:"assets/images/banjara.jpg",
        coverThumb: "assets/images/banjara.jpg",
        faved: false
    },
    {id:178,    
        title:"Tum Ho Toh",
        artist:"Vishal Mishra",
        src:"assets/songs/Tum Ho Toh Saiyaara 128 Kbps.mp3",
        cover:"assets/images/tumhotoh.jpg",
        coverThumb: "assets/images/tumhotoh.jpg",
        faved: false
    },
    {id:179,    
        title:"Mujhe Teri Zaroorat Hai",
        artist:"Mithoon, Mustafa Zahid",
        src:"assets/songs/Zaroorat Ek Villain 128 Kbps.mp3",
        cover:"assets/images/zaroorat.jpg",
        coverThumb: "assets/images/zaroorat.jpg",
        faved: false

    },
    {id:180,
        title:"Kar Dega Barbaad Ishq Mujhe",
        artist:"The Rish, Jubin Nautiyal",
        src:"assets/songs/Barbaad Saiyaara 128 Kbps.mp3",
        cover:"assets/images/barbaadsong.jpg",
        coverThumb: "assets/images/barbaadsong.jpg",
        faved: false
    },
    {id:181,
        title:"Baarish",
        artist:"Mithoon, Mohhammed Irfan",
        src:"assets/songs/Baarish Yaariyan Mohammed Irfan 128 Kbps.mp3",
        cover:"assets/images/baarish.jpg",
        coverThumb: "assets/images/baarish.jpg",
        faved: false
    },
    {id:182,
        title:"Chaudhary",
        artist:"Amit Trivedi, Mame Khan",
        src:"assets/songs/Chaudhary - Amit Trivedi feat Mame Khan, Coke Studio @ MTV Season 2.mp3",
        cover:"assets/images/chaudhary.jpg",
        coverThumb: "assets/images/chaudhary.jpg",
        faved: false
    },
    {id:183,
        title:"Ishq Jalakar",
        artist:"Shashwat Sachdev, Shahzad Ali, Subhadeep Das Chowdhury, Armaan Khan",
        src:"assets/songs/Ishq Jalakar - Karvaan  Dhurandhar  Ranveer Singh, Shashwat Sachdev, Aditya Dhar.mp3",
        cover:"assets/images/jalakar.jpg",
        coverThumb: "assets/images/jalakar.jpg",
        faved: false
    },
   
    {id:184,
        title:"Move - Ye Ishq Ishq Hai",
        artist:"Reble, Sonu Nigam, Shashwat Sachdev",
        src:"assets/songs/Move - Yeh Ishq Ishq (From Dhurandhar).mp3",
        cover:"assets/images/move.jpg",
        coverThumb: "assets/images/move.jpg",
        faved: false
    },
    {id:185,
        title:"Lutt Le Gaya",
        artist:"Simran Choudhary",
        src:"assets/songs/Lutt_Le_Gaya.mp3",
        cover:"assets/images/luttlegaya.jpg",
        coverThumb: "assets/images/luttlegaya.jpg",
        faved: false
    },
    {id:186,
        title:"Dhurandhar Title Track",
        artist:"Hanumankind, Jasmine Sandlas, Sudhir Yaduvanshi, Shashwat Sachdev, Muhammad Sadiq, Ranjit Kaur",
        src:"assets/songs/Title Track Dhurandhar 128 Kbps.mp3",
        cover:"assets/images/dhurandhar.jpg",
        coverThumb: "assets/images/dhurandhar.jpg",
        faved: false
    }, {id:187,
        title:"Gehra Hua",
        artist:"Arijit Singh, Armaan Khan",
        src:"assets/songs/Gehra Hua Dhurandhar 128 Kbps.mp3",
        cover:"assets/images/gehra].jpg",
        coverThumb: "assets/images/gehra].jpg",
        faved: false
    },
   {id:188,
        title:"Shararat",
        artist:"Madhubanti Bagchi, Jasmine Sandlas",
        src:"assets/songs/Shararat (PenduJatt.Com.Se).mp3",
        cover:"assets/images/shararat.jpg",
        coverThumb: "assets/images/shararat.jpg",
        faved: false
    },
    {id:189,
        title:"Allah Maaf Kare",
        artist:"Pritam, Sonu Nigam, Shilpa Rao",
        src:"assets/songs/Allah Maaf Kare Desi Boyz 128 Kbps.mp3",
        cover:"assets/images/allahmaafkare.jpg",
        coverThumb: "assets/images/allahmaafkare.jpg",
        faved: false
    },
      {id:190,
        title:"Jaan Se Guzarte Hain",
        artist:"Khaan Saab, Shashwat Sachdev",
        src:"assets/songs/Jaan Se Guzarte Hain (Audio)_ Dhurandhar The Revenge  Shashwat S  Nusrat Fateh Ali,Khan S,Irshad K.mp3",
        cover:"assets/images/revenge.jpg",
        coverThumb: "assets/images/revenge.jpg",
        faved: false
    },
    {id:191,
        title:"Bijuriya",
        artist:"Sonu Nigam, Asees Kaur",
        src:"assets/songs/Bijuria Sunny Sanskari Ki Tulsi Kumari 128 Kbps.mp3",
        cover:"assets/images/bijuriya.jpg",
        coverThumb: "assets/images/bijuriya.jpg",
        faved: false
    },
      {id:192,
        title:"Jaan Ban Gaye ",
        artist:"Mithoon, Vishal Mishra, Asees Kaur",
        src:"assets/songs/Jaan Ban Gaye (PenduJatt.Com.Se).mp3",
        cover:"assets/images/bangaye.jpg",
        coverThumb: "assets/images/bangaye.jpg",
        faved: false
    },
    
     {id:193,
        title:"Chaudhary Remake",
        artist:"Amit Trivedi, Mame Khan, Jubin Nautiyal, Yohani",
        src:"assets/songs/Chaudhary.mp3",
        cover:"assets/images/chj.jpg",
        coverThumb: "assets/images/chj.jpg",
        faved: false
    },
    {id:194,
        title:"Tere Sang Kaati Raatein",
        artist:"Jeet Ganguly, Mustafa Zahid",
        src:"assets/songs/Jo Tere Sang Blood Money 128 Kbps.mp3",
        cover:"assets/images/teresang.jpg",
        coverThumb: "assets/images/teresang.jpg",
        faved: false
    },
    {id:195,
    
        title:"Malhari",
        artist:"Sanjay Leela Bhansali, Vishal Dadlani",
        src:"assets/songs/Malhari Bajirao Mastani 128 Kbps.mp3",
        cover:"assets/images/malhari.jpg",
        coverThumb: "assets/images/malhari.jpg",
        faved: false
    },
    {id:196,
        title:"Tinku Jiya",
        artist:"Mamta Sharma, Javed Ali",
        src:"assets/songs/Tinku Jiya Yamla Pagla Deewana 128 Kbps.mp3",
        cover:"assets/images/tinkujiya.jpg",
        coverThumb: "assets/images/tinkujiya.jpg",
        faved: false
    },
    {id:197,
        title:"Bhar Do Jholi Meri",
        artist:"Pritam, Adnan Sami",
        src:"assets/songs/Bhar Do Jholi Meri Bajrangi Bhaijaan 128 Kbps.mp3",
        cover:"assets/images/bhardo.jpg",
        coverThumb: "assets/images/bhardo.jpg",
        faved: false
    },
    {id:198,
        title:"Afghan Jalebi",
        artist:"Pritam, Akhtar Chanal Zahri",
        src:"assets/songs/Afghan Jalebi Ya Baba Phantom 128 Kbps.mp3",
        cover:"assets/images/afganjalebi.jpg",
        coverThumb: "assets/images/afganjalebi.jpg",
        faved: false
    },
    {id:199,
        title:"Hawa Hawa",
        artist:"Hassan Jahangir",
        src:"assets/songs/Hawa Hawa-(SambalpuriStar.In).mp3",
        cover:"assets/images/hawa.jpg",
        coverThumb: "assets/images/hawa.jpg",
        faved: false
    },
    {id:200,
        title:"Dost Banke Rehte Hain Na",
        artist:"Gurnazar, Rahat Fateh Ali Khan, Kartik Dev",
        src:"assets/songs/Dost Banke - Rahat Fateh Ali Khan.mp3",
        cover:"assets/images/dostbanke.jpg",
        coverThumb: "assets/images/dostbanke.jpg",
        faved: false
    },
    {id:201,
        title:"Dawat E Ishq",
        artist:"Sunidhi Chauhan, Javed Ali",
        src:"assets/songs/Daawat E Ishq Javed Ali 128 Kbps.mp3",
        cover:"assets/images/dawat.jpg",
        coverThumb: "assets/images/dawat.jpg",
        faved: false
    },
    {id:202,
        title:"Taiyab Ali",
        artist:"Javed Ali",
        src:"assets/songs/Tayyab Ali (PenduJatt.Com.Se).mp3",
        cover:"assets/images/taiyab.jpg",
        coverThumb: "assets/images/taiyab.jpg",
        faved: false

    },
      {id:203,
        title:"Bol Na Halke Halke",
        artist:"Rahat Fateh Ali Khan, Mahalaxmi Iyer",
        src:"assets/songs/Bol Na Halke Halke Jhoom Barabar Jhoom 128 Kbps.mp3",
        cover:"assets/images/bolnahalke.jpg",
        coverThumb: "assets/images/bolnahalke.jpg",
        faved: false
    },
    {id:204,
        title:"Titliaan Warga 2.o",
        artist:"Harrdy Sandhu",
        src:"assets/songs/Titliaan Warga - Harrdy Sandhu.mp3",
        cover:"assets/images/nashakarta.jpg",
        coverThumb: "assets/images/nashakarta.jpg",
        faved: false
    },
    {id:205,
        title:"Sandeshe Aate Hai",
        artist:"Annu Malik, Roop Kumar Rathod, Sonu Nigam",
        src:"assets/songs/Sandese Aate Hain Border 128 Kbps.mp3",
        cover:"assets/images/sandeshe.jpg",
        coverThumb: "assets/images/sandeshe.jpg",
        faved: false
    },
    {id:206,
        title:"Maula Mere Lele Meri Jaan",
        artist:"Krishna, Salim Merchant, Salim–Sulaiman",
        src:"assets/songs/Maula Mere Lele Meri Jaan Chak De India 128 Kbps.mp3",
        cover:"assets/images/lelejaan.jpg",
        coverThumb: "assets/images/lelejaan.jpg",
        faved: false
    },
    {id:207,
        title:"Ghar Kab Aaoge",
        artist:"Mithoon, Sonu Nigam, Arijit Singh, Vishal Mishra, Diljit Dosanjh, Roop Kumar Rathod",
        src:"assets/songs/Ghar Kab Aaoge Border 2 128 Kbps.mp3",
        cover:"assets/images/gharkab.jpg",
        coverThumb: "assets/images/gharkab.jpg",
        faved: false
    },
    {id:208,
        title:"Tainu Khabar Nahi",
        artist:"Sachin-Jigar, Arijit Singh",
        src:"assets/songs/Tainu Khabar Nahi - pagalnew.mp3",
        cover:"assets/images/khabarnahi.jpg",
        coverThumb: "assets/images/khabarnahi.jpg",
        faved: false
    },
     {id:209,
        title:"Akhiri Kadam Tak",
        artist:"Mithoon, Sonu Nigam",
        src:"assets/songs/Aakhri Kadam Tak - Khuda Haafiz 192 Kbps.mp3",
        cover:"assets/images/kadamtak.jpg",
        coverThumb: "assets/images/kadamtak.jpg",
        faved: false
    },
     {id:210,
        title:"Mera Intezaar Karna",
        artist:"Mithoon, Arman Malik",
        src:"assets/songs/Mera Intezaar Karna Khuda Haafiz 128 Kbps.mp3",
        cover:"assets/images/intezaar.jpg",
        coverThumb: "assets/images/intezaar.jpg",
        faved: false
    },
      {id:211,
        title:"Jhoome Jo Pathaan",
        artist:"Vishal-Shekhar, Arijit Singh, Sukriti Kakar",
        src:"assets/songs/Jhoome Jo Pathaan Title Song 128 Kbps.mp3",
        cover:"assets/images/jhoome.jpg",
        coverThumb: "assets/images/jhoome.jpg",
        faved: false
    },  
     {id:212,
        title:"Besharam Rang",
        artist:"Vishal-Shekhar, Shilpa Rao, Caralisa Monteiro",
        src:"assets/songs/Besharam Rang Pathaan 128 Kbps.mp3",
        cover:"assets/images/besharam.jpg",
        coverThumb: "assets/images/besharam.jpg",
        faved: false
    },  
    {id:213,
        title:"Lutt Putt Gaya",
        artist:"Pritam, Arijit Singh",
        src:"assets/songs/Lutt Putt Gaya Dunki 128 Kbps.mp3",
        cover:"assets/images/lutput.jpg",
        coverThumb: "assets/images/lutput.jpg",
        faved: false
    },
     {id:214,
        title:"Chaleya",
        artist:"Anirudh Ravichander, Arijit Singh, Shilpa Rao",
        src:"assets/songs/Chaleya Jawan 128 Kbps.mp3",
        cover:"assets/images/chaleya.jpg",
        coverThumb: "assets/images/chaleya.jpg",
        faved: false
    },
      {id:215,
        title:"Nikle The Kabhi Hum Ghar Se",
        artist:"Pritam, Sonu Nigam",
        src:"assets/songs/Nikle The Kabhi Hum Ghar Se Dunki 128 Kbps.mp3",
        cover:"assets/images/niklethe.jpg",
        coverThumb: "assets/images/niklethe.jpg",
        faved: false
    },
    {id:216,
        title:"Taajdaar E Haram",
        artist:"Atif Aslam",
        src:"assets/songs/Tajdar-E-Haram (PenduJatt.Com.Se).mp3",
        cover:"assets/images/tajdar.jpg",
        coverThumb: "assets/images/tajdar.jpg",
        faved: false
    },
    {id:217,
        title:"Ye Toone Kya Kiya",
        artist:"Pritam, Javed Bashir",
        src:"assets/songs/Ye Tune Kya Kiya - Once Upon A Time In Mumbaai Dobara 128 Kbps.mp3",
        cover:"assets/images/kyakiya.jpg",
        coverThumb: "assets/images/kyakiya.jpg",
        faved: false
    },
    {id:218,
        title:"Mitti Ke Bete",
        artist:"Mithoon, Sonu Nigam",
        src:"assets/songs/Mitti Ke Bete Border 2 128 Kbps.mp3",
        cover:"assets/images/mitti.jpg",
        coverThumb: "assets/images/mitti.jpg",
        faved: false
    },
    {id:219,
        title:"Hindustan Meri Jaan",
        artist:"Mithoon, Mohit Chauhan, B Praak",
        src:"assets/songs/Hindustan Meri Jaan Border 2 128 Kbps.mp3",
        cover:"assets/images/hindustan.jpg",
        coverThumb: "assets/images/hindustan.jpg",
        faved: false
    },
    {id:220,
        title:"Jaate Hue Lamho",
        artist:"Mithoon, Roop Kumar Rathod, Vishal Mishra",
        src:"assets/songs/Jaate Hue Lamhon Border 2 128 Kbps.mp3",
        cover:"assets/images/lamho.jpg",
        coverThumb: "assets/images/lamho.jpg",
        faved: false
    },
    {id:221,
        title:"Dekhte Dekhte",
        artist:"Rochak Kohli, Atif Aslam",
        src:"assets/songs/Dekhte Dekhte Batti Gul Meter Chalu 128 Kbps.mp3",
        cover:"assets/images/dekhte.jpg",
        coverThumb: "assets/images/dekhte.jpg",
        faved: false
    },
    {id:222,
        title:"Awara Angara",
        artist:"Faheem Abdullah, A.R. Rahman",
        src:"assets/songs/Aawaara Angaara Tere Ishk Mein 128 Kbps.mp3",
        cover:"assets/images/awara.jpg",
        coverThumb: "assets/images/awara.jpg",
        faved: false
    },
    {id:223,
        title:"Dil Lagana Mana Tha",
        artist:"Krish Mondal, Kishore Mondal ",
        src:"assets/songs/stream.mp3",
        cover:"assets/images/dillagana.jpg",
        coverThumb: "assets/images/dillagana.jpg",
        faved: false
    },
     {id:224,
        title:"Hindustan Meri Jaan Live",
        artist:"Mithoon",
        src:"assets/songs/Hindustan Meri Jaan - Live at INS Vikrant  BORDER 2  Sunny Deol  Mithoon, Manoj Muntashir.mp3",
        cover:"assets/images/zindabad.jpg",
        coverThumb: "assets/images/zindabad.jpg",
        faved: false
    },
    {id:225,
          title:"Koi Kahe Kehta Rahe",
        artist:"Shankar-Ehsaan-Loy, Shankar Mahadevan, Shaan, KK",
        src:"assets/songs/Koi Kahe Kehta Rahe [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/koikahe.jpg",
        coverThumb: "assets/images/koikahe.jpg",
        faved: false
    },
    { id:226, title:"Suno Na Sangemarmar",
        artist:"Jeet Ganguly, Arijit Singh",
        src:"assets/songs/Suno Na Sangemarmar Youngistaan 128 Kbps.mp3",
        cover:"assets/images/suno-na-sangemarmar-guitar-tabs-jxykj5gj.jpeg",
        coverThumb: "assets/images/suno-na-sangemarmar-guitar-tabs-jxykj5gj.jpeg",
        faved: false
    },
     { id:227, 
        title:"Ve Kamleya",
        artist:"Arijit Singh, Shreya Ghoshal",
        src:"assets/songs/Ve Kamleya Rocky Aur Rani Kii Prem Kahaani 128 Kbps.mp3",
        cover:"assets/images/vekamleya.jpg",
        coverThumb: "assets/images/vekamleya.jpg",
        faved: false
    },
    { id:228, title:"Khairiyat",
        artist:"Pritam , Arijit Singh",
        src:"assets/songs/Khairiyat Chhichhore 128 Kbps.mp3",
        cover:"assets/images/khairiyat.jpg",    
        coverThumb: "assets/images/khairiyat.jpg",
        faved: false

    },
    {  id:229,
        title:"Ve Kamleya Asees Kaur Version",
        artist:"Asees Kaur",
        src:"assets/songs/Ve Kamleya - Asees Version (PenduJatt.Com.Se).mp3",
        cover:"assets/images/asees.jpg",
        coverThumb: "assets/images/asees.jpg",
        faved: false
    },
    {  id:230,
        title:"Soulmate",
        artist:"Arijit Singh, Baadshah",
        src:"assets/songs/Soulmate Ek Tha Raja 128 Kbps.mp3",
        cover:"assets/images/soulmate.jpg",
        coverThumb: "assets/images/soulmate.jpg",
        faved: false
    },
    {  id:231,
        title:"The Breakup Song",
        artist:"Pritam, Arijit Singh, Baadshah",
        src:"assets/songs/The Breakup Song - Ae Dil Hai Mushkil (pagalall.com).mp3",
        cover:"assets/images/breakup.jpg",
        coverThumb: "assets/images/breakup.jpg",
        faved: false
    },
    {  id:232,
        title:"Ud Jaa Kaale Kawa",
        artist:"Mithoon, Udit Narayan, Alka Yagnik",
        src:"assets/songs/Udd Jaa Kaale Kaava  Gadar 2  Sunny Deol, Ameesha  Mithoon, Udit N, Alka Y  Uttam S  Lyrical.mp3",
        cover:"assets/images/udja.jpg",
        coverThumb: "assets/images/udja.jpg",
        faved: false
    },
    {  id:233,
        title:"Dil Jhoom jhoom Vishal Mishra Version",
        artist:"Mithoon, Vishal Mishra",
        src:"assets/songs/Vishal_Mishra_-_Dil_Jhoom_OST_Gadar_2_(mp3.pm).mp3",
        cover:"assets/images/diljhoom.jpg",
        coverThumb: "assets/images/diljhoom.jpg",
        faved: false
    },
    {  id:234,
        title:"Dil Jhoom jhoom",
        artist:"Mithoon, Arijit Singh",
        src:"assets/songs/Dil Jhoom8 Gadar 2 128 Kbps.mp3",
        cover:"assets/images/jhoom.jpg",
        coverThumb: "assets/images/jhoom.jpg",
        faved: false
    },
    {  id:235,
        title:"Chal Tere Ishq Mein",
        artist:"Mithoon, Neeti Mohan, Vishal Mishra",
        src:"assets/songs/Chal Tere Ishq Mein - pagalmusic.mp3",
        cover:"assets/images/tereishq.jpg",
        coverThumb: "assets/images/tereishq.jpg",
        faved: false
    },
    {  id:236,
        title:"Ud Jaa Kaale Kawa Climax Version",
        artist:"Mithoon, Udit Narayan, Jubin Nautiyal",
        src:"assets/songs/Udd Jaa Kaale Kaava (Climax Version) - Full Audio  Gadar 2  Sunny D, Ameesha Mithoon, Udit, Jubin.mp3",
        cover:"assets/images/climax.jpg",
        coverThumb: "assets/images/climax.jpg",
        faved: false
    },
    {  id:237,
        title:"Mere Haathon Mein",
        artist:"Sonu Nigam, Sunidhi Chauhan",
        src:"assets/songs/Mere Haath Mein Fanaa 128 Kbps.mp3",
        cover:"assets/images/mere hath me.jpg",
        coverThumb: "assets/images/mere hath me.jpg",
        faved: false
    },
    {  id:238,
        title:"Aya Tere Dar Par",
        artist:"Ahmed Hussain, Javed Hussain, Mohd. Hussain, Mohammed Vakil, Mohammad Hussein",
        src:"assets/songs/Aaya Tere Dar Par.mp3",
        cover:"assets/images/aya.jpg",
        coverThumb: "assets/images/aya.jpg",
        faved: false
    },
    {  id:239,
        title:"Pyaar Ki Ek Kahani",
        artist:"Sonu Nigam, Shreya Ghoshal",
        src:"assets/songs/Pyaar Ki Ek Kahani Krrish 128 Kbps.mp3",
        cover:"assets/images/pyar.jpg",
        coverThumb: "assets/images/pyar.jpg",
        faved: false
    },
    {
         id:240,
         title:"Ramba Ho Remix",
        artist:"Usha Uthup, Madhubanti Bagchi",
        src:"assets/songs/Ramba Ho Dhurandhar 128 Kbps.mp3",
        cover:"assets/images/rambaho.jpg",
        coverThumb: "assets/images/rambaho.jpg",
        faved: false
     },
    
    {
        id:241,
        title:"Lagdi Lahore ",
        artist:"Guru Randhawa",
        src:"assets/songs/Lahore Guru Randhawa 128 Kbps.mp3",
        cover:"assets/images/lahore.jpg",
        coverThumb: "assets/images/lahore.jpg",
        faved: false
    
    },
    {id:242,
        title:"Made In India",
        artist:"Guru Randhawa",
        src:"assets/songs/Made In India - Guru Randhawa.mp3",
        cover:"assets/images/madeinindia.jpg",
        coverThumb: "assets/images/madeinindia.jpg",
        faved: false
     
    },
    {id:243,
        title:"Tumhe Kitna Pyaar Karte ",
        artist:"Mithoon, Arijit Singh",
        src:"assets/songs/Tumhe Kitna Pyaar Karte Bawaal 128 Kbps.mp3",
        cover:"assets/images/pyarkarte.jpg",
        coverThumb: "assets/images/pyarkarte.jpg",
        faved: false
    },
    {
        id:244,

        title:"Jaaneman Do You Know",
        artist:"Shaan, Shreya Ghoshal",
        src:"assets/songs/Do U Know (PenduJatt.Com.Se).mp3",
        cover:"assets/images/know.jpg",
        coverThumb: "assets/images/know.jpg",
        faved: false
    },
    {
        id:245,
        title:"Ye Dil Diwana",
        artist:"Sonu Nigam",
        src:"assets/songs/Yeh Dil Deewana (PenduJatt.Com.Se).mp3",
        cover:"assets/images/dildiwana.jpg",
        coverThumb: "assets/images/dildiwana.jpg",
        faved: false

    },
    {
        id:246,
        title:"Main Hoon Na",
        artist:"Sonu Nigam, Shreya Ghoshal",
        src:"assets/songs/Main Hoon Na Sonu Nigam 128 Kbps.mp3",
        cover:"assets/images/main.jpg",
        coverThumb: "assets/images/main.jpg",
        faved: false
    },
     {
        id:247,
        title:"Main Hoon Na Sad Version",
        artist:"Abhijeet",
        src:"assets/songs/Main Hoon Na Sad Abhijeet 128 Kbps.mp3",
        cover:"assets/images/sad.jpg",
        coverThumb: "assets/images/sad.jpg",
        faved: false
     },
     {
        id:248,
        title:"Gori Gori ",
        artist:"Annu Malik, KK, Shreya Ghoshal, Sunidhi Chauhan,Abhijeet",
        src:"assets/songs/Gori Gori Gori Gori Main Hoon Na 128 Kbps.mp3",
        cover:"assets/images/gori.jpg",
        coverThumb: "assets/images/gori.jpg",
        faved: false
    },
    {id:249,
        title:"Chunari Chunari",
        artist:"Abhijeet,Anuradha Sriram",
        src:"assets/songs/Chunari Chunari [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/chunari.jpg",
        coverThumb: "assets/images/chunari.jpg",
        faved: false
    },
    {id:250,
        title:"Hori Re Rasiya",
        artist:"Maithili Thakur, Seedhe Maut, Ravi Kishan, Mahan",
        src:"assets/songs/Holi Re Rasiya - Maithili Thakur 128 Kbps.mp3",
        cover:"assets/images/hori.jpg",
        coverThumb: "assets/images/hori.jpg",
        faved: false
    },
    {id:251,
        title:"Ajab Si",
        artist:"Vishal-Shekhar, KK",
        src:"assets/songs/Ajab Si Om Shanti Om 128 Kbps.mp3",
        cover:"assets/images/ajab.jpg",
        coverThumb: "assets/images/ajab.jpg",
        faved: false
    },
    {
        id:252,

        title:"Dhoom Taana",
        artist:"Abhijeet, Shreya Ghoshal",
        src:"assets/songs/Dhoom Taana Om Shanti Om 128 Kbps.mp3",
        cover:"assets/images/dhoomtana.jpg",
        coverThumb: "assets/images/dhoomtana.jpg",
        faved: false
    },
     {
        id:253,
        title:"Tumhe Jo Maine Dekha",
        artist:"Abhijeet, Shreya Ghoshal",
        src:"assets/songs/Tumhe Jo Maine Dekha Main Hoon Na 128 Kbps.mp3",
        cover:"assets/images/tumhe.jpg",
        coverThumb: "assets/images/tumhe.jpg",
        faved: false
    },
     {
        id:254,
        title:"Aaj Unse Kehna Hai Hame",
        artist:"Aishwarya Majmudar, Palak Muchhal, Shaan",
        src:"assets/songs/Aaj Unse Kehna Hai Prem Ratan Dhan Payo 128 Kbps.mp3",
        cover:"assets/images/kehna.jpg",
        coverThumb: "assets/images/kehna.jpg",
        faved: false
    },
     {
        id:255,
        title:"Aaj Unse Milna Hai Hame",
        artist:"Shaan",
        src:"assets/songs/Aaj Unse Milna Hai Prem Ratan Dhan Payo 128 Kbps.mp3",
        cover:"assets/images/milna.jpg",
        coverThumb: "assets/images/milna.jpg",
        faved: false
    },
     {
        id:256,
        title:"Bum Bum Bole",
        artist:"Shaan, Aamir Khan",
        src:"assets/songs/Bum Bum Bole [128 Kbps]-(SongsPk.com.se).mp3",
        cover:"assets/images/bum.jpg",
        coverThumb: "assets/images/bum.jpg",
        faved: false
    },
    {id:257,
        title:"Apna Har Din Aise Jiyo",
        artist:"Shaan, Anoushka Manchanda",
        src:"assets/songs/Golmaal_3_-_Apna_Har_Din_Shaan_Anushka_Manchanda_(mp3.pm).mp3",
        cover:"assets/images/har.jpg",
        coverThumb: "assets/images/har.jpg",
        faved: false
    },
    {id:258,
        title:"Tere Naina Bade Kaatil",
        artist:"Shaan, Shreya Ghoshal",
        src:"assets/songs/Tere-Naina-Bade-Katil.mp3",
        cover:"assets/images/nayna.jpg",
        coverThumb: "assets/images/nayna.jpg",
        faved: false
    },
    {id:259,
        title:"Dil Leke Dard E Dil",
        artist:"Shaan, Shreya Ghoshal",
        src:"assets/songs/Dil Leke Dard E Dil De Gaye(KoshalWorld.Com).mp3",
        cover:"assets/images/dileke.jpg",
        coverThumb: "assets/images/dileke.jpg",
        faved: false
    },
    {id:260,
        title:"Pathaan BGM",
        artist:"Vishal - Shekhar",
        src:"assets/songs/Pathaans Theme Pathaan 128 Kbps.mp3",
        cover:"assets/images/jhoome.jpg",
        coverThumb: "assets/images/jhoome.jpg",
        faved: false
    },
    {id:261,
        title:"Main Hoon Don",
        artist:"Shaan",
        src:"assets/songs/Main Hoon Don (Full Song) Film - Don- The Chase Begins Again.mp3",
        cover:"assets/images/don.jpg",
        coverThumb: "assets/images/don.jpg",
        faved: false
    },
     {id:262,
        title:"FA9LA",
        artist:"Daffy, Flipperachi",
        src:"assets/songs/baloch.mp3",
        cover:"assets/images/baloch.jpg",
        coverThumb: "assets/images/baloch.jpg",
        faved: false
    },
      {id:263,
        title:"Sun Raha Hai Na Tu",
        artist:"Ankit Tiwari",
        src:"assets/songs/Sunn Raha Hai Na Tu Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor.mp3",
        cover:"assets/images/sun.jpg",
        coverThumb: "assets/images/sun.jpg",
        faved: false
    }, 
     {id:264,
        title:"Main Phir Bhi Tumko Chahunga",
        artist:"Arijit Singh, Shasha Tirupati",
        src:"assets/songs/Phir Bhi Tumko Chaahunga  Arijit Singh  Arjun Kapoor, Shraddha Kapoor  Mithoon, Manoj Muntashir.mp3",
        cover:"assets/images/chahunga.jpg",
        coverThumb: "assets/images/chahunga.jpg",
        faved: false
    },
     {id:265,
        title:"Halka Halka Suroor Hai",
        artist:"Sunidhi Chauhan,Divya Kumar",
        src:"assets/songs/Halka Halka (PenduJatt.Com.Se).mp3",
        cover:"assets/images/Halka.jpg",
        coverThumb: "assets/images/Halka.jpg",
        faved: false
    },
      {id:266,
        title:"Hamari Adhuri Kanhani",
        artist:"Arjit Singh",
        src:"assets/songs/Hamari Adhuri Kahani-(Mr-Jat.in).mp3",
        cover:"assets/images/adhuri.jpg",
        coverThumb: "assets/images/adhuri.jpg",
        faved: false
    },
    {id:267,
        title:"Ha Hasi Ban Gaye",
        artist:"Ami Mishra",
        src:"assets/songs/Hasi Ban Gaye-(SambalpuriStar.In).mp3",
        cover:"assets/images/adhuri.jpg",
        coverThumb: "assets/images/adhuri.jpg",
        faved: false
    },
    {id:268,
        title:"Malang",
        artist:"Siddharth Mahadevan, Shilpa Rao",
        src:"assets/songs/Malang Dhoom 3 128 Kbps.mp3",
        cover:"assets/images/dhoom.jpg",
        coverThumb: "assets/images/dhoom.jpg",
        faved: false
    },
    {id:269,
        title:"Tu Hi Junoon ",
        artist:"Mohit Chauhan",
        src:"assets/songs/Tu Hi Junoon Dhoom 3 128 Kbps.mp3",
        cover:"assets/images/dhoom.jpg",
        coverThumb: "assets/images/dhoom.jpg",
        faved: false
    },
    {id:270,
        title:"Let's Rock Now Sohniye ",
        artist:"Shaan , Tulsi Kumar",
        src:"assets/songs/Lets Rock Soniye Bhool Bhulaiyaa 128 Kbps.mp3",
        cover:"assets/images/rock.jpg",
        coverThumb: "assets/images/rock.jpg",
        faved: false
    },
       {id:271,
        title:"Barsaat Ki Dhun",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Barsaat Ki Dhun-(Mr-Jat.in).mp3",
        cover:"assets/images/barsaat.jpg",
        coverThumb: "assets/images/barsaat.jpg",
        faved: false
    },
     {id:272,
        title:"Pehli Barish Mein",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Pehli Baarish Mein Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/pehli.jpg",
        coverThumb: "assets/images/pehli.jpg",
        faved: false
    },
    {id:273,
        title:"Jaane Kyu Log Pyaar Karta Hain",
        artist:"Alka Yagnik, Udit Narayan",
        src:"assets/songs/Jaane Kyon Log Pyar Dil Chahta Hai 128 Kbps.mp3",
        cover:"assets/images/koikahe.jpg",
        coverThumb: "assets/images/koikahe.jpg",
        faved: false
    },
    {id:274,
        title:"Woh Ladki Hai Kahan",
        artist:"Kavita Subramaniam, Shaan",
        src:"assets/songs/Woh Ladki Hai Kahan Dil Chahta Hai 128 Kbps.mp3",
        cover:"assets/images/koikahe.jpg",
        coverThumb: "assets/images/koikahe.jpg",
        faved: false
    },
     {id:275,
        title:"Tera Hone Laga Hoon",
        artist:"Alisha Chinoy, Atif Aslam",
        src:"assets/songs/Tera Hone Laga Hoon-(Mr-Jat.in).mp3",
        cover:"assets/images/hone.jpg",
        coverThumb: "assets/images/hone.jpg",
        faved: false
    },
      {id:276,
        title:"Chitthi",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Chitthi Rocky Shiv 128 Kbps.mp3",
        cover:"assets/images/chitthi.jpg",
        coverThumb: "assets/images/chitthi.jpg",
        faved: false
    },
      {id:277,
        title:"Ajao Meri Tamanna",
        artist:"Javed Ali",
        src:"assets/songs/Aa Jao Meri Tamanna (PenduJatt.Com.Se).mp3",
        cover:"assets/images/tamanna.jpg",
        coverThumb: "assets/images/tamanna.jpg",
        faved: false
    },
    {id:278,
        title:"Bedardi Se Pyar Ka",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Bedardi Se Pyaar Ka Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/bedardi.jpg",
        coverThumb: "assets/images/bedardi.jpg",
        faved: false
    },
    {id:279,
        title:"Dil Pe Zakhm Khate Hain",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Dil Pe Zakhm Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/zakhm.jpg",
        coverThumb: "assets/images/zakhm.jpg",
        faved: false
    },
      {id:280,
        title:"Bewafa Se Pyaar Kiya",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Bewafa Se Pyaar Kiya Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/bewafase.jpg",
        coverThumb: "assets/images/bewafase.jpg",
        faved: false
    },
     {id:281,
        title:"Jugraafiya",
        artist:"Udit Narayan , Shreya Ghoshal",
        src:"assets/songs/Jugraafiya.mp3",
        cover:"assets/images/jugrafiya.jpg",
        coverThumb: "assets/images/jugrafiya.jpg",
        faved: false
    },
     {id:282,
        title:"Jaiye Sajna",
        artist:"Satinder Sartaaj , Jasmine Sandalas",
        src:"assets/songs/Jaiye Sajana.mp3",
        cover:"assets/images/revenge.jpg",
        coverThumb: "assets/images/revenge.jpg",
        faved: false
    },
     {id:283,
        title:"Didi Sher E Baloch",
        artist:"Nabil El Houri, Shashwat Sachdev, Sons of Yusuf",
        src:"assets/songs/Didi (Sher E Baloch) - SouthMelody - Copy.mp3",
        cover:"assets/images/revenge.jpg",
        coverThumb: "assets/images/revenge.jpg",
        faved: false
    },
     {id:284,
        title:"Tamma Tamma Loge",
        artist:"Bappi Lahiri,Anuradha Paudwal",
        src:"assets/songs/Tamma Tamma(Audio) Dhurandhar The Revenge  Ranveer Singh Bappi Lahiri, Anuradha Paudwal, Indeevar - Copy.mp3",
        cover:"assets/images/revenge.jpg",
        coverThumb: "assets/images/revenge.jpg",
        faved: false
    },
      {id:285,
        title:"Dilbara Ve ",
        artist:"Sachet-Parampara",
        src:"assets/songs/Dilbara Pati Patni Aur Woh 128 Kbps.mp3",
        cover:"assets/images/dilbara.jpg",
        coverThumb: "assets/images/dilbara.jpg",
        faved: false
    },
      {id:286,
        title:"Lut Gaye",
        artist:"Jubin Nautiyal",
        src:"assets/songs/Lut Gaye Jubin Nautiyal 128 Kbps.mp3",
        cover:"assets/images/lutgaye.jpg",
        coverThumb: "assets/images/lutgaye.jpg",
        faved: false
    },
     {id:287,
        title:"Saanso Ki Maala",
        artist:"Rahat Fateh Ali Khan",
        src:"assets/songs/Sanson Ki Mala Rahat Fateh Ali Khan 128 Kbps.mp3",
        cover:"assets/images/mala.jpg",
        coverThumb: "assets/images/mala.jpg",
        faved: false
    },
];

/* ============================================================
   2. APP STATE
   ============================================================ */
const state = {
  currentIndex: 0,          // Index in the filteredList
  isPlaying: false,
  isShuffle: false,
  repeat: 'none',           // 'none' | 'one' | 'all'
  volume: 80,
  isMuted: false,
  prevVolume: 80,           // stored for unmute
  searchQuery: '',
  filteredList: [...SONGS], // songs currently visible (after search)
  showFavOnly: false,
  audioReady: false,        // true once metadata loaded
};

/* ============================================================
   3. DOM REFERENCES
   ============================================================ */
const DOM = {
  // Audio
  audio: document.getElementById('audioPlayer'),

  // Navbar
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  hamburgerBtn: document.getElementById('hamburgerBtn'),

  // Sidebar
  sidebar: document.getElementById('sidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  playlistSidebar: document.getElementById('playlistSidebar'),
  playlistCount: document.getElementById('playlistCount'),
  sidebarLinks: document.querySelectorAll('.sidebar__link'),

  // Player card
  albumArt: document.getElementById('albumArt'),
  albumImg: document.getElementById('albumImg'),
  songTitle: document.getElementById('songTitle'),
  songArtist: document.getElementById('songArtist'),
  songAlbum: document.getElementById('songAlbum'),

  // Visualizer
  visualizer: document.getElementById('visualizer'),
  visualizerBars: document.querySelectorAll('.visualizer__bar'),

  // Progress
  currentTime: document.getElementById('currentTime'),
  totalTime: document.getElementById('totalTime'),
  progressBar: document.getElementById('progressBar'),
  progressFill: document.getElementById('progressFill'),
  progressThumb: document.getElementById('progressThumb'),

  // Controls
  playBtn: document.getElementById('playBtn'),
  playIcon: document.getElementById('playIcon'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  shuffleBtn: document.getElementById('shuffleBtn'),
  repeatBtn: document.getElementById('repeatBtn'),
  volumeSlider: document.getElementById('volumeSlider'),
  volumeIcon: document.getElementById('volumeIcon'),
  muteBtn: document.getElementById('muteBtn'),
  volumeLabel: document.getElementById('volumeLabel'),

  // Main playlist
  mainPlaylist: document.getElementById('mainPlaylist'),
  queueCount: document.getElementById('queueCount'),
  sortAll: document.getElementById('sortAll'),
  sortFav: document.getElementById('sortFav'),

  // Mini player
  miniPlayer: document.getElementById('miniPlayer'),
  miniArt: document.getElementById('miniArt'),
  miniTitle: document.getElementById('miniTitle'),
  miniArtist: document.getElementById('miniArtist'),
  miniPlayBtn: document.getElementById('miniPlayBtn'),
  miniPlayIcon: document.getElementById('miniPlayIcon'),
  miniPrevBtn: document.getElementById('miniPrevBtn'),
  miniNextBtn: document.getElementById('miniNextBtn'),
  miniProgressFill: document.getElementById('miniProgressFill'),
};

// OPTIMIZED: Lazy loading image utility
function loadImageWithLazy(imgElement, src, alt = '') {
  if (!imgElement) return;
  
  imgElement.setAttribute('loading', 'lazy');
  imgElement.alt = alt;
  
  // Use Intersection Observer for better lazy loading
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imgElement.src = src;
          observer.unobserve(imgElement);
        }
      });
    }, { rootMargin: '100px' });
    
    observer.observe(imgElement);
  } else {
    // Fallback
    imgElement.src = src;
  }
}

/* ============================================================
   4. THEME MANAGER
   ============================================================ */
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('GeerVibes-theme') || 'dark';
    this.apply(saved);
  },

  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    DOM.themeIcon.className = theme === 'dark'
      ? 'fa-solid fa-moon'
      : 'fa-solid fa-sun';
    localStorage.setItem('GeerVibes-theme', theme);
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    this.apply(current === 'dark' ? 'light' : 'dark');
  }
};

/* ============================================================
   5. AUDIO ENGINE
   ============================================================ */
const AudioEngine = {
  /* OPTIMIZED: Load with preload='metadata' only */
  load(song, autoPlay = false) {
    state.audioReady = false;
    DOM.audio.src = song.src;
    DOM.audio.preload = 'metadata'; // OPTIMIZED: Don't preload full song
    DOM.audio.load();

    if (autoPlay) {
      DOM.audio.addEventListener('canplay', () => {
        AudioEngine.play();
      }, { once: true });
    }
  },

  play() {
    DOM.audio.play().then(() => {
      state.isPlaying = true;
      UI.setPlayState(true);
    }).catch(err => {
      console.warn('Playback prevented:', err);
    });
  },

  pause() {
    DOM.audio.pause();
    state.isPlaying = false;
    UI.setPlayState(false);
  },

  toggle() {
    state.isPlaying ? this.pause() : this.play();
  },

  seek(ratio) {
    if (DOM.audio.duration) {
      DOM.audio.currentTime = ratio * DOM.audio.duration;
    }
  },

  setVolume(vol) {
    state.volume = vol;
    DOM.audio.volume = vol / 100;
    DOM.volumeSlider.value = vol;
    DOM.volumeLabel.textContent = `${vol}%`;
    UI.updateVolumeIcon(vol);
  },

  mute() {
    if (DOM.audio.muted) {
      DOM.audio.muted = false;
      state.isMuted = false;
      AudioEngine.setVolume(state.prevVolume || 80);
    } else {
      state.prevVolume = state.volume;
      DOM.audio.muted = true;
      state.isMuted = true;
      DOM.volumeLabel.textContent = '0%';
      UI.updateVolumeIcon(0);
    }
  }
};

/* ============================================================
   6. PLAYER CONTROLLER
   ============================================================ */
const Player = {
  /* Play a specific index in filteredList */
  playSong(index) {
    if (index < 0 || index >= state.filteredList.length) return;
    state.currentIndex = index;
    const song = state.filteredList[index];

    // Animate art change
    DOM.albumArt.classList.add('changing');
    setTimeout(() => {
      DOM.albumArt.classList.remove('changing');
    }, 420);

    // Update UI
    UI.updateSongInfo(song);
    UI.highlightActive(index);

    // Load + play
    AudioEngine.load(song, true);
  },

  next() {
    if (state.isShuffle) {
      const randomIndex = Math.floor(Math.random() * state.filteredList.length);
      this.playSong(randomIndex);
    } else {
      const next = (state.currentIndex + 1) % state.filteredList.length;
      this.playSong(next);
    }
  },

  prev() {
    /* If more than 3s in, restart current song; else go prev */
    if (DOM.audio.currentTime > 3) {
      DOM.audio.currentTime = 0;
      return;
    }
    const prev = (state.currentIndex - 1 + state.filteredList.length)
      % state.filteredList.length;
    this.playSong(prev);
  },

  onEnded() {
    if (state.repeat === 'one') {
      DOM.audio.currentTime = 0;
      AudioEngine.play();
    } else if (state.repeat === 'all' || state.currentIndex < state.filteredList.length - 1) {
      Player.next();
    } else {
      // Last song, no repeat
      state.isPlaying = false;
      UI.setPlayState(false);
    }
  },

  toggleShuffle() {
    state.isShuffle = !state.isShuffle;
    DOM.shuffleBtn.classList.toggle('active', state.isShuffle);
    DOM.shuffleBtn.title = state.isShuffle ? 'Shuffle: ON' : 'Shuffle: OFF';
  },

  toggleRepeat() {
    const modes = ['none', 'one', 'all'];
    const idx = modes.indexOf(state.repeat);
    state.repeat = modes[(idx + 1) % modes.length];
    UI.updateRepeatBtn();
  }
};

/* ============================================================
   7. UI MANAGER
   ============================================================ */
const UI = {
  /* Update all song info across the app */
  updateSongInfo(song) {
    DOM.songTitle.textContent = song.title;
    DOM.songArtist.textContent = song.artist;
    DOM.songAlbum.textContent = song.album || 'Single';
    
    // OPTIMIZED: Lazy load album art
    loadImageWithLazy(DOM.albumImg, song.cover, `${song.title} - ${song.artist}`);

    // Mini player
    DOM.miniTitle.textContent = song.title;
    DOM.miniArtist.textContent = song.artist;
    loadImageWithLazy(DOM.miniArt, song.coverThumb, song.title);

    // Page title
    document.title = `${song.title} — ${song.artist}`;

    // Dynamic favicon: use song cover as browser tab icon
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.type = 'image/png';
    favicon.href = song.cover;
  },

  /* Sync play/pause button states */
  setPlayState(playing) {
    // Main play button
    DOM.playIcon.className = playing ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    // Mini play button
    DOM.miniPlayIcon.className = playing ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    // Album art rotation
    DOM.albumArt.classList.toggle('playing', playing);
    // Visualizer
    DOM.visualizer.classList.toggle('active', playing);
  },

  /* Highlight the active song in both playlists */
  highlightActive(index) {
    const song = state.filteredList[index];

    // Sidebar
    document.querySelectorAll('#playlistSidebar .playlist-item').forEach((el) => {
      const songId = parseInt(el.dataset.songId);
      const isActive = songId === song.id;
      el.classList.toggle('active', isActive);
    });

    // Main playlist
    document.querySelectorAll('#mainPlaylist .main-playlist-item').forEach((el) => {
      const songId = parseInt(el.dataset.songId);
      const isActive = songId === song.id;
      el.classList.toggle('active', isActive);
    });
  },

  /* Update progress bar & times */
  updateProgress() {
    const audio = DOM.audio;
    if (!audio.duration) return;

    const ratio = audio.currentTime / audio.duration;
    const pct = ratio * 100;

    DOM.progressFill.style.width = pct + '%';
    DOM.progressThumb.style.right = -(6) + 'px';  // always relative to fill

    DOM.currentTime.textContent = formatTime(audio.currentTime);
    DOM.totalTime.textContent = formatTime(audio.duration);

    // Mini player progress
    DOM.miniProgressFill.style.width = pct + '%';
  },

  /* Update volume icon based on level */
  updateVolumeIcon(vol) {
    if (vol === 0 || state.isMuted) {
      DOM.volumeIcon.className = 'fa-solid fa-volume-xmark';
    } else if (vol < 40) {
      DOM.volumeIcon.className = 'fa-solid fa-volume-low';
    } else {
      DOM.volumeIcon.className = 'fa-solid fa-volume-high';
    }
  },

  /* Update repeat button UI */
  updateRepeatBtn() {
    const btn = DOM.repeatBtn;
    btn.classList.remove('active');
    btn.innerHTML = '<i class="fa-solid fa-repeat"></i>';

    if (state.repeat === 'one') {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fa-solid fa-repeat"></i><sup style="font-size:9px;position:absolute;top:4px;right:4px">1</sup>';
      btn.style.position = 'relative';
      btn.title = 'Repeat: One';
    } else if (state.repeat === 'all') {
      btn.classList.add('active');
      btn.title = 'Repeat: All';
    } else {
      btn.title = 'Repeat: Off';
    }
  },

  /* Build sidebar playlist */
  renderSidebarPlaylist(songs) {
    DOM.playlistSidebar.innerHTML = '';
    DOM.playlistCount.textContent = `${SONGS.length} songs`;

    songs.forEach((song, i) => {
      const li = document.createElement('li');
      li.className = 'playlist-item';
      li.dataset.songId = song.id;
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', `Play ${song.title}`);

      li.innerHTML = `
        <span class="playlist-item__num">
          ${i + 1}
        </span>
        <span class="playlist-item__playing-icon">
          <span class="playing-bar"></span>
          <span class="playing-bar"></span>
          <span class="playing-bar"></span>
        </span>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3C/svg%3E" 
             data-src="${song.coverThumb}" 
             alt="${song.title}" 
             class="playlist-item__thumb" 
             loading="lazy" />
        <div class="playlist-item__info">
          <div class="playlist-item__title">${escapeHtml(song.title)}</div>
          <div class="playlist-item__artist">${escapeHtml(song.artist)}</div>
        </div>
        <span class="playlist-item__duration shimmer" data-id="${song.id}"></span>
      `;

      // Lazy load thumbnail
      const img = li.querySelector('.playlist-item__thumb');
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = img.dataset.src;
              observer.unobserve(img);
            }
          });
        }, { rootMargin: '100px' });
        observer.observe(img);
      } else {
        img.src = img.dataset.src;
      }

      li.addEventListener('click', () => {
        const idx = state.filteredList.findIndex(s => s.id === song.id);
        if (idx !== -1) Player.playSong(idx);
        else {
          // Song not in filter — play from full list
          state.filteredList = [...SONGS];
          state.searchQuery = '';
          DOM.searchInput.value = '';
          DOM.searchClear.classList.remove('visible');
          UI.renderMainPlaylist(SONGS);
          Player.playSong(i);
        }
        // Close sidebar on mobile
        closeSidebar();
      });

      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') li.click();
      });

      DOM.playlistSidebar.appendChild(li);
    });
  },

  /* Build main playlist */
  renderMainPlaylist(songs) {
    DOM.mainPlaylist.innerHTML = '';
    DOM.queueCount.textContent = songs.length;

    if (songs.length === 0) {
      DOM.mainPlaylist.innerHTML = `
        <li class="no-results">
          <i class="fa-solid fa-circle-xmark"></i>
          No songs match your search.
        </li>`;
      return;
    }

    songs.forEach((song, i) => {
      const li = document.createElement('li');
      li.className = 'main-playlist-item';
      li.dataset.songId = song.id;
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', `Play ${song.title}`);

      li.innerHTML = `
        <div class="mp-num">
          <span class="mp-static">${i + 1}</span>
          <div class="mp-play-overlay">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3C/svg%3E" 
             data-src="${song.coverThumb}" 
             alt="${song.title}" 
             class="mp-art" 
             loading="lazy" />
        <div class="mp-info">
          <div class="mp-title">${escapeHtml(song.title)}</div>
          <div class="mp-artist">${escapeHtml(song.artist)}</div>
        </div>
        <span class="mp-duration shimmer" data-id="${song.id}"></span>
        <button class="mp-fav-btn ${song.faved ? 'faved' : ''}" data-id="${song.id}" aria-label="Favourite">
          <i class="fa-${song.faved ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      `;

      // Lazy load thumbnail
      const img = li.querySelector('.mp-art');
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = img.dataset.src;
              observer.unobserve(img);
            }
          });
        }, { rootMargin: '100px' });
        observer.observe(img);
      } else {
        img.src = img.dataset.src;
      }

      // Click to play
      li.addEventListener('click', (e) => {
        if (e.target.closest('.mp-fav-btn')) return; // don't trigger play
        Player.playSong(i);
      });

      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') li.click();
      });

      // Fav button
      const favBtn = li.querySelector('.mp-fav-btn');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = SONGS.findIndex(s => s.id === song.id);
        SONGS[idx].faved = !SONGS[idx].faved;
        song.faved = SONGS[idx].faved;
        favBtn.classList.toggle('faved', song.faved);
        favBtn.innerHTML = `<i class="fa-${song.faved ? 'solid' : 'regular'} fa-heart"></i>`;
      });

      DOM.mainPlaylist.appendChild(li);
    });

    // Re-highlight active
    const activeSong = state.filteredList[state.currentIndex];
    if (activeSong) UI.highlightActive(state.currentIndex);
  }
};

// OPTIMIZED: Escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

/* ============================================================
   8. SEARCH MANAGER
   ============================================================ */
const Search = {
  filter(query) {
    state.searchQuery = query.toLowerCase().trim();
    const base = state.showFavOnly ? SONGS.filter(s => s.faved) : SONGS;

    if (!state.searchQuery) {
      state.filteredList = [...base];
    } else {
      state.filteredList = base.filter(song =>
        song.title.toLowerCase().includes(state.searchQuery) ||
        song.artist.toLowerCase().includes(state.searchQuery) ||
        (song.album || '').toLowerCase().includes(state.searchQuery)
      );
    }

    UI.renderMainPlaylist(state.filteredList);

    // Try to keep current song highlighted
    const current = SONGS[state.currentIndex] || SONGS[0];
    const newIdx = state.filteredList.findIndex(s => s.id === current.id);
    if (newIdx !== -1) state.currentIndex = newIdx;
  }
};

/* ============================================================
   9. WEB AUDIO VISUALIZER (Real-time bars)
   ============================================================ */
const Visualizer = {
  ctx: null,
  analyser: null,
  source: null,
  raf: null,
  bars: Array.from(DOM.visualizerBars),

  init() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.source = this.ctx.createMediaElementSource(DOM.audio);
      this.source.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    } catch (e) {
      console.warn('Web Audio API not available, using CSS fallback.', e);
      this.ctx = null;
    }
  },

  start() {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.tick();
  },

  stop() {
    cancelAnimationFrame(this.raf);
    // Reset bars to default height
    this.bars.forEach(bar => { bar.style.height = ''; });
  },

  tick() {
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);

    const len = Math.min(this.bars.length, data.length);
    for (let i = 0; i < this.bars.length; i++) {
      const val = i < len ? data[i] : 0;
      const h = Math.max(4, (val / 255) * 38);
      this.bars[i].style.height = h + 'px';
    }

    this.raf = requestAnimationFrame(() => this.tick());
  }
};

/* ============================================================
   10. PROGRESS BAR SEEKING
   ============================================================ */
let isDraggingProgress = false;

function initProgressBar() {
  DOM.progressBar.addEventListener('mousedown', (e) => {
    isDraggingProgress = true;
    seekFromEvent(e);
  });

  DOM.progressBar.addEventListener('touchstart', (e) => {
    isDraggingProgress = true;
    seekFromEvent(e.touches[0]);
  }, { passive: true });

  document.addEventListener('mousemove', (e) => {
    if (isDraggingProgress) seekFromEvent(e);
  });

  document.addEventListener('touchmove', (e) => {
    if (isDraggingProgress) seekFromEvent(e.touches[0]);
  }, { passive: true });

  document.addEventListener('mouseup', () => { isDraggingProgress = false; });
  document.addEventListener('touchend', () => { isDraggingProgress = false; });
}

function seekFromEvent(e) {
  const rect = DOM.progressBar.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  AudioEngine.seek(ratio);
  DOM.progressFill.style.width = (ratio * 100) + '%';
}

/* ============================================================
   11. KEYBOARD SHORTCUTS
   ============================================================ */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Don't intercept when typing in input
    if (e.target.tagName === 'INPUT') return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        AudioEngine.toggle();
        break;
      case 'ArrowRight':
        e.preventDefault();
        Player.next();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        Player.prev();
        break;
      case 'ArrowUp':
        e.preventDefault();
        AudioEngine.setVolume(Math.min(100, state.volume + 5));
        break;
      case 'ArrowDown':
        e.preventDefault();
        AudioEngine.setVolume(Math.max(0, state.volume - 5));
        break;
      case 'KeyM':
        AudioEngine.mute();
        break;
      case 'KeyS':
        Player.toggleShuffle();
        break;
      case 'KeyR':
        Player.toggleRepeat();
        break;
    }
  });
}

/* ============================================================
   12. SIDEBAR TOGGLE (Mobile)
   ============================================================ */
function openSidebar() {
  DOM.sidebar.classList.add('open');
  DOM.sidebarOverlay.classList.add('visible');
  DOM.hamburgerBtn.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  DOM.sidebar.classList.remove('open');
  DOM.sidebarOverlay.classList.remove('visible');
  DOM.hamburgerBtn.classList.remove('open');
  document.body.style.overflow = '';
}

function initSidebar() {
  DOM.hamburgerBtn.addEventListener('click', () => {
    DOM.sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  DOM.sidebarOverlay.addEventListener('click', closeSidebar);

  // Sidebar nav link clicks
  DOM.sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      DOM.sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ============================================================
   13. DURATION LOADER (async, fills shimmer placeholders)
   ============================================================ */
function loadDurations() {
  SONGS.forEach(song => {
    const tempAudio = document.createElement('audio');
    tempAudio.preload = 'metadata';
    tempAudio.src = song.src;

    tempAudio.addEventListener('loadedmetadata', () => {
      song.duration = tempAudio.duration;
      const formatted = formatTime(tempAudio.duration);

      // Update all duration spans for this song
      document.querySelectorAll(`[data-id="${song.id}"]`).forEach(el => {
        el.textContent = formatted;
        el.classList.remove('shimmer');
      });
    });
  });
}

/* ============================================================
   14. UTILITY FUNCTIONS
   ============================================================ */

/** Format seconds → m:ss */
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/* ============================================================
   15. EVENT LISTENERS
   ============================================================ */
function bindEvents() {
  // Play/Pause
  DOM.playBtn.addEventListener('click', () => AudioEngine.toggle());
  DOM.miniPlayBtn.addEventListener('click', () => AudioEngine.toggle());

  // Prev / Next
  DOM.prevBtn.addEventListener('click', () => Player.prev());
  DOM.nextBtn.addEventListener('click', () => Player.next());
  DOM.miniPrevBtn.addEventListener('click', () => Player.prev());
  DOM.miniNextBtn.addEventListener('click', () => Player.next());

  // Shuffle / Repeat
  DOM.shuffleBtn.addEventListener('click', () => Player.toggleShuffle());
  DOM.repeatBtn.addEventListener('click', () => Player.toggleRepeat());

  // Volume
  DOM.volumeSlider.addEventListener('input', () => {
    AudioEngine.setVolume(parseInt(DOM.volumeSlider.value));
    if (state.isMuted) {
      DOM.audio.muted = false;
      state.isMuted = false;
    }
  });

  DOM.muteBtn.addEventListener('click', () => AudioEngine.mute());

  // Theme toggle
  DOM.themeToggle.addEventListener('click', () => ThemeManager.toggle());

  // Search
  DOM.searchInput.addEventListener('input', () => {
    const val = DOM.searchInput.value;
    DOM.searchClear.classList.toggle('visible', val.length > 0);
    Search.filter(val);
  });

  DOM.searchClear.addEventListener('click', () => {
    DOM.searchInput.value = '';
    DOM.searchClear.classList.remove('visible');
    Search.filter('');
    DOM.searchInput.focus();
  });

  // Sort buttons
  DOM.sortAll.addEventListener('click', () => {
    state.showFavOnly = false;
    DOM.sortAll.classList.add('active');
    DOM.sortFav.classList.remove('active');
    Search.filter(state.searchQuery);
  });

  DOM.sortFav.addEventListener('click', () => {
    state.showFavOnly = true;
    DOM.sortFav.classList.add('active');
    DOM.sortAll.classList.remove('active');
    Search.filter(state.searchQuery);
  });

  // Audio events
  DOM.audio.addEventListener('timeupdate', () => {
    if (!isDraggingProgress) UI.updateProgress();
  });

  DOM.audio.addEventListener('loadedmetadata', () => {
    state.audioReady = true;
    DOM.totalTime.textContent = formatTime(DOM.audio.duration);
  });

  DOM.audio.addEventListener('ended', () => Player.onEnded());

  DOM.audio.addEventListener('play', () => {
    state.isPlaying = true;
    UI.setPlayState(true);
    Visualizer.start();
  });

  DOM.audio.addEventListener('pause', () => {
    state.isPlaying = false;
    UI.setPlayState(false);
    Visualizer.stop();
  });

  DOM.audio.addEventListener('waiting', () => {
    // Could add a loading spinner here
  });

  DOM.audio.addEventListener('error', (e) => {
    console.error('Audio error:', e);
  });
}

/* ============================================================
   16. BOOT / INIT
   ============================================================ */
function init() {
  // Apply saved theme first (prevents flash)
  ThemeManager.init();

  // Render playlists
  UI.renderSidebarPlaylist(SONGS);
  state.filteredList = [...SONGS];
  UI.renderMainPlaylist(SONGS);

  // Load first song (no autoplay — browsers block it)
  const firstSong = SONGS[state.currentIndex];
  AudioEngine.load(firstSong, false);
  UI.updateSongInfo(firstSong);
  UI.highlightActive(0);

  // Set initial volume
  AudioEngine.setVolume(state.volume);

  // Init subsystems
  initProgressBar();
  initKeyboard();
  initSidebar();

  // Init Web Audio (must be triggered by user gesture first)
  DOM.audio.addEventListener('play', () => {
    if (!Visualizer.ctx) Visualizer.init();
    Visualizer.start();
  }, { once: true });

  // Bind all events
  bindEvents();

  // Async load durations (doesn't block UI)
  setTimeout(loadDurations, 500);

  // Volume slider visual fill via CSS (trick for styling range track)
  DOM.volumeSlider.addEventListener('input', updateSliderFill);
  updateSliderFill();

  console.log('%c🎵 GeerVibes loaded!', 'color: #ff9500; font-weight: bold; font-size: 16px;');
  console.log('⌨️  Shortcuts: Space=play/pause | ←→=prev/next | ↑↓=volume | M=mute | S=shuffle | R=repeat');
}

/* Update range input track fill colour (cross-browser) */
function updateSliderFill() {
  const slider = DOM.volumeSlider;
  const val = parseInt(slider.value);
  const max = parseInt(slider.max);
  const pct = (val / max) * 100;
  slider.style.background = `linear-gradient(to right,
    var(--accent) ${pct}%,
    var(--bg-elevated) ${pct}%)`;
}

/* Also update the fill when volume changes programmatically */
const origSetVol = AudioEngine.setVolume.bind(AudioEngine);
AudioEngine.setVolume = (vol) => {
  origSetVol(vol);
  updateSliderFill();
};

/* ============================================================
   17. START
   ============================================================ */
document.addEventListener('DOMContentLoaded', init);