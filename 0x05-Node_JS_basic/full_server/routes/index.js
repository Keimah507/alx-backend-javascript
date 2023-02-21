#!/usr/bin/node

const express = require('express');
const app = express();

app.get('/', AppController.getHomePage);
app.get('/students', StudentController.getAllStudents);
app.get('/students/major', StudentController.getAllStudentsByMajor);
