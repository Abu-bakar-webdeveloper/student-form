let tables = document.getElementById("table");
let students = [];

function addtable() {
  let sname = document.getElementById("sname").value;
  let fatherName = document.getElementById("fathername").value;
  let contact = document.getElementById("contact").value;
  let rollNumber = document.getElementById("rollnumber").value;

  var student = {
    sname: sname,
    fatherName: fatherName,
    contact: contact,
    rollNumber: rollNumber,
  };

  students.push(student);
  displaytable();
  saveData();
}

function displaytable() {
  tables.innerHTML =
    "<tr><th>Name</th><th>Father name</th><th>Contact</th><th>Roll number</th><th>Action</th></tr>";

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var fatherNameCell = document.createElement("td");
    var contactCell = document.createElement("td");
    var rollNumberCell = document.createElement("td");
    var actionCell = document.createElement("td");

    nameCell.innerHTML = student.sname;
    fatherNameCell.innerHTML = student.fatherName;
    contactCell.innerHTML = student.contact;
    rollNumberCell.innerHTML = student.rollNumber;
    actionCell.innerHTML = "<button onclick='deleteRow(" + i + ")'>Delete</button>";

    row.appendChild(nameCell);
    row.appendChild(fatherNameCell);
    row.appendChild(contactCell);
    row.appendChild(rollNumberCell);
    row.appendChild(actionCell);
    tables.appendChild(row);
  }
}

function deleteRow(index) {
  students.splice(index, 1); // Remove the student at the specified index
  displaytable(); // Re-display the table after deleting the row
  saveData(); // Save the updated data
}

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

function showTask() {
  var storedData = localStorage.getItem("students");
  if (storedData) {
    students = JSON.parse(storedData);
    displaytable();
  }
}

showTask();