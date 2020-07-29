const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
// Music
const songs = [
  {
    name: "lean on",
    displayName: "Lean On",
    artist: "Major Lazer ft. MØ & DJ Snake",
  },
  {
    name: "starboy",
    displayName: "Starboy ft. Daft Punk",
    artist: "The Weeknd",
  },
  {
    name: "blinding lights",
    displayName: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    name: "take me home",
    displayName: "Take Me Home",
    artist: "Aero Chord",
  },
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  music.pause();
}

// Play or Pause button listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `src/music/${song.name}.flac`;
  image.src = `src/img/${song.name}.png`;
}

// Current song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}
// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On load - Select first song
loadSong(songs[songIndex]);

// Update Progress bar and time
function updateProgressBar(event) {
  if (isPlaying) {
    const { duration, currentTime } = event.srcElement;
    // console.log(duration, currentTime);
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes =Math.floor(duration / 60) ;
    let durationSeconds = Math.floor(duration%60);
    if(durationSeconds<10){
      durationSeconds=`0${durationSeconds}`;
    }
    
    // Delay switching duration element to avoid not a number 
    if(durationSeconds){
      durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
    }
     // Calculate display for current time
     const currentMinutes =Math.floor(currentTime / 60) ;
     let currentSeconds = Math.floor(currentTime%60);
     if(currentSeconds<10){
       currentSeconds=`0${currentSeconds}`;
     }
     currentTimeElement.textContent = `${currentMinutes}:${currentSeconds}`
  }
}
function setProgressBar(event){
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const {duration} = music;
  music.currentTime = (clickX/width)*duration;
}
// Event Listener for forwards and backward
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
progressContainer.addEventListener('click',setProgressBar);
music.addEventListener('ended', nextSong);
// Make BG React to Album art colors
// Event
music.addEventListener("timeupdate", updateProgressBar);
