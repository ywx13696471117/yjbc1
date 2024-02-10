enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
    basic.showNumber(9)
    basic.pause(100)
    basic.showNumber(8)
    basic.pause(100)
    basic.showNumber(7)
    basic.pause(100)
    basic.showNumber(6)
    basic.pause(100)
    basic.showNumber(5)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    basic.pause(100)
    basic.showNumber(0)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showString("Happy Nwe Year!")
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    music.play(music.stringPlayable("C5 B A C5 A G B C5 ", 110), music.PlaybackMode.UntilDone)
    music.stopAllSounds()
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(5000)
    basic.clearScreen()
})
basic.showString("push A OR B！")
