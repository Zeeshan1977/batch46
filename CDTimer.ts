#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

chalkanimation.neon('Welcome to Digital Countdown showcase');
let countdown:any;
let Min: number = 0;
let Sec: number = 0;

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  })
}

async function Welcome() {
  let rainbow = chalkanimation.rainbow('Welcome to Countdown Timer'); // Animation starts
  await sleep();
  rainbow.stop();
  console.log(chalk.yellowBright(chalk.bold("Developed By Zeeshan \n")));
}


async function askQuestion() {
  await inquirer
    .prompt([

      {
        type: "input",
        name: "minute",
        message: "Enter Number of Minutes: "
      },
      {
        type: "input",
        name: "second",
        message: "Enter Number of Seconds: "
      }
    ])
    .then(async (answers) => {
      Min = answers.minute;
      Sec = answers.second;

      console.clear();
      console.log(`
      Timer Starts!
      Time: ${Min} min ${Sec} sec


      `);
      
      countdown = await setInterval(Counter, 1000);
    })

}

async function Counter() {
  if (Sec <= 0 && Min <= 0){
    console.clear();
    
    console.log(chalk.bgCyan(chalk.bold(chalk.red(`${Min} min : ${Sec} sec`))));

    clearInterval(countdown);

    console.log("\nTimes UP!");
  }
  else if(Min > 0){
    if(Sec >= 0){
      console.clear();
      console.log(chalk.bgCyan(chalk.bold(chalk.red(`${Min} min : ${Sec} sec`))));
      Sec--;
    }
    else if(Sec < 0){
      Min--;
      Sec = Sec + 60;
      console.clear();
      console.log(chalk.bgCyan(chalk.bold(chalk.red(`${Min} min : ${Sec} sec`))));
    }
  }
  else if(Min == 0 && Sec >= 0){
      console.clear();
      console.log(chalk.bgCyan(chalk.bold(chalk.red(`${Min} min : ${Sec} sec`))));
      Sec--;
  }
}


async function startAgain() {
  await Welcome();

  do {
    console.clear();
    await askQuestion();

    var again = await inquirer
      .prompt([
        {
          type: "input",
          name: "restart",
          message: "Do you want to run timer again? Press Y or N "
        }
      ])
  } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes")

  console.log(chalk.yellowBright(chalk.bold("Developed By Zeeshan \n")));
}

startAgain();