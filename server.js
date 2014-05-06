var express = require('express');
var http = require('http');

var app = express();

app.use(express.static);

app.static(__dirname + '/public');


app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = http.createServer(app);
server.listen(3000, function() {
	console.log('the server is running!');
});