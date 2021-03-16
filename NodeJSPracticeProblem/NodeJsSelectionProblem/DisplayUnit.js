const prompt = require('prompt-sync')();
const num = prompt("Enter a number from the given values 1, 10, 100, 1000, 10000 : ");
switch (num) {
    case "1":
        console.log("Unit");
        //console.log(num);
        break;
    case "10":
        console.log("Ten");
        //console.log(num);
        break;
    case "100":
        console.log("Hundred");
        break;
    case "1000":
        console.log("Thousand");
        break;
    case "10000":
        console.log("Ten Thousand");
        break;
    default:
        console.log("Invalid Input")
        break;
}
