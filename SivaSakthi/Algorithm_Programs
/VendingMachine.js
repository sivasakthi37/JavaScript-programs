const utility=require('../Utility/Utility');
const readline=require('readline-sync');
var vending=()=>{
    var note=readline.question("Enter the note ");
utility.VendingMachine(note);

}
vending();