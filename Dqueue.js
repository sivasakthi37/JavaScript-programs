/**
 * @description class Deque
 * 
 * @class Deque
 * @purpose Creates Doubly ended queue contains various manipulation functions.
 */
class Deque {
    /**
         * @description a Constructor
         * intializes an array arr , front , rear and size variable
         */
    constructor() {
        this.arr = new Array(20);
        this.front = -1;
        this.rear = -1;
        this.size = 20;
    }
    /**
     * @description check if deque is empty
     * @returns {boolean} true/false
     */
    isEmpty() {

        if (this.front == -1) {
            return true;
        }
        return false;
    }
    /**
     * @description checks if deque is full
     * @returns {boolean} 
     */
    isFull() {
        if (this.front == 0 && this.rear == this.size - 1 || this.front == this.rear + 1) {
            return true;
        }
        return false;
    }
    /**
     * @description add item at the front
     * @param {*} item 
     */
    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflowed");
            return;
        }
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else
            if (this.front == 0) {
                this.front = this.arr.length - 1;
            } else {
                this.front = this.front - 1;
            }
        this.arr[this.front] = item;
    }
    /**
     * @description add item at the rear
     * @param {*} item 
     */
    addRear(item) {

        // if(this.isFull()){
        //     console.log("Queue overflowed");
        //     return;
        // }
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else
            if (this.rear == this.size - 1) {
                this.rear = 0;
            } else {
                this.rear = this.rear + 1;
            }
        this.arr[this.rear] = item;
    }
    /**
     * @description get element present at front
     * @returns {*} element at front
     */
    getFront() {
        // check whether Deque is empty or not 
        if (this.isEmpty()) {
            console.log("Queue Underflowed");
            return -1;
        }
        return this.arr[this.front];
    }
    /**
     * @description get element present at rear
     * @returns {*} element at rear
     */
    getRear() {
        // check whether Deque is empty or not 
        if (this.isEmpty() || this.rear < 0) {
            console.log("Queue Underflowed");
            return -1;
        }
        return this.arr[this.rear];
    }
    /**
     * @description delete element present at front
     * @returns {*} deleted element at front
     */
    deletefront() {
        // check whether Deque is empty or not 
        if (this.isEmpty()) {
            console.log("Queue Underflowed");
            return;
        }

        // Deque has only one element 
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        else
            // back to initial position 
            if (this.front == this.capacity - 1) {
                this.front = 0;
            }
            else {
                // increment front by '1' to remove current 
                // front value from Deque 
                front = this.front + 1;
            }
    }
    /**
     * @description Method to delete rear element
     */
    deleterear() {
        // check whether Deque is empty or not 
        if (isEmpty()) {
            console.log("Queue Underflowed");
            return;
        }
        // Deque has only one element 
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        else if (this.rear == 0)
            this.rear = this.size - 1;
        else
            this.rear = this.rear - 1;
    }
    /**
     * @description checks for palindrome
     * @param {*} word 
     * @returns {boolean} 
     */
    checkPalindrome(word) {
        for (let i = 0; i < word.length; i++) {
            this.addRear(word.charAt(i));
        }
        while (this.front != this.rear && this.front <= this.rear) {
            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}
module.exports = {
    Deque
}