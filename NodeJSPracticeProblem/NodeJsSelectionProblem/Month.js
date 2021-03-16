const prompt = require('prompt-sync')();
const month = prompt("Enter a value from 1 to 12 which represents corresponding month : ");

const prompt1 = require('prompt-sync')();
const date = prompt1("Enter a value from 1 to 31 as Date : ");
if ([month == 3] && [date > 20] && [date < 31]) || ([ month == 4 ] && [ date > 1 ] && [ date < 30 ]) || ([ month == 5 ] && [ date > 1 ] && [ date < 31 ]) || ([ month == 6 ] && [ date > 1 ] && [ date < 20 ])
{ 
console.log("TRUE");
}
else { 
console.log("FALSE");
}