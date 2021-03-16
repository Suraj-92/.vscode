{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) %2;
    if (empCheck == IS_ABSENT)
    {
        console.log("UC-1 Employee is absent. Existing Program");
    }
    else{
        console.log("UC-2 Employee is present");
    }
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) %3;
    switch(empCheck)
    {
        case IS_PART_TIME:
                    empHrs = PART_TIME_HOURS;
                    break;
        case IS_FULL_TIME:
                    empHrs = FULL_TIME_HOURS;
                    break;
        default:
                empHrs = 0;
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC-2 Emp Wage: " +empWage);
}

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
                return PART_TIME_HOURS;
        case IS_FULL_TIME:
                return FULL_TIME_HOURS;
        default:
                return 0;
    }
}

let empCheck = Math.floor(Math.random() * 10) %3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Hour: " +empHrs +  "Emp wage" + empWage);
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) %3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC-4 Total Hes: " +totalEmpHrs+ "Emp Wage: " + empWage);
}
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC-5 Total Days: " +totalWorkingDays + " Total Hrs :" + totalEmpHrs + " Emp Wage :" + empWage);
}

const MAX_HRS_IN_MONTH = 160;
//const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

function calcDailyWage(empHrs)
{
   return empHrs * WAGE_PER_HOUR; 
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
   totalWorkingDays++;
   let empCheck = Math.floor(Math.random() *10) % 3;
   let empHrs = getWorkingHours(empCheck);
   totalEmpHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
empDailyHrsMap.set(totalWorkingDays, empHrs);
empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let totalEmpWage = calcDailyWage(totalEmpHrs);
console.log("UC-6 Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + "Emp Wage: " + totalEmpWage);

// Array Helper Function
// UC 7A - Calc Total Wage Using Array ForEach traversal or Reduce Method
let totalEmpWage2 = 0;
function sum(dailyWage){
    totalEmpWage2 += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC 7A - Total Days: " + totalWorkingDays + "= Total Hrs: " + totalEmpHrs + "Emp Wage: " + totalEmpWage2);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC 7A - Emp Wage With reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B - Show The Day Along with Daily Wage using Array Map Helper Function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//uc 7C - Show Days when Full Time wage of 160 were Earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned  using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Days" + mapDayWithWageArr.find(findFulltimeWage));

// UC 7E - Check if Every element of Full Time Wage is Truely holding Full Time Wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Elements have Full Time Wage : " + fullDayWageArr.every(isAllFulltimeWage));

// UC 7F - Check if There is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the Number of Days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number Of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC 9 Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                                 .reduce(findTotal, 0);
console.log("UC 9A - Emp Wage with Arrow: " + "Total Hours" + totalHours + "Total Wages" + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days" +partWorkingDays);
console.log("Non working Days " + nonWorkingDays);

// UC 10 Object Creation
{
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array();
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString(){
                return '\nDay' + this.dayNum + ' => Working Hour is ' + this.dailyHours + 'And Wage Earned = ' +this.dailyWage; 
            },
        });
    }
    console.log("UC 10 Showing Daily Hours Worked and Wage Earned :" + empDailyHrsAndWageArr);


    //Uc 10A to UC 11D Using Object Functions along With Arrow Functions 
    let totalWages3 = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    console.log("UC 11A Total Hours: " + totalHours + "Total Wages: " + totalWages3);

    process.stdout.write("UC 11B Logging Full Work Days")
    empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

    let partWorkingDayStrArr = empDailyHrsAndWageArr
                          .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                          .map(dailyHrsAndWage => dailyHrsAndWage.toString());
    console.log("\nUC 11C PartWorkingDayStrings: " + partWorkingDayStrArr);

    let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
    console.log("UC 11D Non Working Days Nums: " + nonWorkingDayNums);
}