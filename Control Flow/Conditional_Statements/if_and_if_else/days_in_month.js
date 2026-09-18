let prompt=require('prompt-sync')();
let month=Number(prompt('Enter the month :- '));
let year=Number(prompt('Enter the year :- '));
let day=0;

if(month<=0 || year<=0) console.log("Invalid month or year ??");

if(month== 2){
    if(year % 400 ==0 || (year % 4 ==0 && year%100 !=0)){
        day=29;
    }

    else day=28;
}

else if(month==1 ||  month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
    day=31;
}

else day=30;

console.log(day);
