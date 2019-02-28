/******************************************************************************
 *  Execution       :   1. default node         cmd> BinarySearchword.js 
 *                      2. if nodemon installed cmd> nodemon BinarySearchword.js
 * 
 *  Purpose         : Determines whether a number `input number `is present in the Array or not .
 * 
 *  @description    
 * 
 *  @file           : BinarySearchword.js
 *  @overview       : BInarySearchword module to check if WOrd is present inthe array or not.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 09-01-2019
 *
 ******************************************************************************/
const Utility = require('../Utility/Utility');
const readline = require('readline-sync');

var Binary = () => {

    var arr = [];
    var arr = Utility.ArrayInputString(arr);
    console.log("Your array is " + arr);
    var ele = readline.question("Enter the searching word ");
    var arr1 = Utility.Binarysearchstr(arr, ele);


    if (arr1 == -1) {
        console.log("Your word is not there ");

    }
    else {
        console.log("Your word in " + arr1 + " index");
    }


}
Binary();