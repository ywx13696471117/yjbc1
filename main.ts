enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
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
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
})
