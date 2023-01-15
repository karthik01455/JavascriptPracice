const concatTwoStringsExceptTheirFirstCharacter=
{
    withArrow:(stringArrayInput)=>
    {
        const concatString=(stringArray)=>
        {
            result=stringArray[0].substring(1,stringArray[0].length).concat(stringArray[1].substring(1,stringArray[1].length));
            return result;
        }
        let result='';
        stringArrayInput.length==2?result=concatString(stringArrayInput):result=result;
        return result;
    },

    withoutArrow: function (stringArrayInput)
    {
        function concatString(stringArray)
        {
            result=stringArray[0].substring(1,stringArray[0].length).concat(stringArray[1].substring(1,stringArray[1].length));
            return result;
        }
        let result='';
        stringArrayInput.length==2?result=concatString(stringArrayInput):result=result;
        return result;
    }
    
}
console.log(concatTwoStringsExceptTheirFirstCharacter.withArrow(['array','math']));
console.log(concatTwoStringsExceptTheirFirstCharacter.withoutArrow(['array','math']));
module.export=concatTwoStringsExceptTheirFirstCharacter;