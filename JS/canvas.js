export default class Canvas {
    constructor() {
        this.element = document.getElementById('flappy-bird')
        this.context = this.element.getContext('2d')

        this.background = new Image()
        this.background.src = './Images/background.png'
    }

    draw() {
        this.context.drawImage(this.background, 0, 0)
    }
}