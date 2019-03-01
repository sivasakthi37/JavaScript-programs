/******************************************************************************
 *  Execution       :   1. default node         cmd> node BankcashDetails.js 
 *                      2. if nodemon installed cmd> nodemon BankcashDetails.js
 * 
 *  Purpose         : Read a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 *  @description    
 * 
 *  @file           : BankcashDetails.js
 *  @overview       : This Program is used to manage the bank cash details .
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 13-01-2019
 *
 ******************************************************************************/

const queue = require('../Data_Structures/Queue');
const utility = require('../Utility/Utility');
const readline = require('readline-sync');
var queues = () => {
    var que = new queue.myQueue;
    try {
        /**
         * @description :Get input from the user
         */
        var n = readline.question("Enter how many persons are in the queue ");
        /**
         * @description : In case the user input is not a number It thow exception to catch block
         */
        if (isNaN(n)) throw "Please Enter number Your entering wrong value  ";

        for (var i = 0; i < n; i++) {
            var name = readline.question(" Enter your name ");
             /**
         * @description : In case the user input is a number. It thow exception to catch block
         */
            if(!isNaN(name)) throw " Please Enter number Your entering wrong value "
            que.enque(name);
        }
        que.display();
        var totalamount = 20000;
        var totalamount = parseInt(totalamount);
        for (var i = 0; i < n; i++) {
            console.log("------------cash counter---------------------");
            console.log("welcome " + que.dequeue() + " plz Enter your choice");

            console.log("1.. withdraw \n 2..deposit \n");

            var cho = readline.question("ENter your choice ");
            if (cho == 1) {

                var amount = readline.question("ENter Your withdraw Amount ");
                 /**
         * @description : In case the user input is not a number It thow exception to catch block
         */
                if (isNaN(amount)) throw "Please Enter number Your entering wrong value  ";
                var amount = parseInt(amount);
                if (totalamount > amount) {
                    totalamount = totalamount - amount;
                    console.log("after withdraw bank balance is " + totalamount);
                }
                else {
                    console.log("NO AMOUNT IN THE BANK ");
                }
            }
            else if (cho == 2) {
                var amount1 = readline.question("Enter the deposit amount ");
                 /**
         * @description : In case the user input is not a number It thow exception to catch block
         */
                if (isNaN(amount1)) throw "Please Enter number Your entering wrong value  ";
                var amount1 = parseInt(amount1);
                totalamount = totalamount + amount1;
                console.log("bank balance after depost " + totalamount);
            }
            else {
                throw "PLESER ENTER WITHIN THE OPTION";
            }
        }
    }
    catch (err) {
        console.log("ERROR: " + err);
    }
}
queues();
