import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Pipe from "./pipe.js";
import Bird from "./bird.js";
import Score from "./score.js";

class Game {
    constructor() {
        this.canvas = new Canvas()
        this.pipe = new Pipe()
        this.bird = new Bird()
        this.score = new Score()
        
        new GameLoop(this.updata.bind(this) ,this.draw.bind(this))
    }

    updata() {
        this.pipe.updata()
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