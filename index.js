var readlineSync = require('readline-sync');

var name=readlineSync.question("What is your name? ");
console.log("Welcome "+name+" !");
var date=readlineSync.question("Enter your date of birth in DD/MM/YYYY format");
LeapYear(date)

function isValidDate(date){
  var parts=date.split('/');
  var day=parseInt(parts[0],10);
  var month=parseInt(parts[1],10);
  var year=parseInt(parts[2],10);
   if(year < 1000 || year > new Date().getFullYear() || month === 0 || month > 12)
        return false;
  
  var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  
}

function LeapYear(date){
  var val=isValidDate(date);
  if(val){
    var year=parseInt(date.split('/')[2],10);
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 === 0)){
      console.log("You were born in a leap year ")
    }
    else{
      console.log("You were not born in leap year")
    }
  }
  else{
    console.log("Please enter a valid format" + " ( dd/mm/yyyy )")
  }
}