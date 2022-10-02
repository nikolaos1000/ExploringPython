radio.setGroup(1)
basic.forever(function on_forever() {
    basic.showNumber(input.temperature())
    radio.sendNumber(input.temperature())
    basic.pause(1000)
})
