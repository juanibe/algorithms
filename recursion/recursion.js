/**
 * @dev Recursion is a process by which a function calls itself directly or indirectly.
 *      A function is invoked until the base case is reached.
 *      The base case is the condition when the recursion ends. This is very important
 *      to avoid an infinite loop.
 *      The input has to be different.
 */

/**
 * @dev Function that counts down from a number
 */
function countDown(n) {
  /**
   * This is the base case. When we already
   * reached 0, then break the recursion by
   * returning;
   */
  if (n < 0) return;

  /**
   * Console log the number.
   */
  console.log(n);

  /**
   * Call the function again with a new input, that is
   * the number minus one.
   */
  countDown(n - 1);
}

countDown(1000);
