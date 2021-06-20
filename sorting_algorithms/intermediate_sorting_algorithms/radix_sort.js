/**
 * RADIX SORT
 *
 * Is a special sorting algorithm that works
 * on list of numbers (only nubmers), in case of strings
 * only by its binary value.
 *
 * It never makes comparisons between elements!
 *
 * It exploits the fact that information about the size of
 * a number is encoded in the number of digits => more
 * digits means a bigger number.
 *
 * How does it work?
 * By creating buckets.
 * It checks firts the firts digit of the number, and put into the corresponded
 * bucket. Then we order the numbers on each bucket and put them back.(in order)
 * The number of times we repeat this process is of course the number of digits
 * the largest number has.
 */

/**
 * In order to implement radix sort, it is helpful to build a few helper functions firts:
 *  - getDigit(num, place) - returns the digit in num at the given place value
 *    getDigit([12345], 0) // 5 => we start from the end
 */
function getDigit(num, i) {
    return Math.floor(Math.abs(num), Math.pow(10, i)) % 10;
}

/**
 * We also need to know how many digits are in a number.
 * The reason we need that is we need to know how many times we need
 * to sort into buckets. And that number will be given by the number of
 * the largest number
 *
 * digitConunt(num)
 * digiCount(1) // 1
 * digiCount(432) // 3
 */
function digitConunt(num) {

    if (num === 0) return 1;

    // Math.log10 means that 10 to what power gives us this number 
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * mostDigits(nums)
 * Given an array of numbers, returns the number of digits in the largest numbers
 * in teh list. (Using digitCount)
 * We will run digitCount in each numer of the list of this function
 */
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        const current = digitConunt(nums[i]);
        maxDigits = Math.max(current, maxDigits);
    }
    return maxDigits;
}

/**
 * Radix Sort Pseudo Code
 * 1. Define a function that accepts a list of numbers
 * 2. Figure out how many digits the largest number has
 * 3. Look from k = 0 up to the largest number of digits
 * 4. For each iteration of the loop: 
 *  a. Create buckets for each digit (0 to 9)
 *  b. Place each number in the corresponding bucket base on its kth digit.
 * 5. Replace our existing array with values in our buckets, starting with 0 and going up to 9
 * 6. Return list at the end.
 */
function radixSort(nums) {

    /* This will give us the number of digits of the number that has most digits
       With that we know how many times we need to loop over */
    let maxDitisCount = mostDigits(nums);

    for (let k = 0; k < maxDitisCount; k++) {

        /* Now we create our buckets. This array sintax gives us an array with 10 empty arrays inside it */
        let digitBuckets = Array.from({ length: 10 }, () => []);

        /* Now we need to loop every number and put them in its corresponding buckets */
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigits(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }

        /* We merge the arrays */
        nums = [].concat(...digitBuckets)
    }
    return nums;
}

/**
 * BIG O NOTATION:
 * Time complexity:
 *
 * n = lenght of array
 * k = number of digits
 *
 *  - Best => O(nk)
 *  - Average => O(nk)
 *  - Worst => O(nk)
 *
 * Space complexity:
 *
 * O(n + k)
 */