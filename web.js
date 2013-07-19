// Node.js entry point
var express = require('express');
var fs = require('fs');
var hello = "";

var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    hello = data;
});

app.get('/', function (request, response) {
    response.send('Hello World!');
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
