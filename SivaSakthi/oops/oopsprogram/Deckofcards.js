/******************************************************************************
 *  Execution       :   1. default node         cmd> node Deskofcards.js 
 *                      2. if nodemon installed cmd> nodemon Deskofcards.js
 * 
 *  Purpose         : Deskofcards is used  shuffle the playing cards ..
 * 
 *  @description    
 * 
 *  @file           : Deskofcards.js
 *  @overview       :Deskofcards is used  shuffle the playing cards ..
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 24-01-2019
 *
 ******************************************************************************/
const util = require('util');
function deck2D() {
    /**
    * accessing the queue  from there respective path
    */
    /**
     * declaring varaibles and accessing queue
     */
    var suit = ["♣️", "🔸", "❤️", "♠️"];
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    /**
    * declaring array and calculating the number of cards and pushing into array
    */
    var deck = [];
    var n = suit.length * rank.length;
    /**
   * declaring array and calculating the number of cards and pushing into array
   */
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < rank.length; j++) {

            deck.push(rank[j] + "" + suit[i] + " ");
        }
    }
    /**
 * generating random method for shuffling cards containig in array
 */
    for (let i = 0; i < n; i++) {
        var random = parseInt(Math.random() * deck.length)
        var temp = deck[i];
        deck[i] = deck[random];
        deck[random] = temp;
    }
    /**
   * adding the set of cards though for loop by range 
   */
    var arr = [];
    var x = 0, y = 9;
    for (let i = 0; i < 4; i++) {
        arr.push([])
        for (let j = 0; j < 9; j++) {
            arr[i][j] = deck[j + x];
        }
        x = x + 9;
    }
    /**
   * printing the result containing in array
   */
    for (var index = 0; index < arr.length; index++) {
        var person = index + 1;
        util.print("[ person " + person + "]-[");
        for (var index1 = 0; index1 < 9; index1++) {
            util.print(arr[index][index1]);

        }
        util.print("]");
        console.log();

    }
    // console.log(arr);

}
deck2D();