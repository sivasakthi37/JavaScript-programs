/******************************************************************************
 *  Execution       :   1. default node         cmd> node FindYourNumber.js 
 *                      2. if nodemon installed cmd> nodemon FindYourNumber.js
 * 
 *  Purpose         : To FInd your Guess number we get from user only range.
 * 
 *  @description    
 * 
 *  @file           : FindYourNumber.js
 *  @overview       : FInd your number.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 10-01-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

var findnumber=()=>{

    var first=readline.question("Enter the first range of your number ");
    var last=readline.question("Enter the last range of Your number ");
    var first=Math.floor(first);
    var last=Math.floor(last);
var b=Utility.Findnumber(first,last);
console.log("Your number is "+b);
}
findnumber();
