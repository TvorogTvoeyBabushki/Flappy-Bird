import Canvas from "./canvas.js"
import Config from "./config.js"
import Bird from "./bird.js"
import Score from "./score.js"

export default class Pipe {
    constructor() {
        this.pipeUp = new Image()
        this.pipeUp.src = 'Images/pipeUp.png'

        this.pipeBottom = new Image()
        this.pipeBottom.src = 'Images/pipeBottom.png'

        this.canvas = new Canvas()
        this.config = new Config()
        this.bird = new Bird()
        this.score = new Score()

        this.gap = 90 // 100 ???
        this.spaceBettwenPipe = 100
        this.pipe = [{
            x: this.canvas.element.width,
            y: 0 // ??
        }]
    }

    updata() {
        this.bird.birdPositionY += this.config.gravity

        this.pipe.forEach(pipe => {
            pipe.x--

            if (pipe.x === this.spaceBettwenPipe) {
                this.pipe.push({
                    x: this.canvas.element.width,
                    y: Math.floor(Math.random() * (this.pipeUp.height - 100 /* -120 */)) - (this.pipeUp.height - 300)
                })
            }

            if (pipe.x + this.pipeUp.width <= 0) {
                this.pipe.shift()
            }

            if(pipe.x === 125) {
                this.score.increaseScore()
            }

            if (this.bird.birdPositionX + this.bird.birdWidth >= pipe.x && this.bird.birdPositionX <= pipe.x + this.pipeUp.width && (this.bird.birdPositionY <= pipe.y - 10 + this.pipeUp.height - 200 || this.bird.birdPositionY + this.bird.birdHeight >= pipe.y + this.pipeUp.height + this.gap - 200) || this.bird.birdPositionY + this.bird.birdHeight >= this.canvas.element.height - this.canvas.foreground.height) {
                this.bird.refreshGame()
            }
        })
    }

    draw() {
        this.pipe.forEach((pipe) => {
            this.canvas.context.drawImage(this.pipeUp, pipe.x, pipe.y - 200)
            this.canvas.context.drawImage(this.pipeBottom, pipe.x, pipe.y - 200 + this.pipeUp.height + this.gap)
        })

        this.config.index += .3
        this.canvas.backgroundX = -((this.config.index * this.config.speedBackground) % this.canvas.element.width)

        this.canvas.context.drawImage(this.canvas.foreground, this.canvas.backgroundX, this.canvas.background.height)
        this.canvas.context.drawImage(this.canvas.foreground, this.canvas.backgroundX + this.canvas.element.width, this.canvas.background.height)
    }
}