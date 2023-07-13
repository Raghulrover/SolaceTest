const http = require('http');

const hostname = '127.0.0.1';
const port = 21;
const server = http.createServer(( req, res) => {
   res.statusCode = 200;
   res.setHeader('content-Tpype', 'text/plain');
   res.end('Hello world123\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
	console.log("console Hello world");
	console.log("console Hello world123");
});	