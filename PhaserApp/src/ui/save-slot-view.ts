import { Scene } from "phaser";
import { Button } from "./button";
import { civ } from "kotlin-civ";
import { Ui } from "./ui";

export class SaveSlotView {

    private outline: Phaser.GameObjects.Rectangle
    private slotTitle: Phaser.GameObjects.Text
    private turnText: Phaser.GameObjects.Text
    private description: Phaser.GameObjects.BitmapText
    private button: Button
    private deleteButton: Button

    constructor(
        private scene: Scene,
        x: number,
        y: number,
        width: number,
        private slotNumber: number | null,  // null = autosave slot
        private onSaveClicked: (() => void) | undefined,
        private onLoadClicked: () => void,
        private onDeleteClicked: () => void,
        private gameState?: civ.core.GameState,
        private mode: "save" | "load" = "save"
    ) {
        const height = 80

        this.outline = scene.add.rectangle(x, y, width, height, 0x000000, 0)
            .setOrigin(0, 0).setStrokeStyle(1, Ui.colorAccent.color, 1).setScrollFactor(0)
        this.slotTitle = scene.add.text(x + 10, y + 10, "", { font: "bold 16px Arial", color: "#FFFFFF" })
            .setDepth(91).setScrollFactor(0)
        this.turnText = scene.add.text(x + 10, this.slotTitle.getBottomLeft().y + 5, "", { font: "bold 16px Arial", color: "#FFFFFF" })
            .setDepth(91).setScrollFactor(0)
        this.description = scene.add.bitmapText(x + 10, this.turnText.getBottomLeft().y + 5, "civ_font", "etstsds", 16)
            .setDepth(91).setScrollFactor(0)

        this.button = new Button(scene, x + width - 125, y + height - 40, "", () => {
            if (this.mode == "save") this.onSaveClicked?.()
            else this.onLoadClicked()
        }).setFixedWidth(120).setDepth(101)

        this.deleteButton = new Button(scene, x + width - 25, y + 5, "X", () => this.onDeleteClicked())
            .setFixedWidth(20).setDepth(101)

        this.setGameState(gameState)
    }

    setGameState(gameState?: civ.core.GameState) {
        this.gameState = gameState
        this.button.setDisabled(
            (this.mode == "load" && !this.gameState) ||
            (this.mode == "save" && this.slotNumber === null)
        )
        this.deleteButton.setDisabled(!this.gameState)

        const dateString = gameState
            ? " - " + new Date(Number(gameState.timestamp.toString())).toLocaleString()
            : ""
        if (this.slotNumber === null) {
            this.slotTitle.text = "Autosave" + dateString
        } else {
            this.slotTitle.text = (gameState ? "Save slot" : "Empty slot") + " #" + this.slotNumber + dateString
        }

        if (!gameState) {
            this.turnText.setText("")
            this.description.setText("Empty").setCharacterTint(0, 5)
            return
        }

        const player = gameState.players.asJsReadonlyArrayView().find(it => !it.aiType)
        const stats = gameState.statistics.asJsReadonlyMapView().get(player.playerId)
        this.turnText.setText("Turn " + (stats.turnNumber + 1))

        const playerNames = gameState.players.asJsReadonlyArrayView().map(it => it.name)
        this.description.setText(playerNames.join(", ")).setCharacterTint(0, this.description.text.length)

        const colorHex: Record<string, number> = {
            [civ.model.PlayerColor.BLUE.name]: 0x405bff,
            [civ.model.PlayerColor.RED.name]: 0xff0000,
            [civ.model.PlayerColor.GREEN.name]: 0x00ff00,
            [civ.model.PlayerColor.YELLOW.name]: 0xffff00,
        }

        let pointer = 0
        gameState.players.asJsReadonlyArrayView().forEach(it => {
            const color = colorHex[it.color.name] ?? 0xffffff
            this.description.setCharacterTint(pointer, it.name.length, false, color)
            pointer += it.name.length + 2
        })
    }

    setMode(mode: "save" | "load") {
        this.mode = mode
        this.button
            .setText(mode == "save" ? "Save game" : "Load game")
            .setDisabled(
                (mode == "load" && !this.gameState) ||
                (mode == "save" && this.slotNumber === null)
            )
    }

    y(): number {
        return this.outline.y
    }

    height(): number {
        return this.outline.height
    }

    setDepth(depth: number): SaveSlotView {
        this.outline.setDepth(depth)
        this.slotTitle.setDepth(depth)
        this.button.setDepth(depth)
        this.deleteButton.setDepth(depth)
        this.turnText.setDepth(depth)
        this.description.setDepth(depth)
        return this
    }

    setVisible(value: boolean): SaveSlotView {
        this.outline.setVisible(value)
        this.slotTitle.setVisible(value)
        this.turnText.setVisible(value)
        this.description.setVisible(value)
        this.button.setVisible(value)
        this.deleteButton.setVisible(value)
        return this
    }

    destroy() {
        this.outline.destroy()
        this.slotTitle.destroy()
        this.turnText.destroy()
        this.description.destroy()
        this.button.destroy()
        this.deleteButton.destroy()
    }
}
