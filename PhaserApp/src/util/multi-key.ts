export default class MultiKey {

    private keys: Phaser.Input.Keyboard.Key[]

    constructor(
        scene: Phaser.Scene,
        ...keyCodes: number[]
    ) {
        this.keys = keyCodes.map(key => scene.input.keyboard.addKey(key))
    }

    isDown() {
        return this.keys.some(key => key.isDown)
    }

    isUp() {
        return this.keys.every(key => key.isUp)
    }
}
