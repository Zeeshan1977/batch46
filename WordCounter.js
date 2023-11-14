import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
const wait = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const gameTitle = chalkAnimation.rainbow('WORD COUNTER ');
    await wait();
    gameTitle.stop();
    console.log(`
    ${chalk.magentaBright(` "HOW TO USE" `)}
      ${chalk.yellowBright(`
      ${chalk.bgRgb(5, 2, 6)('1)')} WRITE OR PASTE ANY SENTENCE OR TEXT HERE : 
      ${chalk.bgRgb(5, 2, 6)('3)')} `)} ${chalk.magentaBright('OUTPUT WILL BE COUNTED WORDS !')}`);
}
async function askagain() {
    const ask = await inquirer.prompt({
        name: 'ask',
        type: 'input',
        message: 'Count Again? press Y or N for End the Program!:',
        default() {
            return 'Y';
        }
    });
    const asked = ask.ask;
    if (asked === 'y' || asked === 'Y')
        main();
    else {
        console.log(`${chalk.yellowBright(`Good Bye :) !`)}`);
        process.exit(0);
    }
}
async function main() {
    const sentence = await inquirer.prompt({
        name: 'sentence',
        type: 'input',
        message: 'Enter any sentence or collection of words',
        default() {
            return 'Sentence';
        }
    });
    const enteredSentence = sentence.sentence.trim();
    if (isNaN(enteredSentence)) {
        wordCounter(enteredSentence);
    }
    else {
        console.log(`${chalk.redBright('Not a string')}`);
        askagain();
    }
}
async function wordCounter(sentence) {
    const spinner = createSpinner('counting words...').start();
    await wait(1000);
    spinner.stop();
    const wordsCount = sentence.split(" ").length;
    console.log(`${chalk.magentaBright(`Total Number of words in your sentence are: ${wordsCount}`)}`);
    askagain();
}
await welcome();
await main();
