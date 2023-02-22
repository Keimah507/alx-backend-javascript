#!/usr/bin/node

const fs = require('fs');

const readDatabase = function(path) {
	const promise =(res, rej) => {
		fs.readFile(path, 'utf8', (error, data) => {
			if (error) rej(Error('Cannot load the database'));
			const students = {};
			data.split('\n').forEach(line => {
				const [firstname, lastname, field] = line.split(',');
				if (!students[field]) {
					students[field] = [];
				}
				students[field].push(firstname);
			});
			resolve(students);
		});
	};
}
