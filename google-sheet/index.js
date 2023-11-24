const header = document.getElementById("header");
const snoContainer = document.getElementById("sno");

const columns = 27, rows = 50;

for (let i = 0; i < columns; i++) {
    const headCell = document.createElement("div");
    headCell.className = "head-cell"
    if (i != 0) {
        // i = 1 => A
        // ASCII of 'A' => 65 => 64 + i
        headCell.innerText = String.fromCharCode(64 + i);
    }
    header.appendChild(headCell);
}

for (let i = 1; i <= rows; i++) {
    // <div class="sno-cell"></div>
    const snoCell = document.createElement("div");
    snoCell.innerText = i;
    snoCell.className = "sno-cell";
    snoContainer.appendChild(snoCell)
}