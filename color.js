"use strict";
// Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color = 'yellow';
if (alien_color === "red") {
    console.log(' Your answer is correct');
}
else {
    console.log(' Your answer is incorrect');
}
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === "green") {
    console.log(' player just earned 5 points for shooting the alien');
}
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color !== "green") {
    console.log(' player just earned 10 points');
}
//• Write one version of this program that runs the if block and another that runs the else block.
alien_color = 'green';
if (alien_color === "green") {
    console.log(' player just earned 5 points for shooting the alien');
}
else if (alien_color !== "green") {
    console.log(' player just earned 10 points');
}
