var path = require('path');

exports.register = function(app) {

	// Handle Frontpage
	app.get('/', function (req, res) {
		res.sendFile( path.resolve( __dirname + '/../../build/static/frontpage.html') );
	});

};
