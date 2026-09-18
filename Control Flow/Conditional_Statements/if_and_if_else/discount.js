let prompt = require('prompt-sync')();

let amount=Number(prompt("Enter amount :- "));
let discount;

if(amount >= 0 && amount <=5000){
    console.log("0% discount");
    console.log("Amount payble is "+amount);
}

else if(amount >5000 && amount <=7000){
    console.log("5% discount");
     discount=amount*5/100
    console.log("Amount payble is "+(amount-discount));
}

else if(amount >7000 && amount <=9000){
    console.log("10% discount");
    discount=amount*10/100
    console.log("Amount payble is "+(amount-discount));
}

else if(amount >9000 ){
    console.log("20% discount");
     discount=amount*20/100
    console.log("Amount payble is "+(amount-discount));
}