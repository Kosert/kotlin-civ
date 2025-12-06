export default class MultiKey {

    private keys: Phaser.Input.Keyboard.Key[]

    constructor(
        scene: Phaser.Scene,
        ...keyCodes: number[]
    ) {
        this.keys = keyCodes.map(key => scene.input.keyboard.addKey(key))

    }

    private wasDown = false

    isJustDown(): boolean {
        const isDown = this.isDown()
        const isJustDown = !this.wasDown && isDown
        this.wasDown = isDown
        return isJustDown
    }

    isDown(): boolean {
        return this.keys.some(key => key.isDown)
    }

    isUp(): boolean {
        return this.keys.every(key => key.isUp)
    }
}
