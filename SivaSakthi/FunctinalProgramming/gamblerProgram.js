/******************************************************************************
 *  Execution       :   1. default node         cmd> node gamblerProgram.js 
 *                      2. if nodemon installed cmd> nodemon gamblerProgram.js
 * 
 *  Purpose         : TO play the gamblerProgram.
 * 
 *  @description    
 * 
 *  @file           : gamblerProgram.js
 *  @overview       : gamblerProgram module to play the gambler game.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function gambler(){

   var r=readline.question("Enter the goal value  ");
Utility.gambler(r);

}
gambler();