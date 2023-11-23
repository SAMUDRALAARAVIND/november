/**
 * Drag events 
 */

const box = document.getElementById("box");
const container = document.getElementById("container");

// Draggable Box events 

// box.addEventListener("dragstart", () => {
//     console.log("started dragging");
// });

// box.addEventListener("dragend", () => {
//     console.log("ended dragging");
// })


// Container Events 
/**
 * 1. dragenter
 * 2. dragover
 * 3. dragleave
 */

container.addEventListener("dragenter", () => {
    // attach focused class for the container 
    container.className = "focused";
})

container.addEventListener("dragover", (event) => {
    // if we prevent the default behaviour here , the drop event will be triggered.
    event.preventDefault();
})

container.addEventListener("dragleave", () => {
    // remove the focused classname 
    container.className = '';
})

container.addEventListener("drop", () => {
    container.className = '';
    // box will be connected as a children for the container 
    // box will be disconnected automatically with the body element.
    // as No two nodes exist in the DOM tree with the same memory reference.
    container.appendChild(box);
})