var path = require('path');

exports.register = function(app) {

	// Force an error
	app.get('/crash', function(req,res) {
		require('none-existing-file').call();
	});

	// Handle 404
	app.get('*', function (req, res) {
		res.status('404').sendFile(path.resolve(__dirname + '/../../client/build/error/404.html'));
	});
};
