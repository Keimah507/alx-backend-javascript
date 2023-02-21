#!/usr/bin/node

const http = require('http');

class AppController {
	static getHomePage(request, response) {
		response.writeHead(200);
		response.end("Hello Holberton School!");
	}
}
