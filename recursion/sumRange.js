/**
 * @dev Sum all the numbers.
 *      Example with an input of 3.
 *      num = 3
 *      return 3 + sumRange(2)
 *                 Since the last return was 2 + (sumRange(1) = 1) = 3, this is 3 + 3 = 6 (Ends.)
 *      num = 2
 *      return 2 + sumRange(1)
 *                 This result is 1, since the last return was 1
 *      num = 1
 *      return 1;
 *
 *      More visual:
 *      sumRange(3)
 *         return 3 + sumRange(2) (will be 3) (final = 6)
 *                        return 2 + sumRange(1) (will be 3)
 *                                       return 1 (base case)
 *
 *      As we can see, the iteration first goes until the end, sending the != functions
 *      to the callstack, and once the base case is reached, and the last one solved with
 *      the correspondant result, the functions start solving from the end to the beginning.
 */
function sumRange(num) {
  /**
   * Validate that is a positive number
   */
  if (num < 1) return 0;

  /**
   * Base case
   */
  if (num === 1) return 1;

  /**
   * Call the function again.
   */
  return num + sumRange(num - 1);
}
