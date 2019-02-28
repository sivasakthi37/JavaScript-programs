/******************************************************************************
 *  Execution       :   1. default node         cmd> node StopWatch.js 
 *                      2. if nodemon installed cmd> nodemon StopWatch.js
 * 
 *  Purpose         : TO find the Timming between Start and stop through stop Watch.
 * 
 *  @description    
 * 
 *  @file           : StopWatch.js
 *  @overview       : StopWatch module to find timming.
 *  @author         : Sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Stopwatch(){

readline.question("press any key to start the stop watch");
var start=Utility.gettime();

readline.question("press any key to stop the stop watch");
var stop=Utility.gettime();


var time=Utility.stopwatch(stop,start);

console.log("your timming is "+Math.floor(time) +" seconds");

}
Stopwatch();