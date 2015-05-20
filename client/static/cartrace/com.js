
var socket = io( location.host + '/cartrace');

socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { client_status: '/cartrace data' });
});
