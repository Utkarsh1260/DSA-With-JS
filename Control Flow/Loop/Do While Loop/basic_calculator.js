let prompt = require('prompt-sync')();

let choice;
let num1, num2;

do {
    console.log("\n--- Basic Calculator ---");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    choice = Number(prompt("Enter your choice: "));

    if (choice >= 1 && choice <= 4) {
        num1 = Number(prompt("Enter first number: "));
        num2 = Number(prompt("Enter second number: "));
    }

    switch (choice) {
        case 1:
            console.log("Result =", num1 + num2);
            break;

        case 2:
            console.log("Result =", num1 - num2);
            break;

        case 3:
            console.log("Result =", num1 * num2);
            break;

        case 4:
            if (num2 === 0)
                console.log("Cannot divide by zero");
            else
                console.log("Result =", num1 / num2);
            break;

        case 5:
            console.log("Calculator closed.");
            break;

        default:
            console.log("Invalid choice!");
    }

} while (choice !== 5);