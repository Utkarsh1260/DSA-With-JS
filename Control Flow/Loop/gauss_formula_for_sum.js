let prompt=require('prompt-sync')();

let n=Number(prompt("Enter the number"));


function sum(n){
    return n*(n+1)/2;
}

console.log(sum(n));

