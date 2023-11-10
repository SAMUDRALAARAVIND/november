/**
 * 1. Execution flow of js program
 * 2. Primitive and non primitive data types.
 */

// function callme() {
//     let a = 20;
//     console.log(2 * a);
// }
// let x = 30; // intialisation
// callme();
// console.log(3 * x);

/**
 * callme, a, x
 * callme => global variable
 * a => local variable
 * x => global variable
 */

/**
 * Every line of code can be divided into:
 * 1. Global line ( other than local lines )
 * 2. Local line / functional line.
 *   is a statement present inside a function ( {} )
 */

/**
 * Every container that gets created in the callstack will go throgh 2 phases of execution .
 *
 * 1. Creation Phase ( the code gets scanned )
 * 2. Execution Phase ( the code gets executed line by line )
 */

/**
 * let , const declared variables will be assigned with nothing / undefined . (partial hoisting ). These variables will be kept inside the Temporal Dead Zone (TDZ).
 *
 * var declared variable will be assigned with undefined. ( partial hoisting )
 *
 * function declared variables will be assigned with the actual value. ( full hoisting )
 */


// Primitive and Non Primitive data types.
/**
 * All the variables in any program will be stored inside RAM during the execution.
 *
 * Stack Memory(500 MB), Heap Memory( 2 GB ) | 6GB RAM
 *
 * boolean, strings, number, undefined, Arrays, Objects, function ....
 *  1bit      size   8bytes              size      size     size
 *
 *
 *
 *
 */

// 10 => 000000000000001010

// let str = "aravind"; // 7 bytes

// str = str + "abc"; // "aravindabc"
// console.log(str); // "aravindabc"


// let a = [1, 2, 3], c = [1, 2, 3];
// // a.push(100, 200, 10, 11); 
// // 2^31 - 1
// let b = 23, d = 23;
// /**
//  * a and c are non primitive 
//  * a = #200 , c = #302
//  * b = 23 , d = 23
//  */

// console.log(a == c); // #200 == #302 => false 
// console.log(b == d); // 23 == 23 => true


// let arr = [2, 3 ]; // #200 => [2, 3]
// arr = [2, 3, 8, 10] // #500 => [2, 3, 8, 10]
// arr = #500
// let arr = [2, 3 ]; // #200 => [2, 3]
// arr.push( 2, 3, 8, 10) ; // #200 => [2,3, 2, 3, 8, 10]


// #480 => [199, 2, 8]

// function manipulate(x, y) {
//     // x = 89, y = #480
//     x = 89;
//     y[0] = 199; // #480[0] = 199
// }

// let a = 20, b = [3, 2, 8]; 
// // a = 20, b = #480

// console.log(a, b); // 20 , [ 3, 2, 8 ]

// manipulate(a, b);// manipulate( 20, #480 )
// // a is passed as value (20)
// // b is passed as reference( #480 )

// console.log(a, b);
// 20, b = [199, 2, 8]



// function f(a){

// }

// let x = [3, 2] ;
// console.log(x);
// f(x);
// console.log(x);


// #300 => [192, 4, 5] 

// let x = [3, 4, 5];
// // x = #300
// let y = x;
// // y = #300
// y[0] = 192; // #300[ 0 ] = 192
// console.log(x[0], y[0]);
// // #300[0], #300[0] => 192, 192

// console.log(x == y); // #300 == #300 => true

// let f1 = function () {
//     console.log("a");
// }
// // f1 = #200 

// let f2 = f1;
// // f2 = #200

// console.log(f2 == f1); // true

// let a = [3, 2]; // a =  #300
// let b = [3, 2]; // b = #400
// console.log(a == b); // false 

// function parent(cb) {
//     cb();
// }

// let x = function(){
//     console.log("inside callback");
// }

// parent( x );

// function parent() {
//     console.log(3);
//     let x = function () {
//         console.log(4);
//     }
//     x()
//     console.log(5);
// }
// console.log(1);
// parent();
// console.log(2);

// console.log(f); // #300
// function f() { }
// console.log(f); // #300


// console.log(a);
// var a = 34;
// console.log(a);

// console.log(a);
// let a = 34;
// console.log(a);


// let arr = ["two", "three", "four"]
// //                 i=1
// arr.forEach( function(e, i) {
//     // e = "four' i = 2
//     console.log(e, i); 
//     /**
//      * "one"  0
//      * "two"  1
//      * "four" 2
//      */
//     if( e === "two"){
//         arr.shift();
//     }
// })

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 3) {
        let f = function () {
            console.log(i);
        }
        shooters.push(f);
        i++;
    }
    // i = 3
    return shooters;
}

let army = makeArmy();

army[1](); // 3
army[2](); // 3
army[0](); // 3