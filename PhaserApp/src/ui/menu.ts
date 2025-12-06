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
    static bigHeight = 300

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
        this.bigBackground = scene.add.rectangle(bigStartX, Menu.mainTopY, Menu.bigWidth, Menu.bigHeight, Ui.colorMedium, 0.99)
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

        this.setGameApi(null)
    }

    private setupState() {
        this.backgroundOverlay.setVisible(this.state != "none")

        switch (this.state) {
            case "none":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                break;
            case "main":
                this.setNewGameVisible(false)
                this.setMainVisible(true)
                break
            case "new":
                this.setMainVisible(false)
                this.setNewGameVisible(true)
                break
            case "save":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
                break
            case "load":
                this.setMainVisible(false)
                this.setNewGameVisible(false)
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
                const y = prev ? prev.y() + prev.height() + 10 : Menu.mainTopY + 50
                it.setY(y)
            })

            this.colorChoosers.forEach((it, index) => {
                const prev = this.colorChoosers[index - 1]
                const y = prev ? prev.y() + prev.height() + 10 : Menu.mainTopY + 50
                it.setY(y)
            })
            
            this.startButton.setY(Menu.mainTopY + Menu.bigHeight - this.startButton.height() - 10)
        }
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

class SaveSlotView {

    constructor(
        scene: Scene,
        x: number,
        y: number,
    ) {
        

    }

}