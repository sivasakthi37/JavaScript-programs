/******************************************************************************
 *  Execution       :   1. default node         cmd> node Triplets.js 
 *                      2. if nodemon installed cmd> nodemon Triplets.js
 * 
 *  Purpose         : Determines whether a number `input Array `is Triplets or not .
 * 
 *  @description    
 * 
 *  @file           : Triplets.js
 *  @overview       : Triplets module to check if number is Triplets or not.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function trip(){

    var a=[];
    var arr=Utility.arrayinput(a);
    
    var b=Utility.Triplets(arr);
    if(b==false){
        console.log("no triple");
    }


}
trip();