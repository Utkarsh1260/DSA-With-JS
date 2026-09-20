// ======================================================
// PRIME NUMBER CHECKING
// Output: "Prime" or "Not Prime"
// ======================================================

const prompt = require("prompt-sync")();

function isPrime(n) {

    // Numbers <= 1 are NOT Prime
    if (n <= 1) {
        return "Not Prime";
    }

    // 2 is the only even Prime number
    if (n === 2) {
        return "Prime";
    }

    // Except 2, all even numbers are NOT Prime
    if (n % 2 === 0) {
        return "Not Prime";
    }

    // Number is now known to be odd.
    // So check only odd divisors.
    //
    // Start from 3
    // Increase by 2 → 3, 5, 7, 9, 11...
    //
    // We only need to check up to √n.
    for (let i = 3; i <= Math.sqrt(n); i += 2) {

        // If divisible, it is NOT Prime
        if (n % i === 0) {
            return "Not Prime";
        }
    }

    // No divisor found
    return "Prime";
}


// =====================
// User Input
// =====================

let n = Number(prompt("Enter a number: "));

console.log(isPrime(n));