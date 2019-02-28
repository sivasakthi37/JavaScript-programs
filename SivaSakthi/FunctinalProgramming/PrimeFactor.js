/******************************************************************************
 *  Execution       :   1. default node         cmd> node PrimeFactor.js 
 *                      2. if nodemon installed cmd> nodemon PrimeFactor.js
 * 
 *  Purpose         : TO FInd primefactor .
 * 
 *  @description    
 * 
 *  @file           : PrimeFactor.js
 *  @overview       : PrimeFactor module to get Primefactor.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');


function prime(){
var n=readline.question("Enter the number ");
Utility.PrimeFactor(n);


}
prime();