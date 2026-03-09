class PostcardFront extends Phaser.Scene {
    constructor() {
        super("postcardFrontScene");
        this.placeholder1Letter = false
    }

    create() {
        this.add.image(centerX, centerY, 'bgplaceholder').setOrigin(0.5).setScale(0.7)

        this.placeholder1 = this.add.image(centerX, centerY, 'placeholder').setOrigin(0.5)
        this.placeholder1.setInteractive({ useHandCursor: true}).on('pointerdown', () => {
            this.placeholder1.destroy()
            let placeholder1EmitterBounds = this.placeholder1.getBounds()
            let placeholder1Emitter = this.add.particles(0, 0, 'placeholder', {
                alpha: {start: 1, end: 0},
                scale: {start: 0.5, end: 0},
                speed: {min: 100, max: 200},
                lifespan: 2000,
                blendMode: 'ADD',
                emitZone: {
                    source: new Phaser.Geom.Rectangle(placeholder1EmitterBounds.x, placeholder1EmitterBounds.y, placeholder1EmitterBounds.width, placeholder1EmitterBounds.height),
                    type: 'random',
                    quantity: 50
                }

             })
            placeholder1Emitter.explode(100)
            this.sound.play('placeholdersfx')
            this.placeholder1Letter = true
        })

        this.placeholder2 = this.add.image(centerX-textSpacer*5, centerY+textSpacer, 'placeholder').setOrigin(0.5)
        this.placeholder2.setInteractive({ useHandCursor: true}).on('pointerdown', () => {
            this.placeholder2.destroy()
            let placeholder2EmitterBounds = this.placeholder2.getBounds()
            let placeholder2Emitter = this.add.particles(0, 0, 'placeholder', {
                alpha: {start: 1, end: 0},
                scale: {start: 0.5, end: 0},
                speed: {min: 100, max: 200},
                lifespan: 2000,
                blendMode: 'ADD',
                emitZone: {
                    source: new Phaser.Geom.Rectangle(placeholder2EmitterBounds.x, placeholder2EmitterBounds.y, placeholder2EmitterBounds.width, placeholder2EmitterBounds.height),
                    type: 'random',
                    quantity: 50
                }

             })
            placeholder2Emitter.explode(100)
            this.sound.play('placeholdersfx')
            this.placeholder2Letter = true
        })

        this.placeholder3 = this.add.image(centerX+textSpacer*4, centerY-textSpacer*2, 'placeholder').setOrigin(0.5)
        this.placeholder3.setInteractive({ useHandCursor: true}).on('pointerdown', () => {
            this.placeholder3.destroy()
            let placeholder3EmitterBounds = this.placeholder3.getBounds()
            let placeholder3Emitter = this.add.particles(0, 0, 'placeholder', {
                alpha: {start: 1, end: 0},
                scale: {start: 0.5, end: 0},
                speed: {min: 100, max: 200},
                lifespan: 2000,
                blendMode: 'ADD',
                emitZone: {
                    source: new Phaser.Geom.Rectangle(placeholder3EmitterBounds.x, placeholder3EmitterBounds.y, placeholder3EmitterBounds.width, placeholder3EmitterBounds.height),
                    type: 'random',
                    quantity: 50
                }

             })
            placeholder3Emitter.explode(100)
            this.sound.play('placeholdersfx')
            this.placeholder3Letter = true
        })

        this.flip = this.input.keyboard.addKey('F')
        this.return = this.input.keyboard.addKey('R')
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.flip)) {
            this.scene.start('postcardBackScene')
        }
        if (Phaser.Input.Keyboard.JustDown(this.return)) {
            this.scene.start('titleScene')
        }
    }
}