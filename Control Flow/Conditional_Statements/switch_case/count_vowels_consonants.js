let str = "Hello World";

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i].toLowerCase();

    switch (ch) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vowels++;
            break;

        case " ":
            continue;

        default:
            consonants++;
    }
}

console.log("String:", str);
console.log("Number of Vowels:", vowels);
console.log("Number of Consonants:", consonants);