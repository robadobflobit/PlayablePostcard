class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {

        let loadingBar = this.add.graphics()
        this.load.on('progress', (value) => {
            loadingBar.clear()
            loadingBar.fillStyle(0xffffff, 1)
            loadingBar.fillRect(0, centerY, w * value, 5)
        })
        this.load.on('complete', () => {
            loadingBar.destroy()
        })

        this.load.path = './assets/'
        this.load.bitmapFont('beach', 'fonts/beach.png', 'fonts/beach.xml')
        this.load.image('bgplaceholder', 'images/bgplaceholder.jpg')
        this.load.image('placeholder', 'images/placeholder1.png')
        this.load.image('backplaceholder', 'images/postcardplaceholder.jpeg')

    }

    create() {
        this.scene.start('titleScene')
    }
}