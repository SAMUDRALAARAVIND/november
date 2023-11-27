let str = "ARAVINDS", rows = 3;
function callme(str, rows) {
    // if total rows = 3 , rows inside the function are zero based indexing rows--
    rows--;
    if (rows === 0) return str;

    let movement = true, activeRow = 0, i = 0;
    let outputList = [];
    for (let x = 0; x <= rows; x++)
        outputList.push("");
    while (i < str.length) {
        console.log(activeRow);
        outputList[activeRow] = outputList[activeRow] + str[i];
        i++;
        if (activeRow === rows) {
            movement = false;
        }
        if (activeRow === 0) {
            movement = true;
        }
        movement ? activeRow++ : activeRow--;
    }
    return outputList.join("");
}
console.log(callme(str, rows));