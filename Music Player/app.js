const songs = [
  {
    name: "White Iverson",
    artist: "Post Malone",
    src: "Post Malone - White Iverson (192 kbps).mp3",
    img: "https://akns-images.eonline.com/eol_images/Entire_Site/2023627/rs_1200x1200-230727101754-1200-post-malone-performing.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
  },
  {
    name: "Lush Life",
    artist: "Zara Larsson ft.MNEK",
    src: "Zara Larsson - Lush Life (192 kbps).mp3",
    img: "https://summerdazemalta.com/wp-content/uploads/2023/04/zaralarsson.webp",
  },
  {
    name: "Love Me Again",
    artist: "John Newman ",
    src: "John Newman - Love Me Again (192 kbps).mp3",
    img: "https://dice-i-scdn-co.imgix.net/image/ab6761610000e5eb4b4bb15caafc1e26993734df",
  },
];

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.querySelector(".song-img");
let songTitle = document.querySelector(".song-title");
let author = document.querySelector(".author");
let audioSrc = document.getElementById("source");
let volumeSlider = document.querySelector(".volume-slider");

let currentSongIndex = 0;

var currentSong;

function changeSong() {
  currentSong = songs[currentSongIndex];
  songImg.src = currentSong.img;
  songTitle.innerHTML = currentSong.name;
  author.innerHTML = currentSong.artist;
  song.src = currentSong.src;
  song.play();
}
changeSong();

function backward() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }

  changeSong();
}
function forward() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }

  changeSong();
}

function setVolume() {
  song.volume = volumeSlider.value / 100;
}

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

song.addEventListener("ended", playNextSong);

function playNextSong() {
  currentSongIndex++;

  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }

  changeSong();

  song.play();
}
