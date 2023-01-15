

const checkLeapYear=
{
    withArrow:(year)=>
    {let result=false;
        ((year%4==0 && year%100!=0) || (year%400==0))?result= true:result=false;
        return result;
    },
    withoutArrow: function(year)
    {
        let result=false;
        ((year%4==0 && year%100!=0) || (year%400==0))?result= true:result=false;
        return result;
    }

}
console.log(checkLeapYear.withArrow(1900));
console.log(checkLeapYear.withArrow(1996));
console.log(checkLeapYear.withArrow(2000));
console.log(checkLeapYear.withArrow(2001));
module.exports=checkLeapYear;


