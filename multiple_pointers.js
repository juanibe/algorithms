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

