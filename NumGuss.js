#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function getRandomNumber() {
    while (true) {
        let sysGenerated = Math.floor(Math.random() * (20 - 10) + 10);
        let random = await inquirer.prompt([
            {
                name: 'Random Number',
                type: 'number',
                message: 'Enter a random Number between 10 to 20??'
            }
        ]);
        let rdmNumber = parseInt(random['Random Number']);
        if (rdmNumber === sysGenerated) {
            console.log(chalk.bold.greenBright('You guess the right number, You are Genius!'));
            break;
        }
        else {
            console.log(chalk.italic.redBright('Re-guess the right number'));
            break;
        }
    }
    playAgain();
}
async function playAgain() {
    let playAgain = await inquirer.prompt({
        name: 'play more',
        type: 'input',
        message: 'Do You want to replay ? [y/n]',
    });
    let playMore = playAgain["play more"];
    if (playMore == 'y') {
        getRandomNumber();
    }
    else if (playMore == 'n') {
        console.log(chalk.yellowBright('Thanks for playing this game!'));
    }
    else {
        console.log('Invalid Input');
    }
}
getRandomNumber();
