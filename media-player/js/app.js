const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name:'04. Lean On (feat. MØ & DJ Snake)',
        displayName: 'Lean On',
        artist:'Major Lazer ft. MØ & DJ Snake',
    }
];



// Check if playing 
let isPlaying = false;


// Play 
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause')
    music.play();
}

// Pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play')
    music.pause();
}

// Play or Pause button listener
playBtn.addEventListener('click',() => (isPlaying ? pauseSong() : playSong()));