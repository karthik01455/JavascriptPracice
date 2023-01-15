const digitsInAGivenNumberAreSame={
    withArrow: (number)=>
    {const checkDigitValue=(number)=>
        {
                (number!=value)?result=false:result=result;
        }
        number<0?number=number*-1:number=number;
        let value=(number%10).toString();
        let result=true;
        const string=number.toString();
        const stringarray=string.split('');
        stringarray.forEach(checkDigitValue);
        return result;
        
    },
    withoutArrow: function (number)
    { function checkDigitValue (number)
        {
                (number!=value)?result=false:result=result;
        }
        number<0?number=number*-1:number=number;
        let value=(number%10).toString();
        let result=true;
        const string=number.toString();
        const stringarray=string.split('');
        stringarray.forEach(checkDigitValue);
        return result;
        
    }
}
module.exports=digitsInAGivenNumberAreSame;