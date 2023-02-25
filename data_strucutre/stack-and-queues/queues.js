/**
 * ========== QUEUES ==========
 *
 * Definition: A FIFO data structure. First In First Out
 *
 * Where stacks are used:
 * - Background tasks (For example, uploading and downloading)
 * - Uploading resources
 * - Printing / Task processing
 *
 * BIG O:
 * - Insertion                - O(1)
 * - Removal                  - O(1)
 * - Searching (Not imporant) - O(N) - If this is important is better to use arrays
 * - Access (Not importat)    - O(N) - If this is important is better to use arrays
 *
 * RECAP:
 * - Queues are a FIFO data structure where the first value in is always the first to be out
 * - Queues are used when we need to keep track of an order and matein that order
 * - Queues are useful for processing tasks and are foundational for more complex data structures
 * - Insertion and removal can be done in O(1)
 */

/**
 * Array implementation example.
 * There are 2 possible combinations to do this, and in both
 * one of the operations (add or remove) will need to re-index the entire array.
 * So if performance is an issue, consider using a custom Queue using SLL
 */

/**
 * Add an item at the end of the array
 * Also could be adding the item at the beginning, using unshift with pop to remove.
 */
//stack.push(item);

/**
 * Remove the first item of the array
 */
//stack.shift();

/**
 * Stack using SLL.
 * It would make sense to use the methods pop and pop written for the SLL. But it would not be
 * the most efficient solution.
 * Push and pop are supposed to be constant time. But if we check the method pop in particular, is not
 * constant time. It iterates over the entire list and stop one node before the tail.
 * Instead if better to use shift and unshift. Even though they are supposed to be called push and pop, so
 * we can just re-name them. In the end the important thing is not from where we delete or add the item but
 * that the last item to be added is the one that is deleted.
 */

/**
 * @description The Node class
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @description The Queue class
 *
 * If we add from the beginning, we remove from the end and viceversa.
 * But removing from the end is less performance since it has to iterate over
 * the whole list until the end.
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * @description Adds a new node at the end
   *
   * - The function accepts a value
   * - Create a new node using that value passed to the function
   * - If there are no nodes in the queue, set this node to be the first and
   *   last property of the queue
   * - Otherwise set the next property on the current last to be that node, and then set the last property
   *   of the queue to be that node.
   * - Increment the size by 1
   *
   */
  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      // Or !this.first
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  /**
   * @description Remove from the beginning
   *
   * - If there are no nodes in the stack, return null
   * - Create a temporary variable to store the first property on the stack
   * - If there is only 1 node, set the first and last property to be null
   * - If there is more than one node, set the first property to be the next property on the current first
   * - Decrement the size by 1
   * - Return the value of the node removed
   */
  dequeue() {
    if (this.size === 0) {
      return null;
    }

    const tmp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      /* Or without creating the tmp variable it could be done by doing this.first = this.first.next */
      this.first = tmp.next;
    }
    this.size--;
    return tmp.value;
  }
}
