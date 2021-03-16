const prompt = require('prompt-sync')();
const year = prompt("Enter a year Whether Check year is is Leap Or Not : ");
let isLeap = false;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) 
            isLeap = true;
        else
            isLeap = false;
    }
    else
        isLeap = true;
}
else{ 
    isLeap = false;
}

if (isLeap == true) {
    console.log(year + " is a Leap Year...");
}
else
    console.log(year + " is Not Leap Year...");