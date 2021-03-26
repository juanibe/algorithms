/**
 * Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the
 * list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or
 * larger elements "bubble" to the top of the list. This simple algorithm performs poorly in real world use and is used
 * primarily as an educational tool. More efficient algorithms such as quicksort, timsort,
 * or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.
 * 
 * Time Complexity:
 * In general it is O(N*2), but in case it is nearly sorted with the implementation of "noSwaps", it is almost linear O(N).
 * That's the best case and does not mean we should be using bubble sort.
 *
 * How it works:
 * As we loop through each item, we compare to the next item, and we check, if the first one
 * is larger than the second one, if it is it swaps. When it finish the first iteration,
 * the largest will be in the end of the array. After this we repeat the process, and
 * we will have the last 2 values in the end. And as we iterate over the aray, the number
 * of numbers we have to check decreases, since we already know that the values that are in the end
 * they are alrady sorted
 * It is a sorting algorithm where the largest values bubble up to the top.
 * 
 * Before we sort, we must swap:
 * Manu sorting algorithms invole some type of swapping functionality(e.g: swapping to numbers to put them in order.)
 */

// Swap ES5
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Swap ES2015
const _swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 * Bubble sort Pseudocode:
 * - Start looping from the end of the array towards the beginning.
 * - Start an inner loop with a variable called j from the beginning until i - 1
 * - If arr[j] is greater than arr[j+1], swap those values
 * - Return the sorted array
 */
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([7, 1, 2, 3, 4, 5, 6, 9,]))