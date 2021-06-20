/**
 * === BINARY NEAR SEARCH ===
 * Rather than eliminating one item at a time you can eliminate 
 * half of the remaining elements at a time 
 * It only works in SORTED arrays
 *
 */

/**
 * Binary search pseaudo code.
 *
 *  - This function accepts a sorted array and a value
 *  - Create a left pointer at the start of the array, and a right pointer at the end of the array (len - 1)
 *  - While the left pointer comes before the right pointer:
 *    - Create a pointer in the middle
 *    - If you find the value you want, return the index
 *    - If the value is too small move the left pointer up
 *    - If the value is too large, move the right pointer down
 *    - If you never find the value, return -1 
 */


function binarySearch(arr, value) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    // We can round up or down
    let middle = Math.floor((rightPointer + leftPointer) / 2);

    // While we didnt find the value yet and the two pointers are not the same ...
    while (arr[middle] !== value && leftPointer <= rightPointer) {

        /**
         * Here enters when the value is minor to the middle. 
         * So, we will take the pointer of the end to the middle and rest one 
         * (we rest one because the middle was already checked in the condition of the while loop)
         * So from now on the right pointer position will be the middle minus one.
         */
        if (value < arr[middle]) rightPointer = middle - 1;

        /**
         * Here enters when the value is major to the middle. 
         * So, we will take the pointer of the beginning to the middle and sum one 
         * (we sum one because the middle was already checked in the condition of the while loop)
         * So from now on the right pointer position will be the middle plus one.
         */
        else leftPointer = middle + 1;

        /**
         * Here we will update the middle of the entire array. 
         * We can approach this by summing up the updated right and left pointers
         * and divide the result by 2. 
         * 
         * First Iteration.
         * [2,4,6,8,10,12,14]
         *  S              E
         * Here the start is 0 and the end is 6, so diveded by 2 is 3 which give us elem 8
         * 
         * Second Iteration.
         * [2,4,6,8,10,12,14]
         *        S        E 
         * Now the start is 3 and the end is still 6, so the sum is 9 diveded by 2 and rounded is 5 which give us elem 12
         * (The middle in the sub array 8-14)
         * 
         * Mathematically, we use the position of the two elements in a list  n1 and n2.
         * If we do (n1 + n2) / 2 that will give us the middle (supossing we have even numbers) of the array
         * If we change the position of any of those numbers, and we sum up again and dive by 2, this will 
         * no longer give us the middle of the array, but the middle of the virtual array between n[n]1 and n[n]2
         * that is what acually we want.
         * 
         * So in mathematics when you have a list of elements the middle between the two of them will always be 
         * the sum of the positions between them and diveded by 2.
         */
        middle = Math.floor((rightPointer + leftPointer) / 2);
    }
    return arr[middle] === value ? middle : -1;
}