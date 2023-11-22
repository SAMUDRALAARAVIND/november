const form = document.getElementById("form");
const recordsContainer = document.getElementById("records-container")
const createButton = document.querySelector("#form button");

// formState = "CREATE" | "UPDATE" 
let formState = "CREATE";

const employeesList = [];

let empId = 1000;

const onSubmitForm = (event) => {
    // event.target => form element.
    event.preventDefault();
    const employee = {
        employeeId: ++empId,
        name: event.target.name.value,
        salary: event.target.salary.value,
        role: event.target.role.value,
        team: event.target.team.value,
        companyName: event.target.companyName.value
    }
    if (formState === "CREATE") {
        addNewEmployeeRecord(employee);
    }
    else if (formState === "UPDATE") {
        // TODO: update the employee corresponding record
        formState = "CREATE"
        createButton.innerText = "Create Employee";
    }
    // after adding an employee reset the input values inside the form.
    form.reset();
}

function deleteRecord(event) {

    if (formState === "UPDATE") {
        alert("Please update the record before deleting anything");
        return;
    }

    // deleteButton reference = event.target 
    const deleteButton = event.target;


    const record = deleteButton.parentNode.parentNode;
    // record = <tr></tr> entire row element
    record.remove(); // removes this tr element from the dom tree.

    const currentEmployeeId = parseInt(deleteButton.getAttribute("data-empid"));

    for (let i = 0; i < employeesList.length; i++) {
        if (employeesList[i].employeeId === currentEmployeeId) {
            // remove this object 
            employeesList.splice(i, 1);
            break;
        }
    }

}

function fillFormWithData(employee) {
    /**
     *  {
            employeeId: ++empId,
            name: event.target.name.value,
            salary: event.target.salary.value,
            role: event.target.role.value,
            team: event.target.team.value,
            companyName: event.target.companyName.value
        }
     */

    // fills the form with the objects data
    for (let key in employee) {
        if (key !== "employeeId") {
            // key = "salary" => form["salary"].value = employee["salary"]
            form[key].value = employee[key]
        }
    }

    createButton.innerText = "Update Employee";
    formState = "UPDATE";
}

function editRecord(event) {
    // get the data of that record 
    // fill the form with that data.
    // change the innerText of the submit button to `Update Employee`
    const editButton = event.target;
    const currentEmployeeId = parseInt(editButton.getAttribute("data-empid"));

    for (let i = 0; i < employeesList.length; i++) {
        // "1001" === 1001
        if (currentEmployeeId === employeesList[i].employeeId) {
            fillFormWithData(employeesList[i]);
            break;
        }
    }
}

function addNewEmployeeRecord(employee) {
    // takes an employee object as input 
    // adds that object as a record inside the table.
    // create table row and append inside recordsContainer 

    const record = document.createElement("tr");
    // <tr></tr>

    for (let key in employee) {
        const cell = document.createElement("td");
        cell.innerText = employee[key];
        record.appendChild(cell);
    }

    /**
     * <tr>
     *      <td>name</td>
     *      <td></td> ...
     * </tr>
     */

    const optionsCell = document.createElement("td");

    const editIcon = document.createElement("span");
    editIcon.className = "material-icons icon";
    editIcon.innerText = "edit";
    editIcon.setAttribute("data-empId", employee.employeeId);
    editIcon.addEventListener("click", editRecord);

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-icons icon";
    deleteIcon.innerText = "delete";
    deleteIcon.setAttribute("data-empId", employee.employeeId);
    deleteIcon.addEventListener("click", deleteRecord);

    optionsCell.append(editIcon, deleteIcon);
    record.appendChild(optionsCell);

    recordsContainer.appendChild(record);

    // add the newly created employee to the global employeesList
    employeesList.push(employee);
}

form.addEventListener("submit", onSubmitForm);
