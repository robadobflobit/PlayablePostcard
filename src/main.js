//Robert Lai
//Playable Postcard (Title WIP)
//~25 Hours spent
//A playable postcard intended for my mother. Search the scene of a beach of Mar Del Plata,
//Argentina to find hidden letters that complete the unfinished message on the back of the 
//postcard. 

//Art by Robert Lai
//Music: "Koopa Troopa Beach" by Hyper Potions - YT
//SFX: "Twinkle - Sound Effect" by Sound Central - YT
//Font: "Beach" by Font Meme

//Uses particle effects, tweens, bitmap text objects, the data registry, and cursor keys

//For creative tilt, I tried to be as literal as possible and make what is quite literally a playable postcard, rather
//than making a game themed around a location like other games in this class seemed to be.



'use strict'

let config = {
    parent: 'myGame',
    type: Phaser.WEBGL,
    height: 640,
    width: 960,
    
    scene: [ Load, Title, PostcardFront, PostcardBack, Credits]
}
let game = new Phaser.Game(config);
let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height
const textSpacer = 64

let cursors