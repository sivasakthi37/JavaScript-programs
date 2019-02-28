 /******************************************************************************
 *  Execution       :   1. default node         cmd> node Unordedlist.js 
 *                      2. if nodemon installed cmd> nodemon Unordedlist.js
 * 
 *  Purpose         : Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to search a Word in the List. If the Word is not found then add it to the list, and if it found then remove the word from the List. In the end save the list into a file

 * 
 *  @description    
 * 
 *  @file           : Unoredlist.js
 *  @overview       : using Mylink list we perfoming this operation .
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 12-01-2019
 *
 ******************************************************************************/
 const Utility=require('../Utility/Utility');
 const readline=require('readline-sync');
 const list=require('./Mylinklist');

var  unordedlist=()=> {

   var f =Utility.readfile();
console.log("Your  file element is : "+f);
var arr=f.split(' ');

var list1=new list.mylinklist;
//list1.add("sivasakthi2");
//list1.add("sivasakthi")
for(var i=0;i<arr.length;i++){
    list1.add(arr[i]);
}
/**
 * @ description :TO handle the Exception using try and catch block..
 */
try {
    console.log(("--------------Display element------------- "));
    
list1.display();
var filename="text.txt";
var d=readline.question("ENter your Word to search: ");
if(d=="") throw  "u enter empty String";
if(list1.search(d)){
  //  console.log(search);

list1.remove(d);

var data=list1.getdata();
Utility. Writefile(filename,data);
console.log("word found After removing: ");
list1.display();
}
else{
  
    list1.add(d);
    var data=list1.getdata();
    Utility. Writefile(filename,data);
    console.log("word not found : After adding words");
    
    list1.display();
}
} catch (err) {
     console.log("ERROR : "+err);
}
console.log("--------------ENd---------------------")
}
unordedlist();
