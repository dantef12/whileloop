input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
input.onGesture(Gesture.Shake, function () {
    random_number = randint(0, 5)
    sprite_2 = game.createSprite(2, 0)
})
let sprite_2: game.LedSprite = null
let random_number = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
basic.forever(function () {
    while (true) {
        if (random_number == 1) {
            sprite_2.move(1)
        } else if (random_number == 2) {
            sprite_2.move(2)
        } else if (random_number == 3) {
            sprite_2.move(-1)
        } else if (random_number == 4) {
            sprite_2.move(-2)
        } else if (random_number == 5) {
            sprite_2.move(0)
            random_number = randint(0, 5)
        }
    }
})
