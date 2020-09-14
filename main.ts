input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
let falling_block = game.createSprite(2, 0)
game.setLife(3)
basic.forever(function () {
    falling_block.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (falling_block.isTouching(sprite)) {
        game.addScore(1)
        falling_block.set(LedSpriteProperty.Y, 0)
        falling_block.set(LedSpriteProperty.X, randint(0, 4))
    }
    if (falling_block.get(LedSpriteProperty.Y) == 4) {
        game.removeLife(1)
        falling_block.set(LedSpriteProperty.Y, 0)
        falling_block.set(LedSpriteProperty.X, randint(0, 4))
    }
})
