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

const StuArr = [Student1, Student2];

let table = document.createElement('table');
document.body.appendChild(table);

StuArr.forEach(function(row) {
  let tr = table.insertRow();

  row.forEach(function(column) {
  let td = tr.insertCell();
  td.innerText = column;
  });
});