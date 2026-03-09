class PostcardFront extends Phaser.Scene {
    constructor() {
        super("postcardFrontScene");
    }

    create() {
        this.add.image(centerX, centerY, 'bgplaceholder').setOrigin(0.5).setScale(0.7)

        document.getElementById('description').innerHTML = 'Click Hidden Letters to Send Them to the Back<br>F: Flip Postcard<br>R: Return to Title'

    }
}