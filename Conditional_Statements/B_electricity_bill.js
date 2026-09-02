let prompt = require("prompt-sync")();

let reading = Number(prompt("Enter Meter Reading :- "));
let bill=0;


if(reading<=0 || !Number.isInteger(reading) ) 
    { console.log("Invalid Meter Reading !!!!") ;
        console.log("Only Write Integer Reading, No decimal Numbers")
        return ; }


if(reading >0 && reading<=100){
    bill=reading*4.2;
    console.log(bill);
}
else if(reading >100 && reading<=200){
    bill=(100*4.2)+(reading-100)*6;
    console.log(bill);
}

else if(reading >200 && reading<=400){
    bill=(100*4.2)+(100*6)+(reading-200)*8;
    console.log(bill);
}

else {
    bill=(100*4.2)+(100*6)+(200*8)+(reading-400)*13;
    console.log(bill);
}


