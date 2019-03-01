var show = require('util');
/**
 * @description class QNode
 * 
 * @class QNode
 * @purpose Creates a new node with two blocks , NEXT AND KEY
 */
class Qnode {
    /**
    * @description constructor initializes next and key
    * @param {Number} key 
    */
    constructor(key) {
        this.next = null;
        this.key = key;

    }
}
/**
 * @description QueuedLinkedList
 * 
 * @class QueuedLinkedList
 * @purpose Creates a new Queue using LInkedlist contains various manipulation functions.
 */
class QueuedLinkedList {
	/**
     * @description constructor initializes front and rear
     */
    constructor() {
        this.front = null;
        this.rear = null;
        this.capacity = 0;

    }
	/**
	 * @description add key to the queue
	 * @param {*} key 
	 */
    enque(key) {
        var temp = new Qnode(key);

        if (this.rear == null) {
            this.rear = this.front = temp;
            return;
        }
        this.rear.next = temp;
        this.rear = temp;
        this.capacity++;

    }
	/**
	 * @description removes element from the queue
	 * @returns removed element
	 */
    deque() {
        if (this.front == null) {
            return null;
        }

        var temp = this.front;
        this.front = this.front.next;

        if (this.front == null) {
            this.rear = null;
        }
        return temp.key;
    }
	/**
	 * @description Display the queue
	 */
    display() {
        var t = this.front;
        var count = 1;
        while (t != null) {
            this.count++;
            show.print(t.key);
            if (count % 2 == 0) {
                if (t.next != null) {
                    show.print(" - ");
                }
                t = t.next;
            }

        }
        console.log("");
    }
    getdata() {
        var t = this.front;
        var count = 1;
        var str="";
        while (t != null) {
            this.count++;
          
            if (count % 2 == 0) {
                if (t.next != null) {
                    str=str+ t.key+" ";
                }
                t = t.next;
            }

        }
        return str;
        console.log("");
    }
}
module.exports = {

    QueuedLinkedList

}



