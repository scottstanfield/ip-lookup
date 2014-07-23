var http = require('http');
var port = Number(process.env.PORT || 3002);
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(req.headers['x-forwarded-for']);
    res.end(req.headers['x-forwarded-for'] + "\n");
    // Client address in request -----^
});
server.listen(port);
