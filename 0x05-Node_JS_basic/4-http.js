#!/usr/bin/node

const http = require('http');

const host = 'localhost';
const port = 1245;

const app = function(req, res) {
	res.writeHead(200);
	res.end("Hello Holberton School");
};
