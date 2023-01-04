import { arrayExpression } from "@babel/types";

interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstname: "Brian",
  lastname: "Githinji",
  age: 20,
  location: "Nairobi",
};

const Student2: Student = {
  firstname: "Lauren",
  lastname: "Fakenamington",
  age: 22,
  location: "Othaya",
};

const studentsList = [Student1, Student2];

const table = document.createElement('table');
const tableBody = document.createElement('tableBody');

studentsList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstname;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);