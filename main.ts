function gun_turn (num: number) {
    robotbit.GeekServo(robotbit.Servos.S1, num)
}
input.onButtonPressed(Button.A, function () {
    music.playTone(131, music.beat(BeatFraction.Half))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "L") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        60,
        robotbit.Motors.M1B,
        -60
        )
    } else if (receivedString == "R") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -60,
        robotbit.Motors.M1B,
        60
        )
    } else if (receivedString == "S") {
        robotbit.MotorStopAll()
    } else if (receivedString == "G") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M1B,
        150
        )
    } else if (receivedString == "E") {
        DEG += 10
        gun_turn(DEG)
    } else if (receivedString == "W") {
        DEG += -10
        gun_turn(DEG)
    } else if (receivedString == "F") {
        FIRE += 60
        gun_fire(FIRE)
    }
})
function gun_fire (num: number) {
    robotbit.GeekServo(robotbit.Servos.S2, num)
    music.playTone(349, music.beat(BeatFraction.Quarter))
}
let DEG = 0
let FIRE = 0
radio.setGroup(11)
FIRE = -100
DEG = 0
robotbit.GeekServo(robotbit.Servos.S1, DEG)
basic.forever(function () {
    if (FIRE == 260) {
        FIRE = -100
    }
    basic.pause(100)
})
