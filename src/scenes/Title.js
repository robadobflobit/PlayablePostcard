class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    create() {

        this.sound.stopAll()


        this.add.image(centerX, centerY, 'postcardfront').setOrigin(0.5).setScale(1)

        this.add.bitmapText(centerX+30, centerY - textSpacer+20, 'beach', 'Beach Day\n in\n Mar Del Plata', 64).setOrigin(0.5)

        this.sound.play('beachmusic', { loop: true }, { volume: 0.5 })

        this.add.bitmapText(centerX, centerY + textSpacer*4.5, 'beach', 'Click Anywhere to Start!', 32).setOrigin(0.5)

        document.getElementById('description').innerHTML = 'Click Letters Hidden in the Scene to Send Them to the Back of the Postcard and Complete the Message<br>Hint: Look At Things That Stand Out<br>F: Flip Postcard<br>R: Return to Title<br>H: Hint (Shows Where the Letters Are)'


        this.input.on('pointerdown', (pointer) => {
            this.scene.start('postcardFrontScene')
        })
    }
}