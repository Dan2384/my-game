namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
    export const NPC7 = SpriteKind.create()
    export const NPC8 = SpriteKind.create()
    export const NPC9 = SpriteKind.create()
    export const NPC10 = SpriteKind.create()
    export const NPC11 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC10, function (sprite, otherSprite) {
    if (otherSprite == mysprite21) {
        timer.throttle("action", 6000, function () {
            mysprite21.sayText("4909", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 6 inside 2`, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 450)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (level == 14) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(260, 500)
        level = 9
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 5 door1`, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 450)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    Faceingleft = false
    Faceingright = false
    Faceingup = true
    Faceingdown = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door-2-1 -Shop inside1`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 130)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.NPC6, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
// 2648 is the code for the door
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == mySprite2) {
        timer.throttle("action", 6000, function () {
            mySprite2.sayText("Hello Traveler", 5000, true)
        })
    }
    if (otherSprite == mySprite3) {
        timer.throttle("action", 1000, function () {
            mySprite3.sayText("Be Careful", 1000, true)
        })
    }
    if (otherSprite == mySprite4) {
        timer.throttle("action", 1000, function () {
            mySprite4.sayText("2", 1000, true)
        })
    }
    if (otherSprite == mySprite5) {
        timer.throttle("action", 1000, function () {
            mySprite5.sayText("6", 1000, true)
        })
    }
    if (otherSprite == mySprite6) {
        timer.throttle("action", 1000, function () {
            mySprite6.sayText("4", 1000, true)
        })
    }
    if (otherSprite == mySprite7) {
        timer.throttle("action", 1000, function () {
            mySprite7.sayText("8", 1000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`bunker top door`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[13])
        mySprite.setPosition(40, 500)
        level = 13
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cave 1`, function (sprite, location) {
    if (level == 9) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1380, 145)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`armory inside door 0`, function (sprite, location) {
    if (level == 16) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 285)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.NPC4, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Bunker top door`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[13])
        mySprite.setPosition(40, 500)
        level = 13
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door3`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[6])
        mySprite.setPosition(323, 160)
        level = 6
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 5 door2`, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 450)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    statusbar.value += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC7, function (sprite, otherSprite) {
    if (otherSprite == mysprite19) {
        timer.throttle("action", 6000, function () {
            mysprite19.sayText("Can I help you find anything in the store?", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door-2-1 -Shop inside2`, function (sprite, location) {
    if (level == 15) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 130)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    if (otherSprite == mySprite12) {
        timer.throttle("action", 6000, function () {
            mySprite12.sayText("Can I help you find anything in the store?", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cave 2`, function (sprite, location) {
    if (level == 9) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1380, 145)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 4 inside 2`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 290)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.NPC, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Farm shop inside 1`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 945)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    Faceingleft = true
    Faceingright = false
    Faceingup = false
    Faceingdown = false
})
// Robotics Team Number 5687 for code
scene.onOverlapTile(SpriteKind.Player, assets.tile`TNT0`, function (sprite, location) {
    BombCode1 = game.askForNumber("Password", 4)
    for (let index = 0; index < 1; index++) {
        if (BombCode1 == 4909) {
            tiles.setCurrentTilemap(maps[16])
            mySprite.setPosition(50, 50)
            level = 16
            NPC_Spawn()
            info.changeCountdownBy(240)
            Bombpoints += 1
        } else {
            tiles.setCurrentTilemap(maps[7])
            mySprite.setPosition(50, 50)
            level = 7
            info.changeCountdownBy(-60)
            NPC_Spawn()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    if (otherSprite == mySprite9) {
        timer.throttle("action", 6000, function () {
            mySprite9.sayText("Can I help you find any weapon in the store?", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(640, 500)
        level = 9
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite13)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Farm shop inside 2`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 945)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door1`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[12])
        mySprite.setPosition(25, 160)
        level = 12
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    if (otherSprite == mySprite10) {
        timer.throttle("action", 6000, function () {
            mySprite10.sayText("I've been trapped here for over a year", 3000, true)
        })
    }
    if (otherSprite == Mysprite17) {
        timer.throttle("action", 6000, function () {
            Mysprite17.sayText("58", 3000, true)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC9, function (sprite, otherSprite) {
    if (otherSprite == mysprite21) {
        timer.throttle("action", 6000, function () {
            mysprite21.sayText("5687", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(260, 500)
        level = 9
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door5 house 1`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.setPosition(25, 160)
        level = 2
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    if (otherSprite == mySprite11) {
        timer.throttle("action", 6000, function () {
            mySprite11.sayText("I've been waiting for you to find me one day.", 3000, true)
            mySprite11.sayText("I knew that after I went missing you would come looking for me.", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door6`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[4])
        mySprite.setPosition(25, 160)
        level = 4
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC11, function (sprite, otherSprite) {
    if (otherSprite == mysprite22) {
        timer.throttle("action", 6000, function () {
            mysprite22.sayText("Can I help you find any weapon in the store?", 3000, true)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    if (otherSprite == mySprite8) {
        timer.throttle("action", 6000, function () {
            mySprite8.sayText("Can I help you find anything in the store?", 3000, true)
        })
    }
})
function Bridge () {
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004d40000000200030f161b06000800020f1b0c000e00030f161b10001200030f161b16001800020f1b1c001e00030f161b20002200030f161b26002800020f1b2c002e00030f161b30003200030f161b36003800020f1b3c003e00020f1640004200010f44004600010f48004a0001114c004e00011250005200011254005600011458005a0001145c005e0001166000620001166400660002181966006800011968006a00011b6a006c00011b6c006e00011d6e007000011d70007200011e72007400012074007600012276007800012578007a00012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800190100000100031101080800090001040e000f00021101120013000104140015000211011800190004110104071c001d0001081e001f000104200021000211012800290001042e002f00021101320033000104340035000211013800390004110104073c003d00010840004100051100010406440045000300040648004900030004064c004d00030004065000510003000406540055000300040658005900030004065c005d0003000406600061000300040662006300030004066400650003000406660067000300040668006900030004066a006b00030004066c006d00030004066e006f0003000406700071000300040672007300030004067400750003000406760077000300040678007900030004067c007d0003000406`), music.PlaybackMode.UntilDone)
    Chorus()
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar.value = 700
})
// Robotics Team Number for code
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    code = game.askForNumber("Password", 4)
    if (code == 2648) {
        tiles.setCurrentTilemap(maps[10])
        mySprite.setPosition(50, 200)
        level = 10
        NPC_Spawn()
        Enemy_NPC()
    } else {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(260, 500)
        level = 9
        NPC_Spawn()
        Enemy_NPC()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    Faceingleft = false
    Faceingright = true
    Faceingup = false
    Faceingdown = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door10`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(660, 50)
        level = 9
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 450)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 3 door1`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 290)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door3 --- 2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[6])
        mySprite.setPosition(323, 160)
        level = 6
        NPC_Spawn()
        Enemy_NPC()
    }
})
function Verse () {
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408080300001c00010a006400f401640000040000000000000000000000000005000004ee0200000200011b02000400010f04000600011606000800011908000a00011b0a000c00010f0c000e0001160e001000011910001200011b12001400010f14001600011616001800011918001a00011b1a001c00010f1c001e0001161e002000011920002200011b22002400010f24002600011626002800011928002a00011b2a002c00010f2c002e00011630003200011b32003400010f34003600011638003a00011b3a003c00010f3c003e00011640004200011442004400010844004600010f46004800011248004a0001144a004c0001084c004e00010f4e005000011250005200011452005400010854005600010f56005800011258005a0001145a005c0001085c005e00010f5e006000011260006200011462006400010864006600010f66006800011268006a0001146a006c0001086c006e00010f6e007000011270007200011472007400010874007600010f76007800011278007a0001147a007c0001087c007e00010f7e008000011280008200011b82008400010f84008600011686008800011988008a00011b8a008c00010f8c008e0001168e009000011990009200011b92009400010f94009600011696009800011998009a00011b9a009c00010f9c009e0001169e00a0000119a000a200011ba200a400010fa400a6000116a600a8000119a800aa00011baa00ac00010fac00ae000116ae00b0000119b000b200011bb200b400010fb400b6000116b600b8000119b800ba00011bba00bc00010fbc00be000116be00c0000119c000c2000114c200c4000108c400c600010fc600c8000112c800ca000114ca00cc000108cc00ce00010fce00d0000112d000d2000114d200d4000108d400d600010fd600d8000112d800da000114da00dc000108dc00de00010fde00e0000112e000e2000114e200e4000108e400e600010fe600e8000112e800ea000114ea00ec000108ec00ee00010fee00f0000112f000f2000114f200f4000108f400f600010ff600f8000112f800fa000114fa00fc000108fc00fe00010ffe000001011205001c000f0a006400f4010a00000400000000000000000000000000000000023c0000001400012714001800011b18001c00012a1c002000012920004000012740005400012054005800012058005c0001205c006000011e60008000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80040020000010003110108040005000107080009000204070c000d0001070e000f0002110110001100010712001300010414001500031101071800190004110104071c001d0001081e001f0001042000210003110107240025000107280029000204072c002d0001072e002f0002110130003100010732003300010434003500031101073800390004110104073c003d0001084000410003110107440045000107480049000204074c004d0001074e004f0002110150005100010752005300010454005500031101075800590004110104075c005d0001085e005f0001046000610003110107640065000107680069000204076c006d0001076e006f0002110170007100010772007300010474007500031101077800790004110104077c007d0001088000810003110108840085000107880089000204078c008d0001078e008f0002110190009100010792009300010494009500031101079800990004110104079c009d0001089e009f000104a000a10003110107a400a5000107a800a900020407ac00ad000107ae00af00021101b000b1000107b200b3000104b400b50003110107b800b9000411010407bc00bd000108c000c10003110107c400c5000107c800c900020407cc00cd000107ce00cf00021101d000d1000107d200d3000104d400d50003110107d800d9000411010407dc00dd000108de00df000104e000e10003110107e400e5000107e800e900020407ec00ed000107ee00ef00021101f000f1000107f200f3000104f400f50003110107f800f9000411010407fc00fd000108`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408080300001c00010a006400f401640000040000000000000000000000000005000004080300000200011b02000400010f04000600011606000800011908000a00011b0a000c00010f0c000e0001160e001000011910001200011b12001400010f14001600011616001800011918001a00011b1a001c00010f1c001e0001161e002000011920002200011b22002400010f24002600011626002800011928002a00011b2a002c00010f2c002e0001162e003000011930003200011b32003400010f34003600011636003800011938003a00011b3a003c00010f3c003e0001163e004000011940004200011442004400010844004600010f46004800011248004a0001144a004c0001084c004e00010f4e005000011250005200011452005400010854005600010f56005800011258005a0001145a005c0001085c005e00010f5e00600001126000620002141b62006400010864006600010f6600680002121968006a0002141b6a006c0001086c006e00010f6e0070000212197000720002141b72007400010874007600010f7600780002121978007a0002141b7a007c0001087c007e00010f7e00800002121980008200011b82008400010f84008600011686008800011988008a00011b8a008c00010f8c008e0001168e009000011990009200011b92009400010f94009600011696009800011998009a00011b9a009c00010f9c009e0001169e00a0000119a000a200011ba200a400010fa400a6000116a600a8000119a800aa00011baa00ac00010fac00ae000116ae00b0000119b000b200011bb200b400010fb400b6000116b600b8000119b800ba00011bba00bc00010fbc00be000116be00c0000119c000c2000114c200c4000106c400c600010fc600c8000112c800ca000114ca00cc000106cc00ce00010fce00d0000112d000d2000114d200d4000106d400d600010fd600d8000112d800da000114da00dc000106dc00de00010fde00e0000112e000e2000114e200e4000106e400e600010fe600e8000112e800ea000114ea00ec000106ec00ee00010fee00f0000112f000f2000114f200f4000106f400f600010ff600f8000112f800fa000114fa00fc000106fc00fe00010ffe000001011205001c000f0a006400f4010a00000400000000000000000000000000000000020e010000040001270400080001270c00100001271000140001271400180001271c00200001272000240001272400280001272c003000012730003400012734003800012738003c0001273c00400001274000440001204400480001204c00500001205000540001205400580001205c006000012080008400010f84008800010f8c009000010f90009400010f94009800010f9c00a000010fa000a400010fa400a800010fac00b000010fb000b400010fb400b800010fb800bc00010fbc00c000010fc000c4000106c400c8000106cc00d0000106d000d4000106d400d8000106dc00e0000106e000e4000106e400e8000106ec00f0000106f000f4000106f400f8000106f800fc000106fc000001010609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80040020000010003110108040005000107080009000204070c000d0001070e000f0002110110001100010712001300010414001500031101071800190004110104071c001d0001081e001f0001042000210003110107240025000107280029000204072c002d0001072e002f0002110130003100010732003300010434003500031101073800390004110104073c003d0001084000410003110107440045000107480049000204074c004d0001074e004f0002110150005100010752005300010454005500031101075800590004110104075c005d0001085e005f0001046000610003110107640065000107680069000204076c006d0001076e006f0002110170007100010772007300010474007500031101077800790004110104077c007d0001088000810003110108840085000107880089000204078c008d0001078e008f0002110190009100010792009300010494009500031101079800990004110104079c009d0001089e009f000104a000a10003110107a400a5000107a800a900020407ac00ad000107ae00af00021101b000b1000107b200b3000104b400b50003110107b800b9000411010407bc00bd000108c000c10003110107c400c5000107c800c900020407cc00cd000107ce00cf00021101d000d1000107d200d3000104d400d50003110107d800d9000411010407dc00dd000108de00df000104e000e10003110107e400e5000107e800e900020407ec00ed000107ee00ef00021101f000f1000107f200f3000104f400f50003110107f800f9000411010407fc00fd000108`), music.PlaybackMode.UntilDone)
    Bridge()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door2 ---2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(323, 160)
        level = 5
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite, otherSprite) {
    if (otherSprite == mysprite18) {
        timer.throttle("action", 6000, function () {
            mysprite18.sayText("I've been waiting for you to find me one day.", 3000, true)
            mysprite18.sayText("I knew that after I went missing you would come looking for me.", 3000, true)
        })
    }
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite16)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.NPC7, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy1, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite14)
    info.changeScoreBy(1)
})
// Robotics Team Number 58 for code
scene.onOverlapTile(SpriteKind.Player, assets.tile`TNT1`, function (sprite, location) {
    BombCode1 = game.askForNumber("Password", 2)
    for (let index = 0; index < 1; index++) {
        if (BombCode1 == 58) {
            tiles.setCurrentTilemap(maps[14])
            mySprite.setPosition(150, 200)
            level = 14
            NPC_Spawn()
            info.changeCountdownBy(240)
            Bombpoints += 1
        } else {
            tiles.setCurrentTilemap(maps[10])
            mySprite.setPosition(150, 200)
            level = 10
            info.changeCountdownBy(-60)
            NPC_Spawn()
        }
    }
})
sprites.onOverlap(SpriteKind.NPC1, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`armory inside door 2`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 287)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.NPC2, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
function Enemy_NPC () {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[0])
        level = 0
        mySprite13 = sprites.create(img`
            ......ffff..............
            ....fff77fff............
            ...fff7777fff...........
            ..fffeeeeeefff..........
            ..ffe777777eef..........
            ..fe7ffffff7ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf66fbfeff....cddc.
            .ffefbf66fbfeff...cddc..
            .fee6dddddd6eef.ccddc...
            fdfeeddddd6eeffecddc....
            fbffee6666ee6fddccc.....
            fbf6f777777f1edde.......
            fcf.f777777f66ee........
            .ff.f665566f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite13, sprites.castle.tilePath5)
        mySprite13.follow(mySprite, 80)
    }
    if (level == 13) {
        tiles.setCurrentTilemap(maps[13])
        level = 13
        mySprite14 = sprites.create(img`
            ......ffff..............
            ....fff77fff............
            ...fff7777fff...........
            ..fffeeeeeefff..........
            ..ffe777777eef..........
            ..fe7ffffff7ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf66fbfeff....cddc.
            .ffefbf66fbfeff...cddc..
            .fee6dddddd6eef.ccddc...
            fdfeeddddd6eeffecddc....
            fbffee6666ee6fddccc.....
            fbf6f777777f1edde.......
            fcf.f777777f66ee........
            .ff.f665566f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy1)
        tiles.placeOnRandomTile(mySprite14, assets.tile`myTile27`)
        mySprite14.follow(mySprite, 80)
    }
    if (level == 10) {
        tiles.setCurrentTilemap(maps[10])
        level = 10
        mySprite16 = sprites.create(img`
            ......ffff..............
            ....fff77fff............
            ...fff7777fff...........
            ..fffeeeeeefff..........
            ..ffe777777eef..........
            ..fe7ffffff7ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf66fbfeff....cddc.
            .ffefbf66fbfeff...cddc..
            .fee6dddddd6eef.ccddc...
            fdfeeddddd6eeffecddc....
            fbffee6666ee6fddccc.....
            fbf6f777777f1edde.......
            fcf.f777777f66ee........
            .ff.f665566f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy2)
        tiles.placeOnRandomTile(mySprite16, assets.tile`myTile17`)
        mySprite16.follow(mySprite, 70)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    Faceingleft = false
    Faceingright = false
    Faceingup = false
    Faceingdown = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door8`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(25, 175)
        level = 7
        NPC_Spawn()
        Enemy_NPC()
    }
})
function Intro () {
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a60000000100040e00070804000500020e00080009000207080c000d00020e0114001500040e01070818001900040e0107081c001d00020e0120002100030e010322002300010324002500010326002700010328002900020e012a002b0001012c002d000201042e002f00010130003100030e0001320033000100340035000300020436003700010038003900020e043a003b00030e02043c003d00040e1000043e003f00020e04`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408080200001c00010a006400f401640000040000000000000000000000000005000004000300000200011b02000400010f04000600011606000800011908000a00011b0a000c00010f0c000e0001160e001000011910001200011b12001400010f14001600011616001800011918001a00011b1a001c00010f1c001e0001161e002000011920002200011b22002400010f24002600011626002800011928002a00011b2a002c00010f2c002e0001162e003000011930003200011b32003400010f34003600011636003800011938003a00011b3a003c00010f3c003e0001163e004000011940004200011442004400010844004600010f46004800011248004a0001144a004c0001084c004e00010f4e005000011250005200011452005400010854005600010f56005800011258005a0001145a005c0001085c005e00010f5e006000011260006200011462006400010864006600010f66006800011268006a0001146a006c0001086c006e00010f6e007000011270007200011472007400010874007600010f76007800011278007a0001147a007c0001087c007e00010f7e008000011280008200011b82008400010f84008600011686008800011988008a00011b8a008c00010f8c008e0001168e009000011990009200011b92009400010f94009600011696009800011998009a00011b9a009c00010f9c009e0001169e00a0000119a000a200011ba200a400010fa400a6000116a600a8000119a800aa00011baa00ac00010fac00ae000116ae00b0000119b000b200011bb200b400010fb400b6000116b600b8000119b800ba00011bba00bc00010fbc00be000116be00c0000119c000c2000114c200c4000108c400c600010fc600c8000112c800ca000114ca00cc000108cc00ce00010fce00d0000112d000d2000114d200d4000108d400d600010fd600d8000112d800da000114da00dc000108dc00de00010fde00e0000112e000e2000114e200e4000108e400e600010fe600e8000112e800ea000114ea00ec000108ec00ee00010fee00f0000112f000f2000114f200f4000108f400f600010ff600f8000112f800fa000114fa00fc000108fc00fe00010ffe000001011209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800720100000100180c0d0e0f1011121314151617000102030405060708090a0b18001900031101061c001d000311010620002100031101073c003d00031101064000410003110107580059000311010660006100031101077c007d00031101068000810003110108840085000107880089000204078c008d0001078e008f0002110190009100010792009300010494009500031101079800990004110104079c009d0001089e009f000104a000a10003110107a400a5000107a800a900020407ac00ad000107ae00af000101b000b1000107b200b3000104b400b500020107b800b90003010407bc00bd000108c000c100020107c400c5000107c800c900020407cc00cd000107ce00cf000101d000d1000107d200d3000104d400d500020107d800d90003010407dc00dd000108de00df000104e000e100020107e400e5000107e800e900020407ec00ed000107ee00ef000101f000f1000107f200f3000104f400f500020107f800f90003010407fc00fd000108`), music.PlaybackMode.UntilDone)
    Verse()
}
sprites.onOverlap(SpriteKind.NPC5, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    statusbar.value += -10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door9 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[11])
        mySprite.setPosition(25, 175)
        level = 11
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door1 -2 -Shop outside`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.setPosition(310, 175)
        level = 1
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door8 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(25, 175)
        level = 7
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door9`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[11])
        mySprite.setPosition(25, 175)
        level = 11
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 4 inside`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 290)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.NPC3, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door10 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(660, 50)
        level = 9
        NPC_Spawn()
        Enemy_NPC()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC8, function (sprite, otherSprite) {
    if (otherSprite == Mysprite20) {
        timer.throttle("action", 6000, function () {
            Mysprite20.sayText("5687", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Armory inside door 0`, function (sprite, location) {
    if (level == 16) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 285)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door-2-1 -Shop inside`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 130)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door6 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[4])
        mySprite.setPosition(25, 160)
        level = 4
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door1 -Shop outside`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.setPosition(310, 175)
        level = 1
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 1 inside`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 130)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door5 --0`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[12])
        mySprite.setPosition(25, 160)
        level = 12
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door-2-1 -Shop inside3`, function (sprite, location) {
    if (level == 15) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 130)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
function NPC_Spawn () {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[0])
        level = 0
        mySprite2 = sprites.create(img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile21`)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        500,
        true
        )
        mySprite3 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
        mySprite4 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile22`)
        mySprite5 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite5, assets.tile`myTile23`)
        mySprite6 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite6, assets.tile`myTile24`)
        mySprite7 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite7, assets.tile`myTile25`)
    }
    if (level == 1) {
        tiles.setCurrentTilemap(maps[1])
        level = 1
        mySprite8 = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.NPC1)
        tiles.placeOnRandomTile(mySprite8, assets.tile`myTile26`)
    }
    if (level == 7) {
        tiles.setCurrentTilemap(maps[7])
        level = 7
        mySprite9 = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 6 6 6 6 b f 4 e 
            4 d f 6 6 6 6 6 6 f d 4 
            4 4 f 8 8 8 8 8 8 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.NPC2)
        tiles.placeOnRandomTile(mySprite9, assets.tile`myTile17`)
    }
    if (level == 13) {
        tiles.setCurrentTilemap(maps[13])
        mySprite10 = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f e e e e f f . . . 
            . . f e e e e e e e e f . . 
            . f e e e e e e e e e e f . 
            . f e e e d b b d e e e f . 
            f e e e b 4 4 4 4 b e e e f 
            f e e c c 4 4 4 4 c c e e f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 8 8 8 8 6 f 4 e . 
            . 4 d c 8 8 8 8 8 8 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.NPC3)
        level = 13
        tiles.placeOnRandomTile(mySprite10, assets.tile`myTile17`)
    }
    if (level == 13) {
        tiles.setCurrentTilemap(maps[13])
        Mysprite17 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.NPC3)
        Mysprite17.setPosition(585, 24)
        level = 13
    }
    if (level == 10) {
        tiles.setCurrentTilemap(maps[10])
        level = 10
        mySprite11 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f c 1 f c c f 1 c f . . 
            . f e 7 7 7 7 7 7 e f . . 
            . f f f e e e e f f f . . 
            f e f b f f f 7 b f e f . 
            e 7 f 7 e 7 e f e f 7 e . 
            e e f f 7 e f 7 f f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.NPC4)
        tiles.placeOnRandomTile(mySprite11, assets.tile`myTile26`)
    }
    if (level == 11) {
        tiles.setCurrentTilemap(maps[11])
        level = 11
        mySprite12 = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 6 c . . . . . . 
            . . . . c c c 6 6 c c c . . . . 
            . . c c b c 6 6 6 6 c c c c . . 
            . c b b 6 b 6 6 6 6 b 6 b b c . 
            . c b 6 6 b b 6 6 b b 6 6 b c . 
            . . f 6 6 6 b b b b 6 6 6 c . . 
            . . f f 6 6 6 6 6 6 6 6 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 6 b b 6 b f b e . . 
            . . e e f 6 6 6 6 6 6 f e e . . 
            . . . . c b 6 6 6 6 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.NPC5)
        tiles.placeOnRandomTile(mySprite12, assets.tile`myTile26`)
    }
    if (level == 14) {
        tiles.setCurrentTilemap(maps[14])
        level = 14
        mysprite18 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f c 1 f c c f 1 c f . . 
            . f e 7 7 7 7 7 7 e f . . 
            . f f f e e e e f f f . . 
            f e f b f f f 7 b f e f . 
            e 7 f 7 e 7 e f e f 7 e . 
            e e f f 7 e f 7 f f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.NPC6)
        tiles.placeOnRandomTile(mysprite18, assets.tile`myTile26`)
    }
    if (level == 15) {
        tiles.setCurrentTilemap(maps[15])
        level = 15
        mysprite19 = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.NPC7)
        tiles.placeOnRandomTile(mysprite19, assets.tile`myTile26`)
    }
    if (level == 11) {
        tiles.setCurrentTilemap(maps[11])
        Mysprite20 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.NPC8)
        Mysprite20.setPosition(230, 310)
        level = 11
    }
    if (level == 4) {
        tiles.setCurrentTilemap(maps[4])
        mysprite21 = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.NPC10)
        mysprite21.setPosition(120, 23)
        level = 4
    }
    if (level == 16) {
        tiles.setCurrentTilemap(maps[16])
        level = 16
        mysprite22 = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 6 6 6 6 b f 4 e 
            4 d f 6 6 6 6 6 6 f d 4 
            4 4 f 8 8 8 8 8 8 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.NPC11)
        tiles.placeOnRandomTile(mysprite22, assets.tile`myTile17`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door5 --2 house 1`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.setPosition(25, 160)
        level = 2
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door0`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(323, 160)
        level = 5
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 3 door2`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 290)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 1 inside2`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 130)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 6 inside0`, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 450)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (level == 9) {
        tiles.setCurrentTilemap(maps[13])
        mySprite.setPosition(640, 500)
        level = 13
        NPC_Spawn()
        Enemy_NPC()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
	
})
// Robotics Team Number 5687 for code
scene.onOverlapTile(SpriteKind.Player, assets.tile`TNT2`, function (sprite, location) {
    BombCode1 = game.askForNumber("Password", 4)
    for (let index = 0; index < 1; index++) {
        if (BombCode1 == 5687) {
            tiles.setCurrentTilemap(maps[15])
            mySprite.setPosition(213, 311)
            level = 15
            NPC_Spawn()
            info.changeCountdownBy(240)
            Bombpoints += 1
        } else {
            tiles.setCurrentTilemap(maps[1])
            mySprite.setPosition(213, 311)
            level = 1
            info.changeCountdownBy(-60)
            NPC_Spawn()
        }
    }
})
function Chorus () {
    music.play(music.createSong(hex`0078000408080400001c00010a006400f401640000040000000000000000000000000005000004fa0200000200011b02000400010f04000600011606000800011908000a00011b0a000c00010f0c000e0001160e001000011910001200011b12001400010f14001600011616001800011918001a00011b1a001c00010f1c001e0001161e002000011920002200011b22002400010f24002600011626002800011928002a00011b2a002c00010f2c002e0001162e003000011930003200011b32003400010f34003600011636003800011938003a00011b3a003c00010f3c003e0001163e004000011942004400010844004600010f46004800011248004a0001144a004c0001084c004e00010f4e005000011250005200011452005400010854005600010f56005800011258005a0001145a005c0001085c005e00010f5e006000011260006200011462006400010864006600010f66006800011268006a0001146a006c0001086c006e00010f6e007000011270007200011472007400010874007600010f76007800011278007a0001147a007c0001087c007e00010f7e008000011280008200011b82008400010f84008600011686008800011988008a00011b8a008c00010f8c008e0001168e009000011990009200011b92009400010f94009600011696009800011998009a00011b9a009c00010f9c009e0001169e00a0000119a000a200011ba200a400010fa400a6000116a600a8000119a800aa00011baa00ac00010fac00ae000116ae00b0000119b000b200011bb200b400010fb400b6000116b600b8000119b800ba00011bba00bc00010fbc00be000116be00c0000119c000c2000114c200c4000108c400c600010fc600c8000112c800ca000114ca00cc000108cc00ce00010fce00d0000112d000d2000114d200d4000108d400d600010fd600d8000112d800da000114da00dc000108dc00de00010fde00e0000112e000e2000114e200e4000108e400e600010fe600e8000112e800ea000114ea00ec000108ec00ee00010fee00f0000112f000f2000114f200f4000108f400f600010ff600f8000112f800fa000114fa00fc000108fc00fe00010ffe000001011205001c000f0a006400f4010a0000040000000000000000000000000000000002fe0100000200012702000400012204000600012506000800012508000a0001270a000c00011b0c000e0001200e001000012210001200012712001400012514001600012516001800012218001a0001271a001c0001221c001e0001251e002000012520002400012728002a00012c2a002c00012c2c002e00012a2e003000012930003200012932003400012734003600012736003800012538003a0001253a003c0001223c003e0001203e004000011e40004200012042004400011b44004600011e46004800011e48004a0001204a004c00011b4c004e00011e4e005000011e50005200012052005400011e54005600011d56005800011e58005a0001205a005c00011b5c005e00011e5e006000011e60006400012080008200012782008400012284008600012586008800012588008a0001278a008c00011b8c008e0001208e009000012290009200012792009400012594009600012596009800012298009a0001279c009e0001259e00a0000125a000a4000127a800aa00041b1d2229b000b200041b1d2229b400b600041b1d2229b800ba00041b1d2229c000c2000120c200c400011bc400c600011ec600c800011ec800ca000120ca00cc00011bcc00ce00011ece00d000011ed000d2000120d200d400011ed400d600011dd600d800011ed800da000120da00dc00011bdc00de00011ede00e000011ee000e400012007001c00020a006400f401640000040000000000000000000000000000000003480028002a00012c2a002c00012c2c002e00012a2e003000012930003200012932003400012734003600012736003800012538003a0001253a003c0001223c003e0001203e004000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800540200000100180c0d0e0f1011121314151617000102030405060708090a0b040005000107080009000204070c000d0001070e000f0002110110001100010712001300010414001500031101071800190004110104071c001d0001081e001f0001042000210003110107240025000107280029000204072c002d0001072e002f00021101300031000107320033000104340035000211013800390004110104073c003d0001084000410003110107440045000107480049000204074c004d0001074e004f0002110150005100010752005300010454005500031101075800590004110104075c005d0001085e005f0001046000610003110107640065000107680069000204076c006d0001076e006f0002110170007100010772007300010474007500031101077800790004110104077c007d0001088000810003110108840085000107880089000204078c008d0001078e008f0002110190009100010792009300010494009500031101079800990004110104079c009d0001089e009f000104a000a10003110107a400a5000107a800a900020407ac00ad000107ae00af00021101b000b1000107b200b3000104b400b50003110107b800b9000411010407bc00bd000108c000c10003110107c400c5000107c800c900020407cc00cd000107ce00cf00021101d000d1000107d200d3000104d400d50003110107d800d9000411010407dc00dd000108de00df000104e000e10003110107e400e5000107e800e900020407ec00ed000107ee00ef00021101f000f1000107f200f3000104f400f50003110107f800f9000411010407fc00fd000108`), music.PlaybackMode.UntilDone)
    Verse()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Armory inside door 1`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 287)
        level = 0
        NPC_Spawn()
        Enemy_NPC()
    }
})
let Bullet: Sprite = null
let Mysprite20: Sprite = null
let mySprite14: Sprite = null
let mySprite16: Sprite = null
let mysprite18: Sprite = null
let code = 0
let mySprite8: Sprite = null
let mysprite22: Sprite = null
let mySprite11: Sprite = null
let Mysprite17: Sprite = null
let mySprite10: Sprite = null
let mySprite13: Sprite = null
let mySprite9: Sprite = null
let BombCode1 = 0
let mySprite12: Sprite = null
let mysprite19: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Faceingdown = false
let Faceingup = false
let Faceingright = false
let Faceingleft = false
let level = 0
let mysprite21: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let maps: tiles.TileMapData[] = []
// Arrays start at 0, not 1.
maps = [
tilemap`Main level 0`,
tilemap`shop 1`,
tilemap`House 0`,
tilemap`House 3`,
tilemap`House 6`,
tilemap`House 3`,
tilemap`House 5`,
tilemap`Armory`,
tilemap`Bunker1`,
tilemap`Bunker level 2`,
tilemap`Bunker level 3`,
tilemap`Farm Shop`,
tilemap`House 4`,
tilemap`Bunker1-2`,
tilemap`Bunker level 3 part 2`,
tilemap`shop 1 part 2`,
tilemap`Armory0`
]
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(225, 40)
controller.moveSprite(mySprite, 100, 100)
mySprite.z = 1
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`Main level 0`)
NPC_Spawn()
Enemy_NPC()
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
info.setLife(3)
statusbar.value = 700
statusbar.setLabel("HP")
statusbar.setBarBorder(1, 15)
statusbar.attachToSprite(mySprite)
statusbar.setOffsetPadding(0, 3)
info.startCountdown(240)
let Bombpoints = 0
Intro()
forever(function () {
    if (info.score() == 4) {
        info.changeLifeBy(1)
        info.setScore(0)
    }
})
forever(function () {
    if (Faceingleft == true && controller.A.isPressed()) {
        Bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
    }
})
forever(function () {
    if (Faceingright == true && controller.A.isPressed()) {
        Bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
    }
})
forever(function () {
    if (Faceingup == true && controller.A.isPressed()) {
        Bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
    }
})
forever(function () {
    if (Faceingdown == true && controller.A.isPressed()) {
        Bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 100)
    }
})
forever(function () {
    if (level != 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
    if (level != 13) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy1)
    }
    if (level != 10) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    }
})
forever(function () {
    if (level != 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    }
    if (level != 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC1)
    }
    if (level != 7) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC2)
    }
    if (level != 13) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC3)
    }
    if (level != 10) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC4)
    }
    if (level != 11) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC5)
    }
    if (level != 14) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC6)
    }
    if (level != 15) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC7)
    }
    if (level != 11) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC8)
    }
    if (level != 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC9)
    }
    if (level != 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC10)
    }
    if (level != 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC11)
    }
})
forever(function () {
    if (Bombpoints == 3) {
        game.gameOver(true)
    }
})
