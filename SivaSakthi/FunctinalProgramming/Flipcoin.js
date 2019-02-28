/******************************************************************************
 *  Execution       :   1. default node         cmd> node Flipcoin.js 
 *                      2. if nodemon installed cmd> nodemon Flipcoin.js
 * 
 *  Purpose         : TO flip The coin to get the percentage of head and tails.
 * 
 *  @description    
 * 
 *  @file           : Flipcoin.js
 *  @overview       : Flipcoin module to get the percentage of head and tails.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

 function flipcoin(){

    var f=readline.question("HOW MANEY TIMES YOU WANT TO FLIP THE COIN ");

    Utility.flip(f);
}
flipcoin();

