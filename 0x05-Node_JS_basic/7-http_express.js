#!/usr/bin/node

const countStudents = require('./3-read_file_async');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.send("Hello Holberton School!");
});

app.get('/students', async(request, response) => {
	const title = "This is the list of our students\n";
	try {
		const data = await countStudents(process.argv[2]);
		response.send(`${title}${data.join('\n')}`);
	} catch (error) {
		response.send(`${title}${error.message}`);
	}
});
app.listen(1245);
module.exports = app;
