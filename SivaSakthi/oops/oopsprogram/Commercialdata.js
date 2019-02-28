/******************************************************************************
 *  Execution       :   1. default node         cmd> node Commercialdata.js 
 *                      2. if nodemon installed cmd> nodemon Commercialdata.js
 * 
 *  Purpose         : Commercialdata is used to manage the data .
 * 
 *  @description    
 * 
 *  @file           : Commercialdata.js
 *  @overview       : Commercialdata is used to manage the data .
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 23-01-2019
 *
 ******************************************************************************/
const Stock = require('../oopsprogram/StockAcount');
const readline = require('readline-sync');


/**
 * @description:This Function act like a main function for Commertial data file
 */
function userintraction() {

    /**
     * @ description :This try block is used to throw the exception...
     */
    try {
        var st = new Stock.StackAcount();
        /**
         * @description :get the input from the user
         */
        var c = readline.question(" Hai you are New Customer? if \nYES press==> 1.. \n  NO Press==>2.. ");
        if (isNaN(c)) throw "PLZ ENTER NUMBER";
        if (c == 1) {
            st.regester();
            userintraction();
        }
        else if (c == 2) {
            var read = readline.question("PRESS \n1==>buy..\n2==>sell.. \n3==>PrintTransaction details..\n4==>valueofallSharePrice..");
            if(isNaN(read)) throw "Enter valid Number";
            if(read< 1 || read >4) throw "Enter valid Number";
            /**
             * @ description :using Switch case im going to perfom this operation 
             */
            switch (read) {
                case '1':

                    st.buy();// This function is used to buy the shares from company 
                    break;
                case '2':
                    st.sell();// This function is used to sell the shares to customer 
                    break;
                    case '3':
                    st.PrintTransaction();// this is used to print the trainsaction amount 
                    break;
                case '4':
                    st.valueof();// how much value in the whole Share..
                    break;
            }
        }
        else {
            console.log(" PLZ ENTER VALID NUMBER ");
            userintraction();

        }
    }
    catch (err) {
        console.log("ERROR :" + err);
        userintraction();

    }

}
userintraction();



