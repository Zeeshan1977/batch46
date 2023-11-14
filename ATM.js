#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 1000) => new Promise((resolve, reject) => setTimeout(resolve, ms));
async function screen() {
    console.clear();
    const msg = `A T M  M a c h i n e !!!`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`
  /$$$$$$  /$$$$$$$$ /$$      /$$       /$$      /$$                     /$$       /$$                          
 /$$__  $$|__  $$__/| $$$    /$$$      | $$$    /$$$                    | $$      |__/                          
| $$  \ $$   | $$   | $$$$  /$$$$      | $$$$  /$$$$  /$$$$$$   /$$$$$$$| $$$$$$$  /$$ /$$$$$$$   /$$$$$$       
| $$$$$$$$   | $$   | $$ $$/$$ $$      | $$ $$/$$ $$ |____  $$ /$$_____/| $$__  $$| $$| $$__  $$ /$$__  $$      
| $$__  $$   | $$   | $$  $$$| $$      | $$  $$$| $$  /$$$$$$$| $$      | $$  \ $$| $$| $$  \ $$| $$$$$$$$      
| $$  | $$   | $$   | $$\  $ | $$      | $$\  $ | $$ /$$__  $$| $$      | $$  | $$| $$| $$  | $$| $$_____/      
| $$  | $$   | $$   | $$ \/  | $$      | $$ \/  | $$|  $$$$$$$|  $$$$$$$| $$  | $$| $$| $$  | $$|  $$$$$$$      
|__/  |__/   |__/   |__/     |__/      |__/     |__/ \_______/ \_______/|__/  |__/|__/|__/  |__/ \_______/      
                                                                                                                
                                                                                                                
                                                                                                                
\n`);
    await sleep();
    rainbowTitle.stop();
}
// await welcome();
async function askQuestion() {
    let currentBalance = Math.floor(Math.random() * 100000 + 1);
    const usr_que = await inquirer.prompt([
        {
            type: "input",
            name: "usr_name",
            message: chalk.rgb(165, 105, 189)("Enter Account Holder Name: "),
            // validate: (answer:string)=>{
            //   if(typeof answer !== "string"){
            //     // console.log(typeof answer);
            //     return chalk.red(`Please enter the valid name! ${typeof answer}`);
            //   }
            //   return true;
            // }
        },
        {
            type: "password",
            name: "usr_pass",
            message: chalk.rgb(165, 105, 189)("Enter Your 4-digit PIN: "),
            mask: "*",
            validate: (answer) => {
                let parseAnswer = JSON.stringify(answer);
                // console.log(parseAnswer.length - 2, parseAnswer);
                if ((parseAnswer.length - 2) > 4 || (parseAnswer.length - 2) < 4) {
                    return chalk.red(`Your PIN must be of 4 digits`);
                }
                return true;
            }
        },
        {
            type: "list",
            name: "usr_operation",
            message: chalk.rgb(165, 105, 189)("Select your desire operation to perform:  "),
            choices: ["Withdraw", "Transfer Money", "Check Balance"],
        },
    ]);
    if (usr_que.usr_operation == "Withdraw") {
        const usr_withdraw = await inquirer.prompt([
            {
                type: "number",
                name: "usr_amountWithdrawal",
                message: chalk.rgb(245, 176, 65)(`Your Current Balance is $${currentBalance}. Please enter the withdrawal amount: $`),
                validate: (answers) => {
                    let answerParse = JSON.stringify(answers);
                    let ans_num = Number(answerParse);
                    if (isNaN(answers) || ans_num > currentBalance) {
                        return chalk.red(`Please enter a valid amount!!`);
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "usr_rcpt",
                message: chalk.rgb(165, 105, 189)("Do you want to generate receipt. Press y or n: "),
            },
        ]);
        if (usr_withdraw.usr_rcpt == 'y' || usr_withdraw.usr_rcpt == 'Y' || usr_withdraw.usr_rcpt == 'yes' || usr_withdraw.usr_rcpt == 'YES') {
            console.log(chalk.rgb(245, 176, 65)(`Name: ${usr_que.usr_name} \nAmount Withdraw: $${usr_withdraw.usr_amountWithdrawal}\nTotal Amount Left: $${currentBalance - usr_withdraw.usr_amountWithdrawal}`));
        }
    }
    else if (usr_que.usr_operation == "Check Balance") {
        console.log(chalk.rgb(245, 176, 65)(`Your current balance is: $${currentBalance}`));
    }
    // console.log(usr_que);
    else if (usr_que.usr_operation == "Transfer Money") {
        const transfer = await inquirer
            .prompt([
            {
                type: "input",
                name: "transfer_account",
                message: chalk.rgb(84, 153, 199)("Enter Another User Account To Transfer Your Money: "),
                default: "0x2345..."
            },
            {
                type: "password",
                name: "usr_pass2",
                message: chalk.rgb(84, 153, 199)("Enter Your 4-digit PIN: "),
                mask: "*",
                validate: (answer) => {
                    let answerParse = JSON.stringify(answer);
                    if (usr_que.usr_pass !== answer || answerParse.length - 2 > 4) {
                        return chalk.red(`Your PIN does not match the previous PIN`);
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "transfer_amount",
                message: chalk.rgb(84, 153, 199)(`Your current balance is $${currentBalance}. Enter amount you want to transfer: $`),
                validate: (answer) => {
                    let answerParse = JSON.stringify(answer);
                    let answer_number = Number(answerParse);
                    if (isNaN(answer_number) || answer_number > currentBalance) {
                        return chalk.red(`Please enter valid number!`);
                    }
                    return true;
                }
            }
        ]);
        console.log(chalk.rgb(245, 176, 65)(`Your amount $${transfer.transfer_amount} has been sent to ${transfer.transfer_account}`));
    }
}
// askQuestion();
async function startAgain() {
    do {
        console.clear();
        await welcome();
        await askQuestion();
        var restart = await inquirer
            .prompt([
            {
                type: "input",
                name: "start",
                message: chalk.rgb(165, 105, 189)("Do you want to start again? Press y or n: ")
            }
        ]);
    } while (restart.start == 'y' || restart.start == 'Y' || restart.start == 'yes' || restart.start == 'YES');
}
startAgain();
