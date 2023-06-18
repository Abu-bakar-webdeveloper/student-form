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
    "<tr><th>Name</th><th>Father name</th><th>Contact</th><th>Roll number</th></tr>";

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var fatherNameCell = document.createElement("td");
    var contactCell = document.createElement("td");
    var rollNumberCell = document.createElement("td");

    nameCell.innerHTML = student.sname;
    fatherNameCell.innerHTML = student.fatherName;
    contactCell.innerHTML = student.contact;
    rollNumberCell.innerHTML = student.rollNumber;

    row.appendChild(nameCell);
    row.appendChild(fatherNameCell);
    row.appendChild(contactCell);
    row.appendChild(rollNumberCell);
    tables.appendChild(row);
  }
}

function saveData() {
  localStorage.setItem("students", JSON.stringify(students)); // Store the students array as a JSON string
}

function showTask() {
  var storedData = localStorage.getItem("students");
  if (storedData) {
    students = JSON.parse(storedData); // Retrieve the students array from localStorage and parse it from JSON
    displaytable(); // Display the table with the retrieved data
  }
}

showTask();
