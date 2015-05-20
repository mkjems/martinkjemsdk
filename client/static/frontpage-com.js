var socket = io.connect(location.host + '/frontpage');

socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'Frontpage! connection' });
});
