import Canvas from "./canvas.js"
import Config from "./config.js"
// import Pipe from "./pipe.js"

export default class Bird {
    constructor() {
        this.canvas = new Canvas()
        this.config = new Config()
        // this.pipe = new Pipe()

        this.imageBird = new Image()
        this.imageBird.src = 'Images/bird.png'

        this.birdWidth = 34
        this.birdHeight = 34

        this.birdX = 0
        this.birdPositionX = (this.canvas.element.width / 2) - (this.birdWidth / 2)

        this.birdY
        this.birdPositionY = 239

        this.btnRestart = document.querySelector('.btn-flappy-bird')

        this.control()
    }

    updata() {
        this.birdPositionY += this.config.gravity

        // if (this.birdPositionY + this.birdHeight >= this.canvas.element.height - this.canvas.foreground.height) {
        //     this.refreshGame()

        //     // this.config.gravity = 0

        //     // this.btnRestart.classList.add('active')
        //     // this.btnRestart.addEventListener('click', this.refreshGame.bind(this))
        // }

        if (this.birdPositionY <= 0) {
            this.birdPositionY += 25
        }
    }

    refreshGame() {
        alert('Game over')
        location.reload()

        this.config.gravity = 1

        this.birdPositionY = (this.canvas.background.height / 2) - (this.birdHeight / 2)
    }

    draw() {
        this.config.index += .3
        this.birdY = Math.floor((this.config.index % 9) / 3) * (this.birdWidth - 8)

        this.canvas.context.drawImage(this.imageBird, this.birdX, this.birdY, this.birdWidth, 25, this.birdPositionX, this.birdPositionY, this.birdWidth, this.birdHeight)
    }

    control() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) this.birdPositionY -= 25
        })
    }
}