input.onButtonPressed(Button.A, function () {
    yo += 1
    if (yo > 3) {
        yo = 1
    }
})
input.onButtonPressed(Button.B, function () {
    cpu = randint(1, 3)
    basic.showString("cpu")
    if (cpu == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (cpu == 2) {
        basic.showIcon(IconNames.Square)
    } else if (cpu == 3) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(1000)
    if (yo == 1 && cpu == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (yo == 2 && cpu == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (yo == 3 && cpu == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (yo == cpu) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let yo = 0
let cpu = 0
cpu = 0
yo = 0
basic.forever(function () {
    if (yo == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (yo == 2) {
        basic.showIcon(IconNames.Square)
    } else if (yo == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
