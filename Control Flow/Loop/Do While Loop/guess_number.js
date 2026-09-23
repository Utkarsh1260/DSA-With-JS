let prompt=require('prompt-sync')();

let AI= Math.floor(Math.random()*100)+1;

let n;
let Attempt=0;
do{
    Attempt++;
 n=Number(prompt("Enter the n: "));

if(n>AI) console.log("Too Large");
else if(n<AI) console.log("Too Small");
else if (n===AI) console.log("You Win "+n+" is correct "+" You took "+Attempt+" attempts");
else console.log("Invalid Value");


}while(n!==AI);