function getResponseFromAPI() {
const promise  = new Promise((resolve, reject) => {
	if (true) {
		resolve("Successful call");
	}
	else {
		reject("unsuccessful");
	}
});
 promise.then((message) => {
	 console.log(message);
 });
}

