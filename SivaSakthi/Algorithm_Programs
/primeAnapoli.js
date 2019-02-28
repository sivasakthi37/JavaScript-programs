const Utility = require('../Utility/Utility');
const readline = require('readline-sync');
const util = require('util');

var papoli = () => {
    console.log("-----------------------PRIME PALINDROME---------------------")
    Utility.primepoliana();
    console.log("-----------------------PRIME ANAGRAM-------------------------");
    var b = Utility.findAnaPrime(0, 1000);
    //console.log(b);
    util.print(b);

}
papoli();
