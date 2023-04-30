import Canvas from "./canvas.js"

export default class WindowGameOver {
    constructor() {
        this.canvas = new Canvas()

        this.windowGameOver = new Image()
        this.windowGameOver.src = 'Images/gameOver.png'
    }

    draw() {
        this.canvas.context.drawImage(this.windowGameOver, this.canvas.element.width / 2 - this.windowGameOver.width / 2, this.canvas.element.height / 2 - this.windowGameOver.height / 2)
    }
}