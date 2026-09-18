// 1 → Circle
// 2 → Rectangle
// 3 → Triangle

let choice = 1;

switch (choice) {

    case 1: {
        let radius = 5;
        let area = Math.PI * radius * radius;

        console.log("Area of Circle =", area);
        break;
    }

    case 2: {
        let length = 10;
        let width = 5;
        let area = length * width;

        console.log("Area of Rectangle =", area);
        break;
    }

    case 3: {
        let base = 10;
        let height = 6;
        let area = 0.5 * base * height;

        console.log("Area of Triangle =", area);
        break;
    }

    default:
        console.log("Invalid Choice");
}