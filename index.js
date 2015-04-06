var http = require('http');
var port = 8888;
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello from node\n');
});
server.listen(port);
