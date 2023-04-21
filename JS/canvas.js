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

        this.index = 0
        this.speed = 1
        this.backgroundX = 0
    }

    draw() {
        this.index++
        this.backgroundX = -((this.index * this.speed) % this.element.width)

        this.context.drawImage(this.background, this.backgroundX, 0)
        this.context.drawImage(this.background, this.backgroundX + this.element.width, 0)

        this.context.drawImage(this.foreground, this.backgroundX, this.background.height)
        this.context.drawImage(this.foreground, this.backgroundX + this.element.width, this.background.height)
    }
}