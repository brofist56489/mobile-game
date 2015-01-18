var app = require("http").createServer(handler);
var fs = require("fs")

app.listen(process.env.PORT || 8080);

function handler(req, res) {
	var path = req.url;
	if(path == "/") path = "/index.html";
	fs.readFile(__dirname + path, function(err, data) {
		if(err) {
			res.writeHead(500);
			res.end("Couldn't read file: " + path);
		} else {
			res.writeHead(200);
			res.end(data);
		}
	});
}
