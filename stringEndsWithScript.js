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
module.exports=stringEndsWithScript;
