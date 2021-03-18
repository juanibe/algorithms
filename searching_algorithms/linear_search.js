/**
 * === LINEAR SEARCH ===
 * In computer science, a linear search or sequential search is a method for finding an element within a list.
 * It sequentially checks each element of the list until a match is found or the whole list has been searched.
 *  
 *
 *
 * Javascript actually uses it in methods like:
 *  - indexOf
 *  - includes
 *  - find
 *  - findIndex 
 */

/**
 * Linear search pseaudo code.
 * 
 *  - This function accepts an array and a value
 *  - Loop through the array and check if the current array element is equal to the value
 *  - If it is, return the index at which the element is found.
 *  - If the value is never found return -1.
 * 
 * Time and Space complexity O(N) => N grows as the length of the array grows
 * 
 * Write a function called linearSearch
 * which accepts an array and a value, and returns the index at which the value exists. 
 * If the value does not exist in the array, return -1.
 * 
 */
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) return i;
    };
    return -1;
};