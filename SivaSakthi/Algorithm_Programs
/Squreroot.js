var Utility=require('../../UtilityProgram/Utility');
var readline=require('readline-sync');
function sqrt()
{
    var num=readline.question("Enter the non negative value ");
    Utility.sqrt(num);
}
sqrt();