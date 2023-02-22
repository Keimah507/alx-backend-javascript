#!/usr/bin/node

class AppController {
	static getHomePage(request, response) {
		response.writeHead(200);
		response.end("Hello Holberton School!");
	}
}
module.exports = AppController;
