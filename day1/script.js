/**
 * Loops
 */

// summation of first 20 even numbers
// 2 => 40

// let i = 30;
// console.log(i); // 30
// for (i = 2; i < 5; i = i + 2) {
//     console.log(i);
// }

// console.log(i); // 6

// 1st even number = 2  = 2 * 1
// 2nd even number = 4  = 2 * 2
// 3rd even number = 6  = 2 * 3

// 20th even number = 2 * 20 = 40 

// let i = 2, n = 20; // first even number 
// // figure out sum of first n even number ( first 20 even numbers )
// let sum = 0; // intially when none of the numbers are added sum is 0.
// // i = [ 2*1 , 2 * 20 ] => [2, 40]
// for (; i <= 2 * n; i += 2) {
//     // i = 2 , 4, 6, 8, 10 .... 40
//     sum = sum + i;
//     /**
//      * sum = 0
//      * i = 2 => sum = 0 + 2 = 2
//      * i = 4 => sum = 2 + 4 = 6
//      * i = 6 => sum = 6 + 6 = 12 ...
//      */
// }
// console.log(sum);

// let i = 2, sum = 0;

// while (i <= 40) { //  42 <= 40
//     sum += i; // 2 , 4, 6, 8, ... 38,40
//     i += 2; // i = 42
// }
// console.log(sum);


// do - while 
// let i = 2;
// do {
//     console.log(i); // 2, 3
//     i++; // i = 4
// }
// while (i <= 3) // 4 <= 3 => false
// console.log(i); // 4

/**
 * Arrays And Objects
 */

// let a;
// // console.log(a);

// let arr = [10, 20, true, , "aravind"]
// //          0   1   2   3      4
// console.log(arr.length - 1);
// // js arrays are by default dynamic and heterogenious.
// // js arrays are 0 based indexed.

// console.log(arr[-20]); // no one at index 5

// let arr = [3, 9, 8];
// console.log(arr);
/**
 * We can add new element into the array
 *      1. add element at the back . ( push(3, 4, 10) )
 *      2. add element at the front.
 * We can remove an element from the array.
 *      1. can be removed from backside
 *      2. can also be removed from the front.
 * Elements of the array are changable / mutable.
 */
// console.log(arr[1]); // 9
// arr[1] = 67;
// console.log(arr[1]); // 67 
// [3, 9, 8] => [3, 9, 8, 98]
// arr.push(98, 78, true, "aravind"); // adds 98 at the last 
//[3, 9, 8] => [3, 9, 8, 98] => [3, 9, 8, 98, 78]
// [3, 9, 8, 98, 78, true] => [3, 9, 8, 98, 78, true, "aravnd"]
// console.log(arr); // 4
// arr.unshift(102) // adds the element at the front side.
// console.log(arr);
// [3, 9, 8] => [19, 20, 21,3, 9, 8]
// arr.unshift(19, 20, 21)
// console.log(arr);



// let arr = [4, 2, true, "aravind"];
// // [4, 2, true, "aravind" ]  => [4, 2, true] 
// console.log(arr);
// let deletedElement = arr.pop();
// console.log(deletedElement, arr); // "aravind" , [4, 2, true]

// let deletedElement = arr.shift();
// console.log(deletedElement, arr); // 4 , [2, true, "aravind"]

// let arr = [4, 5] // [4, 5] => [4] => []
// arr.pop(); arr.pop();
// console.log(arr);

// let arr = [4, 2, 8, 12, 7, 13, 19];
// 8 , 
// arr[0] = "aravind" ; // ["aravind", 2, 8, 12, 7, 13, 19]
// console.log(arr);
// splice can add and delete elements anywhere in the array
// let deletedElements = arr.splice(2, 3); // (startIndex, deleteCount)
// // splice returns another array of deleted elements.
// // deletedElements = [ 8, 12, 7 ]
// console.log(arr);
// console.log(deletedElements);

// splice ( startIndex, deleteCount, a, b, c, d ...)
// let arr = [4, 2, 8, 12, 7, 13, 19];
// // [4, 2, 8, 12, 7, 13, 19] => [4, 2, 8, true, 7, 13, 19]
// arr.splice(3, 0, 0.1, 0.2); // 
// console.log(arr);

// let arr = [4, 2, 8, 12, 7, 13, 19];

// let segment = arr.slice(2)
// console.log(segment);
// console.log(arr);
