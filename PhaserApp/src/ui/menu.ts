import { Scene } from "phaser";
import { Ui } from "./ui";
import { Button } from "./button";
import { UiAction, UiActionEvent } from "./ui-actions";
import { civ, kotlin } from "kotlin-civ";
import { ChooserButton } from "./chooser-button";
import { StorageItem } from "../const";


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
    //todo player secion title
    private playerChoosers: ChooserButton[] = []
    private colorChoosers: ChooserButton[] = []
    //todo map type
    //todo map size
    private startButton: Button

    //save/load game menu
    private autoSaveSlotButton: SaveSlotView
    private saveSlotButtons: SaveSlotView[] = []

    private gameApi: civ.core.GameApi

    constructor(
        private scene: Scene
    ) {
        const screenWidth = scene.cameras.main.width
        const screenHeight = scene.cameras.main.height
        const mainStartX = (screenWidth - Menu.mainWidth) / 2

        this.backgroundOverlay = scene.add.rectangle(0, 0, screenWidth, screenHeight, 0x000000, 0.4)
            .setOrigin(0, 0).setDepth(100).setScrollFactor(0).setVisible(false)

        this.mainBackground = scene.add.rectangle(mainStartX, Menu.mainTopY, Menu.mainWidth, Menu.mainHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0).setDepth(101).setScrollFactor(0).setVisible(false)

        const self = this
        this.newGameButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "New game", function () {
            self.state = "new"
            self.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        this.saveGameButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "Save game", function () {
            self.state = "save"
            self.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        this.loadGameButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "Load game", function () {
            self.state = "load"
            self.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)
        
        this.cancelButton = new Button(scene, mainStartX + (Menu.mainWidth - 150) / 2, 0, "Back to game", function () {
            self.state = "none"
            self.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)

        const bigStartX = (screenWidth - Menu.bigWidth) / 2
        this.bigBackground = scene.add.rectangle(bigStartX, Menu.bigTopY, Menu.bigWidth, Menu.bigHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0).setDepth(101).setScrollFactor(0).setVisible(false)

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
            const chooserButton = new ChooserButton(scene, bigStartX + 30, 0, playerOptions, function(id: string) {
                self.colorChoosers[i].setDisabled(id == "none")
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

        this.startButton = new Button(scene, bigStartX + Menu.bigWidth - 160, 0, "Start game", function() {
            const players = self.playerChoosers
            .filter(it => it.getSelected().id != "none" )
            .map((player, index) => {
                const colorId = self.colorChoosers[index].getSelected().id
                const color = civ.model.PlayerColor.valueOf(colorId)
                const ai = civ.ai.AiType.values().find(it => {
                    return it.value == player.getSelected().id
                })
                return new civ.model.Player(player.getSelected().text, color, ai)
            })

            //todo show progress?
            const newGameState = civ.creator.GameCreator.createNewGame(
                kotlin.collections.KtList.fromJsArray(players),
                civ.creator.CreatorMapSize.SMALL,
                kotlin.collections.KtList.fromJsArray([civ.model.UnitType.SETTLERS, civ.model.UnitType.SCOUT]),
                new civ.model.Stockpiles(40, 40, 20)
            )

            scene.events.emit(UiActionEvent, UiAction.LOAD_GAME_STATE, newGameState)
            self.state = "none"
            self.setupState()
        }).setFixedWidth(150).setDepth(101).setVisible(false)


        this.autoSaveSlotButton = new SaveSlotView(scene, bigStartX + 25, Menu.bigTopY + 25, NaN, function() {
            const json = localStorage.getItem(StorageItem.AUTO_SAVE_SLOT)
            const gameState = civ.core.GameState.Companion.fromJson(json)
            self.scene.events.emit(UiActionEvent, UiAction.LOAD_GAME_STATE, gameState)
            self.state = "none"
            self.setupState()
        }, function() {
            if (confirm("Are you sure want to delete this save?")) {
                localStorage.removeItem(StorageItem.AUTO_SAVE_SLOT)
                self.refreshGameStates()
            }
        }).setVisible(false).setDepth(101)

        for (let i = 0; i < 5; i++) {
            const prev = this.saveSlotButtons[i - 1]
            const y = prev ? prev.y() + prev.height() + 10 : this.autoSaveSlotButton.y() + this.autoSaveSlotButton.height() + 10
            const slot = StorageItem.getSaveSlot(i + 1)
            const saveSlot = new SaveSlotView(scene, bigStartX + 25, y, i + 1, function() {
                if (self.state == "save") {
                    const isOverWrite = localStorage.getItem(slot)
                    if (!isOverWrite || confirm("Do you want to overwrite Save Slot #"+ (i + 1) + "?")) {
                        const gameState = self.gameApi.generateGameState()
                        localStorage.setItem(slot, gameState.toJson())
                        self.refreshGameStates()
                    }
                } else {
                    const json = localStorage.getItem(slot)
                    const gameState = civ.core.GameState.Companion.fromJson(json)
                    self.scene.events.emit(UiActionEvent, UiAction.LOAD_GAME_STATE, gameState)
                    self.state = "none"
                    self.setupState()
                }
            }, function() {
                if (confirm("Are you sure want to delete this save?")) {
                    localStorage.removeItem(slot)
                    self.refreshGameStates()
                }
            }).setVisible(false).setDepth(101)
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

        switch (this.state) {
            case "none":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                this.setSaveLoadGameVisible(false)
                break;
            case "main":
                this.setNewGameVisible(false)
                this.setSaveLoadGameVisible(false)
                this.setMainVisible(true)
                break
            case "new":
                this.setMainVisible(false)
                this.setSaveLoadGameVisible(false)
                this.setNewGameVisible(true)
                break
            case "save":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                this.setSaveLoadGameVisible(true, this.state)
                this.refreshGameStates()
                break
            case "load":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                this.setSaveLoadGameVisible(true, this.state)
                this.refreshGameStates()
                break
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
        this.bigBackground.setVisible(visible)
        this.playerChoosers.forEach(it => it.setVisible(visible))
        this.colorChoosers.forEach(it => it.setVisible(visible))
        this.startButton.setVisible(visible)

        if (visible && this.playerChoosers[0].y() == 0) {
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
            
            this.startButton.setY(Menu.bigTopY + Menu.bigHeight - this.startButton.height() - 10)
        }
    }

    private setSaveLoadGameVisible(visible: boolean, mode?: "save" | "load") {
        this.bigBackground.setVisible(visible)
        this.autoSaveSlotButton.setVisible(visible)
        if (mode) {
            this.autoSaveSlotButton.setMode(mode)
        }
        this.saveSlotButtons.forEach(it => { 
            it.setVisible(visible)
            if (mode) it.setMode(mode)
    })}

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

class SaveSlotView {

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
        private slotNumber: number,
        private onActionClicked: () => void,
        private onDeleteClicked: () => void,
        private gameState?: civ.core.GameState,
        private mode: "save" | "load" = "save"
    ) {
        const width = Menu.bigWidth - 50
        const height = 80

        this.outline = scene.add.rectangle(x, y, width, height, 0x000000, 0)
        .setOrigin(0, 0).setStrokeStyle(1, Ui.colorAccent.color, 1).setScrollFactor(0)
        this.slotTitle = scene.add.text(x + 10, y + 10, "", { font: "bold 16px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.turnText = scene.add.text(x + 10, this.slotTitle.getBottomLeft().y + 5, "", { font: "bold 16px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.description = scene.add.bitmapText(x + 10, this.turnText.getBottomLeft().y + 5, "civ_font", "etstsds", 16).setDepth(91).setScrollFactor(0)

        const self = this
        this.button = new Button(scene, x + width - 125, y + height - 40, "", function() { self.onActionClicked() }).setFixedWidth(120).setDepth(101)
        this.deleteButton = new Button(scene, x + width - 25, y + 5, "X", function() { self.onDeleteClicked() }).setFixedWidth(20).setDepth(101)

        this.setGameState(gameState)
    }

    setGameState(gameState?: civ.core.GameState) {
        this.gameState = gameState
        this.button.setDisabled((this.mode == "load" && !this.gameState) || (this.mode == "save" && Number.isNaN(this.slotNumber)))
        this.deleteButton.setDisabled(!this.gameState)

        const dateString = gameState ? " - " + new Date(Number(gameState.timestamp.toString())).toLocaleString() : ""
        if (Number.isNaN(this.slotNumber)) {
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

        let pointer = 0
        gameState.players.asJsReadonlyArrayView().forEach(it => {
            let color: number
            switch (it.color) {
                case civ.model.PlayerColor.BLUE:
                    color = 0x405bff
                    break
                case civ.model.PlayerColor.RED:
                    color = 0xff0000
                    break
                case civ.model.PlayerColor.GREEN:
                    color = 0x00ff00
                    break
                case civ.model.PlayerColor.YELLOW:
                    color = 0xffff00
                    break;
            }
            this.description.setCharacterTint(pointer, it.name.length, false, color)
            pointer += it.name.length + 2
        })

    }

    setMode(mode: "save" | "load") {
        this.mode = mode
        this.button
            .setText(mode == "save" ? "Save game" : "Load game")
            .setDisabled((mode == "load" && !this.gameState) || (mode == "save" && Number.isNaN(this.slotNumber)))
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