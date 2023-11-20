// const formElement = document.querySelector("#form");



// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const data = {
//         title: formElement.title.value,
//         description: formElement.description.value,
//         isPublic: formElement.isPublic.checked,
//         isCommentsDisabled: formElement.isCommentsDisabled.checked
//     }

//     console.log(data);
// })


const searchInput = document.querySelector("#search");




// let students = [
//     {
//         name: "Aravind",
//         age: 23,
//     },
//     {
//         name: "Suraj",
//         age: 20
//     },
//     {
//         name: "Manik",
//         age: 100
//     },
//     {
//         name: "Harshit",
//         age: 30
//     },
//     {
//         name: "Prem",
//         age: 25
//     }
// ]

// function filterStudents(searchQuery) {
//     // searchQuery = "ar" => [ "harshit", "aravind" ]
//     // "Ind" => "ind"

//     const filteredStudents = students.filter((student) => {
//         // case insensitive search
//         let isMatch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
//         return isMatch;
//     })

//     console.log(filteredStudents);
// }

// searchInput.addEventListener("input", () => {
//     let searchQuery = searchInput.value;
//     filterStudents(searchQuery);
// });


// const inputKeyboard = document.getElementById("keyboard");

// inputKeyboard.addEventListener("keyup", (event) => {
//     console.log(event);
// })
// inputKeyboard.addEventListener("keydown", (event) => {
//     console.log(event);
// })

// const codeInput = document.getElementById("code");

// let fontSize = 16;

// codeInput.addEventListener("keydown", (event) => {
//     if (fontSize >= 32 || fontSize <= 10) {
//         return;
//     }
//     if (event.key === 'a' && event.ctrlKey) {
//         // ctrl + 'a' => increase the fontSize 
//         fontSize += 2;
//         codeInput.style.fontSize = `${fontSize}px`;
//     }
//     else if (event.key === 'b' && event.ctrlKey) {
//         // ctrl + 'a' => increase the fontSize 
//         fontSize -= 2;
//         codeInput.style.fontSize = `${fontSize}px`;
//     }
// })


// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener("click", (e) => {
//     console.log("child clicked");
// });

// parent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("parent clicked");
// });

// grandParent.addEventListener("click", (e) => {
//     console.log("grandParent clicked");
// });
