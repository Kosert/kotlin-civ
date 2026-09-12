import { Scene, Tweens } from "phaser";
import { civ } from "kotlin-civ";

export class Projectile extends Phaser.GameObjects.Image {

    static readonly FLIGHT_DURATION = 400

    private tween: Tweens.Tween

    constructor(
        readonly scene: Scene,
        shooter: civ.model.UnitType,
        x: number,
        y: number,
        rotation: number,
        targetX: number,
        targetY: number,
        onComplete: () => void
    ) {
        let textureName: string
        if (shooter == civ.model.UnitType.TREBUCHET) {
            textureName = "projectile_rock"
        } else {
            textureName = "projectile_arrow"
        }
        super(scene, x, y, textureName)
        this.setRotation(rotation)
        this.setDepth(10)

        const self = this
        this.tween = scene.tweens.add({
            targets: this,
            x: targetX,
            y: targetY,
            ease: 'Sine',
            duration: Projectile.FLIGHT_DURATION,
            repeat: 0,
            yoyo: false,
            "onComplete": () => {
                onComplete()
                self.destroy()
            }
        })
    }

    destroy(): void {
        this.tween.destroy()
        super.destroy()
    }
}