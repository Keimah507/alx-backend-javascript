#!/usr/bin/node

const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	let url = req.url;
	if (url === '/') {
		res.write('Hello Holberton School');
		res.end();
	} else if (url === '/students') {
		res.write('This is the list of our students\n');
		try {
			const data = await countStudents(process.argv[2]);
			res.end(`${data.join('\n')}`);
		} catch (error) {
			res.end(error.message);
		}
	}
	res.end();
});
app.listen(port);
module.exports = app;


