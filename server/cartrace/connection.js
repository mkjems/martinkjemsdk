exports.run = function(io) {

    var fp = io.of('/frontpage');

    fp.on('connection', function(socket) {

        socket.emit('news', {
            status: 'frontpage-data'
        });

        console.log('someone a the front door');

    });
    fp.emit('hi', 'everyone!');


    var cr = io.of('/cartrace');
    cr.on('connection', function(socket) {

        socket.emit('news', {
            status: 'Cartrace status'
        });

        socket.on('my other event', function(data) {
            console.log(data);
        });

        console.log('someone is at /cartrace');
    });


    console.log('Cartrace engine started on socket.io');
};
