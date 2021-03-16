const prompt = require('prompt-sync')();
const num = prompt("Enter a number from the given 1,10,100,1000,10000: ");
console.log(num);
if (num == 1) {
    console.log("UNIT....");
}
else if (num == 10) {
    console.log("TEN...");
}
else if (num == 100) {
    console.log("HUNDRED...");
}
else if (num == 10000) {
    console.log("THOUSAND...");
}
else if (num == 10000) {
    console.log("TEN THOUSAND...");
}
else 
    console.log("Invalid Input!!!");
