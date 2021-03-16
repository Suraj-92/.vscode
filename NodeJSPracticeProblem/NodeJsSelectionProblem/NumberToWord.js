const prompt = require('prompt-sync')();
const num = prompt("Enter a number from the given values 0, 1, 2, 3, 4, 5 : ");
switch(num){
    case "0":
        console.log("ZERO");
        break;
    case "1":
        console.log("ONE");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
    default:
        console.log("Invalid Input!!!");
        break;                
}