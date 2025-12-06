import { Scene } from "phaser";
import { Ui } from "./ui";
import { Button } from "./button";
import { UiAction, UiActionEvent } from "./ui-actions";
import { civ } from "kotlin-civ";
import { ChooserButton } from "./chooser-button";


export class Menu {
    static mainWidth = 200
    static mainTopY = 200
    static mainHeight = 240
    static bigWidth = 500
    static bigTopY = 100
    static bigHeight = 550

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

    //save game menu
    private saveSlotButtons: SaveSlotView[] = []
    //load game menu
    private loadSlotButtons: SaveSlotView[] = []

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
            { id: "none", name: "Empty slot" },
            { id: "player", name: "Player" },
            { id: "aiWarrior", name: "AI (Warrior)" },
            { id: "aiScout", name: "AI (Scout)" },
            { id: "aiArcher", name: "AI (Archer)" },
        ]
        for (let i = 0; i < 4; i++) {
            const chooserButton = new ChooserButton(scene, bigStartX + 30, 0, playerOptions, function(id: string) {
                self.colorChoosers[i].setDisabled(id == "none")
            }).setFixedWidth(200).setDepth(101).setVisible(false)
            this.playerChoosers.push(chooserButton)
        }

        const colorOptions = civ.model.PlayerColor.values().map(it => { return { id: it.name, name: "██" } })
        const colorsStartX = this.playerChoosers[0].x() + 210
        for (let i = 0; i < 4; i++) {
            const chooserButton = new ChooserButton(scene, colorsStartX, 0, colorOptions)
                .setDepth(101).setDisabled(true).setVisible(false)
            this.colorChoosers.push(chooserButton)
        }

        this.startButton = new Button(scene, bigStartX + Menu.bigWidth - 160, 0, "Start game", function() {
            //todo generate map
            //todo scene.events
        }).setFixedWidth(150).setDepth(101).setVisible(false)


        for (let i = 0; i < 5; i++) {
            const prev = this.saveSlotButtons[i - 1]
            const y = prev ? prev.y() + prev.height() + 10 : Menu.bigTopY + 50
            const saveSlot = new SaveSlotView(scene, bigStartX + 25, y, i + 1, "save")
                .setVisible(false).setDepth(101)
            this.saveSlotButtons.push(saveSlot)
        }

        for (let i = 0; i < 5; i++) {
            const prev = this.loadSlotButtons[i - 1]
            const y = prev ? prev.y() + prev.height() + 10 : Menu.bigTopY + 50
            const loadSlot = new SaveSlotView(scene, bigStartX + 25, y, i + 1, "load")
                .setVisible(false).setDepth(101)
            this.loadSlotButtons.push(loadSlot)
        }


        this.setGameApi(null)
    }

    private setupState() {
        this.backgroundOverlay.setVisible(this.state != "none")

        switch (this.state) {
            case "none":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                this.setSaveGameVisible(false)
                this.setLoadGameVisible(false)
                break;
            case "main":
                this.setNewGameVisible(false)
                this.setSaveGameVisible(false)
                this.setLoadGameVisible(false)
                this.setMainVisible(true)
                break
            case "new":
                this.setMainVisible(false)
                this.setSaveGameVisible(false)
                this.setLoadGameVisible(false)
                this.setNewGameVisible(true)
                break
            case "save":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                this.setLoadGameVisible(false)
                this.setSaveGameVisible(true)
                break
            case "load":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                this.setSaveGameVisible(false)
                this.setLoadGameVisible(true)
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

    private setSaveGameVisible(visible: boolean) {
        this.bigBackground.setVisible(visible)
        this.saveSlotButtons.forEach(it => it.setVisible(visible))
    }

    private setLoadGameVisible(visible: boolean) {
        this.bigBackground.setVisible(visible)
        this.loadSlotButtons.forEach(it => it.setVisible(visible))
    }

    setGameApi(gameApi: civ.core.GameApi) {
        this.gameApi = gameApi
        // this.saveGameButton.setDisabled(this.gameApi == null)
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
    private button: Button

    constructor(
        scene: Scene,
        x: number,
        y: number,
        slotNumber: number,
        mode: "save" | "load", 
        gameState?: civ.core.GameState
    ) {
        const width = Menu.bigWidth - 50
        const height = 80

        this.outline = scene.add.rectangle(x ,y, width, height, 0x000000, 0)
        .setOrigin(0, 0).setStrokeStyle(1, Ui.colorAccent.color, 1).setScrollFactor(0)
        const text = gameState ? "Save slot" : "Empty slot" + " #" + slotNumber
        this.slotTitle = scene.add.text(x + 10, y + 10, text, { font: "bold 16px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        const buttonText = mode == "save" ? "Save game" : "Load game"
        this.button = new Button(scene, x + width - 125, y + height - 40, buttonText, function() {
            //todo
        }).setFixedWidth(120).setDepth(101).setDisabled(mode == "load" && !gameState)

        //todo show: turn number, list players, map type and size, save timestapm
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
        return this
    }

    setVisible(value: boolean): SaveSlotView {
        this.outline.setVisible(value)
        this.slotTitle.setVisible(value)
        this.button.setVisible(value)
        return this
    }

    destroy() {
        this.outline.destroy()
        this.slotTitle.destroy()
        this.button.destroy()
    }
}