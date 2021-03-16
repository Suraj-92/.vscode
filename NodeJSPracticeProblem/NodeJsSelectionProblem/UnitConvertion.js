const prompt = require('prompt-sync')();
const m = prompt("Enter serial numeric value 1)feet to inch,2)Inch to feet,3)Feet to meter,4)meter to feet: ");
const v =  prompt("Enter the value to be converted: ");

switch (m) {
    case "1":
            console.log(v*12);
        break;
    case "2":
            console.log(v/12);
        break;
    case "3":
            console.log(v*0.3048);
        break;
    case "4":
            console.log(v*3.28084);
        break;
    default:
        console.log("Invalid Input!!!");
}

