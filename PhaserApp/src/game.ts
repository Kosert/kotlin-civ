import "phaser"
import { MainScene } from "./scenes/main-scene"

// main game configuration
const config: Phaser.Types.Core.GameConfig = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: "game",
    scene: MainScene,
}

// game class
export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config)
    }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
    var game = new Game(config)
})
