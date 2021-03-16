let a = Math.floor(Math.random() * 99);
let b = Math.floor(Math.random() * 99);
let c = Math.floor(Math.random() * 99);
art1 = a + b * c;
art2 = a % b + c;
art3 = c + a / b;
art4 = a * b + c;
minimum = art1;
maximum = art1;

if(minimum > art2)
{
    minimum = art2;
}
else if(minimum > art3)
{
    minimum = art3;
}
else if(minimum > art4)
{
    minimum = art4;
}
else if(maximum < art2)
{
    maximum = art2;
}
else if (maximum < art3)
{
    maximum = art3;
}
else(maximum < art4)
{
    maximum = art4;
}
console.log(art1 + art2 + art3 + art4);
console.log("The minimum value is " + minimum);
console.log("The Maximum Value is " + maximum);