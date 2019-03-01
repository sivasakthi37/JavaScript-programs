/******************************************************************************
 * 
 *  Purpose         : TO check palindrom or not.
 * 
 *  @description    
 * 
 *  @file           : PalindromeChecker.js
 *  @overview       : TO check the string is palindrome or not.
 *  @author         : sivasakthi.
 *  @version        : 1.0
 *  @since          : 16-01-2019
 *
 ******************************************************************************/


var Utility = require('../Utility/Utility');
var dqNew = require('./Dqueue');
var readline = require('readline-sync');

function palindromeChecker() {
  /**
   * Create an Deque object to perform various deque operations
   */
  var deque = new dqNew.Deque;


  /**
    * Exception handling to validate search 
    */
  try {
    /**
     * Validate the input given by the user
     */
    var st = readline.question("ENter the WOrd to check palindrome or not ");
    if (st == "") throw "Empty string found"

    /**
     * Function call checkPalindrome(string) to validate input is palindrome or not
     */
    if (deque.checkPalindrome(st)) {
      console.log(st + " is a palindrome");
    }
    else {
      console.log(st + " is not a palindrome");
    }

  } catch (err) {
    console.log("Error: " + err);
  }

}
palindromeChecker();