#!/usr/bin/node

const http = require('http');
const readDatabase = require('/utils.js');

class StudentsController {
	static async getAllStudents(request, response) {
		try {
			const students = await readDatabase('./students.csv');
			const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

			res.status(200).send(`This is the list of our students`) +
				fields.map(field => {
					const numStudents = students[field].length;
					const studentNames = students[field].join(', ');
					return`Number of students in ${field.toUpperCase()}: ${numStudents}. List: ${studentNames}`;
				}).join('<br>')
);
		} catch (err) {
			res.status(500).send(`Cannot load the database: ${err.message}`);
		}
	}

	static async getAllStudentsByMajor(request, response) {
		const major = req.query.major;

		if (major !== 'CS' && major !== 'SWE') {
			res.status(500).send('Major parameter must be CS or SWE');
			return;
		}

		try {
			const students = await readDatabase('./students.csv');
			const studentNames = student[major].join(', ');

			res.status(200).send(`List: ${studentNames}`);
		} catch(err) {
			res.status(500).send(`Cannot load the database: ${err.message}`);
		}
	}
}

