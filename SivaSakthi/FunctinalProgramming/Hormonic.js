/******************************************************************************
 *  Execution       :   1. default node         cmd> node Hormonic.js 
 *                      2. if nodemon installed cmd> nodemon Hormonic.js
 * 
 *  Purpose         : TO find the Hormonic number.
 * 
 *  @description    
 * 
 *  @file           : Hormonic.js
 *  @overview       : Hormonic module tis use to find the hormonic number.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/


const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Harmo(){

var h=readline.question("Enter the n value ");
Utility.hormonic(h);

}
Harmo();
