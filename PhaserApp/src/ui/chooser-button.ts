import { Scene } from "phaser";
import { Button } from "./button";
import { civ } from "kotlin-civ";
import { Ui } from "./ui";

export class ChooserButton {

    private button: Button
    private selectedValue: { id: string, name: string }

    constructor(
        scene: Scene,
        x: number,
        y: number,
        private values: { id: string, name: string }[],
        private onChanged?: (id: string) => void
    ) {
        const self = this
        this.button = new Button(scene, x, y, "", function() {
            self.switchToNext()
        }, function() {
            self.switchToPrevious()
        })

        this.selectedValue = values[0]
        this.selectValue(values[0])
    }

    private selectValue(value: { id: string, name: string }) {
        const changed = this.selectedValue.id != value.id
        this.selectedValue = value
        this.button.setText(value.name)

        switch (value.id) {
            case civ.model.PlayerColor.BLUE.name:
                this.button.setTextColor("#0000ff")
                break
            case civ.model.PlayerColor.RED.name:
                this.button.setTextColor("#ff0000")
                break
            case civ.model.PlayerColor.GREEN.name:
                 this.button.setTextColor("#00ff00")
                break
            case civ.model.PlayerColor.YELLOW.name:
                this.button.setTextColor("#ffff00")
                break;
            default:
                this.button.setTextColor(Ui.colorAccent.rgba)
                break;
        }

        if (this.onChanged && changed) {
            this.onChanged(value.id)
        }
    }

    setValues(values: { id: string, name: string }[]) {
        this.values = values
        //todo handle removed value
    }

    selectById(id: string) {
        const value = this.values.find(it => it.id == id)
        this.selectValue(value)
    }

    switchToNext() {
        const currentIndex = this.values.findIndex(it => it.id == this.selectedValue.id)
        const next = this.values[currentIndex + 1]
        this.selectValue(next ?? this.values[0])
    }

    switchToPrevious() {
        const currentIndex = this.values.findIndex(it => it.id == this.selectedValue.id)
        const prev = this.values[currentIndex - 1]
        this.selectValue(prev ?? this.values[this.values.length - 1])
    }

    x(): number {
        return this.button.x()
    }

    y(): number {
        return this.button.y()
    }

    width(): number {
        return this.button.width()
    }

    height(): number {
        return this.button.height()
    }

    setDepth(depth: number): ChooserButton {
        this.button.setDepth(depth)
        return this
    }

    setFixedWidth(width: number): ChooserButton {
        this.button.setFixedWidth(width)
        return this
    }

    setDisabled(disabled: boolean): ChooserButton {
        this.button.setDisabled(disabled)
        return this
    }

    setVisible(value: boolean): ChooserButton {
        this.button.setVisible(value)
        return this
    }

    setY(y: number): ChooserButton {
        this.button.setY(y)
        return this
    }
}