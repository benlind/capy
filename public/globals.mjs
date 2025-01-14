const canvas = document.getElementById('canvas')

const tileWidth = 32
const tileHeight = 32

// Ensure the width is exactly divisible by the tile width
canvas.width = Math.floor((window.innerWidth - 32) / tileWidth) * tileWidth
canvas.height = window.innerHeight - 32

export default {
  canvas,
  ctx: canvas.getContext('2d'),
  tileWidth,
  tileHeight,
  xTiles: Math.floor(canvas.width / tileWidth),
  yTiles: Math.floor(canvas.height / tileHeight),
  canvasWidth: canvas.width,
  canvasHeight: canvas.height,
  spriteRatio: 2, // how big should each sprite pixel be rendered
}
