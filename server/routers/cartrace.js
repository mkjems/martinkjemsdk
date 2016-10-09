var path = require('path');

exports.register = function(app) {

    //Handle cartrace
    app.get('/cartrace', function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../../client/build/cartrace/cartrace.html'));
    });

};
