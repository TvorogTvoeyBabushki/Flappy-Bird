import Canvas from "./canvas.js"

export default class Score {
    constructor() {
        this.score = 0

        this.canvas = new Canvas()
    }

    increaseScore() {
        this.score++
    }

    draw() {
        this.canvas.context.font = '50px Quantico'

        this.canvas.context.fillStyle = 'white'
        this.canvas.context.fillText(this.score, this.canvas.element.width / 2 - 10, 100)

        this.canvas.context.strokeStyle = 'black'
        this.canvas.context.strokeText(this.score, this.canvas.element.width / 2 - 10, 100)
    }
}