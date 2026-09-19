let prompt=require('prompt-sync')();

let n=Number(prompt("Enter the number : "));

console.log("Factors of a number is : =")
for(let i=1; i<=n/2; i++){
    if(n%i==0)process.stdout.write(i+" ");
}

console.log(n);
