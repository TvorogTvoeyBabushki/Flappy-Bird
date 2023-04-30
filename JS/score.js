import Canvas from "./canvas.js"

export default class Score {
    constructor() {
        this.canvas = new Canvas()

        this.score = 0
        this.positionX
        this.incscore = 0
    }

    increaseScore() {
        this.incscore = this.score++
    }

    draw() {
        if(this.score < 10) {
            this.positionX = this.canvas.element.width / 2 - 15
        } else {
            this.positionX = this.canvas.element.width / 2 - 25
        }

        this.canvas.context.font = '50px Quantico'
        
        this.canvas.context.fillStyle = 'white'
        this.canvas.context.fillText(this.score, this.positionX, 100)

        this.canvas.context.strokeStyle = 'black'
        this.canvas.context.strokeText(this.score, this.positionX, 100)
    }
}