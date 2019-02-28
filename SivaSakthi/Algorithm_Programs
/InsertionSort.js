/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionSort.js 
 *                      2. if nodemon installed cmd> nodemon insertionSort.js
 * 
 *  Purpose         : To sort the array element using insertion sort.
 * 
 *  @description    
 * 
 *  @file           : insertionSort.js
 *  @overview       : insertionSort is used to sort the array element.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 07-01-2019
 *
 ******************************************************************************/
const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

var inser=()=>{
        var arr=[];
        var arr=Utility.ArrayInputString(arr);
        
        console.log("before Sorting Your array is "+arr);
       


        var b=Utility.Insertionsort(arr);
        console.log("after sorting "+b);
        
}
inser();