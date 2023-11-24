const containers = document.getElementsByClassName("container")
// container = [todo, inProgress, done] 

// since every container is dropzone, drop event should be attached for all the three containers
// 

const draggingInfo = {
    // sourceContainer defines from where the card is dragged.
    sourceContainerId: null,
    // draggingElement => the html element which is dragged.
    draggingElement: null,
}

function onDragStart(event) {
    // event.target => dragged element
    draggingInfo.sourceContainerId = event.target.getAttribute("data-container");
    draggingInfo.draggingElement = event.target;
}

const onDragOver = (e) => {
    // getting nearest parent with the container class.
    // enable drop only when sourceContainer is not equal to dropping container
    // console.log(e.currentTarget);

    let droppingContainer = e.currentTarget;
    if (droppingContainer.id === draggingInfo.sourceContainerId) {
        // the dropping container is equal to the source container from where the card is picked
        return;
    }

    e.preventDefault();
}

const onDrop = (event) => {
    // drop the card in the current container 
    const card = draggingInfo.draggingElement;
    const currentDropZone = event.currentTarget;

    // append card inside the currentDropZone 
    card.setAttribute("data-container", currentDropZone.id);
    currentDropZone.appendChild(card);
}

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("dragover", onDragOver);
    containers[i].addEventListener("drop", onDrop);
}