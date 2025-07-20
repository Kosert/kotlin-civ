import { Scene } from "phaser"
import { civ } from "kotlin-civ"

export class BuildingButton {
    private button: Phaser.GameObjects.Image
    private lock: Phaser.GameObjects.Image

    hideUi: boolean

    public get width(): number {
        return this.button.width
    }

    public get height(): number {
        return this.button.height
    }

    constructor(
        scene: Scene,
        // manager: BuildManager,
        public x: number,
        public y: number,
        depth: number,
        readonly building: civ.model.Building
    ) {
        const self = this
        this.button = scene.add
            .image(this.x, this.y, "placeholder") //todo building icons
            .setOrigin(0, 0)
            .setScrollFactor(0)
            .setDepth(depth)
            .on(Phaser.Input.Events.POINTER_OVER, function () {
                // const tooltip = option.generateTooltip()
                // if (self.lock.visible) {
                // tooltip.title = "LOCKED: " + tooltip.title
                // }
                // Tooltip.show(scene, tooltip)
            })
            .on("pointerout", function () {
                // Tooltip.show(this.scene, null)
            })
            .on("pointerdown", function () {
                console.log(building)
                // manager.chooseOption(option)
            })

        this.lock = scene.add.image(this.x, this.y, "locked")
            .setScrollFactor(0)
            .setDisplaySize(50, 50)
            .setOrigin(0, 0)
            .setDepth(depth + 1)
    }

    //todo state: locked/possible/clickable/built
    setup(x: number, y: number, isLocked: boolean) {
        this.x = x
        this.y = y
        this.button.setPosition(x, y)
        this.lock.setPosition(x, y)

        this.button.setInteractive()
        this.button.setVisible(true)
        this.lock.setVisible(isLocked)
    }

    hide() {
        this.button.disableInteractive()
        this.button.setVisible(false)
        this.lock.setVisible(false)
    }

    destroy() {
        this.button.destroy()
        this.lock.destroy()
    }
}