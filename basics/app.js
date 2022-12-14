const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	const url = req.url;
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>My first node page</title></head>');
		res.write('<body><h1>Hello from Node JS</h1></body>');
		res.write('</html>');
		return res.end();
	} else if (url === '/home') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Homepage</title></head>');
		res.write('<body><h1>Welcome home</h1></body>');
		res.write('</html>');
		return res.end();
	} else if (url === '/about') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>About us page</title></head>');
		res.write('<body><h1>Welcome to About Us page</h1></body>');
		res.write('</html>');
		return res.end();
	} else if (url === '/node') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Node page</title></head>');
		res.write('<body><h1Welcome to my Node Js project</h1></body>');
		res.write('</html>');
		return res.end();
	}
});

server.listen(4000);
