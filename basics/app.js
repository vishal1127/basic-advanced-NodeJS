const http = require('http');
const fs = require('fs');
let result;

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Form page</title></head>');
		res.write(
			`<body><p>${result}</p><br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
		);
		res.write('</html>');
		return res.end();
	}
	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			fs.writeFile('message.txt', message, (err) => {
				console.log('errrrr', err);
				res.statusCode = 302;
				res.setHeader('Location', '/');
				fs.readFile('message.txt', 'utf8', (err, data) => {
					result = data;
				});
				return res.end();
			});
		});
	}
});

server.listen(4000);
