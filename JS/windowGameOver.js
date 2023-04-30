import Canvas from "./canvas.js"
import Score from "./score.js"

export default class WindowGameOver {
    constructor() {
        this.canvas = new Canvas()
        this.score = new Score()

        this.windowGameOver = new Image()
    }

    draw () {
        this.windowGameOver.src = 'Images/gameOver.png'

        this.windowGameOver.onload = () => {
            this.canvas.context.drawImage(this.windowGameOver, this.canvas.element.width / 2 - this.windowGameOver.width / 2, 100)

            this.canvas.context.font = '30px Quantico'
        
            this.canvas.context.fillStyle = 'white'
            this.canvas.context.fillText(this.score.incscore, 200, 200)
    
            this.canvas.context.strokeStyle = 'black'
            this.canvas.context.strokeText(this.score.incscore, 200, 200)
        }
    }
}
