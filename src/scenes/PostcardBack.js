class PostcardBack extends Phaser.Scene {
    constructor() {
        super("postcardBackScene");
    }
    create() {
        this.add.image(centerX, centerY, 'backplaceholder').setOrigin(0.5).setScale(0.6)
        let placeholder1Check = this.scene.get('postcardFrontScene')
        placeholder1Check.events.on('placeholder1Clicked', () => {
            this.add.bitmapText(centerX-textSpacer*5, centerY - textSpacer+25, 'beach', 'Work', 48).setOrigin(0.5).setTint(0x000000)
            })

        //this.add.bitmapText(centerX-textSpacer*5, centerY - textSpacer+25, 'beach', 'Work', 48).setOrigin(0.5).setTint(0x000000)
        this.add.bitmapText(centerX-textSpacer*5, centerY + 20, 'beach', 'In', 48).setOrigin(0.5).setTint(0x000000)
        this.add.bitmapText(centerX-textSpacer*5, centerY + textSpacer+10, 'beach', 'Progress', 48).setOrigin(0.5).setTint(0x000000)

        this.flip = this.input.keyboard.addKey('F')
        this.return = this.input.keyboard.addKey('R')
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.flip)) {
            this.scene.start('postcardFrontScene')
        }
        if (Phaser.Input.Keyboard.JustDown(this.return)) {
            this.scene.start('titleScene')
        }
    }
}