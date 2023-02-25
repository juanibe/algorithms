/**
 * Helper method recrusion.
 * It is a method in which we have an outer function
 * and the helper function inside, which is the one that is
 * going to be calling itself.
 * This is usefull when we need to compile something like an array
 * or a list of data. Not only for example summing or multiplying a value.
 */

/**
 * @dev Collect odd values in an array
 */
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    const current = helperInput[0];

    if (current % 2 !== 0) {
      result.push(current);
    }

    //helperInput = helperInput.slice(1);

    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

let values = [];

for (let i = 0; i < 2; i++) {
  values.push(i);
}

console.log(collectOddValues(values));
