const replaceEveryCharacterWithFollowingCharacter=
{
    withArrow:(string)=>
    {   const replaceFollowingCharacter=(character)=>
        {
            let asciValue=-1;
            (character.charCodeAt(0)>=97 && character.charCodeAt(0)<=121)|| (character.charCodeAt(0)>=65 && character.charCodeAt(0)<=89)?asciValue=character.charCodeAt(0)+1:asciValue=asciValue;
            (character.charCodeAt(0)==122)?asciValue=97:asciValue=asciValue;
            (character.charCodeAt(0)==90)?asciValue=65:asciValue=asciValue;
            //console.log(String.fromCharCode(asciValue));
            asciValue!=-1?result=result.concat(String.fromCharCode(asciValue)):result=result;
        }
        let result='';
        charArray=string.split('');
        charArray.forEach(replaceFollowingCharacter);
        return result;
    }
}
console.log(replaceEveryCharacterWithFollowingCharacter.withArrow('codeacademy'));
console.log(replaceEveryCharacterWithFollowingCharacter.withArrow('lazyinterns'));
module.export=replaceEveryCharacterWithFollowingCharacter;