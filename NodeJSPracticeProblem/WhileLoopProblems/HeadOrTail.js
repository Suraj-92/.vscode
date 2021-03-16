let head = 0;
let tail = 0;
while (head < 11 && tail < 11){
    let flip = Math.floor(Math.random() * 2);
    if (flip == 0){
        head++;
    }
    else{
        tail++;
    }
}
if (head == 11){
    console.log("Heads wins the game...");
}
else{
    console.log("Tails wins the game...");
}
console.log("Heads count is : " + head);
console.log("Tails count is : " + tail);