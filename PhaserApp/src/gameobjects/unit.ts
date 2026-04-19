import { civ } from "kotlin-civ";
import { Scene } from "phaser";
import { UnitIcons } from "../ui/icons";
import { Ui } from "../ui/ui";
import { Tile } from "./tile";


export class Unit extends Phaser.GameObjects.Image {

    static readonly HP_ANIMATION_LENGTH = 1000
    static readonly MOVE_ANIMATION_LENGTH = 400
    static readonly BUMP_ANIMATION_LENGTH = 100

    private heathBar: Phaser.GameObjects.Rectangle
    private heathLeftover: Phaser.GameObjects.Rectangle
    private heathBarBorder: Phaser.GameObjects.Rectangle

    readonly unitId: string
    readonly unitType: civ.model.UnitType
    readonly playerId: string
    private coordinates: civ.hex.Coordinates
    private targetHp: number
    private targetX: number
    private targetY: number

    private positionTween: Phaser.Tweens.Tween
    private hpTween: Phaser.Tweens.Tween
    private bumpTween: Phaser.Tweens.Tween

    constructor(
        readonly scene: Scene,
        unit: civ.model.CivUnit,
        readonly playerColor: civ.model.PlayerColor,
        x: number,
        y: number,
        hp: number = unit.unitType.maxHp
    ) {
        super(scene, x, y, UnitIcons.get(unit.unitType))
        this.setDepth(7)
        scene.add.existing(this)

        this.coordinates = unit.coordinates
        this.unitId = unit.unitId
        this.unitType = unit.unitType
        this.playerId = unit.playerId

        let color = 0xff0000
        switch (this.playerColor) {
            case civ.model.PlayerColor.BLUE:
                color = 0x0000ff
                break
            case civ.model.PlayerColor.RED:
                color = 0x8B0000
                break
            case civ.model.PlayerColor.GREEN:
                color = 0x00c800
                break;
            case civ.model.PlayerColor.YELLOW:
                color = 0xE3BE00
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
        this.updateUnitPosition(x, y, this.coordinates)
        this.updateUnitHp(hp)
    }

    getCoordinates(): civ.hex.Coordinates {
        return this.coordinates
    }

    updateUnitPosition(x: number, y: number, coordinates: civ.hex.Coordinates) {
        if (this.targetX != x || this.targetY != y) {
            this.coordinates = coordinates
            this.animatePosition(x, y)
        }
    }

    updatePositionByPath(positions: {x: number, y: number}[], finalCoordinates: civ.hex.Coordinates, onCheckPoint: (index: number) => void) {
        this.coordinates = finalCoordinates

        const self = this
        this.bumpTween?.remove()
        this.bumpTween = null
        this.positionTween?.remove()

        const duration = positions.length * Unit.MOVE_ANIMATION_LENGTH
        const positionsX = [this.x, ...positions.map(it => it.x)]
        const positionsY = [this.y, ...positions.map(it => it.y)]

        this.targetX = positionsX[positionsX.length - 1]
        this.targetY = positionsY[positionsY.length - 1]

        this.positionTween = this.scene.tweens.addCounter({
            ease: 'Cubic',
            duration: duration,
            repeat: 0,
            yoyo: false,
        })

        let currentStepIndex = -1
        this.positionTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number, previous) {
            const newX = Phaser.Math.Interpolation.Linear(positionsX, current)
            const newY = Phaser.Math.Interpolation.Linear(positionsY, current)

            const newStepIndex = Math.floor(current * positions.length)
            if (newStepIndex > currentStepIndex) {
                currentStepIndex = newStepIndex
                onCheckPoint(newStepIndex)
            }

            // const newX = sourceX + (self.targetX - sourceX) * current
            // const newY = sourceY + (self.targetY - sourceY) * current
            const barX = newX - 32
            const barY = newY - self.height
            self.heathBarBorder?.setPosition(barX, barY)
            self.heathLeftover?.setPosition(barX, barY)
            self.heathBar?.setPosition(barX, barY)
            self.setPosition(newX, newY)
        })
        onCheckPoint(-1)
    }

    updateUnitHp(hp: number, delay: number = 0) {
        if (this.targetHp != hp) {
            this.animateHp(hp, delay)
        }
    }

    bump(angle: number, delay: number = 0, onComplete?: () => void) {
        const sourceX = this.targetX
        const sourceY = this.targetY
        const rotatedVector = Phaser.Math.Rotate(new Phaser.Geom.Point(Tile.HEX_SIZE, 0), angle)
        const animateTarget = {
            x: sourceX + rotatedVector.x,
            y: sourceY + rotatedVector.y
        }

        const self = this
        this.positionTween?.remove()
        this.positionTween = null
        this.bumpTween?.remove()
        this.bumpTween = this.scene.tweens.addCounter({
            delay: delay,
            ease: 'Cubic', 
            duration: Unit.BUMP_ANIMATION_LENGTH,
            repeat: 0,
            yoyo: true,
            "onComplete": onComplete
        })
        this.bumpTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number , previous) {
            const newX = sourceX + (animateTarget.x - sourceX) * current
            const newY = sourceY + (animateTarget.y - sourceY) * current
            self.setPosition(newX, newY)
        })
    }

    private animatePosition(x: number, y: number) {
        const sourceX = this.x
        const sourceY = this.y
        this.targetX = x
        this.targetY = y

        const self = this
        this.bumpTween?.remove()
        this.bumpTween = null
        this.positionTween?.remove()
        this.positionTween = this.scene.tweens.addCounter({
            ease: 'Linear',
            duration: Unit.MOVE_ANIMATION_LENGTH,
            repeat: 0,
            yoyo: false,
        })

        this.positionTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number, previous) {
            const newX = sourceX + (self.targetX - sourceX) * current
            const newY = sourceY + (self.targetY - sourceY) * current
            const barX = newX - 32
            const barY = newY - self.height
            self.heathBarBorder?.setPosition(barX, barY)
            self.heathLeftover?.setPosition(barX, barY)
            self.heathBar?.setPosition(barX, barY)
            self.setPosition(newX, newY)
        })
    }

    private animateHp(hp: number, delay: number) {
        const sourceHp = this.targetHp
        this.targetHp = hp
        
        const startPercent = this.targetHp / this.unitType.maxHp

        const self = this
        this.hpTween?.remove()
        this.hpTween = this.scene.tweens.addCounter({
            delay: delay,
            ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: Unit.HP_ANIMATION_LENGTH,
            repeat: 0,            // -1: infinity
            yoyo: false,
        })

        let started = false //fixme start event
        this.hpTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number, previous) {
            if (!started) {
                self.heathBar.setSize(64 * startPercent, 10)
                started = true
            }

            const newHp = sourceHp + (self.targetHp - sourceHp) * current
            const percent = newHp / self.unitType.maxHp
            self.heathLeftover.setSize(64 * percent, 10)

            if (self.targetHp == 0) {
                self.alpha = 1 - current
            }
        })

        this.hpTween.on(Phaser.Tweens.Events.TWEEN_COMPLETE, function() {
            if (self.targetHp <= 0) {
                self.destroy()
            }
        })
    }

    tryDestroy() {
        if (this.targetHp <= 0) {
            //destroy will be executed by animation
            return
        }
        this.destroy()
    }

    destroy() {
        this.positionTween?.removeAllListeners()
        this.positionTween?.stop()
        this.hpTween?.removeAllListeners()
        this.hpTween?.stop()
        this.bumpTween?.removeAllListeners()
        this.bumpTween?.stop()
        this.heathBar.destroy()
        this.heathLeftover.destroy()
        this.heathBarBorder.destroy()
        super.destroy()
    }
}