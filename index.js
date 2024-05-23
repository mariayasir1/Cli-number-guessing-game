#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Maria Yasir's Number Guessing Game\n");
const randomNUmber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter YourGuess Number(number limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNUmber) {
    console.log("Congratulations! you guess a correct number");
}
else {
    console.log("tou Lose. Try Again!");
}
;
