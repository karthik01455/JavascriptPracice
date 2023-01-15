const changeCapitalization=
{
    withArrow: (string)=>
    {const changeCase=(character)=>
        {character=character.toString();
            (character==' ')?result=result.concat(' '):result=result;
            (character.charCodeAt(0)>=65 && character.charCodeAt(0)<=90)?result=result.concat(character.toLowerCase().toString()):result=result;
            (character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122)?result=result.concat(character.toUpperCase().toString()):result=result;
        }
        let result='';
        stringArray= string.split('');
        stringArray.forEach(changeCase);
        return result;

    },
    withoutArrow:function (string)
    {function changeCase (character)
        {character=character.toString();
            (character.charCodeAt(0)>=65 && character.charCodeAt(0)<=90)?result=result.concat(character.toLowerCase().toString()):result=result;
            (character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122)?result=result.concat(character.toUpperCase().toString()):result=result;
        }
        let result='';
        stringArray= string.split('');
        stringArray.forEach(changeCase);
        return result;

    }
}
module.exports=changeCapitalization;