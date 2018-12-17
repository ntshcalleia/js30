const canvas = document.querySelector('#draw')

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');

  let lastX, lastY, hue = 0
  let isDrawing = false, sizeUp = true

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = 100

  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mousedown', startDrawing)
  canvas.addEventListener('mouseup', stopDrawing)
  canvas.addEventListener('mouseout', stopDrawing)
  
  function startDrawing(e) {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
  }

  function stopDrawing() {
    isDrawing = false
  }

  function draw(e) {
    if (!isDrawing) return

    // Change size
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) sizeUp = !sizeUp
    sizeUp ? ctx.lineWidth++ : ctx.lineWidth--

    // Change color
    ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`

    // Draw path
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    // Change position
    lastX = e.offsetX
    lastY = e.offsetY
  }
}