/**
 * ========== STACKS ==========
 *
 * Definition: A stack is an abstract data type that serves as a collection of elements, with two main principal operations:
 *  - Push, which adds an element to the collection, and
 *  - Pop, which removes the most recently added element that was not yet removed.
 * It is a LIFO data structure: The last element added to the stack will be the first element removed from the stack
 *
 * Where stacks are used:
 * - Managing functions invocations
 * - Undo/redo
 * - Routing (the history object in the browser) is treated like a stack
 *
 * BIG O:
 * - Insertion                - O(1)
 * - Removal                  - O(1)
 * - Searching (Not imporant) - O(N) - If this is important is better to use arrays
 * - Access (Not importat)    - O(N)
 *
 * RECAP:
 * - Stacks are a LIFO data structure where the last value in is always the first one out
 * - Stacks are used to handle function invocations (the call stack), for operations like undo/redo
 *   and for routing (remember pages you have visited and go back/fowrward) and much more.
 * - They are not a built in data structure in Javascript, but are relatively simple to implement
 */

/**
 * Array implementation example
 */

/**
 * Add an item at the end of the array
 */
//this.stack.push(item);

/**
 * Remove the last item of the array
 */
//this.stack.pop();

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
 * @description The Stack class
 */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * @description Adds a new node
   *
   * - The function should accept a value
   * - Create a new node with that value
   * - If there are no nodes in the stack, set the first and last property to be the
   *   newly created node.
   * - If there is at least one node, create a variable taht stores the current first property on the
   *   stack
   * - Reset the first proeprty to be the newly created node.
   * - Set the next property on the node to be the previously created variable
   * - Increment the size of the stack by 1
   */
  push(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      // Or !this.first
      this.first = newNode;
      this.last = newNode;
    } else {
      const tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    return ++this.size;
  }

  /**
   * @description Remove the last element added
   *
   * - If there are no nodes in the stack, return null
   * - Create a temporary variable to store the first property on the stack
   * - If there is only 1 node, set the first and last property to be null
   * - If there is more than one node, set the first property to be the next property on the current first
   * - Decrement the size by 1
   * - Return the value of the node removed
   */
  pop() {
    if (this.size === 0) {
      return null;
    }

    const tmp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = tmp.next;
    }
    this.size--;
    return tmp.value;
  }
}
