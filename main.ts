let posicio = 0
input.onButtonPressed(Button.A, function () {
    posicio = posicio + 1
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
})
input.onButtonPressed(Button.B, function () {
    posicio = posicio - 1
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
    if ((0 as any) == (-2 as any)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            # # # # #
            `)
    }
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
})
