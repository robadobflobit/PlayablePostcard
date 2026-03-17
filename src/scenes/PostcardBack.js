class PostcardBack extends Phaser.Scene {
    constructor() {
        super("postcardBackScene");
    }
    create() {
        this.add.image(centerX, centerY, 'postcardback').setOrigin(0.5).setScale(1)

        if (this.registry.get('placeholder1Deleted') === true)  {
            this.add.bitmapText(centerX-textSpacer*5, centerY - textSpacer+25, 'beach', 'W', 48).setOrigin(0.5).setTint(0x000000)
        }
        
        if (this.registry.get('placeholder2Deleted') === true)  {
            this.add.bitmapText(centerX-textSpacer*5, centerY + textSpacer*2, 'beach', 'H', 48).setOrigin(0.5).setTint(0x000000)
        }
        
        if (this.registry.get('placeholder3Deleted') === true)  {
            this.add.bitmapText(centerX-textSpacer*5, centerY + 20, 'beach', 'Y', 48).setOrigin(0.5).setTint(0x000000)
        }
        if (this.registry.get('placeholder4Deleted') === true)  {
            this.add.bitmapText(centerX-textSpacer*5, centerY + textSpacer+10, 'beach', 'W', 48).setOrigin(0.5).setTint(0x000000)
        }
        
        if (this.registry.get('placeholder1Letter') === true && this.registry.get('placeholder2Letter') === true && this.registry.get('placeholder3Letter') === true && this.registry.get('placeholder4Letter') === true) {
            this.add.bitmapText(centerX-textSpacer*4.25, centerY - textSpacer+25, 'beach', 'ish', 48).setOrigin(0.5).setTint(0x000000)
             this.add.bitmapText(centerX-textSpacer*4.2, centerY + textSpacer*2, 'beach', 'ere', 48).setOrigin(0.5).setTint(0x000000)
             this.add.bitmapText(centerX-textSpacer*4.3, centerY + 20, 'beach', 'ou', 48).setOrigin(0.5).setTint(0x000000)
             this.add.bitmapText(centerX-textSpacer*4.2, centerY + textSpacer+10, 'beach', 'ere', 48).setOrigin(0.5).setTint(0x000000)
             this.add.bitmapText(centerX+textSpacer*3, centerY + textSpacer*2-20, 'beach', 'You Win!', 32).setOrigin(0.5).setTint(0x000000)
             this.add.bitmapText(centerX+textSpacer*4.2, centerY + textSpacer*2+25, 'beach', 'Press C for Credits', 32).setOrigin(0.5).setTint(0x000000)
        }
        this.events.on('placeholderTextAdd', ({id, text}) => {
            if (![this.registry.get(`placeholder${id}Deleted`)]) {
                makeBackText(id, text)
            }
        })
        this.flip = this.input.keyboard.addKey('F')
        this.return = this.input.keyboard.addKey('R')
        this.credits = this.input.keyboard.addKey('C')
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.flip)) {
            this.scene.start('postcardFrontScene')
        }
        if (Phaser.Input.Keyboard.JustDown(this.return)) {
            this.scene.start('titleScene')
        }
        if (Phaser.Input.Keyboard.JustDown(this.credits) && this.registry.get('placeholder1Letter') === true && this.registry.get('placeholder2Letter') === true && this.registry.get('placeholder3Letter') === true && this.registry.get('placeholder4Letter') === true) {
            this.scene.start('creditsScene')
        }
    }
}