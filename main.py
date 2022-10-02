radio.set_group(1)

def on_forever():
    basic.show_number(input.temperature())
    radio.send_number(input.temperature())
    basic.pause(1000)
basic.forever(on_forever)
