/**
 * Queue is a linear data structure that follows the FIFO (First In First Out) principle.
 * Elements are added to the back of the queue and removed from the front.
 * Common operations:
 * - Enqueue: Add an element to the back of the queue.
 * - Dequeue: Remove and return the element from the front of the queue.
 * - Peek: Return the element at the front of the queue without removing it.
 * - IsEmpty: Check if the queue is empty.
 * - Size: Return the number of elements in the queue.
 * - Clear: Remove all elements from the queue.
 * - PrintQueue: Print all elements in the queue.
 */

class Queues {
  items: Object;
  headIndex: number;
  tailIndex: number;
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  /**
   * Add elements to the back of the queue
   * @param element
   */
  enqueue(element) {
    this.items[this.tailIndex] = element;
    this.tailIndex++;
  }

  /**
   * Removes and returns the element from the front of the queue.
   */
  dequeue() {
    let element = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
  }

  /** Returns the element at the front of the queue without removing it.
   * 
   */
  peek() {
    return this.items[this.headIndex];
  }

  isEmpty() {
    return this.tailIndex - this.headIndex == 0;
  }
  
  size() {
    return Object.keys(this.items).length;
  }

  /** Empties the queue */
  clear() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  printQueue() {
    let queueStr = '';
    let items = this.items;
    Object.keys(items).forEach(function(key) {
      // console.log(val);
      queueStr += items[key] + '->'
    });
    console.log(queueStr);
  }
}

let queue = new Queues();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.printQueue();
console.log('Is Queue Empty?:', queue.isEmpty());
console.log('Queue size:', queue.size());
queue.clear();
console.log("Queue is ", queue.size());
queue.printQueue();