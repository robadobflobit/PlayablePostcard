// Robert Lai
// Playable Postcard (Title WIP)
// ~ Hours spent
// A playable postcard intended for my mother. Search the scene of a beach of Mar Del Plata,
// Argentina to find hidden letters that complete the unfinished message on the back of the 
// postcard. 

'use strict'

let config = {
    parent: 'myGame',
    type: Phaser.WEBGL,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Load, Title, PostcardFront, PostcardBack, Credits]
}
let game = new Phaser.Game(config);
let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height
const textSpacer = 64

let cursors