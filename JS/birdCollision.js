import Canvas from "./canvas.js";
import Config from "./config.js";
import Pipe from "./pipe.js";
import Bird from "./bird.js";

export default class BirdCollision {
    constructor() {
        this.canvas = new Canvas()
        this.config = new Config()
        this.pipe = new Pipe()
        this.bird = new Bird()
    }

    updata() {
        this.bird.birdPositionY += this.config.gravity

        console.log(this.bird.birdPositionY)
    }
}