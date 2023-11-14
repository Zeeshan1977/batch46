#!/usr/bin/env node
import inquirer from 'inquirer';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function main() {
    const enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
    const maxEnemyHealth = 75;
    const enemyAttackDamage = 25;
    let health = 100;
    const attackDamage = 50;
    let numHealthPotions = 3;
    const healthPotionsHealAmount = 30;
    const healthPotionDropChance = 50; // Percentage
    console.log("Welcome to the Bawla Dragon");
    GAME: while (true) {
        console.log("----------------------------------");
        let enemyHealth = getRandomInt(1, maxEnemyHealth);
        const enemy = enemies[getRandomInt(0, enemies.length - 1)];
        console.log(`\t# ${enemy} appeared! #`);
        while (enemyHealth > 0) {
            console.log(`\tYour HP: ${health}`);
            console.log(`\t${enemy}'s HP: ${enemyHealth}`);
            console.log("\n\tWhat would you like to do?");
            console.log("\t1. Attack");
            console.log("\t2. Drink Red Bull");
            console.log("\t3. Run");
            const { choice } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: '',
                    choices: ['1', '2', '3'],
                },
            ]);
            if (choice === "1") {
                const damageDealt = getRandomInt(1, attackDamage);
                const damageTaken = getRandomInt(1, enemyAttackDamage);
                enemyHealth -= damageDealt;
                health -= damageTaken;
                console.log(`\t> You strike the ${enemy} for ${damageDealt} damage.`);
                console.log(`\t> You receive ${damageTaken} damage in retaliation!`);
                if (health < 1) {
                    console.log("\t> You have taken too much damage, you are too weak to go on! Khatam Shud");
                    break GAME;
                }
            }
            else if (choice === "2") {
                if (numHealthPotions > 0) {
                    health += healthPotionsHealAmount;
                    numHealthPotions--;
                    console.log(`\t> You drink a potion, healing yourself for ${healthPotionsHealAmount}`);
                    console.log(`\t> You now have ${health} HP.`);
                    console.log(`\t> You have ${numHealthPotions} health potion(s) left.\n`);
                }
                else {
                    console.log("\t> You have no health potions left! Defeat enemies for a chance to get one!App taein bol chukay ho\n");
                }
            }
            else if (choice === "3") {
                console.log(`\tYou run away from the ${enemy}!\n`);
                continue GAME;
            }
            else {
                console.log("\tInvalid command!\n");
            }
        }
        if (health < 1) {
            console.log("You limp out of the dungeon, weak from battle.");
            break;
        }
        console.log("------------------------------------------------");
        console.log(` # ${enemy} was defeated! # `);
        console.log(` # You have ${health} HP left. # `);
        if (getRandomInt(1, 100) < healthPotionDropChance) {
            numHealthPotions++;
            console.log(` # The ${enemy} dropped a health potion! # `);
            console.log(` # You now have ${numHealthPotions} health potion(s). # `);
        }
        console.log("---------------------------------------------------");
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do now?',
                choices: ['Continue fighting', 'Exit dungeon'],
            },
        ]);
        if (action === "Continue fighting") {
            console.log("You continue on your adventure!\n");
        }
        else if (action === "Exit dungeon") {
            console.log("You exit the dungeon, successful from your adventures!");
            break;
        }
    }
    console.log("########################");
    console.log("# THANKS FOR PLAYING! By Zeeshan Ali-Abbas #");
    console.log("########################");
}
main();
