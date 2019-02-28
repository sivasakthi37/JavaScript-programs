/***************************************************************************** 
* 
*  Purpose         : How many possible ways to bilt the binary search tree are in given value .
* 
*  @description    
* 
*  @file           : BinarySearchTree.js
*  @overview       : Find the possible way to bilt the binary search tree..
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 17-01-2019
*
******************************************************************************/


var readline = require('readline-sync');
module.exports = {

    binarySearchTree() {
        try{
        var number = readline.question("Enter the how many casses : ");
         /**
         * @description : In case the user input is not a number It thow exception to catch block
         */
        if(isNaN(number)) throw "PLZ ENTER INTEGER VALUE";
        var arr = [];

        console.log("Enter your integer value");
        for (var i = 0; i < number; i++) {
            arr[i] = readline.question('');
             /**
         * @description : In case the user input is not a number It thow exception to catch block
         */
            if(isNaN(arr[i])) throw "PLZ ENTER THE NUMBER "
        }
         
        for (var j = 0; j < arr.length; j++) {
            var first =  (this.factorial(2*Number(arr[j])));
            var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
             var result = Math.floor((first / second));
             console.log("Node possible way of "+arr[j]+" is "+result);
       }
    }
    catch(err){
        console.log("ERROR :"+err);
        
    }
    },
    factorial(num) {
    
        var fact=1;
        for (let index = 1; index <=num; index++) {
            fact=fact*index;
        }
        return fact;
    
    }
}
