import { Scene } from "phaser"
import { civ } from "kotlin-civ"
import { Tooltip, TooltipContent } from "./building-tooltip"
import { Ui } from "./ui"

export class BuildingButton {
    private image: Phaser.GameObjects.Image
    private lock: Phaser.GameObjects.Image
    private button: Phaser.GameObjects.Rectangle
    private frontLines: Phaser.GameObjects.Line[] = []

    state: "locked" | "clickable" | "built"
    hideUi: boolean

    public get width(): number {
        return this.image.width
    }

    public get height(): number {
        return this.image.height
    }

    constructor(
        scene: Scene,
        // manager: BuildManager,
        public x: number,
        public y: number,
        depth: number,
        readonly building: civ.model.Building,
        private tooltip: Tooltip
    ) {
        const self = this
        this.image = scene.add
            .image(this.x, this.y, "placeholder") //todo building icons
            .setOrigin(0, 0)
            .setScrollFactor(0)
            .setDepth(depth)
            .on(Phaser.Input.Events.POINTER_OVER, function () {
                tooltip.show(self.generateTooltip())
            })
            .on("pointerout", function () {
                self.tooltip.show(null)
                // Tooltip.show(this.scene, null)
            })
            .on("pointerdown", function () {
                console.log(building)
                // manager.chooseOption(option)
            })

        this.button = scene.add.rectangle(x, y, this.image.width, this.image.height)
            .setOrigin(0, 0)
            .setStrokeStyle(3, Ui.colorAccent.color)
            .setDepth(depth + 1)
            .setScrollFactor(0)

        this.frontLines.push(
            scene.add.line(x, y, 0, this.button.height, this.button.width, this.button.height)
            .setOrigin(0, 0)
            .setLineWidth(3)
            .setStrokeStyle(3, Ui.colorAccentDark.color)
            .setDepth(depth + 2)
            .setScrollFactor(0)
        )
        this.frontLines.push(
            scene.add.line(x, y, this.button.width, 0, this.button.width, this.button.height)
            .setOrigin(0, 0)
            .setLineWidth(3)
            .setStrokeStyle(3, Ui.colorAccentDark.color)
            .setDepth(depth + 2)
            .setScrollFactor(0)
        )

        this.lock = scene.add.image(this.x, this.y, "locked")
            .setScrollFactor(0)
            .setDisplaySize(53, 53)
            .setOrigin(0, 0)
            .setDepth(depth + 3)
    }

    setup(x: number, y: number, state: "locked" | "clickable" | "built") {
        this.x = x
        this.y = y
        this.state = state
        this.image.setPosition(x, y)
        this.button.setPosition(x, y)
        this.frontLines.forEach(it => it.setPosition(x, y))
        this.lock.setPosition(x, y)
        this.image.setInteractive()

        switch (state) {
            case "locked":
                this.image.setVisible(true)
                this.button.setVisible(false)
                this.frontLines.forEach(it => it.setVisible(false))
                this.lock.setVisible(true)
                break;
            // case "visible":
            //     this.image.setVisible(true)
            //     this.lock.setVisible(false)
            //     break;
            case "clickable":
                this.image.setVisible(true)
                this.button.setVisible(true)
                this.frontLines.forEach(it => it.setVisible(true))
                this.lock.setVisible(false)
                break;
            case "built":
                this.button.setVisible(false)
                this.frontLines.forEach(it => it.setVisible(false))
                this.image.setVisible(true)
                this.lock.setVisible(false)
                break;
            default:
                break;
        }


    }

    generateTooltip(): TooltipContent {
        return {
            centerX: this.image.getTopCenter().x, 
            bottomY: this.image.getTopCenter().y,   
            iconTexture: "placeholder",
            title: this.building.name,
            description: "Build it to be super cool he he he he.\n\nRequires TOWN HALL",
            costFood: this.building.cost.food > 0 && this.state != "built" ? this.building.cost.food.toString() : "",
            costWood: this.building.cost.wood > 0 && this.state != "built" ? this.building.cost.wood.toString() : "",
            costGold: this.building.cost.gold > 0 && this.state != "built" ? this.building.cost.gold.toString() : "",
            hp: "10",
            attack: "10",
            rangeAttack: "10",
            speed: "10",
        }
    }

    hide() {
        this.image.disableInteractive()
        this.image.setVisible(false)
        this.button.setVisible(false)
        this.frontLines.forEach(it => it.setVisible(false))
        this.lock.setVisible(false)
    }

    destroy() {
        this.button.destroy()
        this.frontLines.forEach(it => it.destroy())
        this.image.destroy()
        this.lock.destroy()
    }
}