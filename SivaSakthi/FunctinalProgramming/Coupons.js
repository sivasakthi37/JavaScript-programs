/******************************************************************************
 *  Execution       :   1. default node         cmd> node .js 
 *                      
 * 
 *  Purpose         : To generrate the coupon number.
 * 
 *  @description    
 * 
 *  @file           : coupons.js
 *  @overview       : coupon module to generate the coupon number.
 *  @module         : coupon - This is optional if expeclictly its an npm or local package
 *  @author         : SIVASAKTHI
 *  @version        : 1.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

 var coupon=()=>{
var n=readline.question("Enter how digit coupon value ");
Utility.copun(n);

 }
coupon();