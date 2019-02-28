/******************************************************************************
 *  Execution       :   1. default node         cmd> node Regex.js 
 *                      2. if nodemon installed cmd> nodemon Regex.js
 * 
 *  Purpose         :Regex function is used to replace the perticular string.
 * 
 *  @description    
 *  @file           : Regex.js
 *  @overview       :Regex function is used to replace the perticular string..
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 24-01-2019
 *
 ******************************************************************************/

const rj = require('../Utility/utility');
const readline = require('readline-sync');
/**
 * @description :Regex function is used to replace the perticular string..
 */
var Regex = () => {

    try {
        /**
         * @description:get input from the user using readline module..
         */
        var name = readline.question("ENter your name ");
        if (!isNaN(name)) throw "PLZ ENTER STRING VALUE";
        var fullname = readline.question("ENTER your full name ");
        console.log();

        if (!isNaN(fullname)) throw "PLZ ENTER STRING VALUE";
        var mob = readline.question("Enter your MObile number ");
        if (isNaN(mob)) throw "PLZ ENTER valid PHnumber VALUE";
        if (mob.length < 10 || 10 < mob.length) throw "PLZ ENTER VALID PHONE NUMBER";
        console.log();
        console.log("------------------------------------------------------");
        /**
         * @description :regex() is used to change the perticlar templete from the template.
         */
        rj.regex(name, fullname, mob)

    } catch (error) {
        console.log(error);
        Regex();

    }
}
Regex();