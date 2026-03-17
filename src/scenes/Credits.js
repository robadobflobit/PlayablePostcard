class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {
        this.add.image(centerX, centerY, 'postcardfront').setOrigin(0.5).setScale(1)

        this.add.bitmapText(centerX, centerY - textSpacer*4, 'beach', 'Credits', 64).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + textSpacer-80, 'beach', 'Game Made By Robert Lai', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + textSpacer-40, 'beach', 'Koopa Troopa Beach by Hyper Potions - YT', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + textSpacer, 'beach', 'SFX: "Twinkle - Sound Effect" by Sound Central - YT', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + textSpacer+40, 'beach', 'Font: "Beach" by Font Meme', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + textSpacer+80, 'beach', 'Art by Robert Lai', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + textSpacer*3.5, 'beach', 'Press R to Return to Title', 32).setOrigin(0.5)

        this.return = this.input.keyboard.addKey('R')
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.return)) {
            this.scene.start('titleScene')
        }
    }
}
