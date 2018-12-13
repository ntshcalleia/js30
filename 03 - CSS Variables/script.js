const inputs = document.querySelectorAll('.controls input')

inputs.forEach(input => input.addEventListener('input', setProperty))

function setProperty() {
  const value = this.value + (this.dataset.sizing || '')
  document.documentElement.style.setProperty(`--${this.id}`, value)
}