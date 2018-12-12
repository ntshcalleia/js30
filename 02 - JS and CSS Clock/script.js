const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")
let hourDegree, minuteDegree, secondDegree

function tick() {
  secondDegree = (secondDegree + 6) % 360
  secondHand.style.transform = `rotate(${secondDegree}deg)`

  minuteDegree = (minuteDegree + 0.1) % 360
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`

  hourDegree = (hourDegree + 0.5/60) % 360
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(tick, 1000);

// Set starting position
document.body.onload = () => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  secondDegree = (seconds * 6) + 90 - 6 // degrees per second + offset - tick
  minuteDegree = (minutes * 6) + 90 - 0.1
  hourDegree = (hours * 30) + 90 - 0.5/60
  tick()
}