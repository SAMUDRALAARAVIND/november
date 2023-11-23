const createIssueButton = document.querySelector(".create-button");
const todoContainer = document.getElementById("todo");
const textArea = document.querySelector(".issue-input")

const onClickCreateIssue = () => {
    // hide the button and show the textarea
    createIssueButton.classList.add("hide");
    textArea.classList.remove("hide");
    textArea.focus();
}

function addNewIssue(cardTitle) {
    // Create a card element and append it inside the todo container.
    // show the create issue button and hide the textarea.
    const card = document.createElement("div");
    card.innerText = cardTitle;
    card.className = "card";
    card.draggable = true;
    // for every card the `data-container` attribute defines where it is ? in todo | in-progress | done
    card.setAttribute("data-container", todoContainer.id)
    card.addEventListener("dragstart", onDragStart);

    todoContainer.appendChild(card);


    // show create issue button
    createIssueButton.classList.remove("hide");
    // hide create issue text input
    textArea.classList.add("hide");
    textArea.value = '';
}


textArea.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        // user clicked enter key 
        const value = textArea.value;
        if (value === "") {
            alert("Please enter some value");
        }
        else {
            addNewIssue(value);
        }
    }
})



createIssueButton.addEventListener("click", onClickCreateIssue)