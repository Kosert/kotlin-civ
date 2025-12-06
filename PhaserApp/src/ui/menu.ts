import { Scene } from "phaser";
import { Ui } from "./ui";
import { Button } from "./button";
import { UiAction, UiActionEvent } from "./ui-actions";


export class Menu {

    static menuWidth = 200
    static menuTopY = 200

    // main
    private backgroundOverlay: Phaser.GameObjects.Rectangle
    private uiBackground: Phaser.GameObjects.Rectangle
    private newGameButton: Button
    private saveGameButton: Button
    private loadGameButton: Button

    //new game menu

    //save game menu

    //load game menu

    constructor(
        private scene: Scene
    ) {
        const screenWidth = scene.cameras.main.width
        const screenHeight = scene.cameras.main.height
        const menuStartX = (screenWidth - Menu.menuWidth) / 2

        this.backgroundOverlay = scene.add.rectangle(0, 0, screenWidth, screenHeight, 0x000000, 0.4)
            .setOrigin(0, 0)
            .setDepth(100)
            .setScrollFactor(0)
            .setVisible(false)

        this.uiBackground = scene.add.rectangle(menuStartX, Menu.menuTopY, Menu.menuWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(101)
            .setScrollFactor(0)
            .setVisible(false)

        this.newGameButton = new Button(scene, menuStartX + (Menu.menuWidth - 150) / 2, 0, "New game", function () {
            //todo new game menu
        })
        .setFixedWidth(150)
        .setDepth(101)
        .setVisible(false)

        this.saveGameButton = new Button(scene, menuStartX + (Menu.menuWidth - 150) / 2, 0, "Save game", function () {
            //todo saving menu
            // scene.events.emit(UiActionEvent, UiAction.SAVE) 
        })
        .setFixedWidth(150)
        .setDepth(101)
        .setVisible(false)

        this.loadGameButton = new Button(scene, menuStartX + (Menu.menuWidth - 150) / 2, 0, "Load game", function () {
            //todo loading menu
        })
        .setFixedWidth(150)
        .setDepth(101)
        .setVisible(false)
    }

    isVisible(): boolean {
        return this.uiBackground.visible
    }

    setVisible(visible: boolean) {
        this.backgroundOverlay.setVisible(visible)
        this.uiBackground.setVisible(visible)
        this.newGameButton.setVisible(visible)
        this.saveGameButton.setVisible(visible)
        this.loadGameButton.setVisible(visible)

        if (visible && this.newGameButton.y() == 0) {
            this.newGameButton.setY(Menu.menuTopY + 30)
            this.saveGameButton.setY(this.newGameButton.y() + this.newGameButton.height() + 10)
            this.loadGameButton.setY(this.saveGameButton.y() + this.saveGameButton.height() + 10)    
        }
    }


}