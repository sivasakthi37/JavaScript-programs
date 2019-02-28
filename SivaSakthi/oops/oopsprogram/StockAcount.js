/******************************************************************************
 *  Execution       :   1. default node         cmd> node StockAcount.js 
 *                      2. if nodemon installed cmd> nodemon StockAcount.js
 * 
 *  Purpose         :StockAmount is used to manage the data .
 * 
 *  @description    
 *  @file           : StockAmount.js
 *  @overview       :StockAmount is used to manage the data .
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 23-01-2019
 *
 ******************************************************************************/
const file = require('fs');
const readfile = require('readline-sync');
/**
 * @description :This class is used to store the data throw constructure..
 */
class Transaction {
    /**
     * 
     * @param {id} id 
     * @param {name} name 
     * @param {companynamr} companyName 
     * @param {Symbol} symbol 
     * @param {Phnumber} phnumber 
     * @param {ShareBuying} sharebuying 
     * @param {current date} date 
     * @param {current time} time 
     */
    constructor(id, name, companyName, symbol, phnumber, sharebuying, date, time) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.phnumber = phnumber;
        this.companyName = companyName;
        this.sharebuying = sharebuying;
        this.data = date;
        this.time = time;
    }
}
/**
 * 
 * @description:This class is used to store the Registerdata throw constructor..
 */
class Reg {
    /**
     * 
     * @param {id} id 
     * @param {name} name 
     * @param {symbol} symbol 
     * @param {phnumber} phnumber 
     */
    constructor(id, name, symbol, phnumber) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.phnumber = phnumber;
    }


}
/**
 * @description:This class is used to store the  Transactional data throw constructor.
 */
class Transactionsell {

    constructor(id, name, companyName, symbol, phnumber, sharebuying, date, time) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.phnumber = phnumber;
        this.companyName = companyName;
        this.SellAmount = sharebuying;

        this.data = date;
        this.time = time;
    }
}
var arr = [];
var regs = [];
/**
 * @description : This class is used to maintain the details of Stocks
 */
class StackAcount {
    /**
     * @description:this valueof is used to get the total price amount in the stock
     */
    valueof() {
        console.log("hai");

        var company = getdatafromcompanyjson();
        var share = 0;
        for (let i = 0; i < company.shareholders.length; i++) {
            var share = share + company.shareholders[i].share_per_price;


        }
        console.log("Value of ALL Share is $" + share);

    }
    /**
     * @description:This function is used to buy customer from the company
     */
    buy() {
        try {
            var id = readfile.question("Please Enter Your Id ");
            if (isNaN(id)) throw "PLZ ENTER VALID ID"
            var costomer = getdatafromcostomerjson();
            var f = 0;
            for (const key in costomer.user) {
                // console.log(key);
                //console.log( costomer.user[key].id+"=="+id);
                // console.log("length " + costomer.user[(costomer.user.length)-1]);
                //  var index=costomer.user.length-1;
                if (costomer.user[key].id == id) {
                    f = 1;
                    console.log("YOUR ID IS MACHING ");
                    var amount = readfile.question("ENTER YOUR Share Amount ");
                    var symbol = readfile.question("Enter Your company Symbol ");

                    purchase(amount, symbol);
                    break;

                }
            }
            if (f == 0) {
                console.log("YOUR ARE NEW COUSTOMER PLZ REGESTER YOUR DETAILS");


            }
        } catch (err) {
            console.log("ERROR " + err);
            this.buy();

        }
    }
    /**
     * @description:sell function is used to Sell customer shares to company..
     */
    sell() {

        var id = readfile.question("Please Enter Your Id ");

        var costomer = getdatafromcostomerjson();
        var f = 0;
        for (const key in costomer.user.length) {


            //  console.log("user0 "+ costomer.user[key].id);
            if (costomer.user[key].id == id) {
                var f = 1;
                console.log("YOUR ID IS MACHING ");
                var amount = readfile.question("ENTER YOUR Selling Amount ");
                var symbol = readfile.question("Enter Your company Symbol ");

                selling(amount, symbol);


            }
        }
        if (f == 0) {
            console.log("YOUR ARE NEW COUSTOMER PLZ REGESTER YOUR DETAILS");


        }
    }
    /**
     * @description:PrintTransaction is used to print the Transaction details from the database
     */
    PrintTransaction() {
        var data = getdatafromTransactionjson();

        console.log(data);

    }
    /**
     * @description:This Regester function is used to Regster New customer.. 
     */
    regester() {
        try {
            var id = readfile.question("Enter your ID ");
            if (isNaN(id)) throw "PLZ ENTER NUMBER";
            var name = readfile.question("Enter your name ");
            if (!isNaN(name)) throw "PLZ ENTER STRING";
            var symbol = readfile.question("Enter your Sysmbol ");
            if (!isNaN(symbol)) throw "PLZ ENTER STRING";
            var phnumber = readfile.question("Enter your phnumber ");
            if (isNaN(phnumber)) throw "PLZ ENTER NUMBER";

            var reg = new Reg(id, name, symbol, phnumber);
            // console.log(reg);

            regs.push(reg);
            var customer = getdatafromcostomerjson();
            // console.log(regs);


            customer.user.push(reg);
            file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Customer.json', JSON.stringify(customer));
            console.log("SUCESSFULLY REGESTERED");


        }
        catch (err) {
            console.log("ERROR :" + err);
            this.regester();

        }

    }
}
/**
 * @description:This function is used to get the comanydata from the company json file 
 */
