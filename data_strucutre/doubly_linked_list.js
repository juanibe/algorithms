const util = require("util");

/*
    ---------- DOUBLE LINKED LISTS ----------

   Almost indtical to Single Linked List, except every node has another pointer to the previous node.

   It has more FLEXIBILITY but uses more MEMORY.

    BIG O NOTATION:
    - Insertion => O(1) [Constant] Very easy does not matter how long the list is
    - Removal   => 0(1) [Constant] Always constant. It is not the case for the SLL, in which if the 
                                   element to remove is in the end we have to iterate over the entire list.
                                   In the DLL you dont have to traverse the entire list
    - Searching => O(N) []         It could be O(N/2) because we divide, but still is O(N)

    CONCLUSION:
    - DLL are almost identical to SLL except there is an additional pointer to previous nodes
    - DLL are better for finding things since it can be done in half time
    - DLL they do take more memory considering the extra pointer.
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

    /** Prev value pointed */
    this.prev = null;
  }
}

class DoublyLinkedList {
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
        - Create a new node with the value passed to the method
        - If the head property is null set the head and the tail to be the newly created node
        - If the head property is not null, set the next property on the tail to be that node 
        - Set the previous property on the newly created node to be the tail
        - Set the tail to be the newly created node 
        - Increment the length
        - Return the Doubly Linked List
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
      this.tail = node;

