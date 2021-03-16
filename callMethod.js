var stud1 = {
    rno : 12,
    name : "Suraj",
    display : function()
    {
        console.log(this.rno+ " " +this.name);
    }
};

var stud2 = {
    rno : 44,
    name : "Raj"
};

stud1.display.call(stud2);