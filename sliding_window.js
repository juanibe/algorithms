
/**
 * 
 *  ===== SLIDING WINDOW ===== 
 * 
 * This is usefull when we have an array or a string etc... and we are looking for a
 * subset of data that is continuous in some way.
 * 
 * 
 * This pattern involves creating a window which can be either an array or number 
 * from one position to another.Depending on certain condition, the windows either 
 * increases or closes (and a new window is created).
 * 
 */

/**
 * EXAMPLE 1
 * 
 * Write a function to find the longest sequence of
 * unique characters.
 */

/**
 * EXAMPLE 2
 * 
 * Write a function called "maxSubArraySum" which accepts an array of 
 * integers and a number called "n". The function should calculate the
 * maximum sum of "n" consecutive elements in the array.
 * 
 * maxSubArraySum([1,2,5,2,8,1,5],2) // In this case we should return the max sum of 2 digits that 
 * are next to each ohter. => 10
 */

/** Naive solution */
/** BIG-O 0 => O(N*2) */
function _maxSubArraySum(arr, num) {
    if (num > arr.length) return null; // We handle the edge case;

    /**
     * If we have all negative numbers, our result max sum would still be negative. 
     * So starting in 0 doesn't help
     */
    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        const temp = 0;

        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        };
    }

    return max;
};

/** SLIDING WINDOW APPROACH */
/** BIG-O => O(N) Linear complexity */
function maxSubArraySum(arr, sum) {

    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    // At the very beginning we sum the first group of numbers
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    /**
        * Then instead of going with the next sequence of numbers, we
        * substract the one that does not belong any more to the sequence
        * and add the new one
        * Lets suppose our "num" is 3. 
        * [10, 20, 32, 4, 5, 5, 1]
        * Here we will sum our first 3 => 10, 20 and 32.
        * Then instead of summing 20, 32 and 4, we keep the common numbers (20 & 32)
        * and substract to maxSum 10 and add 4.
    */
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];

        // Check if out temporary maxSum is bigger or not to our tempSum and add the max to maxSum.
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;

}