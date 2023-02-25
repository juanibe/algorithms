const util = require("util");

/*

    https://medium.com/swlh/singly-linked-list-in-javascript-a0e58d045561

    ---------- SINGLE LINKED LISTS ----------

    Linked List, like arrays, is a linear data structure. It contains head, tail and length properties.
    Each element in linked list is a node, which has a value and a reference to next node, or if it’s tail,
    points to null.
    The head is the beginning and the tail is the end.

    - * Linked Lists * -
    - Don't have indexes
    - Connected via nodes with next pointer
    - Random access is not allowed

    - * Arrays * -
    - Indexed in order
    - Insertion and deletion can be expensive
    - Can quickly be accesed at a specific index

    Why do we need linked list if we have arrays?
    For data insertion and deletion, arrays can be expensive.
    Linked list, on the other hand, has dynamic size and makes insertion and deletion so easy.
    One disadvantage though, unlike arrays, elements in linked list doesn’t have indexes in order,
    which doesn’t allow random access.

    BIG O NOTATION:
    - Insertion: 0(1) -> Constant Time: Is the same always. It differs from arrays since if in an array I add a value at index 0 for example I have to shift
                         every single index over and rewrite it (Unless I add at the end of the array). In arrays it is (unless the exception)
                         O(N)
    - Removal: If we are removing from the very beginning: O(1) [Best case]. If we remove for the very end: O(N) [Worst case]
    - Searching: O(N)
    - Access: O(N) -> In array is better because has direct access, since we have the index

    Conclusion: Single Linked List is much better Inserting and Deleting compared to Arrays. So if you don't need random access, just data represented
                in a list with an order, and be accessed in an oreder, it is better to use Single Linked List.

                Single Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
                Arrays contain a built in index whereas Linked Lists do not.
                The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.
*/

class Node {
  /**
   * @param {unknown} val Piece of information
   */
  constructor(val) {
    /** The actual value */
    this.val = val;

    /** Next value pointed */
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    /** Pointer - Beginning of the list */
    this.head = null;

    /** Pointer - End of the list */
    this.tail = null;

    /** Pointer - Lenght of the list */
    this.lenght = 0;
  }

  /* 
        Create a method to add an element/node and assign it to the end of the list. (In the beginning will do it also to the tail)
        - Should accept a value
        - Create a new node using the value passed to the function
        - If there is no head property on the list, set the head and tail to be the newly created node
        - Otherwise if there is a head, set the next property on the tail to be the new node and set the tail
          property on the list to be the newly created node.
        - Increment the lenght by one.
        - Return the linked list

        If we have a thousand or millon items, we don't traverse the whole thing
        as long as we are keeping track of the last item of the list, all we have to do is tell
        "pick the last item, pointer over to this new last item" and now the tail is the new node.
    */
  push(val) {
    /** We create a Node with the value being passed */
    const node = new Node(val);

    /**
     * Case in which the linked list is empty, there is not head
     * We just set the new node as the head, and also the tail.
     */
    if (!this.head) {
      this.head = node;
      this.tail = this.head;

      /**
       * If there is already an item, we take the current tail and
       * add to its next property the new node (Before was in null).
       * Also we tell that the tail is going to be now the new node.
       */
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    /** We increment the length of the Single Linked List */
    this.lenght++;

    /** Return the current object */
    return this;
  }

  /* 
        Create a method that removes the last element of the list
        - If there is no nodes in the list, return undefined and also keep track of what the last element was
        - Loop throuhg the list until you reach the tail
        - Set the next property of the second to last node to be null
        - Set the tail to be the second to last node
        - Decrement the length of the list by 1
        - Return the value of the node removed
    */
  pop() {
    if (!this.head) return undefined;

    /** We keep track of the last element */
    let current = this.head;

    /** This variable is the one who is going to be the new tail */
    let newTail = current;

    /** We iterate over the list checking if there is a next in the items */
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;

    this.tail.next = null;

    this.lenght--;

    if (this.lenght === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /*
        Remove the first element 
        - If there are no nodes, return undefined
        - Store the current head property in a variable
        - Set the head property to be the current head's next property
        - Decrement the lenght by 1
        - Return the value of the node removed.
    */
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.lenght--;
    if (this.lenght === 0) this.tail = null;
    return currentHead;
  }

  /*
        Add element to the first place 
        - The function accepts a value
        - Create a new node using the value passed to the function
        - If there is no head property on the list, set the head and tail to be the newly created node
        - Otherwise set the newly created node's next property to be the current head property on the list
        - Set the head property on the list to be that newly created node.
        - Increment the lenght of the list by 1.
        - Return the value of the node removed.
    */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Here we say that the actual head, is going to be the next of what is going to be now the head.
      newNode.next = this.head;
      this.head = newNode;
      this.lenght++;
      return this;
    }
  }

