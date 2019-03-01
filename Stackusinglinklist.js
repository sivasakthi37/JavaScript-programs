var show = require('util');
/**
 * @description class Node
 * 
 * @class Node
 * @purpose Creates a new node with two blocks , data & item
 */
class Node {
    /**
     * @description constructor initializes data and next
     * @param {Number} data 
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackedLink {
    /**
         * @description constructor initializes top
         */
    constructor() {
        this.top = null;
    }

    push(item) {
        var temp = new Node();
        temp.data = item;
        temp.next = this.top;
        this.top = temp;
    }
    /**
     * @description pops out items from the stack 
     */
    pop() {

        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        this.top = this.top.next;

    }
    /**
     * @description checks if stack is empty
     */
    isEmpty() {
        return this.top == null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        } else {
            console.log("stack is empty");
            return -1;
        }
    }
    /**
     * @description Display the stack
     */
    display() {
        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        else {
            var temp = this.top;
            var show = "";
            while (temp != null) {

                show = show + temp.data;
                if (temp.next != null) {
                    show = show + " - "
                }
                temp = temp.next;
            }
            console.log(show);
        }
    }

    /**
     * @description Reverse the stack using linked list
     */
    reverse() {
        var prev = null;
        var current = this.top;
        var next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.top = prev;

    }
    /**
     * @description Displays the stack in reverse order using linkedlist
     * @param {Number} top(topmost item in stack) 
     */
    displayReverse(top) {

        if (top == null)
            return;

        this.displayReverse(top.next);
        show.print(top.data);
        if (top.next != top)
            show.print(" - ");
    }
    /**
     * @description get the top most item of the stack
     * @returns top most item
     */
    getHead() {
        return this.top;
    }
}
module.exports = {
    StackedLink
}
