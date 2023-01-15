const stringEndsWithScript=
{
    withArrow: (string)=>
    {
        return string.length>=6 && string.endsWith('Script');
    },
    withoutArrow: function(string)
    {
        return string.length>=6 && string.endsWith('Script');
    }
}
console.log(stringEndsWithScript.withArrow('Script'));
console.log(stringEndsWithScript.withoutArrow('javaScript'));
module.import=stringEndsWithScript;
