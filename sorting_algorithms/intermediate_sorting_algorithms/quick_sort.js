/**
 * Works on the same assumption that merge sort does.
 * Exploits the fact  that arrays of 0 or 1 elemets are always sorted (also).
 * Works by selecting one element (called "pivot")
 * and finding the index where the pivot should end up in the sorted array.
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
 *
 * [5, 2, 1, 8, 4, 7, 6, 3]
 *
 * We pick some element and for this example we pick the first one, 5
 * and then moving all the numbers that are less than five to the left of it
 * and all the numbers that are greater than five to the right of it.
 * So in the example we have 4 numbers less than five (2,1,4,3). So,
 * we will move 5 to the index number of numbers less thanf 5 (index 4).
 * Now we recursively repeat the process on the left side and the right side
 *
 * [3, 2, 1, 4, 5 ,7, 6 ,8]
 *
 * We pick another element again (it does not matter what number)
 * and we do the same. In this case we pick the first one again
 * The thre will be in index 2, becouse 1 and 2 need to come before it
 *
 * [1, 2, 3, 4, 5, 7, 6, 8]
 *        -     -
 *
 * Now we take care of the right side. We pick 7 in our
 * example. We see that there is one element smaller than 7 so
 * we put 7 in idex 1 (from the left side, we move 7 one pistition ahead)
 *
 * [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 * 
 * BIG O COMPLEXITY: 
 * 
 * Time complexity: 
 *  - Best: O(n log n)
 *  - Worst => When our array is already sorted, since we are taking always the first element O(n**2)
 * - Average: O(n log n)
 * 
 * Space complexity:
 *  - O(log n)
 * 
 */

/**
 * PIVOT HELPER
 * In order to implement a merge sort, it is usefull to first implement
 * a function responsable arranging elements in an array on either side of a pivot
 * Given an array this helper function should designate an element as the pivot
 * It should then rearrange elements in the arary so that all values less than the pivot are moved
 * to the left of the pivot and all greater than the pivot are moved to the right of the pivot.
 * The order in each side does not matter, just put greater to one side and less to the other.
 *
 * The runtime of quick sort depends in part on how one selects the pivot. 
 * Ideally the pivot should be chosen so that its roughly the median value
 * in the data set you are sorting.
 * For simplicity we'll take always the first element (but this have some consequences)
 *
 */

/**
 * PSEUDO CODE PIVOT HELPER
 * It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1 respectively)
 * Grab the pivot from the start of the array
 * Store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * Loop through the array: 
 *     - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element
 *       with the element at the pivot index
 * Swap the starting element (i.e the pivot) with the pivot index
 * Return the pivot index
 * 
 * Example [4,8,2,1,5,7,6,3]
 */

const _swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length + 1) {

    const pivot = arr[start];

    // Is going to keep track of where are we going to swap the pivot at the very end
    // and also the one that we are going to return.
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {

        // Now we are going to compare our pivot.
        // In the first is going to compare with 8. 
        // Here the pivot is not larger than 8, so we dont do
        // anything
        // Than i gorw by one, and the vlue is 2.
        // In this case, the pivot it is greater that the current value
        // and what we do is increment swapIdx by one because we already know
        // that there is at least one element smaller than our pivot
        // then we are going to swap in our example 2 with 8, this is becuase
        // now we our swapIdx is one 
        if (pivot > arr[i]) {
            swapIdx++;
            _swap(arr, swapIdx, i);
        }
    }
    // Then when we finish the loop, we swap the swap index with the start
    _swap(arr, start, swapIdx);
    return swapIdx;
}

/**
 * Quick sort pseudo code
 *  - Call the pivot helper on the array
 *  - When the helper returns to you the updated pivot
 *    index, recursively call the pivot helper on the subarray
 *    to the left of thay index, and the subarray to the right
 *    of that index.
 *  - Your base case ocurrs when you consider a subarray with less than
 *    2 elements.
 *
 * Everything happends in the same array.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIdx = pivot(arr, left, right);

        // Left side
        quickSort(arr, left, pivotIdx - 1);

        // Rigth side
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
};