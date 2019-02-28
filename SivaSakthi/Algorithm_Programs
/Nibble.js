const utility=require('../Utility/Utility');
const readline=require('readline-sync');

var nibble=()=>{
var num=readline.question("ENter the number ");
utility.Nibbles(num);
}
nibble();