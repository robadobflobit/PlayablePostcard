class PostcardFront extends Phaser.Scene {
    constructor() {
        super("postcardFrontScene");
        this.placeholder1Letter = false
        this.hoveringPlaceholder = false
    }

    create() {
        this.add.image(centerX, centerY, 'bgplaceholder').setOrigin(0.5).setScale(0.7)

        const makePlaceholder = (x, y, onDown) => {
            const ph = this.add.image(x, y, 'placeholder').setOrigin(0.5).setInteractive({ useHandCursor: true });

            ph.on('pointerover', () => { this.hoveringPlaceholder = true; });
            ph.on('pointerout', () => { this.hoveringPlaceholder = false; });

            ph.on('pointerdown', () => {
                this.hoveringPlaceholder = false;    // stop hover particles immediately when removed/clicked
                onDown();
            });

            ph.on('destroy', () => { this.hoveringPlaceholder = false; }); // safe guard if placeholder gets destroyed externally
            return ph;
        };

        this.placeholder1 = makePlaceholder(centerX, centerY, () => {
            this.placeholder1.destroy();
            // existing explode effect stays
            const b = this.placeholder1.getBounds();
            const emitter = this.add.particles(0, 0, 'placeholder', {
                alpha: {start: 1, end: 0},
                scale: {start: 0.5, end: 0},
                speed: {min: 100, max: 200},
                lifespan: 2000,
                blendMode: 'ADD',
                emitZone: {
                    source: new Phaser.Geom.Rectangle(b.x, b.y, b.width, b.height),
                    type: 'random',
                    quantity: 50
                }
            });
            emitter.explode(100);
            this.sound.play('placeholdersfx');
            this.placeholder1Letter = true;
            this.scene.get('postcardBackScene').events.emit('placeholder1Clicked');
        });

        this.placeholder2 = makePlaceholder(centerX - textSpacer * 5, centerY + textSpacer, () => {
            this.placeholder2.destroy();
            const b = this.placeholder2.getBounds();
            const emitter = this.add.particles(0, 0, 'placeholder', {
                alpha: {start: 1, end: 0},
                scale: {start: 0.5, end: 0},
                speed: {min: 100, max: 200},
                lifespan: 2000,
                blendMode: 'ADD',
                emitZone: {
                    source: new Phaser.Geom.Rectangle(b.x, b.y, b.width, b.height),
                    type: 'random',
                    quantity: 50
                }
            });
            emitter.explode(100);
            this.sound.play('placeholdersfx');
            this.placeholder2Letter = true;
        });

        this.placeholder3 = makePlaceholder(centerX + textSpacer * 4, centerY - textSpacer * 2, () => {
            this.placeholder3.destroy();
            const b = this.placeholder3.getBounds();
            const emitter = this.add.particles(0, 0, 'placeholder', {
                alpha: {start: 1, end: 0},
                scale: {start: 0.5, end: 0},
                speed: {min: 100, max: 200},
                lifespan: 2000,
                blendMode: 'ADD',
                emitZone: {
                    source: new Phaser.Geom.Rectangle(b.x, b.y, b.width, b.height),
                    type: 'random',
                    quantity: 50
                }
            });
            emitter.explode(100);
            this.sound.play('placeholdersfx');
            this.placeholder3Letter = true;
        });

        this.input.on('pointermove', (pointer) => {
            if (!this.hoveringPlaceholder) return;
            const px = pointer.x;
            const py = pointer.y;

            for (let i = 0; i < 3; i++) {
                const p = this.add.image(px + Phaser.Math.Between(-8, 8), py + Phaser.Math.Between(-8, 8), 'placeholder')
                    .setScale(0.1)
                    .setAlpha(0.9)
                    .setBlendMode(Phaser.BlendModes.ADD);

                this.tweens.add({
                    targets: p,
                    alpha: 0,
                    scale: 0,
                    x: p.x + Phaser.Math.Between(-20, 20),
                    y: p.y + Phaser.Math.Between(-20, 20),
                    duration: 250,
                    onComplete: () => p.destroy()
                });
            }
        });

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