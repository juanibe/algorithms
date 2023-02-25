/**
 * @dev The factorial of a number is the product of all the integers from 1 to that number.
 *      Explanation:
 *      factorial(3)
 *          return 3 * factorial(2) later when coming back -> (will be 3 * 2 = 6) -> final
 *                         return 2 * factorial(1) later when coming back -> (will be 2)
 *                                        return 1 (base case)
 * @param {number} num
 */
function factorial(num) {
  /**
   * Base case
   */
  if (num === 1) return num;

  /**
   * Recursively call factorial with the number minus 1
   */
  return num * factorial(num - 1);
}

/**
 * @dev Not recursive solution
 * @param {number} num
 */
function _factorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}
