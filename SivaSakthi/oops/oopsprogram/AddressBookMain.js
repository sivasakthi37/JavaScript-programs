/***************************************************************************** 
* 
*  Purpose         : TO maintain the address book details....
* 
*  @description    
* 
*  @file           : AddressBookMain.js
*  @overview       : TO Manage Address data in the JSON FILE.
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 25-01-2019
*
******************************************************************************/
const add = require('../oopsprogram/AddressBook');
const readline = require('readline-sync');

/**
 * @description:TO maintain the address book details...
 */
var AddressBook = () => {
    try {
        var address = new add.AddressBook();
        console.log("1..ADD ADDRESS..\n2..DELETE..\n3..ADD MORE ADDRESS IS PREVIOUS ADDRESSDATA\n4..SORTJSON..\n5..EXIT.. ");
        /**
         * @description:get input from the user..
         */
        var op = readline.question("ENTER YOUR CHOICE :")
        if (isNaN(op)) throw "PLZ ENTER VALID Value"
        if (op < '1' || op > '5') throw " Enter WithinRange of 1 to 5 ";
        /**
         * @ description:This Swich case is used to send the flow..based on the user input..
         */
        switch (op) {
            case '1':
                /**
                 * @description:This method is used to add person in the addressbook
                 */
                address.addperson();
                AddressBook();
                break;
            case '2':
                /**
                 * @description:This method is used to delete person in the addressbook..
                 */
                address.delete();
                break;

            case '3': {
                var idno = readline.question("Enter the your id number ");
                address.Ask(idno);
                break;
            }

            case '4':
                /**
                 * @description:This method is used  to sort the details from the json..
                 */
                address.sortjson();
                break;
            case '5':
                /**
                 * @description:This method is used to exit from this process...
                 */
                console.log("------EXIT---------");

               process.exit();

                break;

        }
    }
    catch (err) {
        console.log("ERROR :" + err);
        AddressBook();
    }
}
AddressBook();
