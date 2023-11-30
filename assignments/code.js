// const item = document.querySelector("#test");
// item.addEventListener("keydown", (e) => {
//     if (e.keyCode === 13) {
//         item.blur();
//     }
// })

const container = document.querySelector(".container");

const images = [
    {
        link: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Explore the world"
    },
    {
        link: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Wild Forest"
    },
    {
        link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        text: "City on Winter"
    },
    {
        link: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        text: "Mountain Cloud"
    },
    {
        link: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Sunny Beach"
    }
]

const onClickImage = (event) => {
    const wrapperElement = event.currentTarget; // wrapper div
    const wrappers = document.querySelectorAll(".wrapper");
    wrappers.forEach(wrapperItem => {
        if (wrapperItem.classList.contains("active")) {
            wrapperItem.classList.remove("active");
        }
    })
    wrapperElement.classList.add("active");
}

images.forEach((image, index) => {
    const imageElement = document.createElement("img");
    imageElement.className = "panel";
    imageElement.src = image.link;
    imageElement.id = `panel-${index + 1}`;

    const textElement = document.createElement("span");
    textElement.className = "img-text"
    textElement.innerText = image.text;

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    (index === 0) && wrapper.classList.add("active");
    wrapper.append(imageElement, textElement);

    wrapper.addEventListener("click", onClickImage);

    container.appendChild(wrapper);
})