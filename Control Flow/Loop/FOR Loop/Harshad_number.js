const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let copy = n;
let sum = 0;

while (copy > 0) {
    sum += copy % 10;
    copy = Math.floor(copy / 10);
}

console.log("Number:", n);
console.log("Sum of digits:", sum);

if (n % sum === 0)
    console.log("Yes");
else
    console.log("No");