import Canvas from "./canvas.js"
import Config from "./config.js"

export default class Bird {
    constructor() {
        this.canvas = new Canvas()
        this.config = new Config()

        this.imageBird = new Image()
        this.imageBird.src = 'Images/bird.png'

        this.birdWidth = 34
        this.birdHeight = 34

        this.birdY
        this.birdPositionY = 239
        this.ziro = 0

        this.control()
    }

    updata() {
        this.birdPositionY += this.config.gravity

        if (this.birdPositionY + this.birdHeight >= this.canvas.element.height - this.canvas.foreground.height) {
            this.refreshGame()
            alert('game over')
        }

        if(this.birdPositionY <= 0) {
            // ???
        }
    }

    refreshGame() {
        this.birdPositionY = (this.canvas.background.height / 2) - (this.birdHeight / 2)
    }

    draw() {
        this.config.index += .3
        this.birdY = Math.floor((this.config.index % 9) / 3) * (this.birdWidth - 8)

        this.canvas.context.drawImage(this.imageBird, 0, this.birdY, this.birdWidth, 25, (this.canvas.element.width / 2) - (this.birdWidth / 2), this.birdPositionY, this.birdWidth, this.birdHeight)
    }

    control() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) this.birdPositionY -= 25
        })
    }
}