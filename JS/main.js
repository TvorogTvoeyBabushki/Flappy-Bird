import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
 
class Game {
    constructor() {
        this.canvas = new Canvas()
        
        new GameLoop(this.draw.bind(this))
    }

    draw() {
        this.canvas.draw()
    }
}

new Game()