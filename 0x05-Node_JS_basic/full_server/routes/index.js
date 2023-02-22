#!/usr/bin/node

const StudentController = require('./StudentController.js');
const AppController = require('./AppController.js');
const express = require('express');
const app = express();

app.get('/', AppController.getHomePage);
app.get('/students', StudentController.getAllStudents);
app.get('/students/major', StudentController.getAllStudentsByMajor);
