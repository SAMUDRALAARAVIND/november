/**
 * Event loop, Callback queue
 * setTimeout
 * setInterval
 * clearTimeout
 * clearInterval
 *
 * Date API
 *
 * BigInteger
 * Symbol
 */

// function callback() {
//     console.log("executed callback")
// }

// console.log(1); // 1ms
// setTimeout(callback, 3000); // 2ms
// console.log(2); // 1ms

// 1ms + 2ms + 1ms = 4ms

// output: 
// 1
// setTimeout registers the function for 3sec
// 2

/*
// t = 0ms => empty callstack
console.log(1); // t = 1ms
setTimeout(() => { // #200
    console.log(1.1); // 2ms to do the registration
}, 2000)
// t = 3ms
console.log(2);// 1ms
// t = 4ms
setTimeout(() => { // #300
    console.log(1.2); // 2ms to do the registration
}, 2000)
// t = 6ms
console.log(3);
// t = 7ms => empty callstack

// timer = [{#200, t = 3ms, time: 2sec}, {#300, t = 6ms, time: 2sec }]
//            endingTime: t = 2003ms , endingTime : t = 2006ms
// Callback queue = [ #200, #300 ]

// by t = 2003ms => callstack be empty
// Event loop: #200 , #300


// Output:
// 1
// 2
// 3
// // 2s
// 1.1
// // no gap
// 1.2

*/


// const button = document.querySelector("button");

// function changeMyBackground() {
//     button.disabled = true;
//     // after 3seconds change the background color to tomato.
//     setTimeout(() => {
//         button.disabled = false;
//     }, 3000)
// }

// let i = 1;
// setInterval(() => {
//     console.log("inside ", ++i);
// }, 2000);


/*
// timers
const h1 = document.querySelector("h1");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let intialTime = 30, timerId;

function updateUi() {
    // this function will be executed after each 1sec
    h1.innerText = `${--intialTime} seconds`;
}

startButton.addEventListener("click", () => {
    timerId = setInterval(updateUi, 1000);
})

stopButton.addEventListener("click", () => {
    // stop the timer
    clearInterval(timerId);
})
*/

// Date API



// let instance = new Date(); // current instance
// console.log(instance.getDate());
// console.log(instance.getHours());
// console.log(instance.getMinutes());
// console.log(instance.getSeconds());
// console.log(instance.getMilliseconds());
// sunday => 0
// monday => 1
// tuesday => 2
// wednesday => 3

// Jan => 0
// Feb => 1
// March => 2 
// Nov => 10
// console.log(instance.getDay());
// console.log(instance.getMonth());
// console.log(instance.getFullYear());

// console.log(instance.getUTCHours());

// 1995-12-17T03:24:00
// 1998 Jan 20 8:40:10:340 PM => tuesday
// const date1 = new Date("1998-01-20T08:40:10");
// // 29 Nov 2023 , 10:30:0:0PM

// const date2 = new Date("2023-11-29T22:30:00")

// let e1 = date1.getTime() / 1000;
// let e2 = date2.getTime() / 1000;

// console.log(e1, e2);

// // 24 * 60 * 60
// let daysGap = parseInt((e2 - e1) / 86400);

// console.log(daysGap / 365);

// 2^63 - 1 
// add suffix `n` to make a number as bigint
// let bigint = 9223372036854775807n;
// let normalInt = 9223372036854775807;
// console.log(bigint * 3n);
// console.log(normalInt * 3);

// let bigInt2 = BigInt(9223372036854775807);


// Symbol => Primitive Data types.
// let s1 = Symbol("abc")
// console.log(s1);

// let s2 = Symbol("abc")
// console.log(s2);

// console.log(s1 == s2);