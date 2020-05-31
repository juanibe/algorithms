/*
    ===== MULTIPLE POINTERS =====
    Consist of creating pointers or values that correspond to an index or position and move
    towards the begining, end or middle based on certain condition.
*/

/*
    Write a function called sumZero which accepts a sorted array
    of integers. The function should find the first pair where the
    sum is 0. Return an array that includes both values that sum
    to zero or undefined if a pair does not exit
*/

function sumZero(array1) {

    /*
        First create the pointers and assign a value
        to each one of them. In this case the values will correspond
        to the begining and end, and will move to the center.
    */
    let left = 0;
    let right = array1.length - 1;

    /*
        Create a loop, based on the condition that "left" is minor than "right".
        That means that if left is equal than right, then both pointers will be in the same 
        number/position of the array. 
    */
    while (left < right) {

        /*
            First sum the left pointer (begining of the array) 
            to the right pointer (end of the array)
        */
        let sum = array1[left] + array1[right];

        /*
            If the sum of both equals 0, then return both numbers.
            If the sum is greater than 0, that means that is possible a lower number from the right plus the actual left number
            is Zero. In consequence, the left pointer stays the same, and rest one to the right. (Remember it is an ordered array)
            If the sum is lower than 0, that means with the actual number in the left pointer plus any possible number to right will
            not result in Zero, but always a negative number. In consequence add one to the left pointer.
        */
        if (sum === 0) {
            return [array1[left], array1[right]];
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
}

/*
    Implement a function called countUniqueValues, which
    accepts a sorted array, and counts the uniques values
    in the array. There can be negative nubmers in the array
    but it will always be ordered.
*/
function _countUniqueValues(array) {
    if (array.length === 0) return 0;

    // Initialize counter in 1 because if the array is not empty there will always be 1 unique number.
    let counter = 1;
    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            counter++;
        }
        i++;
    }
    return counter;
}

function countUniqueValues(array) {
    if (array.length === 0) return 0;

    /*
        Create one pointer at the beginning of the array.
        There will be another pointer in the for loop, which 
        will start in the position of pointer 1 plus 1.
    */

    let i = 0;

    for (let j = 1; j < array.length; j++) {
        /*
            Here I will check if i === j. 
            If the don't match, then add 1 to i and put the value of array[j] in array[i]. 
            In case they match, the loop will continue and will add one to j. 
            In this case i will increase each time numbers don't match, so i (+1) can be returned.
            Also, the original value of i will be replaced by the value of j, so it will be compared 
            with the next value of j.
        */

        if (array[i] !== array[j]) {
            console.log(array)
            i++;
            array[i] = array[j];
            console.log(array)
        }

    }
    return i + 1;
}

/*
    console.log(countUniqueValues([1, 2, 2, 3, 4, 5, 6, 6, 7]))

    Compare 1 and 2. The don't match, so add 1 to i. Now i equals one.
    Then assign the value of array[j] to array[i]. Then 2 (array[i] equals 2 (array[j]))
    Before [ 1, 2, 2, 3, 4, 5, 6, 6, 7 ]
             i  j
    After  [ 1, 2, 2, 3, 4, 5, 6, 6, 7 ]
               i/j

    Compare 2 and 2. They are equals, so array stays the same and continue with loop
    Befor / After  [ 1, 2, 2, 3, 4, 5, 6, 6, 7 ]
                        i  j

    Compare 2 and 3. The don't match, so add 1 to i. Now i equals two.
    Then assign the value of array[j] to array[i]. Then 2 (array[i] equals 3 (array[j]))
    [ 1, 2, 2, 3, 4, 5, 6, 6, 7 ]
         i     j
    [ 1, 2, 3, 3, 4, 5, 6, 6, 7 ]
            i  j

    Compare 3 and 3. They are equals, so array stays the same and continue with loop
    Befor / After [ 1, 2, 3, 3, 4, 5, 6, 6, 7 ]
                          i  j

    Compare 3 and 4. They don't match, so add 1 to i. Now i equals three.
    Then assign the value of array[j] to array[i]. Then 3 (array[i]) equals 4 (array[j])
    [ 1, 2, 3, 3, 4, 5, 6, 6, 7 ]
            i     j
    [ 1, 2, 3, 4, 4, 5, 6, 6, 7 ]
               i  j

    Compare 4 and 4. They are equals, so array stays the same and continue with loop
    Befor / After [ 1, 2, 3, 4, 4, 5, 6, 6, 7 ]
                             i  j

    Compare 4 and 5. They don't match. Same process.
    [ 1, 2, 3, 4, 4, 5, 6, 6, 7 ]
               i     j
    [ 1, 2, 3, 4, 5, 5, 6, 6, 7 ]
                  i  j

    -> loop pass <-

    [ 1, 2, 3, 4, 5, 5, 6, 6, 7 ]
                  i     j
    [ 1, 2, 3, 4, 5, 6, 6, 6, 7 ]
                     i  j

    -> loop pass <-
    -> loop pass <-

    [ 1, 2, 3, 4, 5, 6, 6, 6, 7 ]
                     i        j
    [ 1, 2, 3, 4, 5, 6, 7, 6, 7 ]
                        i     j

    7

*/