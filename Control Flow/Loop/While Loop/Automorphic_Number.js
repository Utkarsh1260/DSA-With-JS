const prompt = require("prompt-sync")();

function isAutomorphic(n) {
    if (n < 0) return "No";
    if (n === 0) return "Yes";

    let count = 0;
    let no = n;

    // counts number of digits in n
    while (no > 0) {
        no = Math.floor(no / 10);
        count++;
    }

    // calculate the square of n
    let square = Math.pow(n, 2);
    let last_digits = square % (Math.pow(10, count));

    if (n === last_digits) return "Yes";
    else return "No";
}

// User input
let n = Number(prompt("Enter a number: "));

console.log(isAutomorphic(n));