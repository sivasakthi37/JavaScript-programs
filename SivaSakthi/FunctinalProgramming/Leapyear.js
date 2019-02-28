/******************************************************************************
 *  Execution       :   1. default node         cmd> node Leapyear.js 
 *                      2. if nodemon installed cmd> nodemon Leapyear.js
 * 
 *  Purpose         : Determines whether a number `input number` is leapyear or not.
 * 
 *  @description    
 * 
 *  @file           : Leapyear.js
 *  @overview       : Leapyear module to check if number is Leapyear or not.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');
function leap(){
 var y=readline.question("Enter your year to find leap year or not ")
Utility.leapyear(y);
}
leap();