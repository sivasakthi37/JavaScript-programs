/******************************************************************************
 *  Execution       :   1. default node         cmd> node Ordedlist.js 
 *                      2. if nodemon installed cmd> nodemon Ordedlist.js
 * 
 *  Purpose         : Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 *  @description    
 * 
 *  @file           : Ordedlist.js
 *  @overview       : Ordedlist operation.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 13-01-2019
 *
 ******************************************************************************/
const utility = require('../Utility/Utility');
const readline = require('readline-sync');
const list = require('../Data_Structures/Mylinklist');

var ordedlist = () => {

    var read = utility.readfile1();// read the inpurt from the file..

    console.log("Readfile : " + read);

    var st = read.split(' ');
    var list1 = new list.mylinklist;

    for (var i = 0; i < st.length; i++) {
        list1.add(st[i]);

    }
    console.log("Before sorting");
    console.log("-----------------------------------");

    list1.display();
    list1.sort();
    console.log("After sorting");
    console.log("-----------------------------------");

    list1.display();
    var filename = 'numbers.txt';
    try {
        var search = readline.question("Enter your number to search ");
        if (isNaN(search)) throw "Your input in not a number plz enter String  ";
        if (search == "") throw "your enter empty element ";
        /*if(typeof search!=NaN ){
            throw "INVALID INPUT"
        }*/
        if (list1.search(search)) {

            list1.remove(search);
            var data = list1.getdata();
            utility.Writefile(filename, data);

            list1.display();
        }
        else {
            list1.addInSequence2(search);
            list1.sort();
            var data = list1.getdata();
            utility.Writefile(filename, data);

            list1.display();
        }
    }
    catch (err) {
        console.log("ERROR: " + err);
    }

}
ordedlist();