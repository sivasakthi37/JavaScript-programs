/******************************************************************************
 *  Execution       :   1. default node         cmd> node DeskofcardsQueue.js 
 *                      2. if nodemon installed cmd> nodemon DeskofcardsQueue.js
 * 
 *  Purpose         : Deskofcards is used  shuffle the playing cards using queue..
 * 
 *  @description    
 * 
 *  @file           : DeskofcardsQueue.js
 *  @overview       :DeskofcardsQueue is used  shuffle the playing cards ..
 *  @author         : sivasakthi.
 *  @version        : 1.0.
 *  @since          : 24-01-2019.
 *
 ******************************************************************************/
const queue = require('/home/brideit/Documents/SivaSakthi/Data_Structures/Queue');
var sort = require('/home/brideit/Documents/SivaSakthi/Utility/Utility');


/*var que=new queue.myQueue();
que.enque("23");
que.enque("45");
que.display();
var getdata=que.getdata();
console.log("getdata "+getdata);*/
function deckOfCards() {
    /**
     * accessing the queue and sort from there respective paths
     */


    /**
     * declaring varaibles and accessing queue linked list
     */

    var personOne = new queue.myQueue
    var personTwo = new queue.myQueue;
    var personThree = new queue.myQueue;
    var personFour = new queue.myQueue;
    var suit = ["♣️", "🔸", "❤️", "♠️"];
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    /**
     * declaring array and calculating the number of cards and pushing into array
     */
    var deck = [];
    var n = suit.length * rank.length;
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            var temp = "";
            deck.push(suit[i] + rank[j] + "");
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
    //  var arr=sort.BubbleSor(deck);
    //console.log(arr);

    /**
     * adding the set of cards though if condition by range through enqueue
     */
    //var array = [];
    for (let i = 0; i < deck.length; i++) {
        if (i < 13) {
            personOne.enque(deck[i]);
        } else if (i < 26) {
            personTwo.enque(deck[i]);
        } else if (i < 39) {
            personThree.enque(deck[i]);
        } else {
            personFour.enque(deck[i]);
        }
    }
    /**
     * spilting the four persons cards in containig array
     */
    arrayOne = personOne.getdata().split(' ');
    //console.log(arrayOne);

    arrayTwo = personTwo.getdata().split(' ');
    arrayThree = personThree.getdata().split(' ');
    arrayFour = personFour.getdata().split(' ');
    /**
     * sorting the cards by insertion sorting through symbols containig in array
     */
    var arrayOne1 = sort.Insertionsort(arrayOne);
    // console.log(arrayOne1);

    sort.Insertionsort(arrayTwo);
    sort.Insertionsort(arrayThree);
    sort.Insertionsort(arrayFour);
    /**
     * printing the result containing in array
     */
    console.log("Player 1 have this cards :  " + arrayOne1.join());
    console.log("Player 2 have this cards :  " + arrayTwo);
    console.log("Player 3 have this cards :  " + arrayThree);
    console.log("Player 4 have this cards :  " + arrayFour);

}
deckOfCards();