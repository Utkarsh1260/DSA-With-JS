
const prompt = require("prompt-sync")();

// helper.js

class Solution {
    checkAbundant(n) {
        let sum = 1;

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }

        if (sum > n) return "Yes";
        else return "No";
    }
}

const n = Number(prompt("Enter a number: "));

const obj = new Solution();
console.log(obj.checkAbundant(n));

module.exports = Solution;
