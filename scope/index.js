/**
 * 1. TDZ => Temporal Dead Zone
 * 2. Scope of variable and Scope chaining
 * 3. closures
 */

/**
    let a ;
    console.log(a); // undefined
 */

/*
console.log(a);
let a;

Cannot access 'a' before intialisation
*/

/*
console.log(a);
'a' is not defined .
*/

/**
 * Global line: not inside a function,
 * LOcal line: a statement/line inside a  function.
 */
// console.log(b); // undefined
// console.log(a); // Error: Cannot access 'a' before intialisation.
// let a = 20;
// var b = 30;

/**
 * let , const , var declared variable then during creation phase these variables be hoisted with undefined value.
 *
 * Named functions will be hoisted fully ( will get their actual value during the creation phase itself. )
 *
 * 2. let, const declared variables during the creation phase will be kept inside TDZ( temporal dead zone).
 */

// console.log(a);
// Error: 'a' is not defined.

// console.log(a); // #200
// function a() {
//     let x = 20;
//     return 100 + x;
// }
// console.log(a); // #200

/*
    console.log(a); // undefined
    a = 20; //
    console.log(a); // 20
    var a = 90;
    console.log(a); // 90
    var a = 100;
    console.log(a); // 100
*/


// console.log(a); // Error: Cannot access 'a' before intialisation.

// var a = 20; // Cannot access 'a' before intialisation.
// console.log(a); // 20 
// var a = 30;
// console.log(a); // 30

// console.log(a); // undefined
// var a = function(){};
// console.log(a); // #200 => [1,2,3]


// console.log(a); // #200
// function a() { }
// console.log(a); //#200


/**
function callme() {
    return a;
    function a() {
        console.log("inside a");
    }
}

let x = callme();
console.log(x);
console.log(typeof x);
 */


// let a = 20;
// function callme() {
//     let a = 90;
//     console.log(a + b); // 390 
// }
// let b = 300;
// callme();

/**
 * If a  variable is not present inside the current context js engine accesses from it's lexical parent ( parent ).
 */

/**
 *
let a = 100;
function one() {
    console.log(a); // 100
}

function callme() {
    let a = 200;
    one();
}

callme();
 */

// The way function 'f' binds its scope to it's outer environment is called closure.


// function callme() {
//     let a = 200;
//     let f = function () { // #330
//     }
//     return f;  // #330
// }

// console.log(a);

// let a = 100;

// let x = callme();
// // x = #330
// x();

// IIFE => Immediately Invoked function expression 

// let f = function () {
//     console.log("inside");
// }
// f();
/*

(function () {
    console.log("inside iife");
})();

(function () {
    console.log("some function");
})();
*/