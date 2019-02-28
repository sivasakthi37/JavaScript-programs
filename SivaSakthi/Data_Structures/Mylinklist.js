/******************************************************************************
 * 
 *  Purpose         : link list to perfomming the operation

 * 
 *  @description    
 * 
 *  @file           : linklist.js
 *  @overview       : using Mylink list we perfoming this operation .
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 12-01-2019
 *
 ******************************************************************************/
class Node {
    /**
     * 
     * @param {data} data 
     */

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * @description : This mylinklist class is used to perform the linklist operation. 
 */
class mylinklist {
/**
 * @description :This Method is used to add the data in the linklist.
 * @param {data} data 
 */
    add(data) {

        var n = new Node(data);

        if (this.head == null) {
            this.head = n;
            this.cap++;
            return;
        }

        var t = this.head;
        while (t.next != null) {

            t = t.next;
        }
        t.next = n;
        this.cap++;
        return;

    }
    /**
     * @description: this function is used to display the linklist element 
     */
    display() {
        var t = this.head;
        var show = "";

        while (t != null) {


            show = show + t.data;
            if (t.next != null) {
                show =show + " ";
            }
            t = t.next;
        }
        console.log(show);
    }
    /**
     * @description : This search method is used to find the element are in the value. 
     * @param {element} element 
     * @returns{boolean} true/false
     */
    search(element) {
        var temp = this.head;
        // console.log("remove");
        while (temp != null) {
            // console.log(element+"== "+ temp.data);
            // console.log(element==temp.data.trim());

            // console.log('element: '+ typeof(element)+' ' + temp.data);
            // console.log('tempdata '+typeof(temp.data)+' ' +element);
            if (element == temp.data.trim()) {

                return true;
            }
            temp = temp.next;
        }
        return false;
    }
/**
 * @description :This method is used to remove
 * @param {element} element 
 */
    remove(element) {
        var temp = this.head;
        var prev = this.head;
        //console.log(temp.data);
        if (temp.data.trim() == element) {
            this.head = temp.next;
            return true;
        }
        // console.log(temp.data);
        while (temp.data.trim() != element) {
            prev = temp;
            temp = temp.next;
        }

        prev.next = temp.next;
        return;
    }
    /**
     * @description:this Getdata method is used to get the element in the mylinklist.it return element
     */
    getdata() {
        var t = this.head;
        var disp = "";


        while (t != null) {
            disp = disp + t.data;
            if (t != null) {

                disp = disp + " ";
            }

            t = t.next;
        }
        return disp;
    }
    /**
     * @description :this method is used to sort the element in the linklist
     */
    sort() {
        //console.log("sorted enter ");
        //  var temp2 = null;
        do {
            var swapped = 0;
            var t = this.head;
            while (t.next != null) {

                if (parseInt(t.next.data) < parseInt(t.data)) {

                    var neww = t.next.data;
                    t.next.data = t.data;
                    t.data = neww;
                    swapped = 1
                }
                t = t.next;
            }

        } while (swapped)
    }
    /**
     * @description: This method is used to add the element in the linklist in the sorted way.. 
     * @param {element} item 
     */
    addInSequence2(item) {
        var current;
        var node = new Node(item);

        /* Special case for head node */
        if (this.head == null || this.head.data >= item) {
            node.next = this.head;
            this.head = node;
            return;
        }
        else {

            /* Locate the node before point of insertion. */
            current = this.head;

            while (current.next != null && current.next.data < item)
                current = current.next;

            node.next = current.next;
            current.next = node;
        }
    }
/**
 * @description :This element is used to find the mylinklist is empty or not..
 */
    isEmpty() {
        if (this.head == null) {
            return true;
        }
    }
    /**
     * @description find the present size of linkedlist
     * @returns {Number} size of linkedlist
     */
    size() {
        return this.capacity;
    }
}
module.exports = {
    mylinklist
}