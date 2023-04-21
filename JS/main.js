import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";

class Bird {
    constructor() {
        this.imageBird = new Image()
        this.imageBird.src = 'Images/bird.png'

        this.birdWidth = 34
        this.birdHeight = 34
        this.birdY
        this.indexBird = 0

        this.canvas = new Canvas()
    }

    draw() {
        this.indexBird += 0.3
        this.birdY = Math.floor((this.indexBird % 9) / 3) * (this.birdWidth - 8)
        
        this.canvas.context.drawImage(this.imageBird, 0, this.birdY, this.birdWidth, 25, (this.canvas.element.width / 2) - (this.birdWidth / 2), (this.canvas.background.height / 2) - (this.birdHeight / 2), this.birdWidth, this.birdHeight)
    }
}
 
class Game {
    constructor() {
        this.canvas = new Canvas()
        this.bird = new Bird()
        
        new GameLoop(this.draw.bind(this))
    }

    draw() {
        this.canvas.draw()
        this.bird.draw()
    }
}

new Game()