const panels = Array.from(document.querySelectorAll('.panel'))

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen)
  panel.addEventListener('transitionend', toggleActive)
})

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName !== 'font-size') return
  this.classList.toggle('active')
}