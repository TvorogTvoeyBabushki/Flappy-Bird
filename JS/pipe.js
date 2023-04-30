import Canvas from "./canvas.js"
import Config from "./config.js"
// import WindowGameOver from "./windowGameOver.js"

export default class Pipe {
    constructor() {
        this.pipeUp = new Image()
        this.pipeUp.src = 'Images/pipeUp.png'

        this.pipeBottom = new Image()
        this.pipeBottom.src = 'Images/pipeBottom.png'

        this.canvas = new Canvas()
        this.config = new Config()
        // this.windowGameOver = new WindowGameOver()

        this.gap = 90
        this.spaceBettwenPipe = 100
        this.pipe = [{
            x: this.canvas.element.width,
            y: 0
        }]
    }

    updata(bird, score, gameLoop, windowGameOver) {
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

            if (pipe.x === 125) {
                score.increaseScore()
            }

            if (bird.birdPositionX + bird.birdWidth >= pipe.x && bird.birdPositionX <= pipe.x + this.pipeUp.width && (bird.birdPositionY <= pipe.y - 10 + this.pipeUp.height - 200 || bird.birdPositionY + bird.birdHeight >= pipe.y + this.pipeUp.height + this.gap - 200) || bird.birdPositionY + bird.birdHeight >= this.canvas.element.height - this.canvas.foreground.height) {
                gameLoop.cancelAnimation()

                windowGameOver.draw()
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