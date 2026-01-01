import { Scene, Tweens } from "phaser";

export class Projectile extends Phaser.GameObjects.Image {

    static readonly FLIGHT_DURATION = 400

    private tween: Tweens.Tween

    constructor(
        readonly scene: Scene,
        x: number,
        y: number,
        rotation: number,
        targetX: number,
        targetY: number,
        onComplete: () => void
    ) {
        //fixme icon
        super(scene, x, y, "wood_icon")
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