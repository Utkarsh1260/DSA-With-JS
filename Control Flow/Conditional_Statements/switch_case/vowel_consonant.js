let letter = "e";

switch (letter.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(letter + " is a Vowel");
        break;

    default:
        console.log(letter + " is a Consonant");
}