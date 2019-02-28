const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Tobinary() {

    var num=readline.question("Enter the number to convert to binary ");
   var b= Utility.Tobinary(num);
console.log("Binary value is of 4 byte is "+b);

}Tobinary();