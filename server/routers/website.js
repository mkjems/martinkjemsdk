var path = require('path');

exports.register = function(app) {

	// Handle Frontpage
	app.get('/', function (req, res) {
		res.sendFile( path.resolve( __dirname + '/../../client-build/static/frontpage.html') );
	});

};
