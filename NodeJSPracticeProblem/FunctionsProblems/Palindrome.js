const prompt = require('prompt-sync')();
const num = prompt("Enter a number to check whether it is palindrome or not : ");
function palindrome() {
    let a = 1;
    newNum = 0;
    while (a > 0){
        let remain = (a%10);
        newNum = ((newNum*10)+remain);
        a = (a/10);
    }
    console.log(newNum);
}
let num2 = ((palindrome)(num));
if (num == num2){
    console.log("Number is Palindrome...");
}
else{
    console.log("Number is Not palindrome...");
}