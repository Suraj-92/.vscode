let sum = 0;
for (let i = 1; i <= 5; i++){
    let digitNum = Math.floor(Math.random() *100);
    sum = sum + digitNum; 
}
console.log("Sum of Five Numbers is = " + sum);
let average = sum/5;
console.log("Average of Five Numbers is = " + average);