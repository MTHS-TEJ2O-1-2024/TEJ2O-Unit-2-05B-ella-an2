/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella
 * Created on: Sep 2024
 * This program tells the temperature in Kalvin
*/

let currentTemperature: number
let temperatureKalvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
    currentTemperature = input.temperature()
    temperatureKalvin = (currentTemperature + 273.15)
    temperatureKalvin = Math.round(temperatureKalvin)

    basic.clearScreen()
    basic.showString('The temperature is:' + (temperatureKalvin).toString() + 'K')
})
