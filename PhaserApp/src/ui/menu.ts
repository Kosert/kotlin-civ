import { Scene } from "phaser";
import { Ui } from "./ui";
import { Button } from "./button";
import { UiAction, UiActionEvent } from "./ui-actions";
import { civ, kotlin } from "kotlin-civ";
import { ChooserButton } from "./chooser-button";
import { StorageItem } from "../const";
import { SaveSlotView } from "./save-slot-view";


export class Menu {
    static mainWidth = 200
    static mainTopY = 200
    static mainHeight = 240
    static bigWidth = 500
    static bigTopY = 80
    static bigHeight = 600

    private state: "none" | "main" | "new" | "save" | "load" = "none"

    private backgroundOverlay: Phaser.GameObjects.Rectangle

    // main
    private mainBackground: Phaser.GameObjects.Rectangle
    private newGameButton: Button
    private saveGameButton: Button
    private loadGameButton: Button
    private cancelButton: Button

    //common
    private bigBackground: Phaser.GameObjects.Rectangle
    private backButton: Button

    //new game menu
    private playersLabel: Phaser.GameObjects.Text
    private playerChoosers: ChooserButton[] = []
    private colorChoosers: ChooserButton[] = []
    private mapSettingsLabel: Phaser.GameObjects.Text
    private mapTypeLabel: Phaser.GameObjects.Text
    private mapTypeChooser: ChooserButton
    private mapSizeLabel: Phaser.GameObjects.Text
    private mapSizeChooser: ChooserButton
    private stockpilesLabel: Phaser.GameObjects.Text
    private stockpilesChooser: ChooserButton
    private startButton: Button
    private generatingOverlay: Phaser.GameObjects.Rectangle
    private generatingLabel: Phaser.GameObjects.Text

    //save/load game menu
    private autoSaveSlotButton: SaveSlotView
    private saveSlotButtons: SaveSlotView[] = []

    private gameApi: civ.core.GameApi

