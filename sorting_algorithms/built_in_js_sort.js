/**
 * The sort() method sorts the elements of an array in 
 * place and returns the sorted array. 
 * The default sort order is ascending, 
 * built upon converting the elements into strings, 
 * then comparing their sequences of UTF-16 code units values
 * 
 * So, if we pass numbers, they will be converted to string, 
 * and it will take the unicode to sort them, which will give us
 * an incorrect sorting. 
 * 
 * To solve this we can tell JS how to sort.
 * 
 * This built-in mehtod accept an optional comparator function and
 * we can use it to tell js how to sort.
 * The comparator looks a pairs of elements (a and b), determines their
 * sort order based on the return value:
 *    - If it returns a negative number, a should come before b
 *    - If it returns a positive number, b should come before a
 *    - If it returns 0, then JS interpretates as they are the same
 * 
 * 
 * 
 */

function sortArrayOfStrJsBuiltIn(arr) {
    return arr.sort();
};

function sortArrOfNumbersBuiltIn(arr) {

    function numberCompareAsc(num1, num2) {
        return num1 - num2;
    }

    function numberCompareDesc(num1, num2) {
        return num2 - num1;
    }

    return arr.sort(numberCompareAsc);

};