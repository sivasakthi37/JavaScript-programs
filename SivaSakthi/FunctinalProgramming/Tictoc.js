/******************************************************************************
 *  Execution       :   1. default node         cmd> node Tictoc.js 
 *                      2. if nodemon installed cmd> nodemon Tictoc.js
 * 
 *  Purpose         : TO play tictoc game.
 * 
 *  @description    
 * 
 *  @file           : Tictoc.js
 *  @overview       : Tictoc module is used to play Tictocgame.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');

function tic(){

Utility.tictoc();


}
tic();