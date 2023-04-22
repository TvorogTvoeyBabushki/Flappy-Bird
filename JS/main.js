import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Bird from "./bird.js";
 
class Game {
    constructor() {
        this.canvas = new Canvas()
        this.bird = new Bird()
        
        new GameLoop(this.updata.bind(this) ,this.draw.bind(this))
    }

    updata() {
        this.bird.updata()
    }

    draw() {
        this.canvas.draw()
        this.bird.draw()
    }
}

new Game()