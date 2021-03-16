var stud1 = {
    rno : 11,
    name : "rani",
    setData : function(r, nm)
    {
        this.rno = r;
        this.name = nm;
    },

    display : function()
    {
        console.log(this.rno+ " " + this.name);
    }
};

var stud2 = 
{
    rno : 22,
    name: "rajesh" 
};
stud1.setData.call(stud2,5,"suraj");
stud1.display.call(stud2);