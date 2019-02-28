const utility=require('../Utility/Utility');
const readline=require('readline-sync');

var Bubble=()=>{
    var arr=[];
     var arr=utility.arrayinput(arr);     
     console.log("before sort "+arr);
     
   var arr1= utility.BubbleSor(arr);
console.log("after sort "+arr1);

     }
Bubble();