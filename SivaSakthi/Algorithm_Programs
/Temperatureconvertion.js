const utility=require('../Utility/Utility');
const readline=require('readline-sync');

var temp=()=>{
    console.log("Celsius to Fahrenheit: press \n 1 Fahrenheit to Celsius:press 2 ");
var read=readline.question("ENter youe choice");
if(read==1){
var c=readline.question("Enter the Celsius to convert Fahrenheit ");
var f=utility.CelsiustoFahrenheit(c);
console.log("Your Fahrenheit value id  "+f);
}
if(read==2){
    var F=readline.question("Enter the Fahrenheit to convert celsius");
    var c=utility.FahrenheittoCelsius(F);
    console.log("Your celsius value is "+c);
}
}
temp();