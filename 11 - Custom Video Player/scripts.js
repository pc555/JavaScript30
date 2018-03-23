const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playButton = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player__slider');
const skip = player.querySelectorAll('[data-skip]');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');


function togglePlay() {
    video.paused? video.play(): video.pause();
}

function updateButton() {
    console.log(this);
    playButton.textContent = video.paused?  '►' : '❚ ❚';
}

function updateSlider() {
    video[this.name] = this.value;
}

function skipPlay() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgress() {
    let progress = (video.currentTime / video.duration) * 100;
    //console.log(progress);
    progressBar.style.flexBasis = `${progress}%`;   
}

function updatePlay(e) {
    //console.log(e.offsetX);
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
playButton.addEventListener('click', togglePlay);
sliders.forEach(slider => slider.addEventListener('click', updateSlider));
skip.forEach(btn => btn.addEventListener('click', skipPlay));
progress.addEventListener('click', (e) => updatePlay(e));