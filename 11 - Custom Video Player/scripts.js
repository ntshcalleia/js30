const player = document.querySelector('.player')
const video = player.querySelector('video')
const togglePlayButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const volumeSlider = player.querySelector('input[name="volume"]')
const playbackRateSlider = player.querySelector('input[name="playbackRate"]')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')

video.addEventListener('timeupdate', handleProgress)
video.addEventListener('play', () => togglePlayButton.innerHTML = '❚❚')
video.addEventListener('pause', () => togglePlayButton.innerHTML = '►')
video.addEventListener('click', togglePlay)
togglePlayButton.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', setCurrentTime))
volumeSlider.addEventListener('input', changeVolume)
playbackRateSlider.addEventListener('input', changeSpeed)

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

function togglePlay() {
  video[video.paused ? 'play' : 'pause']()
}

function setCurrentTime() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function changeVolume() {
  video.volume = this.value
}

function changeSpeed() {
  video.playbackRate = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
}