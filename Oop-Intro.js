#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const inquirer_1 = __importDefault(require("inquirer"));
let name;
let personality; // introvert or extrovert
let questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter your name";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "personality",
        message: "Are you an introvert or extrovert?",
        choices: ["Introvert", "Extrovert"]
    }
];
inquirer_1.default
    .prompt(questions)
    .then((answers) => {
    name = answers.name;
    if (answers.personality === "Introvert") {
        personality = "Introvert";
    }
    else if (answers.personality === "Extrovert") {
        personality = "Extrovert";
    }
    console.log(`Your name is ${name} and your personality type is ${personality}`);
});
