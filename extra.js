let tables = document.getElementById("table");
function addtable() {
  var students = [];

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
}
function displaytable() {
  tables.innerHTML =
    "<tr><th>Name</th><th>Father name</th><th>Contact</th><th>Roll number</th></tr>";
  for (var i = 0; i < students.length; i++) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var fatherNameCell = document.createElement("td");
    var contactCell = document.createElement("td");
    var rollNumberCell = document.createElement("td");

    nameCell.innerHTML = students[i].sname;
    fatherNameCell.innerHTML = students[i].fatherName;
    contactCell.innerHTML = students[i].contact;
    rollNumberCell.innerHTML = students[i].rollNumber;

    row.appendChild(nameCell);
    row.appendChild(fatherNameCell);
    row.appendChild(contactCell);
    row.appendChild(rollNumberCell);
    tables.appendChild(row);
  }
  saveData();
}

function saveData() {
  localStorage.setItem("students", tables.innerHTML);
}
function showTask() {
  tables.innerHTML = localStorage.getItem("students");
}

showTask();

// foreach and Map
// splice and slive difference
