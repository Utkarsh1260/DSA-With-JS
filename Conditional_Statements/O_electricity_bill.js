let prompt = require("prompt-sync")();
let units = Number(prompt("Enter Meter Reading :- "));
let bill_amount=0;


if( units>400){
    bill_amount+=(units-400)*13;
    units=400;
}

if( units>200 && units <=400){
    bill_amount+=(units-200)*8;
    units=200;
}

if(units>100 && units <=200){
    bill_amount+=(units-100)*6;
    units=100;
}

if(units>0 && units<=100){
      bill_amount += units * 4.2;
}

console.log("Amount -: "+bill_amount);