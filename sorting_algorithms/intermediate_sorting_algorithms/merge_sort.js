/**
 *  ===== MERGE SORT =====
 * It is a combination of two things: Merging and Sorting.
 * It exploits the fact that arrays of 0 or 1 element are already sorted
 * Works by decompositng an array into smaller arrays of 0 or 1 elements, then build up a newly sorted array.
 *
 *
 * [8,3,5,4,7,6,1,2]
 *
 * [8,3,5,4] [7,6,1,2]
 *
 * [8,3] [5,4] [7,6] [1,2]
 *
 * [8] [3] [5] [4] [7] [6] [1] [2]
 *
 * Then we merge the single arrays, and we know they are sorted. Its better to merge
 * sorted arrays than unsorted arrays.
 *
 * [8]    [3]
 *   [3,8]
 */

/**
 * The first part to write a merge sort, is to write
 * a function to merge 2 sorted arrays
 *
 * Given two arrays which are sorted, this helper function should create a new array
 * which is also sorted, and cosists of all of the elements in the two input arrays.
 *
 * This function should run in O(n + m) time and O(n + m) space and should not
 * modify the parameters pased to it
 */

/**
 * Pseudo code Merging arrays
 *
 * Create an empty array, take a look at the smallest values in each input array
 * While there are still values we haven't looked at...
 *      If the value in first array is smaller than the value in the second array
 *      push the value in the fisrt array into our results and move on to the next value in the first array
 *
 *      If the value in the fisrt array is larger than the value in the second
 *      array push the value in the second array into our results adn move on to the next value in the second array
 *      
 *      Time Complexity  => Best  => O(n log n)
 *      Time Complexity  => Avg   => O(n log n)
 *      Time Complexity  => Worse => O(n log n)
 *      Space Complexity => Avg   => O(n)
 *          
 *      So O(log n) is because the number of decompositios, if I have an array of 4 elements, 
 *      I will need to make 2 splits.  If I have 32 elements I will need 5 splits.
 *      But then each time we make a comparison we have O(n). 
 *      So in total we have O(n log n)
 *      This is the best we can get for a sorting algorithm.
 * 
 *      Regarding space complexity, it takes more than bubble sort for example,
 *      Since we will need to store more arrays as the array length grows.
 */

function merge(arr1, arr2) {
    let results = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

        // [5,2,1] [13,20,0]
        //       i        j
        //  [5,2,13,20,]
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

/**
 * Merge Sort pseudo code
 *
 * - Break up the array into halves until you have arrays that
 * are empty or have one element => using slice recursively
 * 
 *  - Once you have smaller sorted arrays, merge those arrays with 
 * other sorted arrays until you are back at the full length of the array
 * 
 *  - Once the array has been merge back toghether, return the merged (and sorted) array
 */
function mergeSort(arr, where) {
    console.log(arr, where)
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid), 'left');

    let right = mergeSort(arr.slice(mid), 'right');

    console.log("LEFT", left)
    console.log("RIGHT", right)

    return merge(left, right);

}

mergeSort([2, 1, 76, 34, 9, 23, 654, 12, 43, 1, 9, 7, 45, 32, 76, 47])