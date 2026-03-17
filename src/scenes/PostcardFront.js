class PostcardFront extends Phaser.Scene {
    constructor() {
        super("postcardFrontScene")
        this.placeholder1Letter = false
        this.placeholder2Letter = false
        this.placeholder3Letter = false
        this.placeholder4Letter = false
        this.hoveringPlaceholder = false
        this.placeholderDebug = false
    }

    create() {
        this.add.image(centerX, centerY, 'postcardfront').setOrigin(0.5).setScale(1)

        const isDeleted = (id) => this.registry.get(`placeholder${id}Deleted`) === true

        const makePlaceholder = (x, y, onDown) => {
            const ph = this.add.image(x, y, 'placeholder')
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true })
                .setAlpha(0.001)

            ph.on('pointerover', () => { this.hoveringPlaceholder = true })
            ph.on('pointerout', () => { this.hoveringPlaceholder = false })
            ph.on('pointerdown', () => {
                this.hoveringPlaceholder = false
                onDown()
            });
            ph.on('destroy', () => { this.hoveringPlaceholder = false })
            return ph
        };

        if (!isDeleted(1)) {
            this.placeholder1 = makePlaceholder(centerX-textSpacer*5, centerY+textSpacer*3.4, () => {
                const b = this.placeholder1.getBounds()
                this.placeholder1.destroy()
                this.registry.set('placeholder1Deleted', true)
                this.registry.set('placeholder1Letter', true)
                this.scene.get('postcardBackScene').events.emit('placeholderTextAdd', {id: 1, text: 'W'})
                this.sound.play('placeholdersfx')
                const emitter = this.add.particles(0, 0, 'shimmer', {
                    alpha:{start:1,end:0}, 
                    scale:{start:0.1,end:0},
                    speed:{min:100,max:200}, 
                    lifespan:2000, 
                    blendMode:'ADD',
                    emitZone:{ source:new Phaser.Geom.Rectangle(b.x,b.y,b.width,b.height), type:'random', quantity:50 }
                })
                emitter.explode(100)
            });
        } else {
            this.placeholder1Letter = true
        }

        if (!isDeleted(2)) {
            this.placeholder2 = makePlaceholder(centerX+textSpacer*1.2, centerY + textSpacer*2.5, () => {
                const b = this.placeholder2.getBounds()
                this.placeholder2.destroy()
                this.registry.set('placeholder2Deleted', true)
                this.registry.set('placeholder2Letter', true)
                this.scene.get('postcardBackScene').events.emit('placeholderTextAdd', {id: 2, text: 'H'})
                this.sound.play('placeholdersfx')
                const emitter = this.add.particles(0,0,'shimmer',{
                    alpha:{start:1,end:0}, 
                    scale:{start:0.1,end:0},
                    speed:{min:100,max:200}, 
                    lifespan:2000, 
                    blendMode:'ADD',
                    emitZone:{ source:new Phaser.Geom.Rectangle(b.x,b.y,b.width,b.height), type:'random', quantity:50 } 
                })
                emitter.explode(100)
            });
        } else {
            this.placeholder2Letter = true
        }

        if (!isDeleted(3)) {
            this.placeholder3 = makePlaceholder(centerX + textSpacer * 5, centerY - textSpacer * 2.2, () => {
                const b = this.placeholder3.getBounds()
                this.placeholder3.destroy()
                this.registry.set('placeholder3Deleted', true)
                this.registry.set('placeholder3Letter', true)
                this.scene.get('postcardBackScene').events.emit('placeholderTextAdd', {id: 3, text: 'Y'})
                this.sound.play('placeholdersfx')
                const emitter = this.add.particles(0,0,'shimmer',{
                    alpha:{start:1,end:0}, 
                    scale:{start:0.1,end:0},
                    speed:{min:100,max:200}, 
                    lifespan:2000, 
                    blendMode:'ADD',
                    emitZone:{ source:new Phaser.Geom.Rectangle(b.x,b.y,b.width,b.height), type:'random', quantity:50 }
                })
                emitter.explode(100)
            });
        } else {
            this.placeholder3Letter = true
        }

        if (!isDeleted(4)) {
            this.placeholder4 = makePlaceholder(centerX + textSpacer * 2, centerY - textSpacer * 3.3, () => {
                const b = this.placeholder4.getBounds()
                this.placeholder4.destroy()
                this.registry.set('placeholder4Deleted', true)
                this.registry.set('placeholder4Letter', true)
                this.scene.get('postcardBackScene').events.emit('placeholderTextAdd', {id: 4, text: 'W'})
                this.sound.play('placeholdersfx')
                const emitter = this.add.particles(0,0,'shimmer',{
                    alpha:{start:1,end:0}, 
                    scale:{start:0.1,end:0},
                    speed:{min:100,max:200}, 
                    lifespan:2000, 
                    blendMode:'ADD',
                    emitZone:{ source:new Phaser.Geom.Rectangle(b.x,b.y,b.width,b.height), type:'random', quantity:50 }
                })
                emitter.explode(100)
            });
        } else {
            this.placeholder4Letter = true
        }

        this.input.on('pointermove', (pointer) => {
            if (!this.hoveringPlaceholder) return
            const px = pointer.x
            const py = pointer.y

            for (let i = 0; i < 3; i++) {
                const p = this.add.image(px + Phaser.Math.Between(-8, 8), py + Phaser.Math.Between(-8, 8), 'shimmer')
                    .setScale(0.05)
                    .setAlpha(0.9)
                    .setBlendMode(Phaser.BlendModes.ADD)

                this.tweens.add({
                    targets: p,
                    alpha: 0,
                    scale: 0,
                    x: p.x + Phaser.Math.Between(-20, 20),
                    y: p.y + Phaser.Math.Between(-20, 20),
                    duration: 250,
                    onComplete: () => p.destroy()
                })
            }
        })

        this.flip = this.input.keyboard.addKey('F')
        this.return = this.input.keyboard.addKey('R')
        this.debug = this.input.keyboard.addKey('H')
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.flip)) {
            this.scene.start('postcardBackScene')
        }
        if (Phaser.Input.Keyboard.JustDown(this.return)) {
            this.scene.start('titleScene')
        }
        if (Phaser.Input.Keyboard.JustDown(this.debug)) {
            this.placeholder1.setAlpha(1)
            this.placeholder2.setAlpha(1)
            this.placeholder3.setAlpha(1)
            this.placeholder4.setAlpha(1)
        }
            else {
                this.placeholder1.setAlpha(0.001)
                this.placeholder2.setAlpha(0.001)
                this.placeholder3.setAlpha(0.001)
                this.placeholder4.setAlpha(0.001)
        }
    }
}