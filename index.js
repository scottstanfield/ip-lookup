var http = require('http');
var port = Number(process.env.PORT || 3002);
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello from node\n');
});
server.listen(port);