function getdatafromcompanyjson() {

    var com = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Company.json');
    var company = JSON.parse(com);
    //console.log(company);

    return company;
}
/**
 * @description:This function is used to get the customerdata from the customer json file 
 */
function getdatafromcostomerjson() {
    var cos = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Customer.json');

    var costomer = JSON.parse(cos);
    return costomer;
}
/**
 * @description:This function is used to get the Transactiondata from the transaction json file 
 */
function getdatafromTransactionjson() {
    var tran = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Transaction.json');

    var Transaction = JSON.parse(tran);


    return Transaction;
}
function Writejs(data) {
    var data1 = JSON.stringify(data);
    file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Customer.json', data1);


}
/**
 * @description:This function is used to write the Transactiondata to the transaction json file 
 */
function WriteTransaction(data) {
    var data1 = JSON.stringify(data);
    file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Transaction.json', data1);


}
/**
 * @description: this function is used to purchase the customer from the company..
 * @param {amount} amount 
 * @param {Symbol} symbol 
 */
function purchase(amount, symbol) {
    var company = getdatafromcompanyjson();

    //var index=company.shareholders.length-1;
    var f = 0;
    for (const key in company.shareholders) {
        if (company.shareholders[key].symbol.trim() === symbol.trim()) {
            //console.log("Hai how are  u..");
            f = 1;
            if (amount < company.shareholders[key].no_of_shares) {
                var amount1 = company.shareholders[key].no_of_shares - amount;
            }
            else {
                console.log("NO Share are in the company");

            }

            //var data3=company.shareholders[key];
            // id,name,symbol,phnumber,sharebuying,date
            for (var i = 0; i < company.shareholders.length; i++) {
                //  console.log(company.shareholders[i].symbol + "==" + symbol);

                //console.log(company.shareholders[i].symbol == symbol);

                if (company.shareholders[i].symbol == symbol) {
                    company.shareholders[i].no_of_shares = amount1;

                    file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Company.json', JSON.stringify(company));
                    break;

                }
            }


            var costomer = getdatafromcostomerjson()
            var date = new Date()
            var cdate = date.toLocaleDateString();
            console.log(cdate);
            var ctime = date.toLocaleTimeString();
            //console.log(ctime);

            var data3 = new Transaction(costomer.user[key].id, costomer.user[key].name, company.shareholders[key].name, company.shareholders[key].symbol, costomer.user[key].phnumber, amount, cdate, ctime);
            var transaction = getdatafromTransactionjson();
            transaction.push(data3);

            //arr.push(data3);
            WriteTransaction(transaction);
            console.log(" YOUR DETAILS ADDED IN TRANSACTION JSON ");
            break;

        }

    }
    if (f == 0) {
        console.log("YOUR SYMBOL IS NOT MATCH ");

    }
}
/**
 * @description: this function is used to sell the customer to the company..
 * @param {amount} amount 
 * @param {Symbol} symbol 
 */
function selling(amount, symbol) {

    var company = getdatafromcompanyjson();
    var f = 0;
    for (const key in company.shareholders) {
        if (company.shareholders[key].symbol == symbol) {
            //console.log("Hai how are  u..");
            f = 1;
            var amount1 = company.shareholders[key].no_of_shares + parseInt(amount);


            //var data3=company.shareholders[key];
            // id,name,symbol,phnumber,sharebuying,date
            for (var i = 0; i < company.shareholders.length; i++) {
                //  console.log(company.shareholders[i].symbol + "==" + symbol);

                //console.log(company.shareholders[i].symbol == symbol);

                if (company.shareholders[i].symbol == symbol) {
                    company.shareholders[i].no_of_shares = amount1;

                    file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Company.json', JSON.stringify(company));
                    break;

                }
            }


            var costomer = getdatafromcostomerjson()
            var date = new Date()
            var cdate = date.toLocaleDateString();
            console.log(cdate);
            var ctime = date.toLocaleTimeString();
            //console.log(ctime);

            var data3 = new Transactionsell(costomer.user[key].id, costomer.user[key].name, company.shareholders[key].name, company.shareholders[key].symbol, costomer.user[key].phnumber, amount, cdate, ctime);
            var transaction = getdatafromTransactionjson();
            transaction.push(data3);

            //arr.push(data3);
            WriteTransaction(transaction);
            console.log(" YOUR DETAILS ADDED IN TRANSACTION JSON ");
            break;

        }

    }
    if (f == 0) {
        console.log("YOUR SYMBOL IS NOT MATCH ");
        var ste = new StackAcount();
        ste.buy();
    }
}
/**
 * @description:export the class.. make it ass globle
 */
module.exports = {
    StackAcount
}

