import inquirer from "inquirer";
let value = {
    PKR: 277.91,
    SAR: 3.75,
    USD: 1
};
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Converting from",
        choices: ["PKR", "SAR", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: "Converting to",
        choices: ["PKR", "SAR", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Your amount to convert",
    },
]);
let convertedAmount = value[answer.to] / value[answer.from] * answer.amount;
console.log(convertedAmount.toFixed(2));
