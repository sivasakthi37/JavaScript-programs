/******************************************************************************
 *  Execution       :   1. default node         cmd> node BalancedParanthisis.js 
 *                      2. if nodemon installed cmd> nodemon BalancedParanthisis.js
 * 
 *  Purpose         :TO check Your paranthisis are equal or not..

 * 
 *  @description    
 * 
 *  @file           : BalancedParanthisis.js
 *  @overview       : To find your paranthisis is balanced or not..
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 15-01-2019
 *
 ******************************************************************************/
var Utility=require('../Utility/Utility');
var stackaccess=require('./Stack');
var readline=require('readline-sync');

function Stack()
{
    var st= new stackaccess.Stack;
    // var answer=Utility.callFile();
    // var str=answer[0];
    try{
    var str=readline.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   
   for(i=0;i<str.length;i++)
   { 
       ch=str.charAt(i);
    
       if(ch=='(' || ch=='[' || ch=='{')
       {
       st.push(ch);

       }
       else{
           switch (ch)
           {
               case ')' : if(st.pop()!='('){
                   
                                return false;
                            }
                            break;
               case ']' : if(st.pop()!='[')
               {
                   return false;
               }
               break;
               case '}' : if(st.pop()!='{')
               {
                   return false;
               }break;
           }
       }


   }
   if(st.getsize()==0){
   return true;
   }
   return false;
}
catch(err){
console.log(err);

}
}
var bol=Stack();


if(bol){
    console.log("String is balanced");
    
}
else{
    console.log("Not balanced");
    }

