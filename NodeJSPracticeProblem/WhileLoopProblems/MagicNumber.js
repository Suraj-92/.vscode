console.log("Think Of between 1 to 100");
const prompt = require('prompt-sync')();
let guess = 0;
let a = 0;
let n =100;
while (guess < 1){
    guess= prompt("Enter 1 if Your number is " + n + " else Enter 0 :");

    if (guess == 0){
        let b = n;
        n = ((a+n)/2);
        guess1 = prompt("Enter 1 if your number is grater than " + n + " else enter 0 :");

        if (guess1 == 1){
            a = n;
            n = b;
        }
    }
}
console.log("Your Number is " + n);