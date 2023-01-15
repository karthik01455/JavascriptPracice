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
module.exports=longestStringInArray;
