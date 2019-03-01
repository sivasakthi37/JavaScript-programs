/******************************************************************************
 * 
 *  Purpose         : TO store the value.
 * 
 *  @description    
 * 
 *  @file           : Hashstorevalue.js
 *  @overview       : to store the hash value..
 *  @author         : sivasakthi.
 *  @version        : 1.0
 *  @since          : 16-01-2019
 *
 ******************************************************************************/
const utility = require('../Utility/Utility');
const readline = require('readline-sync');
const hash = require('../Data_Structures/HashTable');
const util = require('util');


var hashstore = () => {
    try {
        var read = readline.question("Enter how many hash element ");
        if (isNaN(read)) throw "PLZ ENTER NUMBER "
        var arr = [];
        var arr1 = utility.Arrayread(arr, read);
        var hs = new hash.Hashtable();
        for (let index = 0; index < arr1.length; index++) {

            hs.addhash(arr1[index]);
        }
        hs.print();
    }
    catch (err) {
        console.log("ERROR :" + err);

    }
}
hashstore();
