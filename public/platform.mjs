import g from './globals.mjs'

export default class Platform {
  constructor ({ x, y, width, sprites }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = g.tileHeight
    this.sprites = sprites
  }

  update (deltaTime) {
    this.y -= 2.5 * deltaTime
  }

  draw () {
    const totalTiles = this.width / g.tileWidth
    for (let i = 0; i < totalTiles; i++) {
      let sprite

      const isAgainstLeftSide = this.x === 0 && i === 0
      const isAgainstRightSide = this.x + i * g.tileWidth >= g.canvasWidth - g.tileWidth
      const isStartingTile = i === 0
      const isEndingTile = i === totalTiles - 1
      const isSingleTile = this.width === g.tileWidth

      if (isAgainstLeftSide) {
        if (isSingleTile) {
          sprite = this.sprites.right
        }
        else {
          sprite = this.sprites.middle
        }
      }
      else if (isAgainstRightSide) {
        if (isSingleTile) {
          sprite = this.sprites.left
        }
        else {
          sprite = this.sprites.middle
        }
      }
      else if (isSingleTile) {
        sprite = this.sprites.both
      }
      else if (isStartingTile) {
        sprite = this.sprites.left
      }
      else if (isEndingTile) {
        sprite = this.sprites.right
      }
      else {
        sprite = this.sprites.middle
      }

      g.ctx.drawImage(
        sprite.image,
        0, // source x
        0, // source y
        g.tileWidth / g.spriteRatio, // source width
        g.tileHeight / g.spriteRatio, // source height
        this.x + i * g.tileWidth, // destination x
        this.y, // destination y
        g.tileWidth, // destination width
        this.height, // destination height
      )
    }
  }
}
