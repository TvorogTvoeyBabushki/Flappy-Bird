export default class GameLoop {
    constructor(updata, draw) {
        this.updata = updata
        this.draw = draw

        this.animation()
    }

    animation() {
        requestAnimationFrame(this.animation.bind(this))

        this.updata()
        this.draw()
    }
    
    cancelAnimation() {
        cancelAnimationFrame(/* ? */)
    }
}