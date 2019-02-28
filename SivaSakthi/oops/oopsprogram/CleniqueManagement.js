/******************************************************************************
 *  Execution       :   1. default node         cmd> node CleniqueManagement.js 
 *                      2. if nodemon installed cmd> nodemon CleniqueManagement.js
 * 
 *  Purpose         :To Manage the cleniqueManagement Data...
 * 
 *  @description    
 *  @file           : CleniqueManagement.js
 *  @overview       :To Manage the cleniqueManagement Data...
 *  @author         : sivasakthi.
 *  @version        : 1.0
 *  @since          : 24-01-2019
 *
 ******************************************************************************/
const readline = require('readline-sync');
const utility = require('../Utility/utility');
const file = require('fs');
/**
 * @description: Clienique is used Manage the Cliniquedata...
 */
function clenique() {

    try {
        /**
         * @description:Ask the user to before have user id or not...
         */
        var check = readline.question("YOU HAVE PAITENT ID IN THIS CLIQUEUE ? IF \nYES PRESS ==>1\n NO PRESS==> 2 ");
        if (isNaN(check)) throw "PLZ ENTER NUMBER 1 or 2";
        if (check < 1 || check > 2) throw "PLZ ENTER WITH IN THE RANGE"
        if (check == 2) {
            utility.regester();
            clenique();
        }
        else if (check == 1) {
            var patient = getdatafrompatientsjson();
            var id = readline.question("Enter Your id :");
            // console.log(patient.patients[0].id);
            var f = 0;
            for (const key in patient.patients) {
                //console.log(patient.patients[key].id + "==" + id);

                if (patient.patients[key].id == id) {
                    console.log("YOUR ID IS MATCHING..");

                    f = 1;
                    console.log("ENTER YOUR CHOICE FOR PRESS \n1==> DOCTOR DETAILS \n2==>PAINTENT DETAILS\n3==>APPOINMENT ");
                    var c = readline.question("ENTER YOUR CHOICE :");

                    switch (c) {
                        case '1':
                        /**
                         * @description:This method is used to see the doctor details..  
                         */
                            utility.doctordetails();
                            break;
                        case '2':
                         /**
                         * @description:This method is used to see the Patient details..  
                         */
                            utility.paitentdetails();
                            break;
                        case '3':
                         /**
                         * @description:This method is used to get appoinment from doctors..  
                         */
                            utility.appointment(id);
                            break;
                    }

                }

            }
            if (f == 0) {
                console.log("PLZ REGESTER YOUR DETAILS YOU ARE NEW TO THIS CLINIC");
                clenique();

            }

        }
    }
    catch (err) {
        console.log("ERROR " + err);
        console.log();
        
        clenique();
    }
}
clenique();
/**
 * @description:This function is used to get the data from the json file...
 */
function getdatafrompatientsjson() {
    var Paitent = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Paitents.json');
    var Paitents = JSON.parse(Paitent);
    return Paitents;
}
