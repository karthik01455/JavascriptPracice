const longestStringInArray=
{
    withArrow: (stringArray)=>
    {
        const findLongestString=(string)=>
        {
            (string.length>result.length)?result=string:result=result;
            
        }
        let result='';
        stringArray.forEach(findLongestString);
        return result;
    },
    withoutArrow: function (stringArray)
    {
        function findLongestString (string)
        {
            (string.length>result.length)?result=string:result=result;
            
        }
        let result='';
        stringArray.forEach(findLongestString);
        return result;
    }
}
console.log(longestStringInArray.withArrow(['array','ab','axc']))
console.log(longestStringInArray.withoutArrow(['array','ab','axc']))
module.export=longestStringInArray;