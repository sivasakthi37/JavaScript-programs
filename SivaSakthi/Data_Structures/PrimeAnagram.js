/***************************************************************************** 
* 
*  Purpose         : Find primenumber which are the anagram in range 0-1000..
* 
*  @description    
* 
*  @file           : PrimeAnagram.js
*  @overview       : primes function to Find primenumber which are the anagram in range of 0-1000..
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 17-01-2019
*
******************************************************************************/
const utility = require('../Utility/Utility');
// 
var prime = () => {
    var anaprime = [];
    var a = 0;
    var b = 100;
    for (var i = 0; i < 10; i++) {
    //
        anaprime[i] = utility.findAnaPrime(a, b);
        console.log("[ "+a + " " + b + "] ==> [" + anaprime[i]+"]")
        a = a + 100;
        b = b + 100;
    }
}

prime();