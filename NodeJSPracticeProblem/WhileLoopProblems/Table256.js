const prompt = require('prompt-sync')();
const n = prompt("Enter the value of n till which the power of 2 has to be determined : ");
let power = 0;
let i = 0;
while (power < 256 && i < n){
    power = (2**i);
    i++;
}
console.log((i-1) + " power of 2 is " + power);
