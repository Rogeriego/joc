let posicio = 0
input.onButtonPressed(Button.A, function () {
    posicio = posicio + 1
})
input.onButtonPressed(Button.B, function () {
    posicio = posicio - 1
})
basic.forever(function () {
    if (posicio == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            # # # # #
            `)
    }
    if (posicio == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            # # # # #
            `)
    }
    if (posicio == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
    }
    if (posicio == -1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            # # # # #
            `)
    }
    if (posicio == -2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            # # # # #
            `)
    }
    if (posicio == -2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            # # # # #
            `)
    }
})
