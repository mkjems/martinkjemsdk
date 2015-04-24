var http = require('http');

server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1>Goodnight, World from Live Reloading Vagrant!</h1></body></html>");
    res.end();
}).listen(80);
