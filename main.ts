// Created by: Evan
// Created on: Oct. 2020
// 
// This program calculates the area of a trapezoid
game.splash("Let's calculate the area of a trapezoid")
let Top_length = game.askForNumber("Enter the top length of trapezoid")
let Bottom_length = game.askForNumber("Enter the Bottom length of trapezoid")
let Height = game.askForNumber("Enter the Height of trapezoid")
let Area = (Top_length + Bottom_length) * (Height / 2)
game.splash("Area of trapezoid dimensions: " + " (" + Top_length + "cm + " + Bottom_length + "cm /2) x " + Height + "cm " + convertToText(Area))
