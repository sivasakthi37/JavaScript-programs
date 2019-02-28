/***************************************************************************** 
* 
*  Purpose         : Find primenumber which are the anagram in range 0-1000 and pass the value in queue using linklist..
* 
*  @description    
* 
*  @file           : queue1to1000prime.js
*  @overview       : Find primenumber which are the anagram in range 0-1000 and pass the value in queue using linklist...
*  @author         : sivasakthi.
*  @version        : 1.0.
*  @since          : 17-01-2019.
*
******************************************************************************/
const utility = require('../Utility/Utility');
const queueln = require('./Queuelinklist');
/**
 * @description: This function is used to find the prime value between 1 to 1000  and pass the value is in the queue  
 */
var primeQueue = () => {
    /**
     * @description:In this function we pass the range to  find the prime value
     */
    var arr = utility.findAnaPrime(0, 1000);

    var que = new queueln.QueuedLinkedList;
    for (var i = 0; i < arr.length; i++) {

        que.enque(arr[i]);
    }
    que.display();

}
primeQueue();