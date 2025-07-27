import { civ } from "kotlin-civ";
import { Scene } from "phaser";
import { UnitIcons } from "../ui/icons";
import { Ui } from "../ui/ui";


export class Unit extends Phaser.GameObjects.Image {

    private heathBar: Phaser.GameObjects.Rectangle
    private heathLeftover: Phaser.GameObjects.Rectangle
    private heathBarBorder: Phaser.GameObjects.Rectangle

    readonly unitId: string
    readonly unitType: civ.model.UnitType
    private targetHp: number
    private targetX: number
    private targetY: number

    private positionTween: Phaser.Tweens.Tween
    private hpTween: Phaser.Tweens.Tween

    constructor(
        readonly scene: Scene,
        unit: civ.model.CivUnit,
        readonly playerColor: civ.model.PlayerColor,
        x: number,
        y: number,
        hp: number = unit.unitType.maxHp
    ) {
        //todo icon vs tile graphic?
        super(scene, x, y, UnitIcons.get(unit.unitType))
        this.setDepth(7) //todo 6
        scene.add.existing(this)

        this.unitId = unit.unitId
        this.unitType = unit.unitType

        let color = 0xff0000
        switch (this.playerColor) {
            case civ.model.PlayerColor.BLUE:
                color = 0x0000ff
                break
            case civ.model.PlayerColor.RED:
                color = 0x8B0000
                break
            case civ.model.PlayerColor.GREEN:
                color = 0x6666ff
                break;
            default:
                break;
        }

        this.heathBarBorder = this.scene.add.rectangle(x, y, 64, 10)
            .setOrigin(0, 0)
            .setStrokeStyle(2, Ui.colorAccent.color)
            .setDepth(18)

        const percent = hp / this.unitType.maxHp
        this.heathLeftover = this.scene.add.rectangle(x, y, 64 * percent, 10)
            .setOrigin(0, 0)
            .setFillStyle(0xff0000)
            .setDepth(19)
        this.heathBar = this.scene.add.rectangle(x, y, 64 * percent, 10)
            .setOrigin(0, 0)
            .setFillStyle(color)
            .setDepth(20)

        this.targetHp = hp
        this.updateUnitData(x, y, hp)
    }


    updateUnitData(x: number, y: number, hp: number) {
        if (this.targetX != x || this.targetY != y) {
            this.animatePosition(x, y)
        }
        if (this.targetHp != hp) {
            this.animateHp(hp)
        }
    }

    animatePosition(x: number, y: number) {
        const sourceX = this.x
        const sourceY = this.y
        this.targetX = x
        this.targetY = y

        const self = this
        this.positionTween?.destroy()
        this.positionTween = this.scene.tweens.addCounter({
            ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 500,
            repeat: 0,            // -1: infinity
            yoyo: false,
        })

        this.positionTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number , previous) {
            const newX = sourceX + (self.targetX - sourceX) * current
            const newY = sourceY + (self.targetY - sourceY) * current
            const barX = newX - 32
            const barY = newY - self.height

            self.setPosition(newX, newY)
            self.heathBarBorder.setPosition(barX, barY)
            self.heathLeftover.setPosition(barX, barY)
            self.heathBar.setPosition(barX, barY)
        })
    }

    animateHp(hp: number) {
        const sourceHp = this.targetHp
        this.targetHp = hp
        
        const percent = this.targetHp / this.unitType.maxHp
        this.heathBar.setSize(64 * percent, 10)

        const self = this
        this.hpTween?.destroy()
        this.hpTween = this.scene.tweens.addCounter({
            ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000,
            repeat: 0,            // -1: infinity
            yoyo: false,
        })

        this.hpTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number , previous) {
            const newHp = sourceHp + (self.targetHp - sourceHp) * current
            const percent = newHp / self.unitType.maxHp
            self.heathLeftover.setSize(64 * percent, 10)
        })
    }

    destroy() {
        this.heathBar.destroy()
        this.heathLeftover.destroy()
        this.heathBarBorder.destroy()
        super.destroy()
    }
}