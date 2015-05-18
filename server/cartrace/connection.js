
exports.run = function(io) {

	io.on('connection', function(socket) {
	    socket.emit('news', {
	        hello: 'new world2'
	    });
	    socket.on('my other event', function(data) {
	        console.log(data);
	    });
	});

	console.log('Cartrace engine started on socket.io');

};
