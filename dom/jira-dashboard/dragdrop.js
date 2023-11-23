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
    draggingInfo.sourceContainerId = event.target.getAttribute("data-container");
}

const onDragOver = (e) => {
    // getting nearest parent with the container class.
    // enable drop only when sourceContainer is not equal to dropping container
    console.log(e.currentTarget);
    e.preventDefault();
}

const onDrop = () => {
    alert("Something dropped")
}

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("dragover", onDragOver);
    containers[i].addEventListener("drop", onDrop);
}