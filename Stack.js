/******************************************************************************
 * 
 *  Purpose         : Stack is used to perfoming the operation of push and pop..
 * 
 *  @description    
 * 
 *  @file           : Stack.js
 *  @overview       : Stack is used to push the element in the array and pop is used to pop the element in the array.
 *  @author         : sivasakthi.
 *  @version        : 1.0
 *  @since          : 15-01-2019
 *
 ******************************************************************************/
class Stack {
    /**
         * @description a Constructor
         * intializes an array stk , top , capacity and size variable
         */
    constructor() {
        this.stk = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    /*stack(capacity) {
        this.capacity = capacity;
        var stk = new stk[capacity];
    }*/
    /**
     * @description :This push() is used to add the element tom stack 
     * @param {data} ele 
     */
    push(ele) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow ");
            return;
        }
        this.size++;
        this.stk[++this.top] = ele;
    }
    /**
     * @description :This pop() is used to pop th element from the stack 
     */
    pop() {
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stk[this.top--];
    }
    /**
     * @description:this peek() is used to get the first element in the stack
     */
    peek() {
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stk[this.top]);
    }
    /**
     * @description :This getsize is used to get the size of stack 
     */
    getsize() {
        return this.size;
    }
    /**
     * @description :this method is used to find the stack is empty or not
     */
    isEmpty() {
        if (this.top == -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }
    /**
     * @description :this method is used to display the value present in the stack
     */
    dispaly() {
        var string = "";
        for (let i = 0; i <= this.top; i++) {
            string = string + this.stk[i];
            if (i < this.top) {
                string = string + ",";
            }
        }
        console.log(string);
    }
   
}
module.exports = {
    Stack
}