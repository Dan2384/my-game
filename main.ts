namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 6 inside 2`, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 450)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(260, 500)
        level = 9
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 5 door1`, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 450)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door-2-1 -Shop inside1`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 130)
        level = 0
        NPC_Spawn()
    }
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cave 1`, function (sprite, location) {
    if (level == 9) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(1380, 145)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Bunker top door`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[13])
        mySprite.setPosition(40, 500)
        level = 13
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door3`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[6])
        mySprite.setPosition(323, 160)
        level = 6
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 5 door2`, function (sprite, location) {
    if (level == 6) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 450)
        level = 0
        NPC_Spawn()
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 4 inside 2`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 290)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Farm shop inside 1`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 945)
        level = 0
        NPC_Spawn()
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Farm shop inside 2`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 945)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door1`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[12])
        mySprite.setPosition(25, 160)
        level = 12
        NPC_Spawn()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    if (otherSprite == mySprite10) {
        timer.throttle("action", 6000, function () {
            mySprite10.sayText("I've been trapped here for over a year", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door5 house 1`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.setPosition(25, 160)
        level = 2
        NPC_Spawn()
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
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    if (otherSprite == mySprite8) {
        timer.throttle("action", 6000, function () {
            mySprite8.sayText("Can I help you find anything in the store?", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    code = game.askForNumber("Password", 4)
    if (code == 2648) {
        tiles.setCurrentTilemap(maps[10])
        mySprite.setPosition(50, 200)
        level = 10
        NPC_Spawn()
    } else {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(260, 500)
        level = 9
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door10`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(660, 50)
        level = 9
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 450)
        level = 0
    }
    NPC_Spawn()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 3 door1`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 290)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door3 --- 2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[6])
        mySprite.setPosition(323, 160)
        level = 6
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door2 ---2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(323, 160)
        level = 5
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`armory inside door 2`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 287)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door8`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(25, 175)
        level = 7
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door9 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[11])
        mySprite.setPosition(25, 175)
        level = 11
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door1 -2 -Shop outside`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.setPosition(310, 175)
        level = 1
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door8 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[7])
        mySprite.setPosition(25, 175)
        level = 7
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door9`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[11])
        mySprite.setPosition(25, 175)
        level = 11
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 4 inside`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 290)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door10 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[9])
        mySprite.setPosition(660, 50)
        level = 9
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door-2-1 -Shop inside`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 130)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door6 --2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[4])
        mySprite.setPosition(25, 160)
        level = 4
    }
    NPC_Spawn()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door1 -Shop outside`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.setPosition(310, 175)
        level = 1
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 1 inside`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 130)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door5 --0`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[12])
        mySprite.setPosition(25, 160)
        level = 12
        NPC_Spawn()
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
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door5 --2 house 1`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.setPosition(25, 160)
        level = 2
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door0`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(maps[5])
        mySprite.setPosition(323, 160)
        level = 5
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 3 door2`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(200, 290)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 1 inside2`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 130)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`House 6 inside0`, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(245, 450)
        level = 0
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (level == 9) {
        tiles.setCurrentTilemap(maps[13])
        mySprite.setPosition(640, 500)
        level = 13
        NPC_Spawn()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Armory inside door 1`, function (sprite, location) {
    if (level == 7) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.setPosition(440, 287)
        level = 0
        NPC_Spawn()
    }
})
let code = 0
let mySprite8: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite12: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let level = 0
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
tilemap`Bunker1-2`
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
})
