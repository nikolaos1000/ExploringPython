radio.setGroup(2)
basic.forever(function () {
    basic.showString("Micro-2")
    basic.showNumber(input.temperature())
    radio.sendValue("Micro-2", input.temperature())
    basic.pause(10000)
})
