const countVowels=
{
    withArrow:(string)=>
    {const countVowelInStringArray=(character)=>
        {
            character=='a'||character=='A'||character=='e'||character=='E'||character=='i'||character=='I'||character=='o'||character=='O'||character=='u'||character=='U'?count=count+1:count=count;
            
        }
            charArray=string.split('');
            let count=0;
            charArray.forEach(countVowelInStringArray);
            return count;
    },
    withoutArrow: function (string)
    {function countVowelInStringArray(character)
        {
            character=='a'||character=='A'||character=='e'||character=='E'||character=='i'||character=='I'||character=='o'||character=='O'||character=='u'||character=='U'?count=count+1:count=count;
            
        }
            charArray=string.split('');
            let count=0;
            charArray.forEach(countVowelInStringArray);
            return count;
    }
}
console.log(countVowels.withArrow('aeiouA-'));
console.log(countVowels.withoutArrow('aeiouA-'));