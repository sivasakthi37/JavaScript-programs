var Utility = require('../Utility/Utility');

/***************************************************************************** 
* 
*  Purpose         : Find all prime number in range 0-1000.
* 
*  @description    
* 
*  @file           : Prime1to1000.js
*  @overview       : primes function to Find all prime number in range 0-1000..
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 16-01-2019
*
******************************************************************************/
function primes() {
    
    var primes=[];
    var initial = 0;
    var final = 100;
    /**
     * @description : This loop is used to find the prime number in the range of 1000;
     */
   // primes.push([]);
    for (let i = 0; i < 10; i++) {
       primes[i] = Utility.findPrime(initial, final);
       console.log("["+initial + "-" + final + "  ] : " + "[ " + primes[i] + " ]");
        initial = initial + 100;
        final = final + 100;
    }
   
}
primes();