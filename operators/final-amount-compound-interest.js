// Calculate Final Amount Using Compound Interest

let P = 5000;
let R = 20;
let T = 2;

let amount = P * Math.pow(1 + R / 100, T);

console.log("Final Amount =", amount);