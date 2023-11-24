const userCircle = document.querySelector(".user");
const usersList = document.querySelector(".users-list");


document.addEventListener("click", () => {
    userCircle.classList.remove("show-list");
})

usersList.addEventListener("click", (e) => {
    e.stopPropagation();
})

userCircle.addEventListener("click", (e) => {
    e.target.classList.add("show-list");
    e.stopPropagation();
})