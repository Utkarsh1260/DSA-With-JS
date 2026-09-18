let numbers = {
    a: 10,
    b: 20,
    c: 30
};

let sum = 0;

for (let key in numbers) {
    sum += numbers[key];
}

console.log("Sum:", sum);