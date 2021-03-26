/**
 * INSERTION SORT
 * Builds up the sort by gradually creating a larger
 * left half which is always sorted
 * 
 * Pseudo code:
 * - Start by picking the second element in the array
 * - Compare the second elementc with the one before it and swap if necessary
 * - Continue to next alement and if ti is in the incorrer order, iterate throuh the sorted 
 * portion (i.e the left side) to place the element in the correct place.
 * - Repeat until the array is sorted and return the array.
 * 
 * Time complexity O(N*2) Quadratic. But if the data is almost sorted it tends to be linear.
 * 
 * Is good when for example we have data coming live, or streaming, and we get
 * for example numbers, and we need to show them sorted. Since this algorithm is getting 
 * one number at a time and put it in place.
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 3, 1, 9, 4]))
