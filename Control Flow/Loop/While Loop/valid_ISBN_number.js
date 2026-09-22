let prompt=require('prompt-sync')();

let n=Number(prompt("Enter the ISBN number (Must Not start from 0) : "));

if(n<0 || n===0) console.log("ISBN can not be Negative or Zero");

else{
let m=n;
let count=0;
while(m>0){
    m=Math.floor(m/10);
    count++;
}

// console.log(count);

let d10=n;
let sum=0;
if(count===10){
       let k=10;
    while(d10>0){
     
        let digit=d10%10;
        sum+=digit*k;
        d10=Math.floor(d10/10);
        k--;
    }

    let r=sum%11;

       if(r===0) console.log("Valid ISBN number");
    else console.log("Wrong ISBN number");
}


else if(count===13){

    let i=1;
    while(d10>0){
        let k1=3;
        let k2=1;

     
        let digit=d10%10;
           if(i%2===0) { sum+=digit*k1; }
           else { sum+=digit*k2;}
        
        d10=Math.floor(d10/10);
        i++;
    }

    let r=sum%10;

    if(r===0) console.log("Valid ISBN number");
    else console.log("Wrong ISBN number");
}

else console.log("Invalid ISBN number");



}
