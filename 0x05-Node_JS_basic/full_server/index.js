#!/usr/bin/node

const app = require('./routes/index');

app.listen(1245, () => {
	console.log('Server listening at port 1245');
});
