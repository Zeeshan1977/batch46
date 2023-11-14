#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "/", "*"],
        message: "Select Operators"
    }
]);
console.log(answer.numberOne + answer.numberTwo);
// const {numberOne,numberTwo,Operator}=answer;
// if(numberOne && numberTwo && Operator){
let result = 0;
if (answer.Operator === "+") {
    // console.log("typeof",answer.numberOne);
    // console.log("typeof",);
    // console.log(typeof(answer.numberOne))
    // console.log(typeof(answer.numberTwo))   
    result = answer.numberOne + answer.numberTwo;
}
else if (answer.Operator === "-") {
    result = answer.numberOne - answer.numberTwo;
}
else if (answer.Operator === "/") {
    result = answer.numberOne / answer.numberTwo;
}
else if (answer.Operator === "*") {
    result = answer.numberOne * answer.numberTwo;
}
console.log("Your result is: ", result, "Thank you for Zee calculator.");
