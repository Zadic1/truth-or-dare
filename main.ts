input.onButtonPressed(Button.A, function () {
    random_number = randint(0, 1)
    basic.clearScreen()
    if (random_number == 1) {
        basic.showString("truth")
    } else {
        basic.showString("dare")
    }
})
input.onButtonPressed(Button.B, function () {
    random_number = randint(0, 3)
    if (random_number == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (random_number == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else if (random_number == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (random_number == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    }
})
let random_number = 0
basic.showString("truth or dare ")
basic.forever(function () {
	
})
