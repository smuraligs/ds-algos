/**
 * Singly Linked List implementation in TypeScript.
 * Operations: push, pop, shift, unshift
 * push(val) - adds a new node with value 'val' at the end of the list.
 * pop() - removes the last node from the list and returns it.
 * shift() - removes the first node from the list and returns it.
 * unshift(val) - adds a new node with value 'val' at the beginning of the list.
 * printList() - prints the list from head to tail.
 */
class LinkedListNode {
    val: number;
    next: LinkedListNode | null;
    constructor(val:number) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val:number) {
        const newNode = new LinkedListNode(val);
        if(this.head == null) {
          // console.log("Inserting first node");
          this.head = newNode;
          this.tail = newNode;
        } else {
          // console.log("Inserting new node at the end");
          this.tail.next = newNode
          this.tail = newNode;  
        }
        console.log("Pushing ", newNode.val);
        this.length++;
        this.printList();
        return this;
    }

    pop() {
      let head = this.head;
      if (head == null) {
        console.log("No elements to pop");
        return null;
      }
      if(head.next == null) {
        this.head = null;
        this.tail = null;
        this.length --;
        console.log("Popping ", head.val);
        this.printList();
        return head;
      }
      let tail = head.next;

      while(tail.next != null) {
        head = head.next;
        tail = tail.next;
      }
      head.next = null;
      this.tail = head;
      this.length--;
      console.log("Popping ", tail.val);
      this.printList();
      return tail;
    }

    /**
     * Deleting first element.
     */
    shift() {
      let head = this.head;
      if(!head) {
        console.log("Nothing to shift");
        return null;
      }
      if(head.next == null) {
        this.head = null;
        this.length --;
        return head;
      }
      this.head = head.next;
      this.length --;
      console.log("Shifting ", head.val);
      this.printList();
      return head;
    }

    unshift(val) {
      const newNode = new LinkedListNode(val);
      if(this.head == null) {
        this.head = newNode;
        this.tail = newNode;
        this.length ++;
        console.log("Unshifting. ", val);
        this.printList();
        return this.head;
      }
      
      newNode.next = this.head;
      this.head = newNode;
      console.log("Unshifting.. ", this.head.val);
      this.length ++;
      this.printList();
      return this.head;
    }

    printList() {
      var node = this.head;
      console.log("LinkedList items: ", this.length?'': "EMPTY");
      let listOutputString = '';
      for(let i = 0; i < this.length; i++) {
          // console.log(node.val, '-->');
          listOutputString += node.val + '-->'
          node = node?.next;
      }
      console.log(listOutputString.slice(0, listOutputString.length-3) + '\n');
    }
}

let singlyLinkedList = new SinglyLinkedList();          
singlyLinkedList.push(5);
singlyLinkedList.push(10);
singlyLinkedList.push(15);
singlyLinkedList.push(20);
// singlyLinkedList.printList();

singlyLinkedList.pop();
singlyLinkedList.pop();
singlyLinkedList.pop();
singlyLinkedList.pop();
singlyLinkedList.pop();

singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
// 1234
singlyLinkedList.shift(); 
singlyLinkedList.pop();  
singlyLinkedList.shift();
singlyLinkedList.pop(); 
singlyLinkedList.pop(); 
singlyLinkedList.shift();
// singlyLinkedList.printList();

singlyLinkedList.unshift(1);
singlyLinkedList.unshift(3);
singlyLinkedList.unshift(5);
singlyLinkedList.shift();
// singlyLinkedList.printList();
