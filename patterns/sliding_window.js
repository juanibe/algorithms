
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

/**
 * Write a function called minSubArrayLen
 * which accepts two parameters - an array of positive integers and a positive integer. 
 * This function should return the minimal length of a contiguous
 * subarray of which the sum is greater than or equal to the integer passed to the function. 
 * If there isn't one, return 0 instead.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * 
 * Example:
 * minSubArrayLen([2,3,1,2,1,4,3, 7,8,45,11], 7) -> 2, because [4,3] is the smallest sub array.
 */
function minSubArrayLen(nums, sum) {

    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    /**
     * Iterate over the array for first time.
     * The start variable will be 0 at first.
     * During that iteration we will sum every number
     * and when total reach the value of sum, we stop. If does not reach
     * that number the window move to the right. 
     */
    while (start < nums.length) {

        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }

        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);

            // Here I rest the satart, because, in next iteration, the start will be next number.
            total -= nums[start];
            start++;
        }

        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

/**
 * Write a function called findLongestSubstring, 
 * which accepts a string and returns the length of the longest 
 * substring with all distinct characters.
 * 
 * === EXAMPLE ===
 * 
 * findLongestSubString('rithmschool') // 7
 * 
 * Time complexity O(N)
 */
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

  // hello

  // 1
  // char = "h"
  // no entra en if
  // longest (0, 0 - 0 + 1) = 1
  // seen[char] = 1 {h: 1}

  // 2
  // char = "e"
  // no entra en if
  // longest = (1, 1 - 0 + 1) = 2
  // seen[char] = 1 + 1 = 2 {e: 2}

  // 3
  // char = "l"
  // no entra
  // longest (2, 2 - 0 + 1) = 3
  // seen[char] = 2 + 1 = 3

  // 4
  // char = "l"
  // entra
        // start = (0, 3) = 3
  // longest = (3, 3 - 3 + 1) = 3
  // seen[char] = 3 + 1 = 4 {l: 4}

  // 5
  // char = "o"
  // no entra
  // longest = (3, 4 - 3 +1) = 3
  //seen[char] = 4 + 1 = 5 {o:5}   