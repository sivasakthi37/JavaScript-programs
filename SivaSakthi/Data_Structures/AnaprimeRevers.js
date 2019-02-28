
var linkedStack = require('./Stackusinglinklist');
/***************************************************************************** 
* 
*  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
*                     the Linked List and Print the Anagrams in the Reverse Order.
* 
*  @description    
* 
*  @file           : AnaprimeRevers.js
*  @overview       : printAnaprimes method to find all numbers that are anagram using Stack.
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 17-01-2019
*
******************************************************************************/
function printAnaprimes() {
    var stackLink = new linkedStack.StackedLink;

    var Utility = require('../Utility/Utility');
    var show = require('util');

    var anaPrimes = [[]];
    /**
     * @description: this FindAnaPrime is used to find the primenumbers which are anagram.
     */
    anaPrimes = Utility.findAnaPrime(0, 1000);


    for (let i = 0; i < anaPrimes.length; i++) {
        stackLink.push(anaPrimes[i]);
    }
    console.log();
    console.log("--------Before reversed--------");
    /**
     * This display () is used to display the elements are in the Stacklinklist which we pass.
     */
    stackLink.display();
    var top = stackLink.getHead();

    console.log();
    console.log("------After Reversed ----------");
    stackLink.displayReverse(top);
    //console.log(stackLink.peek());
}
printAnaprimes();