      /**
       * If there is already an item, we take the current tail and
       * add to its next property the new node (Before was in null).
       * Also we tell that the tail is going to be now the new node.
       */
    } else {
      /**
       * The next property of the (old) tail. This old tail is not going to be
       * the tail anymore
       */
      this.tail.next = node;

      /**
       * The previous property of the new node, that now is the tail, is going to be
       * the old tail (Sor far, it is still the tail)
       */
      node.prev = this.tail;

      /**
       * Now we set the new tail to be the created node
       */
      this.tail = node;
    }

    /**
     * We increment the length of the Doubly Linked List
     */
    this.lenght++;

    /**
     * Return the current object
     */
    return this;
  }

  /**
   * @description Remove the last element of the list
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * - If there is no head, retrun undefined
   * - Store the current tail in a variable to return later
   * - If the length is 1 set the head and the tail to be null
   * - Update the tail to be the previous node
   * - Set the new tail's next to null
   * - Decrement the length
   * - Return the value removed
   *
   * // ================== END PSEUDO CODE ================== //
   *
   */
  pop() {
    if (!this.head) return undefined;

    /**
     * We keep track of the last element
     */
    let poppedNode = this.tail;

    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      /**
       * We need to change the reference to the tail to be the previous property of the popped node
       */
      this.tail = poppedNode.prev;

      /**
       * We set to null the next property of the new tail
       */
      this.tail.next = null;

      /**
       * We need to get rid of any connection of the popped node in order
       * to avoid making references after is has been popped. If I pop the element,
       * it is being returned, and it is returned even with the properties, so if I do
       * the popped node dot prev, I will still be able to go trough the etire list
       */
      poppedNode.prev = null;
    }

    this.lenght--;

    return poppedNode;
  }

  /**
   * @description Remove the first element of the list
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * - If there is no head or the length is 0, retrun undefined
   * - If the length is 1, set the head to be nul and the tail to be null
   * - Store the current head property in a variable (for example oldHead)
   * - Update the head to be the next of the old head
   * - Set the head previous property to null
   * - Set the old head's next to null
   * - Decrement the length
   *
   * // ================== END PSEUDO CODE ================== //
   *
   */
  shift() {
    if (!this.head || this.lenght === 0) return undefined;

    /**
     * Keep track of the old head, the one that we are going to remove
     */
    const oldHead = this.head;

    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      /**
       * The new head is going to be the next property of the old head
       */
      this.head = oldHead.next;

      /**
       * Set the previous property of the new head to be null, now that property points to old head
       */
      this.head.prev = null;

      /**
       * Now in order to loose track of the removed element we set the next property of the old head to null. This
       * is for when we returned the old head as result, not to be possible to make a reference to the next property
       * and go trough the list.
       */
      oldHead.next = null;
    }

    this.lenght--;

    return oldHead;
  }

  /**
   * @description Add a new element at the first position
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * - Create a new node with the value passed to the function
   * - if the lenght is 0 set the head to be the new node and set the tail to be the new node
   * - Otherwise:
   *   - Set the prev property on the head of the list to be the new node
   *   - Set the next property on the new node to be the head property
   *   - Update the head to be the new node
   * - Increment the length
   * - Retrun the list
   *
   * // ================== END PSEUDO CODE ================== //
   *
   */
  unshift(val) {
    const newNode = new Node(val);
    if (this.lenght === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.lenght++;

    return this;
  }

  /**
   *
   * @description Grab an element from the list given a random position
   *
   * We could use the same solution than the SLL, but there is a possible
   * optimization that we can do with the DLL. This is depending on the index, and
   * knowing the lenght of the list, we can start searching from the end or the beginning.
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * - If the index is less than 0 or greater or equal to the length, return null
   * - If the index is less than or equal to half the length of the list:
   *   - Loop through the list starting from the head and loop towards the middle
   *   - Return the node once it is found
   * - Otherwise:
   *   - Loop through the list starting from the tail and loop towards the middle
   *   - Return the node once it is found
   *
   * // ================== END PSEUDO CODE ================== //
   *
   * @method get
   * @param {number} index - Position in the list in which is the element we are going to return
   * @returns {Node}
   */
  get(index) {
    if (index < 0 || index >= this.lenght) {
      return null;
    }

    /**
     * We calculate what is the middle point of the list in order to
     * know where to start looping for optimization
     */
    const point = Math.floor(this.lenght / 2);
    /**
     * Start looping from the beginning since it is nearer
     */
    if (index <= point) {
      /**
       * Keep track of the first element in order to have the next
       * property in each of them
       */
      let current = this.head;

      for (let i = 0; i <= point; i++) {
        if (i !== index) {
          current = current.next;
        } else {
          return current;
        }
      }
    } else {
      /**
       * Keep track of the last element in order to have the prev
       * property in each of them
       */
      let current = this.tail;

      for (let i = this.lenght - 1; i > point; i--) {
        if (i !== index) {
          current = current.prev;
        } else {
          return current;
        }
      }
    }
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
   * - This function takes two values, the index and the value
   * - If the index is less than zero or greater than the length, return false
   * - If the index is the length, insert the value at the end of the list, using push.
   * - If the index is zero, insert the value at the beginning of the list, using unshift.
   * - If the index is any other value:
   *   - Create a new node
   *   - Find the element at the given index minus one. For this we can pass to the get method the value index - 1
   *   - Set the next and prev properties on the correct nodes to link everything toghether.
   * - Increment the length
   * - Return true
   *
   * // ================== END PSEUDO CODE ================== //
   *
   * @method insert
   * @param {number} index - Position in the list in which is the element we are going to add
   * @param {any} value - Value of new element
   * @returns {boolean}
   */
  insert(index, value) {
    /**
     * Edge cases
     * */
    if (index < 0 || index > this.lenght) return false;
    if (index === this.lenght) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    /**
     * Create a new node with the value passed
     */
    const newNode = new Node(value);

    /**
     * Find the node which will be before the new one.
     */
    let previous = this.get(index - 1);

    /**
     * Find the node which will be the next of the new one
     */
    const next = previous.next;

    /**
     * Set the new next of the previous
     */
    previous.next = newNode;

    /**
     * Set the previous of the new node, the original previous
     */
    newNode.prev = previous;

    /**
     * Set the previous of the original next to be the new node
     */
    next.prev = newNode;

    /**
     * Set the next of the new node to be the original next
     */
    newNode.next = next;

    /**
     * Increment the length since we add a new element
     */
    this.lenght++;

    return true;
  }

  /**
   *
   * @description Removes a value at a given position
   *
   * // ================== BEGIN PSEUDO CODE ================== //
   *
   * - If the index is less than zero or greater than or equal to the length return undefined
   * - If the index is 0, shift
   * - If the index is equal to the lenght - 1, pop
   * - Use the get method to retrieve the item to be removed
   * - Update the next and prev properties to remove the found node from the list
   * - Set next and prev to null on the found node
   * - Decrement the length
   * - Return the removed node
   *
   * // ================== END PSEUDO CODE ================== //
   */
  remove(index) {
    /**
     * Index is out of bound
     */
    if (index < 0 || index >= this.lenght) {
      return undefined;
    }

    /**
     * In case is the first element we apply the shift method
     */
    if (index === 0) {
      return this.shift();
    }

    /**
     * In case is the last element
     */
    if (index === this.lenght - 1) {
      return this.pop();
    }

    /**
     * Retrieve the element to be removed
     */
    const elementToDelete = this.get(index);

    /**
     * Set the next property of the prev proeprty of the element to remove to be the next
     * property of the element to remove
     */
    elementToDelete.prev.next = elementToDelete.next;

    /**
     * Set the prev property of the next property of the element to remove to be the prev
     * property of the element to remove
     */
    elementToDelete.next.prev = elementToDelete.prev;

    /**
     * Set the next property of element to delete to null
     */
    elementToDelete.next = null;

    /**
     * Set the prev property of the element to delete to null
     */
    elementToDelete.prev = null;

    /**
     * Decrement the length
     */
    this.lenght--;

    return elementToDelete;
  }
}
