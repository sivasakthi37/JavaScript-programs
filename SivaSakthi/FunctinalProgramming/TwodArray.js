/******************************************************************************
 *  Execution       :   1. default node         cmd> node TwodArray.js 
 *                      2. if nodemon installed cmd> nodemon TwodArray.js
 * 
 *  Purpose         : To get array input from the user and print it .
 * 
 *  @description    
 * 
 *  @file           : TwodArray.js
 *  @overview       : Twodarray module to get input from the user.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/Utility');
const readline= require('readline-sync');

var Twod =()=>{

    var arr=[];
    var row=readline.question("Enter the value of row ");
    var col=readline.question("enter the column value ");
 //   var r=readline.question("Enter the value of  ")
var rev=Utility.ReadTwoDarry(arr,row,col);

Utility.PrintTwoDarry(rev,row,col);
}
Twod();
