import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Pipe from "./pipe.js";
import Bird from "./bird.js";

// import BirdCollision from "./birdCollision.js";

class Game {
    constructor() {
        this.canvas = new Canvas()
        this.pipe = new Pipe()
        this.bird = new Bird()

        // this.birdCollision = new BirdCollision()
        
        new GameLoop(this.updata.bind(this) ,this.draw.bind(this))
    }

    updata() {
        this.bird.updata()
        // this.birdCollision.updata()
    }

    draw() {
        this.canvas.draw()
        this.pipe.draw()
        this.bird.draw()
    }
}

new Game()