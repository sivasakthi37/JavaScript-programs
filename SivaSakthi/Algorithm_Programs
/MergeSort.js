/******************************************************************************
 *  Execution       :   1. default node         cmd> node MergeSort.js 
 *                      2. if nodemon installed cmd> nodemon MergeSort.js
 * 
 *  Purpose         : MergeSort is used to Sort the Array element .
 * 
 *  @description    
 * 
 *  @file           : MergeSort.js
 *  @overview       : MergeSort is used to Sort array Element.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 07-01-2019
 *
 ******************************************************************************/
const utility=require('../Utility/Utility');
const readline=require('readline-sync');

var merge=function(){
    var arr=[];
var arr=utility.arrayinput(arr);
    
var arr3=utility.Mergesort(arr,0,arr.length-1);
console.log((arr3));

}
merge();