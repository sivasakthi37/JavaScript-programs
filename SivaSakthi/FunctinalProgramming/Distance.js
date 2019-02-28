/******************************************************************************
 *  Execution       :   1. default node         cmd> node Distance.js 
 *                      
 * 
 *  Purpose         : TO find the distance between X and Y.
 * 
 *  @description    
 * 
 *  @file           : Distance.js
 *  @overview       : Distance module to Find the Distance between X and y.
 *  @module         : Distance - This is optional if expeclictly its an npm or local package
 *  @author         : SivaSakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('/home/brideit/Documents/SivaSakthi/Utility/Utility');
const readline=require('readline-sync');


function Distance(){

    var x=readline.question("Enter the X value ");
    var Y=readline.question("Enter the Y value ");

Utility.Distances(x,Y);


}
Distance();
