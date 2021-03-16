let money = 100;
let win = 1;
let numberOfBetsWon = 0;
let numberOfBets = 0;

while (money > 0 && money < 200){
    let gambler = Math.floor(Math.random() *2);
    if (gambler == win){
        money++;
        numberOfBetsWon++;
    }
    else{
        money--;
    }
    numberOfBets++;
}

if (money == 200){
    console.log("Gambler reached the goal and has Money is Rs:" + money+"/-");
}
else{
    console.log("Gambler is broke and has Money is Rs:" + money+"/-");
}
console.log("Total Number of bets played " + numberOfBets);
console.log("Number of bets won by gambler " + numberOfBetsWon);