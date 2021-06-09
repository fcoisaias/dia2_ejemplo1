radio.onReceivedNumber(function (receivedNumber) {
    RECIBIDO = true
    VALOR = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(0, 3))
})
let VALOR = 0
let RECIBIDO = false
radio.setGroup(1)
basic.forever(function () {
    if (VALOR == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
    basic.clearScreen()
})
