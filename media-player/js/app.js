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
        name:'lean on',
        displayName: 'Lean On',
        artist:'Major Lazer ft. MØ & DJ Snake',
    },
    {
        name:'starboy',
        displayName: 'Starboy ft. Daft Punk',
        artist:'The Weeknd',
    },
    {
        name:'blinding lights',
        displayName: 'Blinding Lights',
        artist:'The Weeknd',
    },
    {
        name:'take me home',
        displayName: 'Take Me Home',
        artist:'Aero Chord',
    },
    
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

// Update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `src/music/${song.name}.flac`;
    image.src = `src/img/${song.name}.png`;
}

// Current song
let songIndex = 0;

// Previous Song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}
// Next Song
function nextSong(){
    songIndex++;
    if(songIndex>songs.length-1){
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// On load - Select first song 
loadSong(songs[songIndex]);

// Event Listener for forwards and backward
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Make BG React to Album art colors 