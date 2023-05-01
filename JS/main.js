import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Pipe from "./pipe.js";
import Bird from "./bird.js";
import Score from "./score.js";
import WindowGameOver from "./windowGameOver.js";
import Medal from "./medal.js";

class Game {
    constructor() {
        this.canvas = new Canvas()
        this.pipe = new Pipe()
        this.bird = new Bird()
        this.score = new Score()
        this.windowGameOver = new WindowGameOver()
        this.medal = new Medal(this.score)

        this.gameLoop = new GameLoop(this.updata.bind(this), this.draw.bind(this))
        this.score.localStorageScore()
    }

    updata() {
        this.pipe.updata(this.bird, this.gameLoop, this.windowGameOver, this.score, this.medal)
        this.bird.updata()
    }

    draw() {
        this.canvas.draw()
        this.pipe.draw()
        this.bird.draw()
        this.score.draw()
    }
}
new Game()