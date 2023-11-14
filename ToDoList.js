import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet("ToDo List!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.green(data));
});
let todoList = [];
async function RepeatFlow() {
    const answer = await inquirer.prompt([
        {
            name: "repeat",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another Operation ?",
        },
    ]);
    return answer.repeat === "Yes" ? true : false;
}
async function ToDoList() {
    let startAgain = true;
    do {
        const answer = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                choices: ["Add Item", "Display", "Remove"],
                message: "What you want to Do ?",
            },
        ]);
        if (answer.option == "Add Item") {
            const item = await inquirer.prompt([
                {
                    name: "newItem",
                    type: "input",
                    message: "Enter new Item:",
                },
            ]);
            todoList.push(item.newItem);
            startAgain = await RepeatFlow();
        }
        else if (answer.option === "Display") {
            if (todoList.length == 0) {
                console.log(chalk.red("Your list is empty"));
            }
            todoList.forEach((element) => console.log(element));
            startAgain = await RepeatFlow();
        }
        else if (answer.option === "Remove") {
            if (todoList.length == 0) {
                console.log(chalk.red("Your list is already empty"));
            }
            let removeItem = await inquirer.prompt([
                {
                    name: "item",
                    type: "input",
                    message: "Which item you want to remove ?",
                },
            ]);
            let index = todoList.indexOf(removeItem.item);
            if (index !== -1) {
                todoList.splice(index, 1);
            }
            startAgain = await RepeatFlow();
        }
    } while (startAgain !== false);
}
setTimeout(() => {
    ToDoList();
}, 1000);
