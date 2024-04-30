input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    music.stopMelody(MelodyStopOptions.All)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P1, 0)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    }
    music.stopAllSounds()
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
