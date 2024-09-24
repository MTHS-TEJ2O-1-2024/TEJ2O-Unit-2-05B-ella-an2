"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
from time import *

current_temperature: number
temperature_kalvin: number


display.clear
display.show(Image.HAPPY)
sleep(1)


while True:
    if button_a.is_pressed():
        current_temperature = temperature
        temperature_kalvin = current_temperature + 273.15
        temperature_kalvin = Math.round(temperature_kalvin)

        display.clear
        display.scroll("The temperature is:" + str(temperature_kalvin) + "K")

