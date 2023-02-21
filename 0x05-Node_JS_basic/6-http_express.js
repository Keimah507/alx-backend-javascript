#!/usr/bin/node

const express = require('express');
const app = express();

app.get('/', (request, response) {
	response.send('Hello Holberton School!');
});

app.listen(1245, console.log("App listening to port 1245");
