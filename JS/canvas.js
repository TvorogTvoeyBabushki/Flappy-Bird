import Config from "./config.js"

export default class Canvas {
    constructor() {
        this.element = document.getElementById('flappy-bird')
        this.context = this.element.getContext('2d')

        this.element.width = 288
        this.element.height = 630

        this.background = new Image()
        this.background.src = 'Images/background.png'

        this.foreground = new Image()
        this.foreground.src = 'Images/foreground.png'

        this.backgroundX = 0

        this.config = new Config()
    }

    draw() {
        this.config.index += .3
        this.backgroundX = -((this.config.index * this.config.speedBackground) % this.element.width)

        this.context.drawImage(this.background, this.backgroundX, 0)
        this.context.drawImage(this.background, this.backgroundX + this.element.width, 0)

        this.context.drawImage(this.foreground, this.backgroundX, this.background.height)
        this.context.drawImage(this.foreground, this.backgroundX + this.element.width, this.background.height)
    }
}