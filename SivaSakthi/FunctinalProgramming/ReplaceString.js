/******************************************************************************
 *  Execution       :   1. default node         cmd> node ReplaceString.js 
 *                      2. if nodemon installed cmd> nodemon ReplaceString.js
 * 
 *  Purpose         : To replace a perticular String.
 * 
 *  @description    
 * 
 *  @file           : ReplaceString.js
 *  @overview       : ReplaceString module to replace the String..
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const utility=require('../Utility/Utility');
const readline=require('readline-sync');

function replaces (){

var read=readline.question("Enter your name ");
utility.replace(read);
}
replaces();