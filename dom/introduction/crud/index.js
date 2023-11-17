
/**
 * Operations on DOM tree
 * 1. Read nodes ( get the html element objects ) from the dom tree .
 * 2. update the properties on an existing DOM node.
 * 3. Create a node / html element.
 */

/**
 * 5 methods available for reading a node from the DOM tree
 * 1. getElementById => One single HTML element object.
 * 2. getElementsByTagName => List of elements.
 * 3. getElementsByClassName => List of elements
 * 4. querySelector => One single HTML element Object.
 * 5. querySelectorAll => List of elements.
 */

/*
let inputElementObject = document.getElementById("aravind");
console.log(inputElementObject.id); // "aravind"
console.log(inputElementObject.placeholder); // "User Name"
console.log(inputElementObject.tagName); // "INPUT"
console.log(inputElementObject.type);
console.log(inputElementObject.className); // ''

const anchorElement = document.getElementById("link");
console.log(anchorElement.tagName);
console.log(anchorElement.innerText);
console.log(anchorElement.href);
console.log(anchorElement.id);
*/

/*
let anchorElements = document.getElementsByTagName("a");
console.log(anchorElements[1].innerText);
*/

/*
let testElements = document.getElementsByClassName("test");
console.log(testElements[1].innerText);
*/

// const element = document.querySelector(".test");
// console.log(element.innerText);

/**
    const elements = document.querySelectorAll(".test");
    console.log(elements[0].innerText);
    console.log(elements[1].innerText);
 */



// function changePlaceHolder() {
//     // change the input's placeholder value .
//     const inputElement = document.getElementById("aravind");
//     // inputElement.placeholder = "Email";
//     inputElement.value = "Rajesh";
// }

// let obj = {
//     placeHolder: "Aravind"
// }

// obj.placeHolder = "Rajesh";
// console.log(obj);


// function togglePassword() {
//     const inputElement = document.querySelector("#aravind");
//     const toggleButton = document.querySelector("button");

//     if (inputElement.type === "password") {
//         inputElement.type = "text";
//         toggleButton.innerText = "Hide";
//     }
//     else {
//         inputElement.type = "password";
//         toggleButton.innerText = "Show";
//     }
// }


// const usersList = [
//     "Aravind",
//     "Sukanta",
//     "Srikanth",
//     "Prem",
//     "Rahul",
//     "Rajesh",
//     "Sreemukh"
// ]

// const usersContainer = document.querySelector(".users");

// function showUsers() {
//     // clears the entire things inside usersContainer
//     usersContainer.innerText = "";


//     usersList.forEach((user) => {
//         const userElement = document.createElement("div");
//         // <div></div>
//         userElement.innerText = user;
//         userElement.className = "user-item";
//         usersContainer.appendChild(userElement);
//         // <div class="user-item">Aravind</div>
//     })

// }


// x => the elementObject before which we want to add new Element .
// parent.insertBefore(newElement, x)

let isHeadingAdded = false;

function insertBeforeSpan() {

    if (isHeadingAdded) return;

    const h1 = document.createElement("h1");
    h1.innerText = "Aravind";

    const parent = document.getElementById("container");
    const nextSibling = document.querySelector("#container > span");

    parent.insertBefore(h1, nextSibling);
    isHeadingAdded = true;
}