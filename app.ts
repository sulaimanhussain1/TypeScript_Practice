
// import message from "./first";

// import {name1 , name2 as name3 } from "./second";

// console.log(message);
// console.log(`${name1} and ${name3} are best brothers`);


import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import figlet from "figlet";



let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.grey("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));