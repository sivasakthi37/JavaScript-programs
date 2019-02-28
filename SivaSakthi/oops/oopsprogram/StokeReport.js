/******************************************************************************
 *  Execution       :   1. default node         cmd> node StokeReport.js 
 *                      2. if nodemon installed cmd> nodemon StokeReport.js
 * 
 *  Purpose         :To Store the Stock report...
 * 
 *  @description    
 *  @file           : StokeReport.js
 *  @overview       :To Store the Stock report....
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 23-01-2019
 *
 ******************************************************************************/
const file = require('fs');
const readline = require('readline-sync');
/**
 * @description:stock1 class is used to Store values ....
 */
class stock1 {
    constructor(sname, share, sharePrice, totalPrice) {
        this.Stockname = sname;
        this.share = share;
        this.sharePrice = sharePrice;
        this.totalPrice = totalPrice;
    }
}
var data = [];
/**
 * @description : get input from the user  how many stoke they have.. 
 */
try {
    function user() {

        var stock = readline.question("How many stock you have.. ");
        if (isNaN(stock)) throw "PLZ ENTER VALID NUMBER"

        Store(stock);

    }
    user();
    /**
     * @description:This function is used to get the stoke information from the user..
     * @param {stokeamount} stock 
     */
    function Store(stock) {

        i = 0;
        while (i < stock) {

            var sname = readline.question("Enter the Stock Names.. ");
            if (!isNaN(sname)) throw "PLZ ENTER VALID name"
            var share = readline.question("Enter Number of Share ");
            if (isNaN(share)) throw "PLZ ENTER VALID Value"
            var sharePrice = readline.question("Enter the Share Price. ");
            if (isNaN(sharePrice)) throw "PLZ ENTER VALID Price"
            console.log();

            var totalsharePrice = share * sharePrice;

            var st = new stock1(sname, share, sharePrice, totalsharePrice);

            data.push(st);
            var readdata = readfile();
            readdata.push(data);

            write(readdata);
            console.log("DATA IS ADDED IN YOUR JSON FILE..");

            i++;
        }

    }
    /**
     * @description :Read data from the json file
     */
    function readfile() {
        var data2 = file.readFileSync('../Jsonfiles/Stock.json');
        var readdata = JSON.parse(data2);
        return readdata;
        // console.log(convertdata);
    }
    /**
     * @description: write the information to json file..
     */
    write(data);
    //console.log(data);
    function write(st) {
        var data1 = JSON.stringify(st);
        file.writeFileSync('../Jsonfiles/Stock.json', data1);

    }

}
catch (err) {
    console.log("ERROR : " + err);
    user();

}



