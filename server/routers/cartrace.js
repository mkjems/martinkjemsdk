var path = require('path');

exports.register = function(app,io) {

	io.on('connection', function(socket) {
	    socket.emit('news', {
	        hello: 'world'
	    });
	    socket.on('my other event', function(data) {
	        console.log(data);
	    });
	});

    //Handle cartrace
    app.get('/cartrace', function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../../build/static/cartrace/cartrace.html'));
    });

    //Handle cartrace
    app.get('/cartrace/:gamecode/game', function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../../build/static/cartrace/game.html'));
    });

};
