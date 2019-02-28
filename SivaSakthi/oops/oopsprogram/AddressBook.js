/***************************************************************************** 
* 
*  Purpose         : TO maintain the address book details....
* 
*  @description    
* 
*  @file           : AddressBook.js
*  @overview       : TO Manage Address data in the JSONFILE.
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 25-01-2019
*
******************************************************************************/
const readline = require('readline-sync');
const file = require('fs');
/**
 * @description:THis class is used to get and store tha data... 
 */
class AddAddress {
    constructor(firstname, lastname, idno, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idnumber = idno;
        this.addresss = address;
    }

}
/**
 * @description:THis class is used to get and store tha data... 
 */
class AddAddress1 {
    constructor(city, state, zip, pno) {
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phnnumber = pno;

    }
}
var addressarr = [];
/**
 * @description:This class is to Manage Address data in the JSONFILE.
 */
class AddressBook {
    /**
 * @description:TO maintain the address book details...
 */
    addperson() {
        /**
         * @description:get all details from the from the user..
         */
        try {
            var fname = readline.question("ENTER YOUR FIRST NAME ");
            if (!isNaN(fname)) throw "PLZ ENTER VALID NAME"
            var lname = readline.question("ENTER LAST NAME ");
            if (!isNaN(lname)) throw "PLZ ENTER VALID NAME"
            var idno = readline.question("ENTER YOUR ID..");
            if (isNaN(idno)) throw "PLZ ENTER VALID ID"

            console.log("ENTER YOUR ADDRESS..");
            var city = readline.question("ENTER YOUR CITY :");
            if (!isNaN(city)) throw "PLZ ENTER VALID STRING"
            var state = readline.question("ENTER YOUR STATE :");
            if (!isNaN(state)) throw "PLZ ENTER VALID STRING"
            var zip = readline.question("ENTER YOUR ZIP CODE :");
            if (isNaN(zip)) throw "PLZ ENTER VALID ZIP CODE"
            var PNO = readline.question("ENTER PH NUMBER :");
            if (PNO.length < 10 || 10 < PNO.length) throw "PLZ ENTER VALID PHONE NUMBER";
            if (isNaN(PNO)) throw "PLZ ENTER VALID STRING"
            // addressarr.push(city, state, zip, PNO);
            var address2 = new AddAddress1(city, state, zip, PNO);
            addressarr.push(address2);
            var address1 = new AddAddress(fname, lname, idno, addressarr);
            // console.log(address1);
            var addressjson = readaddresfromjsonfile();
            // console.log(addressjson);
            addressjson.address.push(address1);
            writeaddresstojsonfile(addressjson);
            var aask = new AddressBook();
            aask.Ask(idno);
        }
        catch (err) {
            console.log("ERROR " + err);
            this.addperson();
            //addperson();

        }
    }
    /**
 * @description:This function is used to Ask the user to add more address in there profile are not..
 * @param {idnumber} idno 
 */
    Ask(idno) {
        try {
            var as = readline.question("DO YOU WANT TO ADD ONE MORE ADDRESS IN YOUR PROFILE..?  IF \nYES PRESS 1:\nNO PRESS 2 : ");
            if (isNaN(as)) throw "PLZ ENTER VALID NUMBER"
            if (op < '1' || op > '2') throw " Enter WithinRange of 1 and 2 ";
            if (as == 1) {
                /**
                 * @description:get address details from the user..
                 */
                console.log(("ENTER YOUR ADDRESS.."));
                var city = readline.question("ENTER YOUR CITY :");
                if (!isNaN(city)) throw "PLZ ENTER VALID STRING"
                var state = readline.question("ENTER YOUR STATE :");
                if (!isNaN(state)) throw "PLZ ENTER VALID STRING"
                var zip = readline.question("ENTER YOUR ZIP CODE :");
                if (isNaN(zip)) throw "PLZ ENTER VALID STRING"
                var PNO = readline.question("ENTER PH NUMBER :");
                if (PNO.length < 10 || 10 < PNO.length) throw "PLZ ENTER VALID PHONE NUMBER";
                if (isNaN(PNO)) throw "PLZ ENTER VALID STRING"
                var address2 = new AddAddress1(city, state, zip, PNO);
                var addressjson = readaddresfromjsonfile();
                /**
                 * @description :for in key is used to acces the object on json file...
                 */
                for (const key in addressjson.address) {
                    console.log(addressjson.address[key].idnumber + "==" + idno);
                    console.log(addressjson.address[key].idnumber == idno);

                    if (addressjson.address[key].idnumber == idno)
                        addressjson.address[key].addresss.push(address2);
                }
                writeaddresstojsonfile(addressjson);// pass the data to write the json file
                this.Ask(idno);

            }
            else if (as == 2) {
                return;

            }
        }
        catch (err) {
            console.log("ERROR :" + err);
            this.Ask(idno);
        }
    }
    /**
            * @description:This method is used to delete person in the addressbook..
            */
    delete() {
        try {
            var idno = readline.question("ENTER YOUR IDNUMBER TO DELETE YOUR ADDRESS DETAILS..");
            if (isNaN(idno)) throw "PLZ ENTER VALID ID"
            /**
             * @description:read the json data from the json file..
             */
            var addressjson = readaddresfromjsonfile();
            var f = 0;
            for (const key in addressjson.address) {
                // console.log(addressjson.address[key].idnumber+"=="+ idno);

                //console.log(addressjson.address[key].idnumber == idno);
                //console.log(addressjson.address[key].idnumber==indexOf[idno]);

                if (addressjson.address[key].idnumber == idno) {
                    // console.log(addressjson.address[key].idnumber+"=="+ idno);
                    f = 1;
                    //  console.log(addressjson.address[key].idnumber == idno);
                    // console.log(addressjson.address[1]);
                    //console.log(addressjson.address.indexOf(addressjson.address[key]));
                    var index = addressjson.address.indexOf(addressjson.address[key]);
                    //  console.log(addressjson.address.indexOf(addressjson.address[key]));
                    //  addressjson.address[key]
                    // delete address[key];
                    addressjson.address.splice(index, 1);;// pass the data to write the json file
                    writeaddresstojsonfile(addressjson);
                }
            }
            if (f == 0) {
                console.log("YOUR ID IS NOT MACHING PLZ ENTER VALID ID");
                this.delete();

            }
        }
        catch (err) {
            console.log("ERROR :" + err);
            this.delete();
        }
    }
    /**
     * @description:This Method is used to sort the json file in sorted way..                     
     */
    sortjson() {

        var addressjson = readaddresfromjsonfile();
        /**
         * @description:sort is a inbuilt method in javascript for sorting.. 
         */
        addressjson.address.sort(function (a, b) {
            // console.log(a.idnumber - b.idnumber);

            return a.idnumber - b.idnumber;
        });

        writeaddresstojsonfile(addressjson);
        console.log("---------YOUR JSON FILE IS SORTED--------");



    }
}
/**
 * @description:read the json data from the json file..
 */
function readaddresfromjsonfile() {
    var data = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/AddressBook.json');
    var data1 = JSON.parse(data);
    return data1;
}
/**
 * @description:Write the json data to the json file...
 */
function writeaddresstojsonfile(data) {
    var data1 = JSON.stringify(data);
    file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/AddressBook.json', data1);
    console.log("YOUR DETAILS ARE ADDED IN JSON SUCESSFULLY..");

}

module.exports = {
    AddressBook
}