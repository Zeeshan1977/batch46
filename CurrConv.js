import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
let Basic_Currency = "";
let Currencies = [];
let Signs = [];
let ConversionToUSD = [];
let USDToUserChoice = [];
Currencies = [
    "Afghan Afghani",
    "Australian Dollar",
    "Bahraini Dinar",
    "Bangladeshi Taka",
    "Brazilian Real",
    "British Pound Sterling",
    "Canadian Dollar",
    "Chinese Yuan",
    "Colombian Peso",
    "Danish Kroner",
    "Egyptian Pound",
    "Eurp Eo",
    "Indian Rupee",
    "Iranian Rial",
    "Iraqi Dinar",
    "Japanese Yen",
    "Kuwaiti Dinar",
    "Malaysian Ringgit",
    "Mexican Peso",
    "Nepalese Rupee",
    "New Zealand Dollar",
    "Nigerian Naira",
    "Omani Rial",
    "Pakistan Rupee",
    "Qatari Rial",
    "Russian Ruble",
    "Swedish Krona",
    "Swiss Franc",
    "US Dollar",
    "Yen"
];
Signs = [
    "AFN",
    "AUD",
    "BHD",
    "BDT",
    "BRL",
    "GBP",
    "CAD",
    "CNY",
    "COP",
    "DKK",
    "EGP",
    "EUR",
    "INR",
    "IRR",
    "IQD",
    "JPY",
    "KWD",
    "MYR",
    "MXN",
    "NPR",
    "NZD",
    "NGN",
    "OMR",
    "PKR",
    "QAR",
    "RUR",
    "SEK",
    "CHF",
    "USD",
    "JPY"
];
ConversionToUSD = [
    0.011,
    0.70,
    2.65,
    0.0096,
    0.19,
    1.22,
    0.75,
    0.15,
    0.00021,
    0.14,
    0.033,
    1.08,
    0.012,
    0.000024,
    0.00069,
    0.0076,
    3.27,
    0.23,
    0.053,
    0.0076,
    0.64,
    0.0022,
    2.60,
    0.0037,
    0.27,
    0.014,
    0.097,
    1.088605,
    1,
    0.0076
];
USDToUserChoice = [
    91.00,
    1.43,
    0.38,
    104.59,
    5.23,
    0.82,
    1.34,
    6.77,
    4748.74,
    6.90,
    30.50,
    0.93,
    82.46,
    42250.00,
    1458.26,
    130.46,
    0.31,
    4.32,
    18.87,
    131.89,
    1.57,
    460.47,
    0.38,
    270.27,
    3.64,
    72.70,
    10.33,
    0.92,
    1,
    130.52
];
let flag = false;
let mytask = {
    Basic_Currency_Name: "",
    Convert_Currency_Name: "",
    Basic_Currency_Index: -1,
    Convert_Currency_Index: -1,
    Amount: 0
};
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};
async function Welcome() {
    let rainbow = chalkanimation.rainbow('Welcome to Zee Bank Currency Converter'); // Animation starts
    await sleep();
    rainbow.stop();
    //console.log(chalk.yellowBright(chalk.bold("Disgned By  Zeeshan\n")));
}
async function Basic() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Kindly Choose Basic Currency, \n",
            choices: Currencies,
        },
    ])
        .then((answers) => {
        mytask.Basic_Currency_Name = answers.operator;
        //Index search Loop
        for (let index = 0; index < Currencies.length; index++) {
            if (answers.operator == Currencies[index]) {
                mytask.Basic_Currency_Index = index;
                break;
            }
        }
        console.log(chalk.greenBright(`Basic Currency = ${answers.operator}, Basic Currency: ${mytask.Basic_Currency_Name}, Basic Currency Index: ${mytask.Basic_Currency_Index} \nCurrency Added Successfully!`));
    });
}
async function Convert() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Kindly Choose Convert Currency \n",
            choices: Currencies,
        },
    ])
        .then((answers) => {
        mytask.Convert_Currency_Name = answers.operator;
        //Index search Loop
        for (let index = 0; index < Currencies.length; index++) {
            if (answers.operator == Currencies[index]) {
                mytask.Convert_Currency_Index = index;
                break;
            }
        }
        //console.log(chalk.greenBright(`Basic Currency = ${answers.operator}, Basic Currency: ${mytask.Basic_Currency_Name}, Basic Currency Index: ${mytask.Basic_Currency_Index} \nCurrency Added Successfully!`));
    });
}
async function conversion() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "number",
            name: "UserAmount",
            message: `Enter the Amount  ${chalk.yellowBright(mytask.Basic_Currency_Name)}, you want to convert into ${chalk.yellowBright(mytask.Convert_Currency_Name)}: `
        }
    ]).then((Result) => {
        if (Result.UserAmount > 0) {
            mytask.Amount = Result.UserAmount;
            let Answer = ((mytask.Amount * ConversionToUSD[mytask.Basic_Currency_Index]) * USDToUserChoice[mytask.Convert_Currency_Index]); //Conversion        
            console.clear();
            console.log(`The Amount: ${chalk.greenBright(chalk.bold(mytask.Amount))} ${chalk.yellowBright(chalk.bold(mytask.Basic_Currency_Name))} is equal to ${chalk.greenBright(chalk.bold(Answer))} ${chalk.yellowBright(chalk.bold(mytask.Convert_Currency_Name))} \n\n`);
        }
    });
}
async function Manage() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: chalk.greenBright("Hi! You have to enter both currencies (Basic and Convert) here. \n Basic Currency: The currency currently you have! \n Convert Currency: The currency you want to convert in! \n"),
            choices: ["Choose Currency", "Conversion", "Close"]
        }
    ])
        .then(async (answers) => {
        if (answers.operator == "Choose Currency") {
            console.clear();
            await Basic();
            console.clear();
            await Convert();
            //console.log(chalk.greenBright(`Basic Currency = ${mytask.Basic_Currency_Name}, Convert Currency: ${mytask.Convert_Currency_Name}, Basic Currency Index: ${mytask.Basic_Currency_Index}, Convert Currency Index: ${mytask.Convert_Currency_Index} \nCurrency Added Successfully!`));
        }
        else if (answers.operator == "Conversion") {
            console.clear();
            await conversion();
        }
        else if (answers.operator == "Close") {
            console.clear();
            flag = true;
            console.log(chalk.blueBright("Thanks for using Zee bank Currency Converter"));
            console.log(chalk.yellowBright(chalk.bold("Developed By Zeeshan \n")));
        }
    });
}
async function startAgain() {
    await Welcome();
    do {
        await Manage();
    } while (flag == false);
}
startAgain();
