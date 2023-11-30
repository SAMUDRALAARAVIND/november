let currentElement = document.querySelector(".circle:first-child")
const nextButton = document.querySelector("#next")
const prevButton = document.querySelector("#prev")
// maintains the position
let position = 1;

function next() {
    if (prevButton.disabled) prevButton.disabled = false;
    if (position < 5) {
        // then only we can move forward
        const nextLine = currentElement.nextElementSibling;
        nextLine.classList.add("active");
        const nextCircle = nextLine.nextElementSibling;
        nextCircle.classList.add("active");

        currentElement = nextCircle;
        position++;

        if (position === 5) {
            nextButton.disabled = true;
        }
    }
    else {
        alert("you have reached the end point")
    }
}

function prev() {
    if (nextButton.disabled) nextButton.disabled = false;
    if (position !== 1) {
        currentElement.classList.remove("active");
        const prevLine = currentElement.previousElementSibling;
        prevLine.classList.remove("active");
        currentElement = prevLine.previousElementSibling;
        position--;

        if (position === 1) {
            prevButton.disabled = true;
        }
    }
}