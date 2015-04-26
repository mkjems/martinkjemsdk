var express = require('express'),
    app = express(),
    fs = require('fs'),
    morgan = require('morgan');

// -- Middleware -
var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
app.use(morgan('combined',{stream: accessLogStream}));

// -- Handlers --

// Handle Frontpage
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/static/frontpage.html');
});
// Force an error
app.get('/hallo', function(req,res) {
	require('sdfg').call();
});

// Handle all static files
app.use('/', express.static('static'));

// Handle 404
app.get('*', function (req, res) {
	res.status('404').sendFile(__dirname + '/static/404.html');
});

// Handle server errors
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).sendFile(__dirname + '/static/500.html');
});

// -- Start listening on port do some logging when ready --
var server = app.listen(80, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
