// get the http module
var http = require("http");
// fs module allows us to read and write content for responses
var fs = require("fs");

const PORT = 5000;

//creating a server using http module
var server = http.createServer(function (req, res) {
	// see what URL the clients are requesting:
	console.log(`client reques URL :`, req.url);
	// this is how we do routing:
	if (req.url === "/") {
		// root
		fs.readFile("index.html", "utf8", function (err, content) {
			// send headers and status code
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(content); // send response body
			res.end(); //finished!
		});
	} else if (req.url === "/ninjas") {
		fs.readFile("ninjas.html", "utf8", function (err, content) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(content);
			res.end();
		});
	} else if (req.url === "/new") {
		fs.readFile("new.html", "utf8", function (err, content) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(content);
			res.end();
		});
	} else if (req.url === "/css/style.css") {
		fs.readFile("css/style.css", "utf8", function (err, content) {
			res.writeHead(200, { "Content-Type": "text/css" });
			res.write(content);
			res.end();
		});
	}
	// request didn't match anything
	else {
		// res.writeHead(404);
		// res.end("File not found");
		fs.readFile("error.html", "utf8", function (err, content) {
			res.writeHead(404, { "Content-Type": "text/html" });
			res.write(content);
			res.end();
		});
	}
});
// tell your server which port to run on
server.listen(PORT);
console.log(`Running in localhost at ${PORT}`);
