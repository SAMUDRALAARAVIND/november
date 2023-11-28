// defines the currently active cell.
let activeCellId = null;
const activeCellElement = document.getElementById("active-cell");

const form = document.querySelector(".form");
const state = {};

form.addEventListener("change", onChangeFormData);


const defaultStyles = {
    fontFamily: "poppins-regular",
    fontSize: 16,
    isBold: false,
    isItalic: false,
    isUnderline: false,
    align: "left",
    textColor: "#000000",
    bgColor: "#ffffff",
}

function onChangeCellText(event) {
    let changedText = event.target.innerText;
    if (state[activeCellId]) {
        // the current cell is already added to state object 
        state[activeCellId].text = changedText;
    }
    else {
        state[activeCellId] = { ...defaultStyles, text: changedText };
    }
}

function onChangeFormData() {
    const options = {
        fontFamily: form["fontFamily"].value,
        fontSize: form["fontSize"].value,
        isBold: form["isBold"].checked,
        isItalic: form["isItalic"].checked,
        isUnderline: form.isUnderline.checked,
        align: form.align.value, // "left" | "center" | "right"
        textColor: form["textColor"].value,
        bgColor: form["bgColor"].value,
    };
    applyStyles(options);
}

function applyStyles(styles) {
    // it will apply the styles to the active cell.
    if (!activeCellId) {
        // If none of the cells are selected.
        form.reset();
        alert("Please select cell to apply");
        return;
    }

    // if some cell is selected then apply styles to that cell.
    const activeCell = document.getElementById(activeCellId);
    activeCell.style.color = styles.textColor;
    activeCell.style.backgroundColor = styles.bgColor;
    activeCell.style.textAlign = styles.align;
    activeCell.style.fontWeight = styles.isBold ? "600" : "400";
    activeCell.style.fontFamily = styles.fontFamily;
    activeCell.style.fontSize = styles.fontSize + "px";
    activeCell.style.textDecoration = styles.isUnderline ? "underline" : "none";
    activeCell.style.fontStyle = styles.isItalic ? "italic" : "normal";

    // whenever there's an update in a cell style , update those style with the state object.
    state[activeCellId] = { ...styles, text: activeCell.innerText };
}

function onFocusCell(event) {
    if (activeCellId === event.target.id) return;
    activeCellId = event.target.id;
    activeCellElement.innerText = activeCellId;

    // reset the form with it actual style 
    if (state[activeCellId]) {
        // already touched cell
        resetForm(state[activeCellId])
    }
    else {
        resetForm(defaultStyles);
    }
}

function resetForm(styles) {

    /**
         * styles = {
            fontFamily: form["fontFamily"].value,
            fontSize: form["fontSize"].value + "px",
            isBold: form["isBold"].checked,
            isItalic: form["isItalic"].checked,
            isUnderline: form.isUnderline.checked,
            align: form.align.value, // "left" | "center" | "right"
            textColor: form["textColor"].value,
            bgColor: form["bgColor"].value
         }
         */

    form.fontSize.value = styles.fontSize;
    form.fontFamily.value = styles.fontFamily;
    form.isBold.checked = styles.isBold;
    form.isItalic.checked = styles.isItalic;
    form.isUnderline.checked = styles.isUnderline;
    form.align.value = styles.align;
    form.textColor.value = styles.textColor;
    form.bgColor.value = styles.bgColor;
}


function exportData() {
    // TODO: export the file data and download it.
    // {a: 10, b: 20} => '{"a": 10,"b": 20}'
    const jsonData = JSON.stringify(state);
    const blob = new Blob([jsonData], { type: "text/plain" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "data.json";
    link.href = url;
    link.click();
}