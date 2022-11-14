console.log("Welcome To Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');
let a = Array.from(document.getElementsByClassName('songitemplay'));
let b = document.getElementById('0');
let song = document.getElementsByClassName('songitem')


let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"}
]

songItems.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

console.log(song)

// Listen to Events
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
    }
    else{
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        audioElement.pause();
        gif.style.opacity = 0;
        masterSongName.innerText = "";
    }
});

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
});

const makeAllPlays = ()=>{
    a.forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    });
};

a.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<=0){
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            audioElement.pause();
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            gif.style.opacity = 0;
        }
        masterSongName.innerText = songs[songIndex].songName;
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
});

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');  
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
});