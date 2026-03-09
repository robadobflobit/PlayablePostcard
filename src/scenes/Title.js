class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    create() {

        this.add.image(centerX, centerY, 'bgplaceholder').setOrigin(0.5).setScale(0.7)

        let title01 = this.add.bitmapText(centerX, centerY - textSpacer, 'beach', 'Beach Day\n in\n Mar Del Plata', 64).setOrigin(0.5)

        this.add.bitmapText(centerX, centerY + textSpacer*2, 'beach', 'Click Anywhere to Start!', 32).setOrigin(0.5)

        this.input.on('pointerdown', (pointer) => {
            this.scene.start('postcardFrontScene')
        })

    }

    
    
}