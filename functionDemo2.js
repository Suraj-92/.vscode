function greet()
{
    var msg = function()
    {
        console.log("welcome");
    }
return msg;
}
var retf = greet();
retf();