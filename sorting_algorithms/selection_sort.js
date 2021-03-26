/**
 * SELECTION SORT
 * Similar to bubble sort, but instead of first placing large values into sorted position
 * it places small values into sorted position
 *
 * Pseudo code:
 * - Store the first element as the smallest value you've seen so far
 * - Comparte this item tho the next item in the array until you find a smaller number.
 * - If the value is lower we swap with the number in position initial.
 * - Repeat this with the next element.
 * 
 * Complexity: 
 * O(N*2)
 * 
 */

/*
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                console.log("ARR FROM: ", arr)
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                console.log("ARR TO: ", arr)
            }
        }
    }
    return arr
}
*/



function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        // I declare a lowest variable, since I want to store it until I finish to iterate 2nd loop and then
        // when I confirm whic is the lowest, I swap.
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}