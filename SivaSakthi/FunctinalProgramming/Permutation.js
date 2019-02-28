/******************************************************************************
 *  Execution       :   1. default node         cmd> node Permutation.js 
 *                      2. if nodemon installed cmd> nodemon Permutation.js
 * 
 *  Purpose         : Determines whether a number `input number` how many possible way to swap the input.
 * 
 *  @description    
 * 
 *  @file           : Permutation.js
 *  @overview       : Permutation module to find the possible ways .
 *  @author         : sivasakhti
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Permutation(){

var words=readline.question("Enter the words ");
var w=words.length-1;
Utility.Permutation(words,0,w);
}
Permutation();