  /**
   *
   * @description Grab an element from the list given a random position
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * This function should receive an index (number)
   * If the index is less than zero or greater than or equal to the lenght of the list return null
   * Loop through the list until you reach the index and return the node at that specific index
   *
   * // ================== END PSEUDO CODE ================== //
   *
   * @method get
   * @param {number} index - Position in the list in which is the element we are going to return
   * @returns {any}
   */
  get(index) {
    let current = this.head;
    if (index < 0 || index >= this.lenght) return null;
    for (let i = 0; i < index; i++) current = current.next;
    return current;
  }

  /** Alternative solution to get method */
  _get(index) {
    if (index < 0 || index >= this.lenght) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /**
   *
   * @description Changes a value of a node based on it's position in the linked list
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * This function should accept a value and an index
   * Use the get method to find an specific node
   * If the node is not found return false
   * If the node is found set the value of that node to be the value passed to the method and return true
   *
   * // ================== END PSEUDO CODE ================== //
   *
   * @method set
   * @param {number} index - Position in the list in which is the element we are going to change
   * @param {any} value - Value with which we are going to replace the current node
   * @returns {boolean}
   */
  set(index, value) {
    const foundValue = this.get(index);
    if (!foundValue) return false;
    foundValue.val = value;
    return true;
  }

  /**
   *
   * @description Inserts a new value at the given position
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * This function takes two values, the index and the value
   * If the index is less than zero or greater than the length, return false
   * If the index is the length, insert the value at the end of the list, using push.
   * If the index is zero, insert the value at the beginning of the list, using unshift.
   * If the index is any other value:
   *   Create a new node
   *   Find the element at the given index minus one. For this we can pass to the get method the value index - 1
   *   Once we have the previous node, we set its next property to be the newly created node
   *   Set the next property of the new node to be the previous node
   *   Increment the length, and return true
   *
   * // ================== END PSEUDO CODE ================== //
   *
   * @method insert
   * @param {number} index - Position in the list in which is the element we are going to add
   * @param {any} value - Value of new element
   * @returns {boolean}
   */
  insert(index, value) {
    /* Edge cases */
    if (index < 0 || index > this.lenght) return false;
    if (index === this.lenght) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    let previous = this.get(index - 1);
    const currentNextPrevious = previous.next;
    previous.next = newNode;
    newNode.next = currentNextPrevious;
    this.lenght++;
    return true;
  }

  /**
   *
   * @description Removes a value at a given position
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * This function takes the index as parameter
   * If the index is less than zero or greater than the length, return undefined
   * If the index is the length - 1, use pop method.
   * If the index is zero, use shift.
   * Otherwise using the get method, access the node at the index -1 to get the previous node
   * Set the next property on that node to be the next of the next node
   * Decrement the length
   * Return the value of the node removed
   *
   * // ================== END PSEUDO CODE ================== //
   */
  remove(index) {
    if (index < 0 || index >= this.lenght) return undefined;
    if (index === 0) return this.shift();
    if (index === this.lenght - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.lenght--;
    return removed;
  }

  /**
   *
   * @description Reverses the single linked list
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * Swap the head and tail
   * Create a variable called next
   * Create a variable called previous
   * Create a variable called node and initialize it to the head property
   * Loop through the list
   * Set next to be the next property on whatever node is
   * Set prev to be the value of the node variable
   * Set the node variable to be the value of the next variable
   *
   * // ================== END PSEUDO CODE ================== //
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let previous = null;

    for (let i = 0; i < this.lenght; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);

console.log(list);
