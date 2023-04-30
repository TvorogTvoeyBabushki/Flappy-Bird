import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Pipe from "./pipe.js";
import Bird from "./bird.js";
import Score from "./score.js";
import WindowGameOver from "./windowGameOver.js";

class Game {
    constructor() {
        this.canvas = new Canvas()
        this.pipe = new Pipe()
        this.bird = new Bird()
        this.score = new Score()
        this.windowGameOver = new WindowGameOver()

        this.gameLoop = new GameLoop(this.updata.bind(this), this.draw.bind(this))
    }

    updata() {
        this.pipe.updata(this.bird, this.score, this.gameLoop, this.windowGameOver)
        this.bird.updata()
    }

    draw() {
        this.canvas.draw()
        this.pipe.draw()
        this.bird.draw()
        this.score.draw(
        )
    }
}

new Game()