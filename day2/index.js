/**
 * Objects and HOF on arrays.
 */
// let arr = [10, 20, 45]; // [10, 22]

// console.log(arr[0]);
// arr[1] = 22;
// console.log(arr);

// arr.splice(1, 1);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }


// every eleemnt in objects should have key and value
// let obj = {
//     name: "aravind",
//     age: 23,
//     rollNumber: 184253
// };
//  [ "name" , "age", "rollNumber" ] 

// obj["age"] = 33;

// console.log(obj["age"], obj.age);

// delete age property.
// console.log(obj);
// delete obj.age;
// console.log(obj);
// let keys = Object.keys(obj)
// keys = ["name", "age", "rollNumber"] 
//                             i=2

// for (let i = 0; i < keys.length; i++) {
//     // i = 2 => keys[2] => "rollNumber"
//     console.log(obj[keys[i]]);
//     // console.log(keys[i], obj[keys[i]]); // obj[ keys[i] ]
//     // "name" , "aravind"
//     // "age" , 23
//     // "rollNumber", 184253
// }





/**
 * for in loop  => keys directly
 * for of loop  => values
 *  ** for-of loop doesn't exist on objects.
 */
// let arr = [4, 1, true, "aravind"];
// //         0  1   2        3
// let obj = {
//     name: "aravind",
//     age: 23,
//     roll: 184253
// }
/*

for (let x in arr) {
    console.log(x, arr[x]);
}

for (let y in obj) {
    console.log(y, obj[y]);
    // "name" , obj["name"] = "aravind"
    // "age" , obj["age"] = 23
    // "roll" , obj["roll"] = 184253
}

for (let x of arr) {
    // 4, 1, true, "aravind"
    console.log(x, arr[x]); //
    // 4 , undefined
    // 1 , 1
    // true, undefined
    // "aravind", undefined
}
*/




// Higher order functions and Callback functions

/**
    function is a block of code , which can be executed where ever we need.

    1. increases readability.
    2. increases the re usability of the code.

    functions in js are just other data types ( string, boolean, etc..)
 */

// let x = 20;
// // x is a variable , Number
// console.log(typeof x); // number
// function callme() {
//     // 12abc => is a variable.
// }
// // callme is a variable , function
// console.log(typeof callme); // function

// let callme = function (a, b) {
//     console.log(a + b);
// };

// console.log(typeof callme);


/**
 * Higher order function :
 *  A function which takes / returns another function is called as higher order funciton ( hof ) .
 * Callback functions:
 *  A function which is passed as an argument to some other function is called as callback function .
 */

/*
let parent = function (a, b) { // a, b are parameters
    // since b is a function
    // parent function is taking another function as a parameter.
    // therefore parent is higher order function .

    // b is a function passed as an argument into parent function so `b` is called as callback function.
    console.log(typeof a, typeof b);
}

parent(10, function () { }) // 10, function(){} => arguments.
*/


// in the array => push, pop, slice, splice, shift, unshift
// additional built in methods => forEach, map, filter, reduce

/**
 * forEach =>  ( n => length of the array )
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *      returns nothing.
 * map    =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *      returns another array of same length.
 *
 * filter =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *     returns an array of any length
 */

// let arr = [4, 3, 7, 2, 6];
// 4 + 2 + 6 = 12

/*
function myForEach(x) {
    for(let i = 0 ; i < arr.length; i++) {
        x(arr[i], i, arr);
        // i = 0 ; x(4, 0, [4, 2, 6])
        // i = 1 ; x(2, 1, [4, 2, 6])
        // i = 2 ; x(6, 2, [4, 2, 6])
    }
}

myForEach(
    function (a, b, c) {
        // first time:  a = 4, b = 0, c = [4, 2, 6]
        // scond time: a = 2, b = 1, c = [4, 2, 6]
        // third time: a = 6, b = 2, c = [4, 2, 6]
        console.log(a, b, c);
    }
);
*/


/*
let sum = 0;

let result = arr.forEach(function (element, index, list) {
    if (element % 2 === 0) {
        sum += element;
    }
})
console.log(result);
*/

// let arr = [4, 3, 7, 2, 6];
// // [4 + 0 , 3 + 1, 7 + 2, 2+3, 6+4 ]
// // [4, 4, 9, 5, 10]
// let result = arr.map(function (element, index, list) {
//     // console.log(element, index, list);
//     return element + index;
// })


// console.log(result);


/*
 Given an array , create another array which will have double values of even numbers and triple values of odd numbers.

let arr = [4, 2, 3, 6, 9];
// [8, 4, 9, 12, 27]
// []
let result = arr.map(function (e) {
    return e % 2 == 0 ? 2 * e : 3 * e;
})
console.log(result);
*/


// let arr = [4, 2, 3, 6, 9];
// // returned values : [ true , true, false, true, false ]
// // [3, 9]

// // 3 => true
// // 2 => true
// // -10 => true
// // 10.1 => true
// // 0 => false

// // "aravind" => true
// // "a" => true
// // "" => false
// // " " => true

// // undefined => false

// // null => false

// let result = arr.filter(function (e, i, list) {
//     console.log(e + i);
// })
// console.log(2 + 3);

