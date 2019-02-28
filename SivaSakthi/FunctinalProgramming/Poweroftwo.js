/******************************************************************************
 *  Execution       :   1. default node         cmd> node Poweroftwo.js 
 *                      2. if nodemon installed cmd> nodemon Poweroftwo.js
 * 
 *  Purpose         : Determines whether a number `input number` how many power of passed number.
 * 
 *  @description    
 * 
 *  @file           : Poweroftwo.js
 *  @overview       : Poweroftwo module to find the power of 2 possible numbers.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');


function power(){

var n=readline.question("Enter the number");

Utility.p(n);


}
power();