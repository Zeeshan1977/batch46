#! /usr/bin/env node
import promptSync from "prompt-sync";
const prompt = promptSync();

import inquirer from 'inquirer';

let name: string;
let personality: string; // introvert or extrovert

let questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (answer: string) => {
            if (answer === "") {
                return "Please enter your name"
            }
            return true
        }
    },
    {
        type: "list",
        name: "personality",
        message: "Are you an introvert or extrovert?",
        choices: ["Introvert", "Extrovert"]
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        name = answers.name;
        if (answers.personality === "Introvert") {
            personality = "Introvert"
        } else if (answers.personality === "Extrovert") {
            personality = "Extrovert"
        }
        console.log(`Your name is ${name} and your personality type is ${personality}`)
    })