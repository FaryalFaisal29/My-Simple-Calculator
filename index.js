#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "num1",
        type: "number",
        message: "Enter first number" },
    { name: "num2",
        type: "number",
        message: "Enter second number" },
    { name: "operator",
        type: "list",
        message: "Select one of the operators to perform action",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "Division") {
    console.log(answer.num1 / answer.num2);
}
else {
    console.log("Please select valid operation");
}
