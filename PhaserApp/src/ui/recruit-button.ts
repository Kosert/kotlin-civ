import { Scene } from "phaser"
import { civ } from "kotlin-civ"
import { Tooltip, TooltipContent } from "./building-tooltip"
import { Ui } from "./ui"
import { UnitIcons } from "./icons"
import { Texts } from "./texts"

export class RecruitButton {
    private image: Phaser.GameObjects.Image
    private lock: Phaser.GameObjects.Rectangle
    private button: Phaser.GameObjects.Rectangle
    private frontLines: Phaser.GameObjects.Line[] = []

    state: "locked" | "clickable"

    public get width(): number {
        return this.image.width
    }

    public get height(): number {
        return this.image.height
    }

    constructor(
        scene: Scene,
        public x: number,
        public y: number,
        depth: number,
        readonly unitType: civ.model.UnitType,
        private tooltip: Tooltip,
        private clickListener: () => void
    ) {
        const self = this
        this.image = scene.add
            .image(this.x, this.y, UnitIcons.get(unitType))
            .setOrigin(0, 0)
            .setScrollFactor(0)
            .setDepth(depth)
            .on(Phaser.Input.Events.POINTER_OVER, function (pointer: Phaser.Input.Pointer) {
                tooltip.show(self.generateTooltip())
            })
            .on(Phaser.Input.Events.POINTER_OUT, function (pointer: Phaser.Input.Pointer) {
                self.tooltip.show(null)
            })
            .on(Phaser.Input.Events.POINTER_DOWN, function (pointer: Phaser.Input.Pointer) {
                if (pointer.leftButtonDown() && self.state == "clickable") {
                    self.image.setPosition(self.image.x - 1, self.image.y - 1)
                    self.button.strokeColor = Ui.colorAccentDark.color;
                    self.frontLines.forEach(it => it.strokeColor = Ui.colorAccent.color)
                }
            })
            .on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
                if (pointer.leftButtonReleased() && self.state == "clickable") {
                    self.clickListener()
                }
            });
            scene.input.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
                if (pointer.leftButtonReleased() && self.state == "clickable") {
                    self.image.setPosition(self.x, self.y)
                    self.button.strokeColor = Ui.colorAccent.color;
                    self.frontLines.forEach(it => it.strokeColor = Ui.colorAccentDark.color)
                }
            });
            scene.input.on(Phaser.Input.Events.POINTER_UP_OUTSIDE, function (pointer: Phaser.Input.Pointer) {
                if (pointer.leftButtonReleased() && self.state == "clickable") {
        
                    self.image.setPosition(self.x, self.y)
                    self.button.strokeColor = Ui.colorAccent.color;
                    self.frontLines.forEach(it => it.strokeColor = Ui.colorAccentDark.color)
                }
            });

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

        this.lock = scene.add.rectangle(this.x, this.y, 53, 53, 0x000000, 0.5)
            .setScrollFactor(0)
            .setOrigin(0, 0)
            .setDepth(depth + 3)
    }

    setup(/*x: number, y: number,*/ state: "locked" | "clickable") {
        // this.x = x
        // this.y = y
        this.state = state
        // this.image.setPosition(x, y)
        // this.button.setPosition(x, y)
        // this.frontLines.forEach(it => it.setPosition(x, y))
        // this.lock.setPosition(x, y)
        this.image.setInteractive()

        switch (state) {
            case "locked":
                this.image.setVisible(true)
                this.button.setVisible(false)
                this.frontLines.forEach(it => it.setVisible(false))
                this.lock.setVisible(true)
                break;
            case "clickable":
                this.image.setVisible(true)
                this.button.setVisible(true)
                this.frontLines.forEach(it => it.setVisible(true))
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
            iconTexture: UnitIcons.get(this.unitType),
            title: Texts.unitName(this.unitType),
            description: Texts.recruitDescription(this.unitType),
            costFood: this.unitType.cost.food > 0 ? this.unitType.cost.food.toString() : "",
            costWood: this.unitType.cost.wood > 0 ? this.unitType.cost.wood.toString() : "",
            costGold: this.unitType.cost.gold > 0 ? this.unitType.cost.gold.toString() : "",
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