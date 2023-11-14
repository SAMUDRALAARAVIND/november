/**
 * this keyword , arrow functions
 */


// let f = function (a, b, c) {
//     console.log(a + b + c);
// }

// let f1 = (a, b, c) => {
//     console.log(a + b + c);
// }

// f(10, 20, 30);
// f1(10, 20, 30);



// let x = prompt("Enter Some input: ");
// console.log(x, typeof x);

// alert("Hello Aravind");

// GLobal object
// console.log(window);

// console.log(typeof window.prompt);


// window.prompt("Enter something");

// console.log(window.prompt === prompt);
// console.log(window);
// let obj = {
//     name: "aravind",
//     isStudent: false,
//     printName: function () {
//         console.log("aravind");
//     }
// }

// obj.printName();
// let x = prompt();
// console.log(x);

/**
 * this => keyword
 */

/**
    1. Global statement
        this => window
    2. Local statement
 */

// console.log(this);

// function callme() {
//     console.log(this);
// }


// let obj = {
//     x: 10 + 20,
//     name: "aravind",
//     isStudent: false,
//     printName: function () {
//        console.log(this.x, this.name, this.isStudent);
//     }
// }
// obj.printName();

// function callme() {
//     // this = ?
//     console.log(this);
// }
// callme();

// let user = {
//     name: "Aravind",
//     age: 22,
//     printName: function () {
//         // this => user
//         console.log(this);
//     },
//     printAge: () => {
//         // the lexical parent of this function is global
//         // this=> window
//         console.log(this);
//     }
// }

// user.printName();
// user.printAge();

// let student = {
//     name: "aravind",
//     rollNumber: 184253,
//     callme: function () {
//         console.log(this);
//         let x = () => {
//             console.log(this);
//         }
//         let y = function () {
//             // this = 290;
//             console.log(this);
//         }
//         x();
//         y(); // 
//     }
// }
// student.callme();

// const a = 20 ;
// a = 30 ;
// console.log(a);


// Constructor functions

// function Callme() {
//     // this = #200 = {} 
//     console.log(this);
//     this.name = "aravind"; // #200 => { name: "aravind" }
//     console.log(this);
//     this.age = 23; // #200 => { name: "aravind", age: 23 }
// }

// let x = new Callme(); // #200
// console.log(x); // #200 =  { name: "aravind", age: 23 }


// let obj = {} 
// obj.name = "aravind" 
// obj.age = 23 ;


// Spread Operator.
// let arr = [3, 4, 2];
// let arr2 = [10, 20, ...arr, 90]
// // [10, 20, 3,4,2 , 90]
// // ...arr => ...[3, 4, 2] => 3, 4, 2
// console.log(arr2);

// function callme(a, b, c) {
//     console.log(a, b, c);
// }
// // ...[2, 3, 4] => 2, 3, 4
// callme(...[2, 3, 4])

// let student = {
//     rollNumber: 18392,
//     course: "BTech",
//     hostel: "3B"
// }

// /**
//  * ...{rollNumber: 18392,course: "BTech" ,hostel:"3B"} => rollNumber: 18392, course: "BTech", hostel:"3B"
//  */
// ...[1,2,3] => 1, 2, 3
// ...{a:10,b:20} => a:10, b:20
// let m = {a:10, b: 20}
// let y = {x: 1, y: 2, ...m }
// let user = {
//     name: "Aravind",
//     age: 23,
//     ...student
// }
// console.log(user);

/*
let x = [..."aravind"]//
// [ "a", "r", "a", "v", "i", "n", "d" ]
// ...[ "a", "r", "a", "v", "i", "n", "d" ] => "a", "r", "a", "v", "i", "n", "d"
console.log(...x);
// console.log("a", "r", "a", "v", "i", "n", "d" )
*/

function helloWorld() {
    console.log(arguments.callee.name);
}
helloWorld();