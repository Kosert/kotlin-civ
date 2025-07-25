import { Scene } from "phaser";
import { Ui } from "./ui";

export class Tooltip {

    static tooltipWidth = 300

    private background: Phaser.GameObjects.Rectangle
    private icon: Phaser.GameObjects.Image
    private titleText: Phaser.GameObjects.Text
    private costFoodIcon: Phaser.GameObjects.Image
    private costFoodText: Phaser.GameObjects.Text
    private costWoodIcon: Phaser.GameObjects.Image
    private costWoodText: Phaser.GameObjects.Text
    private costGoldIcon: Phaser.GameObjects.Image
    private costGoldText: Phaser.GameObjects.Text
    private mainText: Phaser.GameObjects.BitmapText
    private allElements: Phaser.GameObjects.Components.Visible[] = []

    //todo layout, origin - place over icon,
    constructor(scene: Scene, centerX: number, bottomY: number) {
        this.background = scene.add.rectangle(centerX, bottomY, Tooltip.tooltipWidth, 200, Ui.colorLight, 0.95).setOrigin(0.5, 1)
            .setStrokeStyle(1, Ui.colorAccent.color)
        const x = this.background.getTopLeft().x
        const y = this.background.getTopLeft().y

        this.titleText = scene.add.text(x + 10, y + 5, "Sample title", { font: "bold 20px Arial", color: Ui.colorText.rgba })
        this.icon = scene.add.image(x + 10, y, "").setOrigin(0, 0)

        this.costFoodIcon = scene.add.image(x + 10, y, "food_icon").setOrigin(0, 0)
        this.costFoodText = scene.add.text(x + 40, y, "50", { font: "bold 16px Arial", color: "#FFFFFF" }).setPadding(0, 10, 0, 2)//.setOrigin(0, 0.5)
        this.costWoodIcon = scene.add.image(x + 10, y, "wood_icon").setOrigin(0, 0)
        this.costWoodText = scene.add.text(x + 40, y, "50", { font: "bold 16px Arial", color: "#FFFFFF" }).setPadding(0, 10, 0, 2)//.setOrigin(0, 0.5)
        this.costGoldIcon = scene.add.image(x + 10, y, "gold_coin").setOrigin(0, 0)
        this.costGoldText = scene.add.text(x + 40, y, "50", { font: "bold 16px Arial", color: "#FFFFFF" }).setPadding(0, 10, 0, 2)//.setOrigin(0, 0.5)

        this.mainText = scene.add.bitmapText(x + 10, y, "civ_font", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 18, 0)
            .setLineSpacing(1)
            .setMaxWidth(Tooltip.tooltipWidth - 10)
            .setOrigin(0, 0)
               
        this.allElements.push(this.background, this.icon, this.titleText, this.mainText, this.costFoodIcon, this.costFoodText, this.costWoodIcon, this.costWoodText, this.costGoldIcon, this.costGoldText)
        // @ts-ignore
        this.allElements.forEach(it => it.setDepth(100).setVisible(false).setScrollFactor(0))

        const self = this
        // scene.events.on(Tooltip.EVENT, function(content?: TooltipContent) {
        //     self.show(content)
        // })
    }

    hideUi: boolean = false

    show(content?: TooltipContent) {
        if (!content || this.hideUi) {
            this.allElements.forEach(it => it.setVisible(false))
            return
        }
        this.allElements.forEach(it => it.setVisible(true))
        this.background.setPosition(content.centerX, content.bottomY)
        const x = this.background.getTopLeft().x
        const y = this.background.getTopLeft().y
        //todo set positions

        if (content.iconTexture) {
            this.icon.setTexture(content.iconTexture)
        }
        this.icon.setScale(content.title ? 1 : 0)
            .setPosition(x + 10, y + 10)

        const iconTopRight = this.icon.getTopRight()
        this.titleText.text = content.title ?? ""
        this.titleText.setPosition(iconTopRight.x + 25, y + 10)
        this.titleText.setScale(content.title ? 1 : 0)

        this.mainText.setPosition(iconTopRight.x + 25, this.titleText.getBottomLeft().y + 8)
        this.mainText.text = content.description ?? ""
        this.mainText.setMaxWidth(Tooltip.tooltipWidth - this.icon.width - 25 - 10 - 10)
        this.mainText.setScale(content.description ? 1 : 0)

        const iconBottomLeft = this.icon.getBottomLeft()
        this.costFoodIcon.setPosition(iconBottomLeft.x, iconBottomLeft.y + 15)
        this.costFoodText.setPosition(iconBottomLeft.x + this.costFoodIcon.width + 5, iconBottomLeft.y + 10)
        this.costFoodText.setText(content.costFood ?? "")
        this.costFoodIcon.setScale(content.costFood ? 1 : 0)
        this.costFoodText.setScale(content.costFood ? 1 : 0)

        const foodBottomLeft = this.costFoodIcon.getBottomLeft()
        this.costWoodIcon.setPosition(foodBottomLeft.x, foodBottomLeft.y + 8)
        this.costWoodText.setPosition(foodBottomLeft.x + this.costWoodIcon.width + 5, foodBottomLeft.y + 3)
        this.costWoodText.setText(content.costWood ?? "")
        this.costWoodIcon.setScale(content.costWood ? 1 : 0)
        this.costWoodText.setScale(content.costWood ? 1 : 0)

        const woodBottomLeft = this.costWoodIcon.getBottomLeft()
        this.costGoldIcon.setPosition(woodBottomLeft.x, woodBottomLeft.y + 8)
        this.costGoldText.setPosition(woodBottomLeft.x + this.costGoldIcon.width + 5, woodBottomLeft.y + 3)
        this.costGoldText.setText(content.costGold ?? "")
        this.costGoldIcon.setScale(content.costGold ? 1 : 0)
        this.costGoldText.setScale(content.costGold ? 1 : 0)

        // this.background.height = this.speedText.y + this.speedText.displayHeight - this.y + 5
    }

    destroy() {
        // @ts-ignore
        this.allElements.forEach(it => it.destroy())
    }
}

export class TooltipContent {
    centerX: number
    bottomY: number
    iconTexture?: string
    title?: string
    description?: string
    costFood?: string
    costWood?: string
    costGold?: string
}