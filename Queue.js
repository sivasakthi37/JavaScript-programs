/******************************************************************************
 * 
 *  Purpose         : Queue is used to perfoming the operation of enque and deque..
 * 
 *  @description    
 * 
 *  @file           : Queue.js
 *  @overview       : Queue is used to enque the element in the array and dequeue is used to pop the element in the array.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 15-01-2019
 *
 ******************************************************************************/
class myQueue {

    /**
         * @description a Constructor
         * intializes an array arr , front , rear and capacity variable
         */
    constructor() {
        this.arr = [];
        this.capacity = 0;
        this.rear = this.front = -1;

    }
    /**
     * @description: This Enque is used to add the data in the queue.  
     * @param {data} data 
     */
    enque(data) {
        if (this.front == this.capacity) {
            console.log("Queue overflow ");
            return;
        }
        if (this.front == -1) {
            this.front++
        }
        this.arr[++this.rear] = data;
        this.capacity++;
    }
    /**
     * @description :THIs dequeue is used to pop the data from the element.
     *  
     */
    dequeue() {
        if (this.front == -1) {
            console.log("Queue Underflowed");
            return;
        }
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        var temp = this.arr[this.front++];

        return temp;
        // return this.arr.shift();
    }
    /**
     * @discription : Display the element in the queue 
     */
    display() {
        if (this.front != this.rear) {
            var str = "[ ";
            for (let index = this.front; index <= this.rear; index++) {
                str = str + this.arr[index] + " ";
            }
            console.log("Elements in queue is ");
            console.log(str + "]");
        } else {
            console.log("Queue is empty ");
        }
    }
    /**
     * @Discription :This Method is used to find the queue is empty or not 
     */
    isempty() {
        if (this.rear == this.front == -1) {
            return true;
        }
        else {
            return false;
        }

    }
    /**
     * @description: this size () is used  to find the size queue contain..
     */
    size() {
        return this.rear;
    }
    getdata(){
        if (this.front != this.rear) {
            var str="";
            for (let index = this.front; index <= this.rear; index++) {
        
                str = str + this.arr[index];
             //   string = string + this.stk[i];
            if (index <this.rear) {
                str = str +" ";
            }
            }
           // console.log("Elements in queue is ");
            return str ;
        } else {
            return "Queue is empty ";
        }


    }
}
module.exports = {
    myQueue
}