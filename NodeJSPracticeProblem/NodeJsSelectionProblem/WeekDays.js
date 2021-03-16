const prompt = require('prompt-sync')();
const num = prompt("Enter a number in range 1 to 7 : ");
switch(num){
    case "1":
        console.log("Sunday.....");
        break;
    case "2":
        console.log("Monday.....");
        break;
    case "3":
        console.log("Tuesday.....");
        break;
    case "4":
        console.log("Wednesday.....");
        break;
    case "5":
        console.log("Thursday.....");
        break;
    case "6":
        console.log("Friday.....");
        break;
    case "7":
        console.log("Saturday.....");
        break;
    default:
        console.log("Invalid Input!!!");
}