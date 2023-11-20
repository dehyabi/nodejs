const http = require('http');

const server = http.createServer(function (req, res) {
 res.end("Hi, Welcome to NodeJS");
});

server.listen(8000);

console.log("server running on http://localhost:8000");

