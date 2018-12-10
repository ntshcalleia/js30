document.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`)
  const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`)
  if (!audio) return
  key.classList.add("playing")
  audio.currentTime = 0
  audio.play()
})

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("transitionend", e => {
    e.propertyName == "transform" && key.classList.remove("playing")
  })
})
