/**
 1. Event Bubbling
 2. Event Capturing
 3. Event delegation
 4. event.target
 */


/*

const scrollContainer = document.getElementById("scroll-container");
let count = 1;

for (; count <= 10; count++) {
   const div = document.createElement("div");
   div.innerText = `item ${count}`;
   div.className = "item";
   scrollContainer.appendChild(div);
}
// count = 11

scrollContainer.addEventListener("scroll", () => {
   let scrolledHeight = scrollContainer.scrollTop;
   let maxScrollableHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

   // very very important
   if (maxScrollableHeight - scrolledHeight <= 5) {
       addTwoMoreItems();
   }
})

function addTwoMoreItems() {
   const div1 = document.createElement("div");
   div1.innerText = `item ${count++}` // item 11 , count = 12
   div1.className = "item";

   const div2 = document.createElement("div");
   div2.innerText = `item ${count++}` // item 12 , count  = 13
   div2.className = "item";

   // scrollContainer.appendChild(div1);
   // scrollContainer.appendChild(div2);
   scrollContainer.append(div1, div2);
}

*/

/*
const root = document.querySelector(".root");
const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// The 3rd argument of addEventListener => defines the event state( bubbling | capturing)
// if it is false => bubbling ( default )
// if it is true  => capturing

root.addEventListener("click", () => {
    console.log("root");
}, true)

grandParent.addEventListener("click", () => {
    console.log("grandParent");
}, false)

parent.addEventListener("click", () => {
    console.log("parent");
}, true)

child.addEventListener("click", () => {
    console.log("child");
}, false)

// capturing => triggers the target element => bubbling
*/

/**
 * grandParent => bubbling state
 * parent => capturing 
 * child => bubbling
 */




