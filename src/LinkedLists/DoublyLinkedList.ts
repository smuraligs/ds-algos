/**
 * Doubly Linked List implementation in TypeScript.
 * Operations: push, pop, shift, unshift
 * push(val) - adds a new node with value 'val' at the end of the list.
 * pop() - removes the last node from the list and returns it.
 * shift() - removes the first node from the list and returns it.
 * unshift(val) - adds a new node with value 'val' at the beginning of the list.
 * printListForward() - prints the list from head to tail.
 * printListBackward() - prints the list from tail to head.
 */
class DLListNode {
    val: number;
    prev: DLListNode | null;
    next: DLListNode | null;
    constructor(val:number) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: DLListNode | null;
    tail: DLListNode | null;
    length: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    /**
     * Insert node at the end
     * @param val 
     */
    push(val:number) {
        const newNode = new DLListNode(val);
        if(this.head == null) {
          // Inserting first node
          this.head = newNode;
          this.tail = newNode;
        } else {
          // Inserting new node at the end
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;  
        }
        console.log("Pushing ", newNode.val);
        this.length++;
    }

    /**
     * Delete last node
     * @returns the deleted node
     */
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
      return tail;
    }

    /**
     * Delete first element.
     */
    shift() {
      let head = this.head;
      if(!head) {
        console.log("Nothing to shift");
        return null;
      }
      if(head.next == null) {
        this.head = null;
        this.tail = null;
        this.length --;
        return head;
      }
      this.head = head.next;
      head.prev = null;
      this.length --;
      console.log("Shifting ", head.val);
      return head;
    }

    /**
     * Insert element at the start
     * @param val 
     * @returns 
     */
    unshift(val) {
      const newNode = new DLListNode(val);
      let head = this.head;
      if(head == null) {
        this.head = newNode;
        this.tail = newNode;
        newNode.prev = null;
        newNode.next = null;
        this.length ++;
        return this.head;
      }
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      
      console.log("Unshifting ", this.head.val);
      this.length ++;
      return this.head;
    }

    printListForward() {
      var node = this.head;
      console.log("LinkedList items forward: ", this.length?'': "EMPTY");
      let listOutputString = '';
      for(let i = 0; i < this.length; i++) {
          // console.log(node.val, '-->');
          listOutputString += node.val + '-->'
          node = node?.next;
      }
      console.log(listOutputString.slice(0, listOutputString.length-3) + '\n');
    }

    printListBackward() {
      var node = this.tail;
      console.log("LinkedList items backward: ", this.length?'': "EMPTY");
      let listOutputString = '';
      for(let i = 0; i < this.length; i++) {
          // console.log(node.val, '-->');
          listOutputString += node.val + '-->'
          node = node?.prev;
      }
      console.log(listOutputString.slice(0, listOutputString.length-3) + '\n');
    }
}

let doublyLinkedList = new DoublyLinkedList();          
doublyLinkedList.push(5);
doublyLinkedList.push(10);
doublyLinkedList.push(15);
doublyLinkedList.push(20);
doublyLinkedList.printListForward();
doublyLinkedList.printListBackward();

doublyLinkedList.pop();
doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.pop();
doublyLinkedList.printListForward();
doublyLinkedList.printListBackward();

doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
// doublyLinkedList.push(4);
doublyLinkedList.printListForward();
doublyLinkedList.printListBackward();
// // 1234
doublyLinkedList.shift(); 
doublyLinkedList.pop();  
doublyLinkedList.shift();
doublyLinkedList.pop(); 
doublyLinkedList.printListForward();
doublyLinkedList.printListBackward();

doublyLinkedList.unshift(1);
doublyLinkedList.unshift(3);
doublyLinkedList.unshift(5);
doublyLinkedList.shift();
doublyLinkedList.printListForward();
doublyLinkedList.printListBackward();
