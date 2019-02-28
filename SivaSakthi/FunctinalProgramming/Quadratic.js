/******************************************************************************
 *  Execution       :   1. default node         cmd> node Quadratic.js 
 *                      2. if nodemon installed cmd> nodemon Quadratic.js
 * 
 *  Purpose         : To find quadratic value.
 * 
 *  @description    
 * 
 *  @file           : Quadratic.js
 *  @overview       : Quadratic module to find the quadratic value.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const  Utility=require('../Utility/Utility');
const readline=require('readline-sync');


function quter(){
var a=readline.question("Enter the A value ");
var b=readline.question("Enter the B value ");
var c=readline.question("Enter the C value ");
    
Utility.quadratic(a,b,c);
}
quter();