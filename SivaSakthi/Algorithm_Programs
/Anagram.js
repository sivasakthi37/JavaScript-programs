/******************************************************************************
 *  Execution       :   1. default node         cmd> node Anagram.js 
 *                      2. if nodemon installed cmd> nodemon Anagram.js
 * 
 *  Purpose         : Determines whether a number `input String `is Anagram or not .
 * 
 *  @description    
 * 
 *  @file           : Anagram.js
 *  @overview       : Anagram module to check if String is Anagram or not.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 07-01-2019
 ******************************************************************************/
const Utility = require('../Utility/Utility');
const readline = require('readline-sync');

var anagram = () => {
    var st1 = readline.question("Enter the first String ");
    var st2 = readline.question("Enter the second String ");
    Utility.Anagram(st1, st2);
}
anagram();