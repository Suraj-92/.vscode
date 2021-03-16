class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;


    // //constructor
    // constructor(id, name, salary) {
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    // }
    
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }
    set name(name) {
       // console.log("Setting: " + name);
       let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
       if(nameRegex.test(name))
            this._name = name;
       else throw 'Name is Incorrect!';
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate  ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", gender=" + this.gender + ", startDate=" + this.startDate;
    }
}  

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;

try {
    employeePayrollData.name = "Jeff";
    console.log(employeePayrollData.toString());
} catch(e){
    console.error(e);
}
//console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());