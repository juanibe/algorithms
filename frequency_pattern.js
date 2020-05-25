/*
    ===== FREQUENCY PATTERN =====
    This pattern uses objects or sets to collect values/frequencies of values.
    Usefull every time is necesary to compare pieces of data, two inputs, or more than two and
    frequencies of certain things ocurring.
    This can often avoid the need for nested loops O(N^2) operations with arrays/strings.
*/

/*
    Write a function called same whic accepts two arrays, the function should
    return true if every value in the array has it's corresponding value squared
    in the second array. The frequency of values must be the same.   
*/

function same(arr1, arr2) {

    if (arr1.length !== arr2.length) return false;

    let obj1 = {};
    let obj2 = {};

    /*
        First iterate over each array, and assign each value of them as a key
        in the objects, and the ocurrencies as values.
    */

    for (let val of arr1) {
        obj1[val] ? obj1[val]++ : obj1[val] = 1;
    }

    for (let val of arr2) {
        obj2[val] ? obj2[val]++ : obj2[val] = 1;
    }

    for (let key in obj1) {

        /* 
            Check if each key in one object (any) is also included in the other
            object squared. It does not matter the values yet. The values, are the 
            time appearing.
        */
        if (!(key ** 2 in obj2)) {
            return false;
        }

        /*
            Now check how many times each "key" is appearing in the array. This is
            represented by the "values" in the objects
        */
        if (obj2[key ** 2] !== obj1[key]) {
            return false;
        }

    }
    return true;
}