/**
 * 1. JSON methods
 * 2. error handling
 * 3. destructuring , template strings
 * 4. Assignments
 */


// from client to server 

// let loginFormData = {
//     username: "aravind",
//     password: "2892ndjkd299"
// };

// client 
/**
 * userObject => String => internet => server
 *
 * From server client receives the string as data:
 * String => Object
 */

// let loginFormStringData = JSON.stringify(loginFormData);
// console.log(loginFormStringData);


// let serverResponse = '{"username":"aravind","password":"2892ndjkd299"}';

// let serverData = JSON.parse(serverResponse);
// console.log(serverData.password, typeof serverData);



// when we open followrs list in instagram 
// {username: "", imageUrl: "", isFollowing: true} 

// let followers = [
//     {
//         name: "Rajesh",
//         imageUrl: "",
//         isFollowing: true
//     },
//     {
//         name: "Nayan",
//         imageUrl: "",
//         isFollowing: true
//     },
//     {
//         name: "Akhil",
//         imageUrl: "",
//         isFollowing: false
//     }
// ]

// let x = JSON.stringify(followers)
// console.log(x);
// console.log(JSON.parse(x));




// let user = {
//     name: "aravind"
// };

// try {
//     console.log(user.address.city);
// }
// catch (errorObject) {
// }

// console.log("after some unexpected error");


// Error: { name: "", message: "", stack: "position where the error object is created"}


// let customErrorObject = new Error("Some custom error");
// customErrorObject.name = "My Own Error";
// customErrorObject.stack = "dkfkef";
// console.log(customErrorObject.name);
// console.log(customErrorObject.message);
// console.log(customErrorObject.stack);


// function MyError(description) {
//     let customError = new Error(description);
//     // customError.name = "MyError";
//     console.log(customError.name); // Error
//     return customError;
// }

// // console.log(1);
// try {
//     let myError = new Error("Some of my own error");
//     myError.name = "MyError";
//     // {name: "MyError", message: "Some of my own error", stack: "95"}
//     throw myError;
// }
// catch (errorObject) {
//     console.log(errorObject);
// }
// console.log(2);



// function callme() {
//     let f = function () {
//         throw Error("Some Error");
//     }
//     f();
//     console.log("after f"); // will not be executed
// }
// callme();
// console.log("after callme"); // will not be executed


// template strings 
// backtick
// let myName = "Rahul";
// let description = `I am ${myName}`;
// console.log(description);


// destructuring 
// extracting desired values from an Object / Array 


// let { name, age } = { name: "Aravind", age: 23 };
// console.log(name, age);

// let [...arr] = [4, 3, 10, 23]
// // [...[4, 3, 10, 23]] = [4, 3, 10, 23]
// console.log(arr);


// let [, a, b] = [10, [1, 3], 29]
// console.log(a, b);
// let age = 2030;

// let { age: myAge, address: { city: myAddress } } = {
//     age: 23,
//     address: {
//         city: "Warangal",
//         pincode: 283920
//     }
// }

// console.log(age, myAge, myAddress);

// let num = 47;

// let units = {
//     q: 25,
//     d: 10,
//     n: 5,
//     p: 1
// }

// let output = {};

// for (let i in units) {
//     // i = "q" , currentUnit = 25
//     let currentUnit = units[i];
//     // output = { "q" : 1}
//     output[i] = parseInt(num / currentUnit);  // 47 / 25 = 1.88
//     // num = 47 - 25 * 1 = 22 
//     num = num % currentUnit; // 2 % 5 = 2
// }
// console.log(output);


function generateRandomNumber() {
    // creating a number from 47 - 100 
    let randomNumber = parseInt(Math.random() * 100);
    if (randomNumber < 47) {
        randomNumber += 47;
    }
    return randomNumber; // 0.682390202 * 100 => 68.2390202 => 68
}

function generateRandomString(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(generateRandomNumber());
    }
    return str;
}
console.log(generateRandomString(10));