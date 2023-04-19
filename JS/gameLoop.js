export default class GameLoop {
    constructor(draw) {
        this.draw = draw

        this.animation()
    }

    animation() {
        requestAnimationFrame(this.animation.bind(this))

        this.draw()
    }
}