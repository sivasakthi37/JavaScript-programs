/******************************************************************************
 * 
 *  Purpose         : hashing to store the multiple vlaue in the same name..
 * 
 *  @description    
 * 
 *  @file           : HashTable.js
 *  @overview       : Hashing table
 *  @author         : sivasakthi.
 *  @version        : 1.0
 *  @since          : 16-01-2019
 *
 ******************************************************************************/
const list = require('../Data_Structures/Mylinklist');
const show=require('util');
class Hashtable {
     /**
         * @description a Constructor
         * intializes the store variable Array.
         */
    constructor() {
        this.store = [];

    }
    /**
     * @description :THis hash method is used to find the hash value where we have to store..
     * @param {number} value 
     */
    hash(value) {

        var index = value % 10;
        return index;
    }
/**
 * @description :this Addhash method is used to Add the value in the hash table..
 * @param {value} value 
 */
    addhash(value) {
        var index = this.hash(value);

        if (this.store[index] === undefined) {

            this.store[index] = new list.mylinklist;
        
            this.store[index].add(value);
        }
        else {

            this.store[index].add(value);
        }

    }/**
     * @ description :This print() is used to print the value are present in the hash table 
     */
    print(){
        for (let index = 0; index < 10; index++) {
             show.print(index + " : ");
            try {
                this.store[index].display();
        
            } catch (err) {
                console.log("NO element");
            }

        }
    }
}
module.exports={
    Hashtable

}