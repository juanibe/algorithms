/**
 * @dev Write a function called power which accepts a base and an exponent. The function should return the
 *      power of the base to the exponent. This function should mimic the functionality of Math.pow()  -
 *      do not worry about negative bases and exponents.
 *
 *      power(3, 3)
 *         return 3 * power(3, 2) => return 3 * 9 = 27
 *                         return 3 * power(3, 1) => return 3 * 3 = 9
 *                                        return 3 * power(3,0) => 3 * 1 = 3
 *                                                       return 1
 */
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