    constructor(
        private scene: Scene,
        private generateGameState: () => civ.core.GameState,
    ) {
        const screenWidth = scene.cameras.main.width
        const screenHeight = scene.cameras.main.height
        const mainStartX = (screenWidth - Menu.mainWidth) / 2

        this.backgroundOverlay = scene.add.rectangle(0, 0, screenWidth, screenHeight, 0x000000, 0.4)
            .setOrigin(0, 0).setDepth(100).setScrollFactor(0).setVisible(false)

        this.mainBackground = scene.add.rectangle(mainStartX, Menu.mainTopY, Menu.mainWidth, Menu.mainHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0).setDepth(101).setScrollFactor(0).setVisible(false)

        this.newGameButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "New game", () => {
            this.state = "new"
            this.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        this.saveGameButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "Save game", () => {
            this.state = "save"
            this.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        this.loadGameButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "Load game", () => {
            this.state = "load"
            this.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        this.cancelButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "Back to game", () => {
            this.state = "none"
            this.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        const bigStartX = (screenWidth - Menu.bigWidth) / 2
        this.bigBackground = scene.add.rectangle(bigStartX, Menu.bigTopY, Menu.bigWidth, Menu.bigHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0).setDepth(101).setScrollFactor(0).setVisible(false)

        this.backButton = new Button(scene, bigStartX + 10, 0, "Back", () => {
            this.state = "main"
            this.setupState()
        }).setFixedWidth(100).setDepth(101).setVisible(false)

        // --- New game: Players section ---

        this.playersLabel = scene.add.text(bigStartX + 30, 0, "Players", { font: "bold 18px Arial", color: Ui.colorAccent.rgba })
            .setDepth(102).setScrollFactor(0).setVisible(false)

        const playerOptions = [
            { id: "none", text: "Empty slot" },
            { id: "player", text: "Player" },
            { id: civ.ai.AiType.OTP_WARRIOR.value, text: "AI (Warrior)" },
            { id: civ.ai.AiType.OTP_SCOUT.value, text: "AI (Scout)" },
            { id: civ.ai.AiType.OTP_ARCHER.value, text: "AI (Archer)" },
            { id: civ.ai.AiType.IDLE.value, text: "AI (Idle)" },
        ]

        const defaultPlayersIds = ["player", civ.ai.AiType.OTP_WARRIOR.value]
        for (let i = 0; i < 4; i++) {
            const chooserButton = new ChooserButton(scene, bigStartX + 30, 0, playerOptions, (id: string) => {
                this.colorChoosers[i].setDisabled(id == "none")
            }, defaultPlayersIds[i] ?? playerOptions[0].id).setFixedWidth(200).setDepth(101).setVisible(false)
            this.playerChoosers.push(chooserButton)
        }

        const colorOptions = civ.model.PlayerColor.values().map(it => { return { id: it.name, text: "██" } })

        const colorsStartX = this.playerChoosers[0].x() + 210
        for (let i = 0; i < 4; i++) {
            const chooserButton = new ChooserButton(scene, colorsStartX, 0, colorOptions, undefined, colorOptions[i].id)
                .setDepth(101)
                .setDisabled(!defaultPlayersIds[i])
                .setVisible(false)
            this.colorChoosers.push(chooserButton)
        }

        // --- New game: Map Settings section ---

        this.mapSettingsLabel = scene.add.text(bigStartX + 30, 0, "Map Settings", { font: "bold 18px Arial", color: Ui.colorAccent.rgba })
            .setDepth(102).setScrollFactor(0).setVisible(false)

        const mapSettingsLabelX = bigStartX + 30
        const mapSettingsChooserX = bigStartX + 200

        this.mapTypeLabel = scene.add.text(mapSettingsLabelX, 0, "Map type", { font: "16px Arial", color: "#FFFFFF" })
            .setDepth(102).setScrollFactor(0).setVisible(false)

        const mapTypeOptions = [
            { id: "continent", text: "Continent" },
        ]
        this.mapTypeChooser = new ChooserButton(scene, mapSettingsChooserX, 0, mapTypeOptions)
            .setFixedWidth(200).setDepth(101).setVisible(false)

        this.mapSizeLabel = scene.add.text(mapSettingsLabelX, 0, "Map size", { font: "16px Arial", color: "#FFFFFF" })
            .setDepth(102).setScrollFactor(0).setVisible(false)

        const mapSizeOptions = civ.creator.CreatorMapSize.values().map(it => ({
            id: it.name,
            text: it.name.charAt(0) + it.name.slice(1).toLowerCase() + ` (${it.width}x${it.height})`,
        }))
        this.mapSizeChooser = new ChooserButton(scene, mapSettingsChooserX, 0, mapSizeOptions)
            .setFixedWidth(200).setDepth(101).setVisible(false)

        this.stockpilesLabel = scene.add.text(mapSettingsLabelX, 0, "Starting resources", { font: "16px Arial", color: "#FFFFFF" })
            .setDepth(102).setScrollFactor(0).setVisible(false)

        const stockpilesOptions = [
            { id: "20,20,10", text: "Scarce (20/20/10)" },
            { id: "40,40,20", text: "Standard (40/40/20)" },
            { id: "80,80,40", text: "Abundant (80/80/40)" },
        ]
        this.stockpilesChooser = new ChooserButton(scene, mapSettingsChooserX, 0, stockpilesOptions, undefined, "40,40,20")
            .setFixedWidth(200).setDepth(101).setVisible(false)

        // --- New game: Generating label + Start button ---

        this.generatingOverlay = scene.add.rectangle(
            bigStartX + Menu.bigWidth / 2, Menu.bigTopY + Menu.bigHeight / 2,
            220, 50, 0x000000, 0.85
        ).setOrigin(0.5, 0.5).setDepth(103).setScrollFactor(0).setVisible(false)

        this.generatingLabel = scene.add.text(
            bigStartX + Menu.bigWidth / 2, Menu.bigTopY + Menu.bigHeight / 2,
            "Generating map...",
            { font: "bold 22px Arial", color: Ui.colorAccent.rgba }
        ).setOrigin(0.5, 0.5).setDepth(104).setScrollFactor(0).setVisible(false)

        this.startButton = new Button(scene, bigStartX + Menu.bigWidth - 160, 0, "Start game", () => {
            const players = this.playerChoosers
                .map((player, index) => ({ player, index }))
                .filter(({ player }) => player.getSelected().id != "none")
                .map(({ player, index }) => {
                    const colorId = this.colorChoosers[index].getSelected().id
                    const color = civ.model.PlayerColor.valueOf(colorId)
                    const ai = civ.ai.AiType.values().find(it => it.value == player.getSelected().id)
                    return new civ.model.Player(player.getSelected().text, color, ai)
                })

            const mapSize = civ.creator.CreatorMapSize.valueOf(this.mapSizeChooser.getSelected().id)
            const [food, wood, gold] = this.stockpilesChooser.getSelected().id.split(",").map(Number)

            this.generatingOverlay.setVisible(true)
            this.generatingLabel.setVisible(true)
            this.startButton.setDisabled(true)

            setTimeout(() => {
                const newGameState = civ.creator.GameCreator.createNewGame(
                    kotlin.collections.KtList.fromJsArray(players),
                    mapSize,
                    kotlin.collections.KtList.fromJsArray([civ.model.UnitType.SETTLERS, civ.model.UnitType.SCOUT]),
                    new civ.model.Stockpiles(food, wood, gold)
                )

                this.generatingOverlay.setVisible(false)
                this.generatingLabel.setVisible(false)
                this.startButton.setDisabled(false)
                scene.events.emit(UiActionEvent, UiAction.LOAD_GAME_STATE, newGameState)
                this.state = "none"
                this.setupState()
            }, 0)
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        // --- Save/Load slots ---

        const slotWidth = Menu.bigWidth - 50
        this.autoSaveSlotButton = new SaveSlotView(
            scene, bigStartX + 25, Menu.bigTopY + 20, slotWidth, null,
            undefined,
            () => {
                const json = localStorage.getItem(StorageItem.AUTO_SAVE_SLOT)
                const gameState = civ.core.GameState.Companion.fromJson(json)
                this.scene.events.emit(UiActionEvent, UiAction.LOAD_GAME_STATE, gameState)
                this.state = "none"
                this.setupState()
            },
            () => {
                if (confirm("Are you sure want to delete this save?")) {
                    localStorage.removeItem(StorageItem.AUTO_SAVE_SLOT)
                    this.refreshGameStates()
                }
            }
        ).setVisible(false).setDepth(101)

        for (let i = 0; i < 5; i++) {
            const prev = this.saveSlotButtons[i - 1]
            const y = prev ? prev.y() + prev.height() + 10 : this.autoSaveSlotButton.y() + this.autoSaveSlotButton.height() + 10
            const slot = StorageItem.getSaveSlot(i + 1)
            const saveSlot = new SaveSlotView(
                scene, bigStartX + 25, y, slotWidth, i + 1,
                () => {
                    const isOverWrite = localStorage.getItem(slot)
                    if (!isOverWrite || confirm("Do you want to overwrite Save Slot #" + (i + 1) + "?")) {
                        const gameState = this.generateGameState()
                        localStorage.setItem(slot, gameState.toJson())
                        this.refreshGameStates()
                    }
                },
                () => {
                    const json = localStorage.getItem(slot)
                    const gameState = civ.core.GameState.Companion.fromJson(json)
                    this.scene.events.emit(UiActionEvent, UiAction.LOAD_GAME_STATE, gameState)
                    this.state = "none"
                    this.setupState()
                },
                () => {
                    if (confirm("Are you sure want to delete this save?")) {
                        localStorage.removeItem(slot)
                        this.refreshGameStates()
                    }
                }
            ).setVisible(false).setDepth(101)
            this.saveSlotButtons.push(saveSlot)
        }

        this.setGameApi(null)
        this.refreshGameStates()
    }

    private refreshGameStates() {
        const autoSaveJson = localStorage.getItem(StorageItem.AUTO_SAVE_SLOT)
        let gameState
        if (autoSaveJson) {
            gameState = civ.core.GameState.Companion.fromJson(autoSaveJson)
        }
        this.autoSaveSlotButton.setGameState(gameState)

        for (let i = 0; i < 5; i++) {
            const storageItem = StorageItem.getSaveSlot(i + 1)
            const json = localStorage.getItem(storageItem)
            let gameState
            if (json) {
                gameState = civ.core.GameState.Companion.fromJson(json)
            }
            this.saveSlotButtons[i].setGameState(gameState)
        }
    }

    private setupState() {
        this.backgroundOverlay.setVisible(this.state != "none")
        const isBigScreen = this.state == "new" || this.state == "save" || this.state == "load"
        this.bigBackground.setVisible(isBigScreen)
        this.backButton.setVisible(isBigScreen)
        if (isBigScreen && this.backButton.y() == 0) {
            this.backButton.setY(Menu.bigTopY + Menu.bigHeight - this.backButton.height() - 10)
        }
        this.setMainVisible(this.state == "main")
        this.setNewGameVisible(this.state == "new")
        const isSaveLoad = this.state == "save" || this.state == "load"
        this.setSaveLoadGameVisible(isSaveLoad, isSaveLoad ? (this.state as "save" | "load") : undefined)
        if (isSaveLoad) {
            this.refreshGameStates()
        }
    }

    private setMainVisible(visible: boolean) {
        this.mainBackground.setVisible(visible)
        this.newGameButton.setVisible(visible)
        this.saveGameButton.setVisible(visible)
        this.loadGameButton.setVisible(visible)
        this.cancelButton.setVisible(visible)

        if (visible && this.newGameButton.y() == 0) {
           this.newGameButton.setY(Menu.mainTopY + 30)
           this.saveGameButton.setY(this.newGameButton.y() + this.newGameButton.height() + 10)
           this.loadGameButton.setY(this.saveGameButton.y() + this.saveGameButton.height() + 10)
           this.cancelButton.setY(this.loadGameButton.y() + this.loadGameButton.height() + 30)
        }
    }

    private setNewGameVisible(visible: boolean) {
        this.playersLabel.setVisible(visible)
        this.playerChoosers.forEach(it => it.setVisible(visible))
        this.colorChoosers.forEach(it => it.setVisible(visible))
        this.mapSettingsLabel.setVisible(visible)
        this.mapTypeLabel.setVisible(visible)
        this.mapTypeChooser.setVisible(visible)
        this.mapSizeLabel.setVisible(visible)
        this.mapSizeChooser.setVisible(visible)
        this.stockpilesLabel.setVisible(visible)
        this.stockpilesChooser.setVisible(visible)
        this.startButton.setVisible(visible)
        if (!visible) {
            this.generatingOverlay.setVisible(false)
            this.generatingLabel.setVisible(false)
        }

        if (visible && this.playerChoosers[0].y() == 0) {
            this.playersLabel.setY(Menu.bigTopY + 25)

            this.playerChoosers.forEach((it, index) => {
                const prev = this.playerChoosers[index - 1]
                const y = prev ? prev.y() + prev.height() + 10 : Menu.bigTopY + 50
                it.setY(y)
            })

            this.colorChoosers.forEach((it, index) => {
                const prev = this.colorChoosers[index - 1]
                const y = prev ? prev.y() + prev.height() + 10 : Menu.bigTopY + 50
                it.setY(y)
            })

            const lastPlayerBottom = this.playerChoosers[3].y() + this.playerChoosers[3].height()
            this.mapSettingsLabel.setY(lastPlayerBottom + 20)

            const firstRowY = this.mapSettingsLabel.y + this.mapSettingsLabel.height + 15
            this.mapTypeChooser.setY(firstRowY)
            this.mapTypeLabel.setY(firstRowY + 10)

            const secondRowY = firstRowY + this.mapTypeChooser.height() + 10
            this.mapSizeChooser.setY(secondRowY)
            this.mapSizeLabel.setY(secondRowY + 10)

            const thirdRowY = secondRowY + this.mapSizeChooser.height() + 10
            this.stockpilesChooser.setY(thirdRowY)
            this.stockpilesLabel.setY(thirdRowY + 10)

            this.startButton.setY(Menu.bigTopY + Menu.bigHeight - this.startButton.height() - 10)
        }
    }

    private setSaveLoadGameVisible(visible: boolean, mode?: "save" | "load") {
        this.autoSaveSlotButton.setVisible(visible)
        if (mode) {
            this.autoSaveSlotButton.setMode(mode)
        }
        this.saveSlotButtons.forEach(it => {
            it.setVisible(visible)
            if (mode) it.setMode(mode)
        })
    }

    setGameApi(gameApi: civ.core.GameApi) {
        this.gameApi = gameApi
        this.saveGameButton.setDisabled(this.gameApi == null)
        this.cancelButton.setDisabled(this.gameApi == null)
    }

    onEscClicked() {
        switch (this.state) {
            case "none":
                this.state = "main"
                break
            case "main":
                if (this.gameApi) {
                    this.state = "none"
                }
                break
            case "new":
            case "save":
            case "load":
                this.state = "main"
                break
        }
        this.setupState()
    }

    isVisible(): boolean {
        return this.state != "none"
    }

}
