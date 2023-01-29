"use strict";
// import message from "./first";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {name1 , name2 as name3 } from "./second";
// console.log(message);
// console.log(`${name1} and ${name3} are best brothers`);
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let answers = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log(chalk_1.default.grey("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
