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
    private mainText: Phaser.GameObjects.Text
    private hpIcon: Phaser.GameObjects.Image
    private hpText: Phaser.GameObjects.Text
    private rangeAttackIcon: Phaser.GameObjects.Image
    private rangeAttackText: Phaser.GameObjects.Text
    private attackIcon: Phaser.GameObjects.Image
    private attackText: Phaser.GameObjects.Text
    private speedIcon: Phaser.GameObjects.Image
    private speedText: Phaser.GameObjects.Text
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

        this.mainText = scene.add.text(x + 10, y, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
            { font: "16px Arial", color: "#FFFFFF", wordWrap: { width: Tooltip.tooltipWidth - 10 } })
            .setOrigin(0, 0)
               
        this.hpIcon = scene.add.image(x + 10, y, "heart").setOrigin(0, 0)
        this.hpText = scene.add.text(x + 40, y, "50", { font: "bold 20px Arial", color: "#FFFFFF" }).setPadding(0, 6, 0, 2)
        
        this.rangeAttackIcon = scene.add.image(x + 10, y, "attack_range").setOrigin(0, 0)
        this.rangeAttackText = scene.add.text(x + 40, y, "50", { font: "bold 20px Arial", color: "#FFFFFF" }).setPadding(0, 6, 0, 2)

        this.attackIcon = scene.add.image(x + 10, y, "attack").setOrigin(0, 0)
        this.attackText = scene.add.text(x + 40, y, "50", { font: "bold 20px Arial", color: "#FFFFFF" }).setPadding(0, 6, 0, 2)
        
        this.speedIcon = scene.add.image(x + 10, y, "speed").setOrigin(0, 0)
        this.speedText = scene.add.text(x + 40, y, "50", { font: "bold 20px Arial", color: "#FFFFFF" }).setPadding(0, 6, 0, 2)

        this.allElements.push(this.background, this.icon, this.titleText, this.mainText, this.costFoodIcon, this.costFoodText, this.costWoodIcon, this.costWoodText, this.costGoldIcon, this.costGoldText, this.hpIcon, this.hpText, this.rangeAttackIcon, this.rangeAttackText, this.attackIcon, this.attackText, this.speedIcon, this.speedText)
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
        this.mainText.setWordWrapWidth(Tooltip.tooltipWidth - this.icon.width - 25 - 10 - 10)
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


        this.hpText.y = this.mainText.y + this.mainText.displayHeight
        this.hpIcon.y = this.mainText.y + this.mainText.displayHeight + 5
        this.hpText.text = content.hp
        this.hpText.setScale(content.hp ? 1 : 0)
        this.hpIcon.setScale(content.hp ? 1 : 0)
        
        this.rangeAttackText.y = this.hpText.y + this.hpText.displayHeight
        this.rangeAttackIcon.y = this.hpText.y + this.hpText.displayHeight + 5
        this.rangeAttackText.text = content.rangeAttack
        this.rangeAttackText.setScale(content.rangeAttack ? 1 : 0)
        this.rangeAttackIcon.setScale(content.rangeAttack ? 1 : 0)

        this.attackText.y = this.rangeAttackText.y + this.rangeAttackText.displayHeight
        this.attackIcon.y = this.rangeAttackText.y + this.rangeAttackText.displayHeight + 5
        this.attackText.text = content.attack
        this.attackText.setScale(content.attack ? 1 : 0)
        this.attackIcon.setScale(content.attack ? 1 : 0)

        this.speedText.y = this.attackText.y + this.attackText.displayHeight
        this.speedIcon.y = this.attackText.y + this.attackText.displayHeight + 5
        this.speedText.text = content.speed
        this.speedText.setScale(content.speed ? 1 : 0)
        this.speedIcon.setScale(content.speed ? 1 : 0)

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
    hp?: string
    attack?: string
    rangeAttack?: string
    speed?: string
}