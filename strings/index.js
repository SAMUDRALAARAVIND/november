// reduce method 

// let arr = [4, 3, 5, 1];

// let cb = function (prev, current, index) {
//     // first iteration: prev =4,  current = 3, index = 1
//     // second iteration: prev = 7, current = 5, index = 2 
//     // third iteration: prev = 12 , current = 1, index = 3
//     console.log(prev, current, index);
//     /**
//      * 4 3 1 => 7
//      * 7 5 2 => 12
//      * 12 1 3 => 13
//      */
//     return prev + current;  // 
// };

// let result = arr.reduce(cb);
// // when second argument is not present `cb` will be executed only for n-1 times where `n` is the length of the array.
// console.log(result); // 13


// given an array multiply even numbers with 2 and odd numbers with 3. then filter out numbers which are between [5 - 25] , finally find the sum of all those elements.

// let arr = [2, 4, 7, 12, 9];
// // [ 4, 8, 21, 24, 27 ]
// // [ 8, 21, 24 ]
// // 8 + 21 + 24 = 53

// let ans = arr.map(function (e) {
//     return e % 2 === 0 ? 2 * e : 3 * e;
// }).filter(function (e) {
//     return e >= 5 && e <= 25;
// }).reduce(function (prev, current) {
//     return prev + current
// })
// console.log(ans); // 53

// Strings 
// let name = "aravind";
// console.log(name.length);
// console.log(name[10]); // undefined
// console.log(name.charAt(10)); // gives empty string
// console.log(name.slice(2, 5)); // "avi"

// name[1] = 'W'; // strings are immutable => can not be changed
// console.log(name);

// let arr = [4, 2, 3];
// arr[1] = 100; // mutability
// console.log(arr);

// strings can be compared

// console.log("a" == "a");

// console.log("abb" < "abc");

// dictionary order => lexicographical order

// let str = "AbZ$%m0";
// // "AbZ$%m" => 
// console.log(str.charCodeAt(6));

// 100 => d
// 97 => 'a' 

// console.log(String.fromCharCode(97));

// let firstName = "aravind";
// let lastName = "samudrala"
// console.log(firstName + " " + lastName);
// console.log(firstName.concat("A", "B", "C", "D"));
// "aravind" + "A" + "B" + "C" + "D"

// split
// let str = "abc$mno$ukg";

// ["abc" , "mno" , "ukg"]
// split , splits the string at the given delimeter
// console.log(str.split("$"));

// let arr = ["abc", "mno", "ukg"]
// let str1 = arr.join(" ")
// // "abc" + "#" + "mno" + "#" + "ukg"
// console.log(str1);


// sort method
/**
 * By default the sort method will sort the elements in the increasing order.
 */
let arr = [13, 110, 9, 111]
// [ "13", "110", "9", "111" ]
// 
// arr.sort(function (a, b) {
//     return a - b;
// });

// arr.sort(function (a, b) {
//     return b - a;
// });

// console.log(arr);

// let names = ["ara", "arb", "arz", "arx"]
// // decreasing order
// // [ "arz", "arx", "arb" , "ara" ]

// names.sort(function (a, b) {
//     if (a > b) {
//         // a = "xy" , b = "xm"
//         // "xy" > "xm" 
//         // `a` before `b` so return -ve value.
//         return -10;
//     }
//     if (a < b) {
//         // a = "mn", b = "mz" 
//         //  "mn" < "mz"
//         // `b` before `a` so return +ve value
//         return 10;
//     }
//     if (a === b) {
//         return 0;
//     }
// });

// console.log(names);


// given a list of products find the list of product names which in the increasing order of their prices.
let products = [
    {
        name: "Comb",
        price: 100
    },
    {
        name: "Mirror",
        price: 120
    },
    {
        name: "egg",
        price: 6
    },
    {
        name: "Mic",
        price: 1000
    },
    {
        name: "Pen",
        price: 10
    }
]
// increasing order: ["egg", "pen" , "comb", "mirror", "mic"]

products.sort(function (a, b) {
    // a = {name, price} , b = { name, price } 
    if (a.price > b.price) {
        // a = { name: "dnnd", price: 100 } , b = { name: "djfjefe", price: 10 }
        // product `b` has to be before `a` in the final result so return +ve value.
        return 3; // 3 is a positive number
    }
    if (a.price < b.price) {
        // a = { name: "djfjefe", price: 10 }, b = { name: "dnnd", price: 100 } 
        // product `a` has to be before `b` in the final result, so return -ve 
        return -10;
    }
    if (a.price === b.price) {
        return 0;
    }
});

console.log(products);

let user = {
    name: "aravind"
} // Object  => hash map
