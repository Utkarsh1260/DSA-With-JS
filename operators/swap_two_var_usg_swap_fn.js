let a = 5;
let b = 10;

function swap(a, b) {
    return [b, a];
}

console.log("Before Swap :--");
console.log("a = " + a);
console.log("b = " + b);

[a, b] = swap(a, b);

console.log("After Swap :--");
console.log("a = " + a);
console.log("b = " + b);