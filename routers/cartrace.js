var path = require('path');

exports.register = function(app) {

    //Handle cartrace
    app.get('/cartrace', function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../static/cartrace/cartrace.html'));
    });

    //Handle cartrace
    app.get('/cartrace/:gamecode/game', function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../static/cartrace/game.html'));
    });

};
