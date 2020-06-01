/*
    ===== FREQUENCY PATTERN =====
    This pattern uses objects or sets to collect values/frequencies of values.
    Usefull every time is necesary to compare pieces of data, two inputs, or more than two and
    frequencies of certain things ocurring.
    This can often avoid the need for nested loops O(N^2) operations with arrays/strings.
*/

/*
    Write a function called same which accepts two arrays, the function should
    return true if every value in the array has it's corresponding value squared
    in the second array. The frequency of values must be the same.   
*/

// This solution uses an O(N^2).
function _same(arr1, arr2) {

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];

        if (isNaN(value)) return false;

        const index = arr2.indexOf(value ** 2)

        if (index === -1) {
            return false;
        } else {
            arr2.splice(index, 1)
        }
    }
    return true;
}

// This solution uses O(N).
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

/*
    Given two strings, write a function to determine if the second string is an anagram
    of the first. An anagram is a word, name or phrase formed by rearranging the letters
    of another, such as cinema, formed from iceman
*/

// This solution uses an O(N^2).
function _validAnagram(string1, string2) {
    if (string1.length !== string2.length) return false;

    for (let i = 0; i < string1.length; i++) {
        const value = string1[i];

        const index = string2.indexOf(value)

        if (index === -1) {
            return false;
        } else {
            string2 = string2.replace(string1[i], "")
        }
    }
    return true;
}

// This solution uses O(N).
function validAnagram(string1, string2) {
    if (string1.length !== string2.length) return false;

    let object1 = {};
    let object2 = {};

    for (let value of string1) {
        object1[value] ? object1[value]++ : object1[value] = 1;
    }

    for (let value of string2) {
        object2[value] ? object2[value]++ : object2[value] = 1;
    }

    for (let key in object1) {
        if (!(key in object2)) {
            return false;
        }

        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}

/*
    Write a function called sameFrequency. Given two positive integers
    find out if the two numbers have the same frequency of digits.
    Complexity: O(N)
*/

function sameFrequency(n1, n2) {
    if (n1.length !== n2.length) return false;

    n1 = n1.toString();
    n2 = n2.toString();

    let obj1 = {};
    let obj2 = {};

    for (let val of n1) {
        obj1[val] ? obj1[val]++ : obj1[val] = 1;
    }

    for (let val of n2) {
        obj2[val] ? obj2[val]++ : obj2[val] = 1;
    }

    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

/*
    Implement a function called, areThereDuplicates which accepts a variable number
    of arguments and checks whether there are any duplicates among the arguments 
    passed in. 
    Optional: frequency counter or multiple pointers.
*/
function areThereDuplicates() {
    let args = [];
    let obj = {};
    for (let val of arguments) {
        args.push(val)
    }

    for (let val of args) {
        obj[val] ? obj[val]++ : obj[val] = 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
}
