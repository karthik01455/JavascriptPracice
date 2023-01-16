const largestEvenNumber={ 
withArrow :(input)=>
{
let result=-1;
let checkEven=(number)=>
{ 
    number%2==0 && result == -1 ? result = number : ((number%2==0 && number>result) ?result=number: result=result);
}
input.forEach(checkEven);
return result;
},
withoutArrow :function (input)
{
let result=-1;
function checkEven(number)
{ 
    number%2==0 && result == -1 ? result = number : ((number%2==0 && number>result) ?result=number: result=result);
}
input.forEach(checkEven);
return result;
}
}
input=[1,2,3,4,-8]
console.log('Output for withoutArrow '+largestEvenNumber.withoutArrow(input));
console.log('Output for withArrow '+largestEvenNumber.withArrow(input));
module.exports = largestEvenNumber;
