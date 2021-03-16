for (let i = 1; i <= 5; i++) {
    let random = Math.floor(Math.random() * 999);
    console.log(random);
    if (i == 1) {
         minimum = random;
         maximum = random;
    }
    else {
        if (minimum < random) {
            if (random > maximum) {
                maximum = random
            }
        }
        else
        minimum = random;
    }
}
console.log("The Maximum Value is " + maximum);
console.log("The Minimum Value is " + minimum);