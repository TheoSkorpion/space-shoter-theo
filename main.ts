controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a . . . . . . 
        . a a a a . . . . . . . . . . . 
        a a . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let EnemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . a a 4 4 
    . . . . . . . . 6 6 6 6 a 6 6 4 
    . . . . . 6 6 6 6 6 6 6 6 6 4 4 
    . . . . 6 6 6 6 6 6 6 6 6 6 4 4 
    . . 6 6 6 6 6 6 6 6 6 6 6 4 4 4 
    . . 6 6 6 6 6 6 6 6 8 8 8 4 4 . 
    . 6 6 6 6 6 6 6 6 8 8 6 4 4 4 . 
    . 6 6 6 6 6 6 8 8 8 6 6 4 4 . . 
    . . 6 6 6 6 6 6 6 6 6 6 4 . . . 
    . . . 6 6 6 6 6 6 6 6 a 4 . . . 
    . . . . . . 6 6 6 6 6 a . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    EnemyShip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 4 4 4 . . . 
        . . 2 2 f f 2 2 2 2 2 4 4 4 4 . 
        . 2 2 f f 2 2 2 2 2 2 2 4 4 4 . 
        2 2 f f 2 2 2 2 2 2 2 2 4 4 4 4 
        2 f f 2 2 2 2 2 2 2 2 2 2 4 4 4 
        2 f 2 2 2 2 2 2 2 2 2 2 2 4 4 . 
        2 f f 2 2 2 2 2 2 2 2 2 2 4 4 4 
        2 2 f f 2 2 2 2 2 2 2 2 4 4 4 . 
        . 2 2 f f 2 2 2 2 2 2 2 4 4 4 . 
        . . 2 2 f f 2 2 2 2 4 4 4 4 . . 
        . . . . 2 2 2 2 2 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    EnemyShip.x = scene.screenWidth()
    EnemyShip.vx = -20
    EnemyShip.y = randint(10, scene.screenHeight() - 10)
})
