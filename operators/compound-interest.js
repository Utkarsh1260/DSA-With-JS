// Calculate Compound Interest

let P = 10000;
let R = 10;
let T = 2;

let amount = P * Math.pow(1 + R / 100, T);
let compoundInterest = amount - P;

console.log("Compound Interest =", compoundInterest);