import Canvas from "./canvas.js"
import Config from "./config.js"

export default class Bird {
    constructor() {
        this.canvas = new Canvas()
        this.config = new Config()

        this.imageBird = new Image()
        this.imageBird.src = 'Images/bird.png'

        this.birdWidth = 25 // 34
        this.birdHeight = 25 // 34

        this.birdX = 0
        this.birdPositionX = (this.canvas.element.width / 2) - (this.birdWidth / 2)

        this.birdY
        this.birdPositionY = 239

        this.btnRestart = document.querySelector('.btn-flappy-bird')

        this.control()
    }

    updata() { 
        this.birdPositionY += this.config.gravity

        // if(this.birdPositionY >= this.canvas.element.height / 2) {
        //     this.birdPositionY += (this.config.gravity + 0.5)
        // } else {
        //     this.birdPositionY += this.config.gravity
        // }

        // if (this.birdPositionY + this.birdHeight >= this.canvas.element.height - this.canvas.foreground.height) {
        //     this.refreshGame()

        //     // this.config.gravity = 0

        //     // this.btnRestart.classList.add('active')
        //     // this.btnRestart.addEventListener('click', this.refreshGame.bind(this))
        // }

        if (this.birdPositionY <= 0) {
            this.birdPositionY += 40
        }
    }

    refreshGame() {

        alert('Game over')
        location.reload()

        this.birdPositionY = (this.canvas.background.height / 2) - (this.birdHeight / 2)
    }

    draw() {
        this.config.index += .3
        this.birdY = Math.floor((this.config.index % 9) / 3) * (this.birdWidth + 1)

        if(true) {
            this.canvas.context.drawImage(this.imageBird, this.birdX, this.birdY, this.birdWidth + 10, this.birdHeight, this.birdPositionX, this.birdPositionY, this.birdWidth + 10, this.birdHeight)
        } else{
            this.canvas.context.save()

            this.canvas.context.translate(this.canvas.element.width / 2, this.canvas.element.height / 2)
            this.canvas.context.rotate(90 * Math.PI / 180) // 90 это градусы 
            
            this.canvas.context.drawImage(this.imageBird, this.birdX, this.birdY, this.birdWidth + 10, this.birdHeight, -this.imageBird.width / 2 + this.birdPositionY - 300, -this.imageBird.width / 2, this.birdWidth + 10, this.birdHeight)
    
            this.canvas.context.restore()
        }
    }

    control() {
        document.addEventListener('keydown', (event) => {     
            if (event.keyCode === 32) {
                this.birdPositionY -= 40 // 50
            }
        })
    }
}