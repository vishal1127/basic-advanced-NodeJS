const http = require('http');

const server = http.createServer((req, res) => {
	console.log('Hello Vishal');
});

server.listen(4000);
