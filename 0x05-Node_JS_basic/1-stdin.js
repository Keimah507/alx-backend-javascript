#!/usr/bin/node

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(`Welcome to Holberton School, what is your name?`, name => {
	const answer = await readline,question(`Your name is; ${name}`);

	console.log('This important software is now closing');

	readline.close();
});
